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
  private parent: ASTNode = null;

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

  setParent(node: ASTNode) {
    this.parent = node;
  }

  getChildren(): ASTNode[] {
    return this.children;
  }

  getType() {
    return this.type;
  }

  getParent() {
    return this.parent;
  }

  printTree(indendation = 0): void {
    const pos = this.getPosition();
    let out = this.getType();
    if (pos) {
      out = out + String(pos.line) + " | s: " + pos.start + " e:" + pos.end;
    }
    console.log(" ".repeat(indendation) + out);
    this.children.forEach((child) => {
      child.printTree(indendation + 2);
    });
  }
}

export interface DeclaredIdentifier {
  identifier: string;
  type: string;
  node: ASTNode;
  offset: number;
}

export interface DeclaredType {
  id: "basic";
  identifier: string;
  node: ASTNode;
  offset: number;
}
export interface StructTypeDeclaration {
  id: "struct";
  identifier: string;
  members: { [key: string]: string };
  offset: number;
}

export type TypeDeclaration = DeclaredType | StructTypeDeclaration;

export class BlockScopeNode extends ASTNode {
  private identifiers: Map<string, DeclaredIdentifier> = new Map();
  private types: Map<string, TypeDeclaration> = new Map();
  private parentScope: BlockScopeNode = null;
  private identifierToType = new Map<string, string>();

  setParentScopeNode(node: BlockScopeNode): void {
    this.parentScope = node;
  }

  getTypeOfIdentifier(id: string): TypeDeclaration | undefined {
    const type = this.identifiers.get(id)?.type;
    console.log(type, this.identifiers.keys());
    if (type) {
      return this.getDeclaredType(type);
    }
    return undefined;
  }

  addDeclaredIdentifier(id: DeclaredIdentifier): void {
    this.identifiers.set(id.identifier, id);
  }

  addDeclaredType(id: DeclaredType): void {
    this.types.set(id.identifier, id);
  }

  addStructTypeDeclaration(std: StructTypeDeclaration) {
    this.types.set(std.identifier, std);
  }

  getDeclaredIdentifiers(): Map<string, DeclaredIdentifier> {
    const identifiers = new Map<string, DeclaredIdentifier>();
    if (this.parentScope !== null) {
      this.parentScope.getDeclaredIdentifiers().forEach((k, v) => {
        identifiers.set(v, k);
      });
    }
    this.identifiers.forEach((k, v) => identifiers.set(v, k));
    return this.identifiers;
  }

  getDeclaredIdentifierOffset(id: string): number {
    if (this.identifiers.has(id)) {
      return this.identifiers.get(id).offset;
    }
    if (this.parentScope !== null) {
      const offset = this.parentScope.getDeclaredIdentifierOffset(id);
      if (offset >= 0) return offset;
    }
    return -1;
  }

  getDeclaredType(id: string): TypeDeclaration | undefined {
    console.log(this.types.keys());
    if (this.types.has(id)) {
      return this.types.get(id);
    }
    if (this.parentScope !== null) {
      return this.parentScope.getDeclaredType(id);
    }
    return undefined;
  }

  getDeclaredTypeOffset(id: string): number {
    if (this.types.has(id)) {
      return this.types.get(id).offset;
    }
    if (this.parentScope !== null) {
      const offset = this.parentScope.getDeclaredTypeOffset(id);
      if (offset >= 0) return offset;
    }
    return -1;
  }
}

export class IdentifierNode extends ASTNode {
  private identifier = "";
  setIdentifier(s: string) {
    this.identifier = s;
  }
  getIdentifier() {}
}
