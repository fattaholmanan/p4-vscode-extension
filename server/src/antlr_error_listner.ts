import { BaseErrorListener, Token } from 'antlr4ng';
import { Diagnostic, DiagnosticSeverity, Position, Range } from 'vscode-languageserver';

import { SourceMap } from './preprocessor/source_map';
import { PreprocessDiagnostic } from './preprocessor/preprocessor';

function offsetToPosition(content: string, offset: number): Position {
	const clamped = Math.max(0, Math.min(offset, content.length));
	let line = 0;
	let last = 0;
	for (let i = 0; i < clamped; i++) {
		if (content[i] === '\n') {
			line++;
			last = i + 1;
		}
	}
	return { line, character: clamped - last };
}

function toFileUri(path: string): string {
	return path.startsWith('file://') ? path : `file://${path}`;
}

/**
 * Collects ANTLR syntax errors on flattened (preprocessed) text and maps them
 * back to the original source files via the preprocessor source map.
 */
export class P4ErrorListener extends BaseErrorListener {
	private readonly sourceMap: SourceMap;
	private readonly fileContents: Map<string, string>;
	private readonly diagnostics = new Map<string, Diagnostic[]>();

	constructor(sourceMap: SourceMap, fileContents: Map<string, string>) {
		super();
		this.sourceMap = sourceMap;
		this.fileContents = fileContents;
	}

	isEmpty(): boolean {
		return this.allDiagnostics().length === 0;
	}

	allDiagnostics(): Diagnostic[] {
		const out: Diagnostic[] = [];
		for (const diags of this.diagnostics.values()) {
			out.push(...diags);
		}
		return out;
	}

	diagnosticsByUri(): Map<string, Diagnostic[]> {
		return this.diagnostics;
	}

	addPreprocessDiagnostics(ppDiags: PreprocessDiagnostic[]): void {
		for (const d of ppDiags) {
			const uri = toFileUri(d.uri);
			const content = this.fileContents.get(d.uri) ?? this.fileContents.get(uri) ?? '';
			const start = offsetToPosition(content, 0);
			start.line = d.line;
			start.character = d.column;
			this.push(uri, {
				severity: d.severity === 'error' ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
				range: { start, end: { line: d.line, character: d.column + 1 } },
				message: d.message,
				source: 'p4',
			});
		}
	}

	override syntaxError(
		_recognizer: unknown,
		offendingSymbol: Token | null,
		line: number,
		column: number,
		msg: string,
		_e: unknown,
	): void {
		let uri: string;
		let range: Range;

		if (offendingSymbol && offendingSymbol.start >= 0) {
			const pos = this.sourceMap.resolve(offendingSymbol.start);
			uri = toFileUri(pos.uri);
			const content = this.fileContents.get(pos.uri) ?? '';
			const start = offsetToPosition(content, pos.offset);
			const endPos = this.sourceMap.resolve(offendingSymbol.stop + 1);
			const end = offsetToPosition(this.fileContents.get(endPos.uri) ?? '', endPos.offset);
			range = { start, end };
		} else {
			uri = toFileUri([...this.fileContents.keys()][0] ?? '');
			range = {
				start: { line: Math.max(line - 1, 0), character: Math.max(column, 0) },
				end: { line: Math.max(line - 1, 0), character: Math.max(column, 0) + 1 },
			};
		}

		this.push(uri, {
			severity: DiagnosticSeverity.Error,
			range,
			message: msg,
			source: 'p4',
		});
	}

	private push(uri: string, diagnostic: Diagnostic): void {
		if (!this.diagnostics.has(uri)) {
			this.diagnostics.set(uri, []);
		}
		this.diagnostics.get(uri)!.push(diagnostic);
	}
}
