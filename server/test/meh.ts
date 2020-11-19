import ASTMetadata from "../src/parser/ASTDocument";
import * as fs from "fs";
import * as path from "path";
import { TextDocument } from "vscode-languageserver-types";
import printParseTree from "../src/parser/ParseTreePrinter";

const sample = fs
  .readFileSync(path.resolve(__dirname, "parser.p4"))
  .toString("utf-8");

const inst = new ASTMetadata(
  TextDocument.create("file://test.p4", "p4", 1, sample)
);
inst.parse(sample);
//printParseTree(sample);
console.log(inst.getNodeByOffset(2134).getType());
console.log(inst.getDeclaredIdentifierOffset("standard_metadata", 2134));
console.log(inst.getDeclaredIdentifierOffset("hdr", 2134));
console.log(inst.getDeclaredTypeOffset("macAddr_t", 2134));
inst.getRoot().printTree();
