import ASTMetadata from "../src/parser/ASTMetadata";
import * as fs from "fs";
import * as path from "path";

const sample = fs
  .readFileSync(path.resolve(__dirname, "test.p4"))
  .toString("utf-8");

it("test", () => {
  const inst = new ASTMetadata();
  inst.parse(sample);
  expect(inst.getNodeByOffset(2134).getType()).toBe("AssignmentOrMethodCall");
});
