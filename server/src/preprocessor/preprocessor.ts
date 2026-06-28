import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve, isAbsolute } from 'node:path';

import { evaluateCondition } from './cond_expression';
import { SourceMap } from './source_map';

export interface PreprocessDiagnostic {
	uri: string;
	line: number;
	column: number;
	message: string;
	severity: 'error' | 'warning';
}

export interface PreprocessOptions {
	/** Absolute path or file URI of the entry .p4 file. */
	uri: string;
	/** Extra directories searched for #include <...> and #include "...". */
	includePaths?: string[];
	/** Pre-defined macros (name -> replacement text). */
	defines?: Record<string, string>;
}

export interface PreprocessResult {
	text: string;
	sourceMap: SourceMap;
	diagnostics: PreprocessDiagnostic[];
	/** Contents of every file visited (for mapping diagnostics back to positions). */
	fileContents: Map<string, string>;
}

interface ObjectMacro {
	kind: 'object';
	replacement: string;
}
interface FunctionMacro {
	kind: 'function';
	params: string[];
	replacement: string;
}
type Macro = ObjectMacro | FunctionMacro;

interface IfFrame {
	parentActive: boolean;
	active: boolean;
	sawTrue: boolean;
}

/**
 * Runs the C-style P4 preprocessor: #include, #define/#undef, and the full
 * #if/#ifdef/#ifndef/#elif/#else/#endif directive set. Returns flattened source
 * text plus a source map for mapping parser positions back to original files.
 */
export function preprocess(options: PreprocessOptions): PreprocessResult {
	const ctx = new PreprocessorContext(options);
	const entry = normalizePath(options.uri);
	ctx.processFile(entry, readText(entry));
	return {
		text: ctx.map.text,
		sourceMap: ctx.map,
		diagnostics: ctx.diagnostics,
		fileContents: ctx.fileContents,
	};
}

class PreprocessorContext {
	readonly map = new SourceMap();
	readonly diagnostics: PreprocessDiagnostic[] = [];
	readonly fileContents = new Map<string, string>();
	readonly includePaths: string[];
	readonly macros = new Map<string, Macro>();
	private readonly visiting = new Set<string>();

	constructor(options: PreprocessOptions) {
		this.includePaths = (options.includePaths ?? []).map(normalizePath);
		for (const [name, value] of Object.entries(options.defines ?? {})) {
			this.macros.set(name, { kind: 'object', replacement: value });
		}
	}

	processFile(uri: string, source: string): void {
		if (this.visiting.has(uri)) {
			this.error(uri, 0, 0, `Include cycle detected involving '${uri}'`);
			return;
		}
		this.fileContents.set(uri, source);
		this.visiting.add(uri);
		this.processLines(uri, source);
		this.visiting.delete(uri);
	}

	private processLines(uri: string, source: string): void {
		const lines = source.split(/\r?\n/);
		const ifStack: IfFrame[] = [];
		let offset = 0;

		for (let lineNo = 0; lineNo < lines.length; lineNo++) {
			const rawLine = lines[lineNo];
			const lineStart = offset;
			offset += rawLine.length + 1;

			const trimmed = rawLine.trimStart();
			if (trimmed.startsWith('#')) {
				const col = rawLine.length - trimmed.length;
				this.handleDirective(uri, lineNo, col, trimmed, ifStack);
				continue;
			}

			if (!this.isActive(ifStack)) {
				continue;
			}

			const expanded = this.expandMacros(rawLine, uri, lineNo);
			this.map.emit(uri, lineStart, expanded);
			if (lineNo < lines.length - 1) {
				this.map.emit(uri, lineStart + rawLine.length, '\n');
			}
		}
	}

	private handleDirective(uri: string, lineNo: number, col: number, line: string, ifStack: IfFrame[]): void {
		const body = line.slice(1).trimStart();
		const keyword = body.split(/\s+/)[0];

		switch (keyword) {
			case 'include': {
				if (!this.isActive(ifStack)) {
					break;
				}
				const path = parseIncludePath(body.slice('include'.length).trim());
				if (!path) {
					this.error(uri, lineNo, col, 'Malformed #include directive');
					break;
				}
				const resolved = this.resolveInclude(uri, path.quoted, path.system);
				if (!resolved) {
					this.error(uri, lineNo, col, `Cannot find include file '${path.quoted}'`);
					break;
				}
				this.processFile(resolved, readText(resolved));
				break;
			}
			case 'define': {
				if (!this.isActive(ifStack)) {
					break;
				}
				this.defineMacro(body.slice('define'.length).trim(), uri, lineNo, col);
				break;
			}
			case 'undef': {
				if (!this.isActive(ifStack)) {
					break;
				}
				const name = body.slice('undef'.length).trim().split(/\s+/)[0];
				if (name) {
					this.macros.delete(name);
				}
				break;
			}
			case 'ifdef': {
				const name = body.slice('ifdef'.length).trim().split(/\s+/)[0];
				const parent = this.isActive(ifStack);
				const active = parent && this.macros.has(name);
				ifStack.push({ parentActive: parent, active, sawTrue: active });
				break;
			}
			case 'ifndef': {
				const name = body.slice('ifndef'.length).trim().split(/\s+/)[0];
				const parent = this.isActive(ifStack);
				const active = parent && !this.macros.has(name);
				ifStack.push({ parentActive: parent, active, sawTrue: active });
				break;
			}
			case 'if': {
				const expr = body.slice('if'.length).trim();
				const parent = this.isActive(ifStack);
				const active = parent && this.evalDirectiveExpr(expr);
				ifStack.push({ parentActive: parent, active, sawTrue: active });
				break;
			}
			case 'elif': {
				const frame = ifStack[ifStack.length - 1];
				if (!frame) {
					this.error(uri, lineNo, col, '#elif without matching #if');
					break;
				}
				if (!frame.parentActive) {
					frame.active = false;
					break;
				}
				if (frame.sawTrue) {
					frame.active = false;
				} else {
					const expr = body.slice('elif'.length).trim();
					frame.active = this.evalDirectiveExpr(expr);
					frame.sawTrue = frame.active;
				}
				break;
			}
			case 'else': {
				const frame = ifStack[ifStack.length - 1];
				if (!frame) {
					this.error(uri, lineNo, col, '#else without matching #if');
					break;
				}
				frame.active = frame.parentActive && !frame.sawTrue;
				frame.sawTrue = true;
				break;
			}
			case 'endif':
				if (ifStack.length === 0) {
					this.error(uri, lineNo, col, '#endif without matching #if');
				} else {
					ifStack.pop();
				}
				break;
			case 'line':
			case 'pragma':
				// Accepted and ignored; real compilers use these for debug/metadata.
				break;
			default:
				this.error(uri, lineNo, col, `Unknown preprocessor directive '#${keyword}'`);
		}
	}

	private defineMacro(rest: string, uri: string, lineNo: number, col: number): void {
		const fn = /^([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)\s*(.*)$/.exec(rest);
		if (fn) {
			const params = fn[2].split(',').map((p) => p.trim()).filter(Boolean);
			this.macros.set(fn[1], { kind: 'function', params, replacement: fn[3] });
			return;
		}
		const parts = rest.split(/\s+/);
		const name = parts[0];
		if (!name) {
			this.error(uri, lineNo, col, 'Malformed #define directive');
			return;
		}
		this.macros.set(name, { kind: 'object', replacement: rest.slice(name.length).trim() });
	}

	private evalDirectiveExpr(expr: string): boolean {
		let prepared = expr.replace(/defined\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, (_, name: string) =>
			this.macros.has(name) ? '1' : '0',
		);
		prepared = this.expandMacrosInText(prepared);
		return evaluateCondition(prepared) !== 0;
	}

	private expandMacros(line: string, uri: string, lineNo: number): string {
		try {
			return this.expandMacrosInText(line);
		} catch (e) {
			this.error(uri, lineNo, 0, `Macro expansion error: ${e}`);
			return line;
		}
	}

	private expandMacrosInText(text: string): string {
		let result = '';
		let i = 0;
		while (i < text.length) {
			const ch = text[i];
			if (ch === '"' || ch === "'") {
				const end = readString(text, i);
				result += text.slice(i, end);
				i = end;
				continue;
			}
			if (/[A-Za-z_]/.test(ch)) {
				let j = i;
				while (j < text.length && /[A-Za-z0-9_]/.test(text[j])) {
					j++;
				}
				const name = text.slice(i, j);
				const macro = this.macros.get(name);
				if (!macro) {
					result += name;
					i = j;
					continue;
				}
				if (macro.kind === 'object') {
					result += this.expandMacrosInText(macro.replacement);
					i = j;
					continue;
				}
				// Function-like macro: name must be followed by '('
				let k = j;
				while (k < text.length && /\s/.test(text[k])) {
					k++;
				}
				if (text[k] !== '(') {
					result += name;
					i = j;
					continue;
				}
				const args = parseMacroArgs(text, k);
				const expanded = expandFunctionMacro(macro, args);
				result += this.expandMacrosInText(expanded);
				i = args.end;
				continue;
			}
			result += ch;
			i++;
		}
		return result;
	}

	private isActive(ifStack: IfFrame[]): boolean {
		return ifStack.every((f) => f.active);
	}

	private resolveInclude(fromUri: string, quoted: string, system: boolean): string | null {
		const fromDir = dirname(fromUri);
		const candidates: string[] = [];
		if (system) {
			for (const dir of this.includePaths) {
				candidates.push(join(dir, quoted));
			}
			candidates.push(join(fromDir, quoted));
		} else {
			candidates.push(join(fromDir, quoted));
			for (const dir of this.includePaths) {
				candidates.push(join(dir, quoted));
			}
		}
		for (const path of candidates) {
			const abs = normalizePath(path);
			if (existsSync(abs)) {
				return abs;
			}
		}
		return null;
	}

	private error(uri: string, line: number, column: number, message: string): void {
		this.diagnostics.push({ uri, line, column, message, severity: 'error' });
	}
}

function parseIncludePath(raw: string): { quoted: string; system: boolean } | null {
	const sys = /^<([^>]+)>/.exec(raw);
	if (sys) {
		return { quoted: sys[1], system: true };
	}
	const loc = /^"([^"]+)"/.exec(raw);
	if (loc) {
		return { quoted: loc[1], system: false };
	}
	return null;
}

function parseMacroArgs(text: string, openParen: number): { values: string[]; end: number } {
	const values: string[] = [];
	let i = openParen + 1;
	let depth = 0;
	let current = '';
	while (i < text.length) {
		const ch = text[i];
		if (ch === '(') {
			depth++;
			current += ch;
		} else if (ch === ')') {
			if (depth === 0) {
				values.push(current.trim());
				return { values, end: i + 1 };
			}
			depth--;
			current += ch;
		} else if (ch === ',' && depth === 0) {
			values.push(current.trim());
			current = '';
		} else {
			current += ch;
		}
		i++;
	}
	return { values: [current.trim()], end: i };
}

function expandFunctionMacro(macro: FunctionMacro, args: { values: string[] }): string {
	let body = macro.replacement;
	for (let i = 0; i < macro.params.length; i++) {
		const param = macro.params[i];
		const value = args.values[i] ?? '';
		body = body.replace(new RegExp(`\\b${escapeRegExp(param)}\\b`, 'g'), value);
	}
	return body;
}

function readString(text: string, start: number): number {
	const quote = text[start];
	let i = start + 1;
	while (i < text.length) {
		if (text[i] === '\\') {
			i += 2;
			continue;
		}
		if (text[i] === quote) {
			return i + 1;
		}
		i++;
	}
	return text.length;
}

function escapeRegExp(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizePath(p: string): string {
	if (p.startsWith('file://')) {
		return resolve(decodeURIComponent(p.slice('file://'.length)));
	}
	return resolve(isAbsolute(p) ? p : resolve(p));
}

function readText(path: string): string {
	return readFileSync(path, 'utf8');
}
