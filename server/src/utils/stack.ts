// https://github.com/rubyide/vscode-ruby/blob/master/packages/language-server-ruby/src/util/Stack.ts
export default class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  get size(): number {
    return this.stack.length;
  }

  public push(value: T): void {
    this.stack.push(value);
  }

  public pop(): T {
    return this.stack.pop();
  }

  public peek(): T {
    return this.stack[this.size - 1];
  }

  public empty(): boolean {
    return this.size === 0;
  }
}
