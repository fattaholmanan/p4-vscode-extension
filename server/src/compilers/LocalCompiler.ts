import { TextDocument } from "vscode-languageserver";
import Compiler, { ParsedCompilerOutput } from "./Compiler";
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

  async compile(input: TextDocument): Promise<ParsedCompilerOutput> {
    throw new Error("Method not implemented.");
  }

  async compileURI(
    input: string,
    currentContent?: string
  ): Promise<ParsedCompilerOutput> {
    /*
     TODO: potentially included files are missing with this approach
    */
    const localFilename = path.basename(input);
    const tempDir = path.join(os.tmpdir(), "/");
    const temp = await promisify(fs.mkdtemp)(tempDir);
    const tempFilename = path.join(temp, localFilename);
    await promisify(fs.writeFile)(tempFilename, currentContent);
    try {
      const result = execSync(`p4c ${tempFilename}`).toString("utf-8");
      return this.parseInput(result);
    } catch (err) {
      return this.parseInput(err.message);
    }
  }
}
