import { P4IR, Attribute } from '../compiler/p4_ir';
import { logInfo } from './logger';
import { PriorityQueue, Node } from './priorityqueue';


export default class IntervalDS {
	private intervals: Map<number, PriorityQueue<P4IR>>;

	constructor() {
		this.intervals = new Map();
	}

	add(t: P4IR): void{
		for(var i = t.startLine(); i <= t.endLine(); i++){
			if(!this.intervals.has(i)){
				let queue = new PriorityQueue<P4IR>();
				this.intervals.set(i, queue);
			}
			this.intervals.get(i).insert(t, t.length());
		}
	}

	get(line: number): P4IR {
		let p: P4IR | [P4IR, number] = this.intervals.get(line).pop(true);
		if(p instanceof P4IR)
			return p;
		else
			return p[0];
	}

	length(): number {
		return this.intervals.size;
	}
}