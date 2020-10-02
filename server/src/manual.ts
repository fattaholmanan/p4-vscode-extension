import { readFileSync } from "fs";
import { resolve } from "path";
import {
  Diagnostic,
  DiagnosticSeverity,
  TextDocument,
} from "vscode-languageserver";
import ASTNode from "./parser/ASTNode";
import parseAST from "./parser/ASTParser";
const testinput = readFileSync(resolve(__dirname, "parser.p4")).toString();
const ast = parseAST(testinput);

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}

export default function gettype_or_id_diagnostics(
  doc: TextDocument,
  tree: ASTNode
): Diagnostic[] {
  const children = tree.getChildren();
  let diags: Diagnostic[] = [];
  if (children.length > 0) {
    diags = flattenDeep(
      children.map((child) => {
        const diags2 = [];
        console.log(child.getType());
        if (child.getType().startsWith("type_or_id")) {
          console.log("pushing diag!");
        } else if (child.getType() === "TableProperty") {
          diags2.push({
            severity: DiagnosticSeverity.Hint,
            range: {
              start: doc.positionAt(child.getPosition().start),
              end: doc.positionAt(child.getPosition().end),
            },
            message: "expression!",
            source: "P4 Extension",
          });
        }
        return [...gettype_or_id_diagnostics(doc, child), ...diags2];
      })
    );
  }
  return diags;
}

export function collectASTTypesAndVars(node: ASTNode) {
  const collectedTypes = new Set<string>();
  const collectedVars = [];

  function traverse(node: ASTNode) {
    if (node.getType() === "ConstantDeclaration") {
      const declaredVar = {
        type: node.getChildren()[0].getType(),
        identifier: node.getChildren()[1].getType(),
        initializer: node.getChildren()[2].getType(),
      };
      collectedVars.push(declaredVar);

      if (collectedTypes.has(declaredVar.type) === false) {
        console.log("Declaration with unknown type.");
      }
    }

    if (node.getType() === "TypeDeclaration") {
      collectedTypes.add(node.getChildren()[1].getType());
    }

    if (node.getType() === "Struct Type Declaration") {
      collectedTypes.add(node.getChildren()[0].getType());
    }
    node.getChildren().forEach((child) => traverse(child));
  }
  traverse(node);
  console.log(collectedTypes, collectedVars);
}

collectASTTypesAndVars(ast);
ast.printTree();
