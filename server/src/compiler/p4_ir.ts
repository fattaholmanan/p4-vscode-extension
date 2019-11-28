import { P4IRTypes } from './p4_ir_types' ;
import { debuglog } from 'util';
import { logInfo } from '../utils/logger';
export class P4IR{
	private attributes: Map<string, Attribute> = new Map();
	private type: P4IRTypes;
	private parent: P4IR;
	private ctx;

	constructor(type: P4IRTypes, parent: P4IR, ctx){
		this.type = type;
		this.parent = parent;
		this.ctx = ctx;
	}

	getCtx(){
		return this.ctx;
	}

	getStartLine(): number {
		return this.ctx.start.line;
	}

	getEndLine(): number {
		return this.ctx.stop.line;
	}

	length(): number {
		return this.getEndLine() - this.getStartLine();
	}

	isInsideMe(lineNumber: number): boolean{
		return lineNumber >= this.getStartLine() && lineNumber <= this.getEndLine();
	}

	add(name: string, attr: Attribute): void{
		this.attributes.set(name, attr);
	}

	toString():string {
		let tmpStr: string = "type: ";
		tmpStr += P4IRTypes[this.type];
		return tmpStr;
	}
}

export class Attribute {
	name: string;
	type: string;
	ctx;

	constructor(name: string, type: string, ctx){
		this.name = name;
		this.type = type;
		this.ctx = ctx;
	}

	toString(){
		return this.name;
	}
	
}