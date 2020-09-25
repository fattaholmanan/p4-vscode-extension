export default class ASTNode {
  private type: string;
  private children: ASTNode[] = [];
  constructor(type: string) {
    this.type = type;
  }

  addChild(node: ASTNode): void {
    this.children.push(node);
  }

  printTree(indendation = 0): void {
    console.log(" ".repeat(indendation) + this.type);
    this.children.forEach((child) => {
      child.printTree(indendation + 2);
    });
  }
}
