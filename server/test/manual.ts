import { readFileSync } from "fs";
import { resolve } from "path";
import parseAST from "../src/parser/ASTParser";
const testinput = readFileSync(resolve(__dirname, "parser.p4")).toString();
const ast = parseAST(testinput);
ast.printTree();
