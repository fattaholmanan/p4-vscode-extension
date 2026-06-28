import { P4IR } from '../compiler/p4_ir';
import { PriorityQueue } from './priorityqueue';

/**
 * Maps each source line to the scopes (P4IR nodes) covering it, ordered so the
 * innermost (smallest) scope can be retrieved for completion. Lookups are
 * non-mutating and null-safe.
 */
export default class IntervalDS {
	private readonly intervals: Map<number, PriorityQueue<P4IR>>;

	constructor() {
		this.intervals = new Map();
	}

	add(t: P4IR): void {
		for (let i = t.startLine(); i <= t.endLine(); i++) {
			let queue = this.intervals.get(i);
			if (!queue) {
				queue = new PriorityQueue<P4IR>();
				this.intervals.set(i, queue);
			}
			queue.insert(t, t.length());
		}
	}

	get(line: number): P4IR | null {
		const queue = this.intervals.get(line);
		if (!queue || queue.size() === 0) {
			return null;
		}
		// The queue keeps the smallest (innermost) scope last.
		const values = queue.values();
		return values[values.length - 1] ?? null;
	}

	length(): number {
		return this.intervals.size;
	}
}
