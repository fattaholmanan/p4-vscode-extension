import { P4IRTypes } from './p4_ir_types' ;
import { debuglog } from 'util';
import { logInfo, logDebug } from '../utils/logger';
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

	getAutoCompletion(keyword: string): CompletionItem[] {
		let attrArr: CompletionItem[];
		if(keyword == null){
			attrArr = this._matchAttrAny();
		}else
			attrArr = this._matchAttrName(keyword);
		return attrArr;
	}

	private _matchAttrName(keyword: string): CompletionItem[] {
		let keyArr: string[] = keyword.split(".");
		if(keyword.charAt(keyword.length - 1) != '.') // removing the last segment.
			keyArr.pop();

		let p4Ir: P4IR = this;
		for(let i = 0; i < keyArr.length; i++){
			let varName: string = keyArr[i];
			logDebug("**********");

			if(varName.trim().length == 0)
				break;
			if(p4Ir == null){
				logDebug("something went wrong!");
				return [];
			}
			let varAttr: Attribute = p4Ir.findType(varName);
			let varBlck: P4IR = varAttr.getParent();

			logDebug("look: " + varAttr.getVarType());
			logDebug("in: " + varBlck);

			let varType = varBlck.findType(varAttr.getVarType());

			if(varType == null){
				logDebug("something went wrong!");
				break;
			}

			p4Ir = varType.getP4Ir();
			logDebug("**********");
		}
		return p4Ir._getAttributesArray();
	}

	private _getAttributesArray(){
		let arr: CompletionItem[] = [];
		for(let attr of this.attributes.values())
			arr.push(attr.getCompletionItem());
		return arr;
	}

	private findType(varName: string): Attribute | null {
		let p4Ir: P4IR = this;
		while(true){
			if(p4Ir.attributes.has(varName))
				return p4Ir.attributes.get(varName);
			if(p4Ir.type == P4IRTypes.P4_PROGRAM)
				return null;
			p4Ir = p4Ir.parent;
		}
	}

	private _matchAttrAny(): CompletionItem[] {
		let arr: CompletionItem[] = [];
		let p4Ir: P4IR = this;

		while(true){
			for(let attr of this.attributes.values())
				arr.push(attr.getCompletionItem());
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
		attr.setParent(this);
	}

	toString():string {
		let tmpStr: string = `type: ${this.type} \n`;
		for(let attr of this.attributes){
			tmpStr += "\t" + attr + "\n";
		}
		return tmpStr;
	}
}

export class Attribute{
	label: string;
	detail: string;
	documentation?: string | MarkupContent;
	kind: CompletionItemKind;
	private parent: P4IR;
	private p4Ir: P4IR; 
	private id: number;
	static CURRENT_ID: number = 0;
	
	constructor(name: string, type: string, kind: CompletionItemKind){
		this.label = name;
		this.detail = type;
		this.kind = kind;
		this.id = Attribute.CURRENT_ID++;
	}

	getCompletionItem(): CompletionItem {
		return {
			label: this.label,
			kind: this.kind,
			data: this.id
		};
	}

	setParent(p: P4IR): void {
		this.parent = p;
	}

	setP4Ir(p: P4IR) {
		this.p4Ir = p;
	}

	getP4Ir(): P4IR | null {
		return this.p4Ir;
	}

	getParent(): P4IR {
		return this.parent;
	}

	getVarName(): string{
		return this.label;
	}
	
	getVarType():string{
		return this.detail;
	}

	toString(){
		return `${this.label}:${this.detail}`;
	}
	
}