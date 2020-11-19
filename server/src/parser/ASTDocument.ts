import { Diagnostic, TextDocument } from "vscode-languageserver";
import ASTNode, {
  BlockScopeNode,
  DeclaredIdentifier,
  DeclaredType,
  StructTypeDeclaration,
  TypeDeclaration,
} from "./ASTNode";
import parseAST from "./ASTParser";

export default class ASTDocument {
  private root: ASTNode;
  private textDoc: TextDocument;

  constructor(doc: TextDocument) {
    this.textDoc = doc;
  }

  public getRoot(): ASTNode {
    return this.root;
  }

  public getNodeByOffset(offset: number): ASTNode | null {
    let current: ASTNode = null;
    let currentDist = 10000;

    function traverse(node: ASTNode) {
      const pos = node.getPosition();
      if (pos) {
        if (pos.start <= offset && pos.end >= offset) {
          current = node;
          currentDist = 0;
        } else if (pos.end <= offset && currentDist > offset - pos.end) {
          currentDist = offset - pos.end;
          current = node;
        }
        node.getChildren().forEach(traverse);
      } else {
        node.getChildren().forEach(traverse);
      }
    }
    traverse(this.root);
    if (current) {
      console.log(
        current.getType(),
        current.getPosition().start,
        current.getPosition().end
      );
    } else {
      console.log("No node found.");
    }
    return current;
  }

  getDeclaredIdentifierOffset(identifier: string, offset: number): number {
    const closestNode = this.getNodeByOffset(offset);
    let result: Map<string, DeclaredIdentifier>;

    function traverseUpwardsToNextBlockScopeNode(node: ASTNode) {
      if (node instanceof BlockScopeNode) {
        result = node.getDeclaredIdentifiers();
      } else {
        traverseUpwardsToNextBlockScopeNode(node.getParent());
      }
    }
    if (closestNode) {
      console.log(closestNode);
      traverseUpwardsToNextBlockScopeNode(closestNode);
    }

    if (result.has(identifier)) {
      return result.get(identifier).offset;
    }

    return -1;
  }

  getDeclaredTypeOffset(identifier: string, offset: number): number {
    const closestNode = this.getNodeByOffset(offset);
    let result = -1;

    function traverseUpwardsToNextBlockScopeNode(node: ASTNode) {
      if (node instanceof BlockScopeNode) {
        result = node.getDeclaredTypeOffset(identifier);
      } else {
        traverseUpwardsToNextBlockScopeNode(node.getParent());
      }
    }
    if (closestNode) {
      traverseUpwardsToNextBlockScopeNode(closestNode);
    }
    return result;
  }

  getIdentifiersAtOffset(offset: number): string[] {
    const closestNode = this.getNodeByOffset(offset);
    let result = [];

    function traverseUpwardsToNextBlockScopeNode(node: ASTNode) {
      if (node instanceof BlockScopeNode) {
        result = Array.from(node.getDeclaredIdentifiers().keys());
      } else {
        traverseUpwardsToNextBlockScopeNode(node.getParent());
      }
    }
    if (closestNode) {
      traverseUpwardsToNextBlockScopeNode(closestNode);
    }
    return result;
  }

  getTypeOfIdentifierAtOffset(
    offset: number,
    identifier: string
  ): TypeDeclaration {
    const closestNode = this.getNodeByOffset(offset);
    let type: TypeDeclaration;
    function traverseUpwardsToNextBlockScopeNode(node: ASTNode) {
      if (node instanceof BlockScopeNode) {
        type = node.getTypeOfIdentifier(identifier);
      } else {
        traverseUpwardsToNextBlockScopeNode(node.getParent());
      }
    }
    if (closestNode) {
      traverseUpwardsToNextBlockScopeNode(closestNode);
    }
    console.log(type);
    return type;
  }

  getDeclaredTypeAtOffset(typename: string, offset: number) {
    const closestNode = this.getNodeByOffset(offset);
    let type: TypeDeclaration;
    function traverseUpwardsToNextBlockScopeNode(node: ASTNode) {
      if (node instanceof BlockScopeNode) {
        type = node.getDeclaredType(typename);
      } else {
        traverseUpwardsToNextBlockScopeNode(node.getParent());
      }
    }
    if (closestNode) {
      traverseUpwardsToNextBlockScopeNode(closestNode);
    }
    return type;
  }

  parse(input: string) {
    this.root = parseAST(input);
    this.updateInternal();
    // this.root.printTree();
  }

  getDiagnostics(): Diagnostic[] {
    return [];
  }

  updateInternal() {
    let currentBlockScopeNode: BlockScopeNode = null;

    function traverse(node: ASTNode) {
      if (node instanceof BlockScopeNode) {
        node.setParentScopeNode(currentBlockScopeNode);
        currentBlockScopeNode = node;
      }
      if (node.getType() === "ConstantDeclaration") {
        const declaredVar = {
          type: node.getChildren()[0].getType(),
          identifier: node.getChildren()[1].getType(),
          initializer: node.getChildren()[2].getType(),
          offset: node.getChildren()[1].getPosition().start,
        };
        currentBlockScopeNode.addDeclaredIdentifier({
          identifier: declaredVar.identifier,
          type: declaredVar.type,
          node: node.getChildren()[1],
          offset: declaredVar.offset,
        });
      }

      if (node.getType() === "TypeDeclaration") {
        const declaredType: DeclaredType = {
          id: "basic",
          identifier: node.getChildren()[1].getType(),
          node: node.getChildren()[1],
          offset: node.getChildren()[1].getPosition().start,
        };

        currentBlockScopeNode.addDeclaredType(declaredType);
      }

      if (
        node.getType() === "Struct Type Declaration" ||
        node.getType() === "Header Type Declaration"
      ) {
        const children = node.getChildren();
        const [identifierNode, ...rest] = children;
        const identifier = identifierNode.getType();
        const members = rest.reduce((aggregator, child) => {
          aggregator[
            child.getChildren()[1].getType()
          ] = child.getChildren()[0].getType();
          return aggregator;
        }, {});
        const std: StructTypeDeclaration = {
          id: "struct",
          identifier,
          members,
          offset: identifierNode.getPosition().start,
        };

        currentBlockScopeNode.addStructTypeDeclaration(std);
      }

      if (node.getType() === "Parameter") {
        currentBlockScopeNode.addDeclaredIdentifier({
          identifier: node.getChildren()[2].getType(),
          type: node.getChildren()[1].getType(),
          node: node.getChildren()[2],
          offset: node.getChildren()[2].getPosition().start,
        });
      }
      node.getChildren().forEach((child) => {
        traverse(child);
        if (node instanceof BlockScopeNode) {
          currentBlockScopeNode = node;
        }
      });
    }
    traverse(this.root);
  }
}
