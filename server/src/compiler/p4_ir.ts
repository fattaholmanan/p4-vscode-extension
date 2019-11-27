import { P4IRTypes } from './p4_ir_types' ;
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

	add(name: string, attr: Attribute): void{
		this.attributes.set(name, attr);
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