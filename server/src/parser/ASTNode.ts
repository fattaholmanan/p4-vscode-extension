import { TextDocumentPositionParams } from "vscode-languageserver";

export interface ASTNodeTextPosition {
  line: number;
  start: number;
  end: number;
}

export default class ASTNode {
  private type: string;
  private children: ASTNode[] = [];
  private position: ASTNodeTextPosition;

  constructor(type: string, position?: ASTNodeTextPosition) {
    this.type = type;
    this.position = position;
  }

  getPosition(): ASTNodeTextPosition {
    return this.position;
  }

  addChild(node: ASTNode): void {
    this.children.push(node);
  }

  getChildren(): ASTNode[] {
    return this.children;
  }

  getType() {
    return this.type;
  }

  printTree(indendation = 0): void {
    console.log(" ".repeat(indendation) + this.type);
    this.children.forEach((child) => {
      child.printTree(indendation + 2);
    });
  }
}

export interface BlockScoped {
  getDeclaredIdentifiers(): string[];
}

export class ProgramNode extends ASTNode implements BlockScoped {
  getDeclaredIdentifiers(): string[] {
    throw new Error("Method not implemented.");
  }
}

export class IdentifierNode extends ASTNode {
  private identifier = "";
  setIdentifier(s: string) {
    this.identifier = s;
  }
  getIdentifier() {}
}
