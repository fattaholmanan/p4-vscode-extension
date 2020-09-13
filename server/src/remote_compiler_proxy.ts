import {
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  CompletionItemKind,
} from "vscode-languageserver";

import { logDebug, logInfo, logError } from "./utils/logger";
import { getDocumentSettings } from "./utils";
import { p4ExtensionServer } from "./server";
import request from "request";

export async function sendToRemoteServer(textDocument: TextDocument) {
  logInfo("Compile request to remote server.....");

  const mySetting = await getDocumentSettings(textDocument.uri);
  const apiUrl: string = mySetting.compilerServerAddress + "/p4_codes";

  logInfo("  Cookie to call API: " + mySetting.userRememberToken);

  request.post(
    {
      url: apiUrl,
      headers: {
        Cookie: "remember_token=" + mySetting.userRememberToken,
      },
      json: {
        p4plugin: {
          version: "0.1.0",
          code: textDocument.getText(),
        },
      },
    },

    function (err, response, body) {
      try {
        const new_body: any = JSON.parse(body.replace(/&quot;/g, '"'));
        logInfo(JSON.stringify(new_body));

        if (!err && response.statusCode === 200) {
          logInfo("API HTTP status: " + new_body.status);

          if (
            new_body.status == "error" &&
            new_body["content"] == "compile_error"
          ) {
            logInfo("code has some error");
            parseBmv2CompilerOutputErr(new_body.output, textDocument);
          }
          if (new_body.status == "ok" && new_body["content"] == "json_header") {
            logInfo("Code has been succesfully merged!");
            parseBmv2CompilerOutputOk(new_body.output, textDocument);
          }
        } else {
          logError("server error: " + err);
        }
      } catch (e) {
        logError("Exception: " + e);
      }
    }
  );
}

function parseBmv2CompilerOutputOk(
  compiledJsonFile: JSON,
  textDocument: TextDocument
) {
  throw new Error("to be implemented!");
}

export function extractErrorMessage(errSection: string): string {
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

async function parseBmv2CompilerOutputErr(
  compileOutput: string,
  textDocument: TextDocument
) {
  const text = compileOutput.toString();

  const settings = await getDocumentSettings(textDocument.uri);

  const errorSectionPattern = /.*\/(?=[^\/]+\.p4\(\d+\))/g;
  const lineNumberPattern = /\(\d+\)/;
  const diagnostics: Diagnostic[] = [];
  const arrayOfErrors = text.split(errorSectionPattern);

  // remove the first non-important error in the console!
  for (
    let i = 1;
    i < arrayOfErrors.length && i < settings.maxNumberOfProblems;
    i++
  ) {
    const errSection: string = arrayOfErrors[i];
    const lineNumber = parseInt(
      /\d+/.exec(lineNumberPattern.exec(errSection)[0])[0]
    );
    const errorMessage: string = extractErrorMessage(errSection);
    if (errorMessage == null) continue;
    const errorP4Code = errSection.split(/[\r\n]+/g)[1].trim();
    const startIndex = getStartingOffsetOfDocument(
      lineNumber,
      errorP4Code,
      textDocument
    );

    let diagnosic: Diagnostic;
    if (errorMessage != null) {
      diagnosic = {
        severity: DiagnosticSeverity.Error,
        range: {
          start: textDocument.positionAt(startIndex),
          end: textDocument.positionAt(startIndex + errorP4Code.length),
        },
        message: `${errorMessage}`,
        source: "bmv2",
      };
      diagnosic.relatedInformation = [];
      diagnostics.push(diagnosic);
    } else {
      diagnosic = diagnostics[diagnostics.length - 1];
      if (diagnosic != null) {
        diagnosic.relatedInformation.push({
          location: {
            uri: textDocument.uri,
            range: {
              start: textDocument.positionAt(startIndex),
              end: textDocument.positionAt(startIndex + errorP4Code.length),
            },
          },
          message: ``,
        });
      }
    }
  }
  p4ExtensionServer.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

function getStartingOffsetOfDocument(
  lineNumber: number,
  rawCode: string,
  textDocument: TextDocument
): number {
  const text = textDocument.getText();
  const lines = text.split(/(?:\r\n|\r|\n)/g);
  let myOffset = 0;

  for (let i = 0; i < lines.length; i++) {
    if (i == lineNumber - 1) {
      myOffset += lines[i].indexOf(rawCode.trim());
      break;
    } else myOffset += lines[i].length + 1;
  }
  return myOffset;
}
