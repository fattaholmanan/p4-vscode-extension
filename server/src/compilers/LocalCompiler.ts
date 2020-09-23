import { Diagnostic, TextDocument } from "vscode-languageserver";
import Compiler from "./Compiler";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { promisify } from "util";
export default class LocalCompiler extends Compiler {
  constructor() {
    super();
    try {
      execSync("p4c");
    } catch (err) {
      console.log(err);
    }
  }

  async compile(input: TextDocument): Promise<Diagnostic[]> {
    /*
     TODO: potentially included files are missing with this approach
    */
    const localFilename = path.basename(input.uri);
    const tempDir = path.join(os.tmpdir(), "/");
    const temp = await promisify(fs.mkdtemp)(tempDir);
    const tempFilename = path.join(temp, localFilename);
    await promisify(fs.writeFile)(tempFilename, input.getText());
    try {
      const result = execSync(`p4c ${tempFilename}`).toString("utf-8");
      return this.convertToDiagnostic(this.parseInput(result), input);
    } catch (err) {
      return this.convertToDiagnostic(this.parseInput(err.message), input);
    }
  }
}
