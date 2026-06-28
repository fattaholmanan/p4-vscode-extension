import { ParserRuleContext } from 'antlr4ng';
import { CompletionItem, CompletionItemKind, MarkupContent } from 'vscode-languageserver';
import { logDebug } from '../utils/logger';
import { Node } from '../utils/priorityqueue';
import { P4IRTypes } from './p4_ir_types';

/**
 * A P4 Intermediate Representation node: one lexical scope (program, control,
 * table, header, struct, action) holding its declared attributes and a link to
 * its enclosing scope. Spans the source line range [x, y].
 */
export class P4IR implements Node {
	private readonly attributes: Map<string, Attribute> = new Map();
	private readonly type: P4IRTypes;
	private readonly parent: P4IR | null;
	private readonly ctx: ParserRuleContext;
	x: number;
	y: number;

	constructor(type: P4IRTypes, parent: P4IR | null, ctx: ParserRuleContext) {
		this.type = type;
		this.parent = parent;
		this.ctx = ctx;
		this.x = ctx.start?.line ?? 0;
		this.y = ctx.stop?.line ?? this.x;
	}

	getCtx(): ParserRuleContext {
		return this.ctx;
	}

	startLine(): number {
		return this.x;
	}

	endLine(): number {
		return this.y;
	}

	getAutoCompletion(keyword: string | null): CompletionItem[] {
		if (keyword == null) {
			return this._matchAttrAny();
		}
		return this._matchAttrName(keyword);
	}

	private _matchAttrName(keyword: string): CompletionItem[] {
		logDebug('Match name: ' + keyword);
		const keyArr: string[] = keyword.split('.');
		// Drop the partial segment after the last dot (the text being typed).
		if (keyword.charAt(keyword.length - 1) !== '.') {
			keyArr.pop();
		}

		let scope: P4IR | null = this;
		for (const varName of keyArr) {
			if (varName.trim().length === 0) {
				continue;
			}
			if (scope == null) {
				return [];
			}
			const varAttr = scope.findType(varName);
			if (varAttr == null) {
				return [];
			}
			const varBlock = varAttr.getParent();
			if (varBlock == null) {
				return [];
			}
			const varType: Attribute | null = varBlock.findType(varAttr.getVarType());
			if (varType == null) {
				return [];
			}
			scope = varType.getP4Ir();
		}

		return scope ? scope._getAttributesArray() : [];
	}

	private _getAttributesArray(): CompletionItem[] {
		const arr: CompletionItem[] = [];
		for (const attr of this.attributes.values()) {
			arr.push(attr.getCompletionItem());
		}
		return arr;
	}

	private lookupLocal(varName: string): Attribute | null {
		return this.attributes.get(varName) ?? null;
	}

	private findType(varName: string): Attribute | null {
		for (let scope: P4IR | null = this; scope != null; scope = scope.parent) {
			const attr = scope.lookupLocal(varName);
			if (attr) {
				return attr;
			}
			if (scope.type === P4IRTypes.P4_PROGRAM) {
				return null;
			}
		}
		return null;
	}

	private _matchAttrAny(): CompletionItem[] {
		const arr: CompletionItem[] = [];
		for (let scope: P4IR | null = this; scope != null; scope = scope.parent) {
			arr.push(...scope._getAttributesArray());
			if (scope.type === P4IRTypes.P4_PROGRAM) {
				break;
			}
		}
		return arr;
	}

	length(): number {
		return this.endLine() - this.startLine();
	}

	isInsideMe(lineNumber: number): boolean {
		return lineNumber >= this.startLine() && lineNumber <= this.endLine();
	}

	add(attr: Attribute): void {
		this.attributes.set(attr.label, attr);
		attr.setParent(this);
	}

	toString(): string {
		let tmpStr = `type: ${this.type}\n`;
		for (const attr of this.attributes.values()) {
			tmpStr += '\t' + attr.toString() + '\n';
		}
		return tmpStr;
	}
}

export class Attribute {
	label: string;
	detail: string;
	documentation?: string | MarkupContent;
	kind: CompletionItemKind;
	private parent: P4IR | null = null;
	private p4Ir: P4IR | null = null;
	private readonly id: number;
	static CURRENT_ID = 0;

	constructor(name: string, type: string, kind: CompletionItemKind) {
		this.label = name;
		this.detail = type;
		this.kind = kind;
		this.id = Attribute.CURRENT_ID++;
	}

	getCompletionItem(): CompletionItem {
		return {
			label: this.label,
			detail: this.detail,
			kind: this.kind,
			data: this.id,
		};
	}

	setParent(p: P4IR): void {
		this.parent = p;
	}

	setP4Ir(p: P4IR): void {
		this.p4Ir = p;
	}

	getP4Ir(): P4IR | null {
		return this.p4Ir;
	}

	getParent(): P4IR | null {
		return this.parent;
	}

	getVarName(): string {
		return this.label;
	}

	getVarType(): string {
		return this.detail;
	}

	toString(): string {
		return `${this.label}:${this.detail}`;
	}
}
