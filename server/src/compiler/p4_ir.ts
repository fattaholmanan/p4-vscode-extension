import { P4IRTypes } from './p4_ir_types' ;
import { debuglog } from 'util';
import { logInfo } from '../utils/logger';
import { Node } from 'ts-pq';
import { CompletionItem, CompletionItemKind, MarkupContent } from 'vscode-languageserver';

export class P4IR implements Node {
	private attributes: Map<string, Attribute> = new Map();
	private type: P4IRTypes;
	private parent: P4IR;
	x: number;
	y: number;
	private ctx;

	constructor(type: P4IRTypes, parent: P4IR, ctx){
		this.type = type;
		this.parent = parent;
		this.ctx = ctx;
		this.x = this.ctx.start.line;
		this.y = this.ctx.stop.line;
	}

	getCtx(){
		return this.ctx;
	}

	startLine(): number {
		return this.x;
	}

	endLine(): number {
		return this.y;
	}

	getAttr(keyword: string): CompletionItem[] {
		let attrArr: Attribute[];
		if(keyword == null){
			attrArr = this._matchAttrAny();
		}else
			attrArr = this._matchAttrName(keyword);
		return attrArr;
	}

	private _matchAttrName(keyword: string): Attribute[] {
		throw new Error('Method not implemented.');
	}

	private _matchAttrAny(): Attribute[] {
		let arr: Attribute[] = [];
		let p4Ir: P4IR = this;

		while(true){
			for(let attr of this.attributes.values())
				arr.push(attr);
			if(p4Ir.type == P4IRTypes.P4_PROGRAM)
				break;
			p4Ir = p4Ir.parent;
		}
		return arr;
	}

	length(): number {
		return this.endLine() - this.startLine();
	}

	isInsideMe(lineNumber: number): boolean{
		return lineNumber >= this.startLine() && lineNumber <= this.endLine();
	}

	add(attr: Attribute): void{
		this.attributes.set(attr.label, attr);
	}

	toString():string {
		let tmpStr: string = "type: ";
		tmpStr += P4IRTypes[this.type];
		return tmpStr;
	}
}

export class Attribute implements CompletionItem{
	label: string;
	detail: string;
	documentation?: string | MarkupContent;
	kind: CompletionItemKind;
	private ctx;
	
	constructor(name: string, type: string, kind: CompletionItemKind, ctx){
		this.label = name;
		this.detail = type;
		this.kind = kind;

		this.ctx = ctx;
	}

	toString(){
		return this.label;
	}
	
}