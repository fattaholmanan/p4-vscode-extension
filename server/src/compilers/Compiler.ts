import {
  Diagnostic,
  DiagnosticSeverity,
  TextDocument,
} from "vscode-languageserver";

export type ParsedCompilerOutput = {
  line: number;
  error: string;
  errorP4Code: string;
}[];

export default abstract class Compiler {
  abstract async compile(input: TextDocument): Promise<Diagnostic[]>;

  protected parseInput(input: string): ParsedCompilerOutput {
    const result = [];
    const errorSectionPattern = /.*\/(?=[^\/]+\.p4\(\d+\))/g;
    const lineNumberPattern = /\(\d+\)/;
    const arrayOfErrors = input.split(errorSectionPattern);

    // remove the first non-important error in the console!
    for (let i = 1; i < arrayOfErrors.length; i++) {
      const errSection: string = arrayOfErrors[i];
      const lineNumber = parseInt(
        /\d+/.exec(lineNumberPattern.exec(errSection)[0])[0]
      );
      const errorMessage: string = this.extractErrorMessage(errSection);
      if (errorMessage == null) continue;
      const errorP4Code = errSection.split(/[\r\n]+/g)[1].trim();
      result.push({ line: lineNumber, error: errorMessage, errorP4Code });
    }
    return result;
  }

  private extractErrorMessage(errSection: string): string {
    const first_layer: RegExpExecArray = /(\(\d+\))?(error.*)/.exec(errSection);
    if (first_layer == null) return null;
    if (first_layer.length == 0) return null;

    try {
      let second_layer = /(\].*(?!.*error.*)|error:.*)/.exec(first_layer[0])[0];
      const error_index: number = second_layer.indexOf("error:");
      if (error_index > 0) {
        second_layer = second_layer.substring(
          error_index + 6,
          second_layer.length
        );
      }
      return second_layer;
    } catch (e) {
      return first_layer[0];
    }
  }

  protected getStartingOffsetOfDocument(
    lineNumber: number,
    rawCode: string,
    textDocument: TextDocument
  ): number {
    const text = textDocument.getText();
    const lines = text.split(/(?:\r\n|\r|\n)/g);
    let myOffset = 0;

    for (let i = 0; i < lines.length; i++) {
      if (i === lineNumber - 1) {
        myOffset += lines[i].indexOf(rawCode.trim());
        break;
      } else myOffset += lines[i].length + 1;
    }
    return myOffset;
  }
  protected convertToDiagnostic(
    input: ParsedCompilerOutput,
    document: TextDocument
  ): Diagnostic[] {
    const diagnostics: Diagnostic[] = [];
    for (const { error, line, errorP4Code } of input) {
      const a = this.getStartingOffsetOfDocument(line, errorP4Code, document);
      const diagnostic = {
        severity: DiagnosticSeverity.Error,
        range: {
          start: document.positionAt(a),
          end: document.positionAt(a + errorP4Code.length),
        },
        message: `${error}`,
        source: "bmv2",
      };
      diagnostics.push(diagnostic);
    }

    return diagnostics;
  }
}
