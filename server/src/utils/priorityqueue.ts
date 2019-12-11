export interface Node {
  x: number;
  y: number;
}

export type Tuple<T> = [T, number];

export class PriorityQueue<T extends Node> {
  heap: Tuple<T>[] = [];

  constructor() {}

  insert(val: T, priority: number) {
    if (!this.heap.length || this.heap[this.heap.length - 1][1] > priority) {
      this.heap.push([val, priority]);
      return this.heap;
    }

    const tmp: Tuple<T>[] = [];
    let found = false;

    for (let i = 0; i < this.heap.length; i++) {
      const p = this.heap[i][1];

      if (priority >= p && !found) {
        tmp.push([val, priority]);
        found = true;
      }

      tmp.push(this.heap[i]);
    }

    return (this.heap = tmp);
  }

  has({ x, y }: T) {
    const foundNode = this.heap.find(([val]) => val.x === x && val.y === y);

    return !!foundNode;
  }

  get({ x, y }: T) {
    const foundNode = this.heap.find(([val]) => val.x === x && val.y === y);

    return foundNode && foundNode[0];
  }

  shift(priority: boolean) {
    const tuple = this.heap.shift();
    if (priority) {
      return tuple;
    }

    return tuple ? tuple[0] : undefined;
  }

  pop(priority: boolean) {
    const tuple = this.heap.pop();

    if (priority) {
      return tuple;
    }

    return tuple ? tuple[0] : undefined;
  }

  priorities() {
    return this.heap.map(([_, p]) => p);
  }

  values() {
    return this.heap.map(([val]) => val);
  }

  size() {
    return this.heap.length;
  }

  toArray(values: boolean) {
    if (values) {
      return this.heap.map(([val]) => val);
    }
    return this.heap;
  }
}
