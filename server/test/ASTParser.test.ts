import { readFileSync } from "fs";
import { resolve } from "path";
import parseAST from "../src/parser/ASTParser";
const testinput = readFileSync(resolve(__dirname, "sample.p4")).toString();
it("parses an AST properly", () => {
  expect(parseAST(testinput)).toMatchInlineSnapshot(`
    ASTNode {
      "children": Array [
        ASTNode {
          "children": Array [],
          "type": "ConstantDeclaration",
        },
      ],
      "type": "program",
    }
  `);
});
