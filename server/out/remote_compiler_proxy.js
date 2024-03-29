"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const logger_1 = require("./utils/logger");
const utils_1 = require("./utils");
const server_1 = require("./server");
function sendToRemoteServer(textDocument) {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logInfo("Compile request to remote server.....");
        const request = require('request');
        let mySetting = yield utils_1.getDocumentSettings(textDocument.uri);
        let apiUrl = mySetting.compilerServerAddress + "/p4_codes";
        logger_1.logInfo("  Cookie to call API: " + mySetting.userRememberToken);
        request.post({
            url: apiUrl,
            headers: {
                Cookie: ("remember_token=" + mySetting.userRememberToken)
            },
            json: {
                p4plugin: {
                    version: "0.1.0",
                    code: textDocument.getText()
                }
            }
        }, function (err, response, body) {
            try {
                let new_body = JSON.parse(body.replace(/&quot;/g, '"'));
                logger_1.logInfo(JSON.stringify(new_body));
                if (!err && response.statusCode === 200) {
                    logger_1.logInfo("API HTTP status: " + new_body.status);
                    if (new_body.status == "error" && new_body["content"] == "compile_error") {
                        logger_1.logInfo("code has some error");
                        parseBmv2CompilerOutputErr(new_body.output, textDocument);
                    }
                    if (new_body.status == "ok" && new_body["content"] == "json_header") {
                        logger_1.logInfo("Code has been succesfully merged!");
                        parseBmv2CompilerOutputOk(new_body.output, textDocument);
                    }
                }
                else {
                    logger_1.logError("server error: " + err);
                }
            }
            catch (e) {
                logger_1.logError("Exception: " + e);
            }
        });
    });
}
exports.sendToRemoteServer = sendToRemoteServer;
function parseBmv2CompilerOutputOk(compiledJsonFile, textDocument) {
    throw new Error("to be implemented!");
}
function extractErrorMessage(errSection) {
    var first_layer = /(\(\d+\))?(error.*)/.exec(errSection);
    if (first_layer == null)
        return null;
    if (first_layer.length == 0)
        return null;
    try {
        var second_layer = /(\].*(?!.*error.*)|error:.*)/.exec(first_layer[0])[0];
        var error_index = second_layer.indexOf("error:");
        if (error_index > 0) {
            second_layer = second_layer.substring(error_index + 6, second_layer.length);
        }
        return second_layer;
    }
    catch (e) {
        return first_layer[0];
    }
}
function parseBmv2CompilerOutputErr(compileOutput, textDocument) {
    return __awaiter(this, void 0, void 0, function* () {
        let text = compileOutput.toString();
        let settings = yield utils_1.getDocumentSettings(textDocument.uri);
        let errorSectionPattern = /.*\/(?=[^\/]+\.p4\(\d+\))/g;
        let lineNumberPattern = /\(\d+\)/;
        let diagnostics = [];
        let arrayOfErrors = text.split(errorSectionPattern);
        // remove the first non-important error in the console!
        for (var i = 1; i < arrayOfErrors.length && i < settings.maxNumberOfProblems; i++) {
            let errSection = arrayOfErrors[i];
            var lineNumber = parseInt(/\d+/.exec(lineNumberPattern.exec(errSection)[0])[0]);
            var errorMessage = extractErrorMessage(errSection);
            if (errorMessage == null)
                continue;
            var errorP4Code = errSection.split(/[\r\n]+/g)[1].trim();
            var startIndex = getStartingOffsetOfDocument(lineNumber, errorP4Code, textDocument);
            let diagnosic;
            if (errorMessage != null) {
                diagnosic = {
                    severity: vscode_languageserver_1.DiagnosticSeverity.Error,
                    range: {
                        start: textDocument.positionAt(startIndex),
                        end: textDocument.positionAt(startIndex + errorP4Code.length)
                    },
                    message: `${errorMessage}`,
                    source: 'bmv2'
                };
                diagnosic.relatedInformation = [];
                diagnostics.push(diagnosic);
            }
            else {
                diagnosic = diagnostics[diagnostics.length - 1];
                if (diagnosic != null) {
                    diagnosic.relatedInformation.push({
                        location: {
                            uri: textDocument.uri,
                            range: {
                                start: textDocument.positionAt(startIndex),
                                end: textDocument.positionAt(startIndex + errorP4Code.length)
                            }
                        },
                        message: ``
                    });
                }
            }
        }
        server_1.p4ExtensionServer.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    });
}
function getStartingOffsetOfDocument(lineNumber, rawCode, textDocument) {
    var text = textDocument.getText();
    var lines = text.split(/(?:\r\n|\r|\n)/g);
    var myOffset = 0;
    for (var i = 0; i < lines.length; i++) {
        if (i == lineNumber - 1) {
            myOffset += lines[i].indexOf(rawCode.trim());
            break;
        }
        else
            myOffset += lines[i].length + 1;
    }
    return myOffset;
}
//# sourceMappingURL=remote_compiler_proxy.js.map