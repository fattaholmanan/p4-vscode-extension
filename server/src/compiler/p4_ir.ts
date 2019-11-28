import { P4IRTypes } from './p4_ir_types' ;
import { debuglog } from 'util';
import { logInfo } from '../utils/logger';
import { Node } from 'ts-pq';

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

	/** start line */
	startLine(): number {
		return this.x;
	}

	/** end line */
	endLine(): number {
		return this.y;
	}

	length(): number {
		return this.endLine() - this.startLine();
	}

	isInsideMe(lineNumber: number): boolean{
		return lineNumber >= this.startLine() && lineNumber <= this.endLine();
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