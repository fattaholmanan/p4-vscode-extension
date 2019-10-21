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
const server_1 = require("./server");
exports.p4HeadersTypes = new Map();
exports.p4Headers = new Map();
function getDocumentSettings(resource) {
    let result = server_1.connection.workspace.getConfiguration({
        scopeUri: resource,
        section: 'p4Extension'
    });
    return result;
}
function sendToCiscoServer(textDocument) {
    return __awaiter(this, void 0, void 0, function* () {
        loglog("A change is requested!");
        const request = require('request');
        let mySetting = yield getDocumentSettings(textDocument.uri);
        let apiUrl = mySetting.compilerServerAddress + "/p4_codes";
        loglog("cookie to call API: " + mySetting.userRememberToken);
        request.post({
            url: apiUrl,
            headers: {
                Cookie: ("remember_token=" + mySetting.userRememberToken)
            },
            json: {
                p4plugin: {
                    version: "0.0.7",
                    code: textDocument.getText()
                }
            }
        }, function (err, response, body) {
            try {
                loglog("---------------------------10");
                loglog(JSON.stringify(body));
                loglog("-------------------------2");
                let new_body = JSON.parse(body.replace(/&quot;/g, '"'));
                loglog(JSON.stringify(new_body));
                loglog("---------------------------)");
                if (!err && response.statusCode === 200) {
                    loglog("I'm here: " + new_body.status);
                    if (new_body.status == "error" && new_body["content"] == "compile_error") {
                        loglog("code has some error");
                        parseBmv2CompilerOutputErr(new_body.output, textDocument, server_1.hasDiagnosticRelatedInformationCapability);
                    }
                    if (new_body.status == "ok" && new_body["content"] == "json_file") {
                        loglog("code is without error!");
                        parseBmv2CompilerOutputOk(new_body.output, textDocument);
                    }
                }
                else {
                    loglog("server error: " + err);
                }
            }
            catch (e) {
                loglog("Exception: " + e);
            }
        });
    });
}
exports.sendToCiscoServer = sendToCiscoServer;
function parseBmv2CompilerOutputOk(compiledJsonFile, textDocument) {
    updateInternalDataStructures(compiledJsonFile);
    let diagnostics = [];
    server_1.connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
// parse the compiler json file so as to reply to autocomplition
function updateInternalDataStructures(jsonObj) {
    if (jsonObj == null)
        return;
    for (var i = 0; i < jsonObj.objects.vec.length; i++) {
        var compiledNode = jsonObj.objects.vec[i];
        if (compiledNode.Node_Type == "Type_Header")
            extractHeaderFields(compiledNode);
        if (compiledNode.Node_Type == "Type_Struct")
            extractHeadersDefinition(compiledNode);
    }
}
function extractHeadersDefinition(compiledNode) {
    if (compiledNode.fields == undefined)
        return;
    for (var i = 0; i < compiledNode.fields.vec.length; i++) {
        if (compiledNode.fields.vec[i].type == undefined || compiledNode.fields.vec[i].type.path == undefined)
            continue;
        var headerName = compiledNode.fields.vec[i].name;
        var headerTypeName = compiledNode.fields.vec[i].type.path.name;
        exports.p4Headers.set(headerName, headerTypeName);
    }
}
function extractHeaderFields(compiledNode) {
    var header_name = compiledNode.name;
    let fields_array = [];
    var fields = compiledNode.fields;
    for (var j = 0; j < fields.vec.length; j++) {
        fields_array.push({
            label: fields.vec[j].name,
            kind: vscode_languageserver_1.CompletionItemKind.Text,
            data: fields.vec[j].Node_ID
        });
    }
    exports.p4HeadersTypes.set(header_name, fields_array);
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
function parseBmv2CompilerOutputErr(compileOutput, textDocument, hasDiagnosticRelatedInformationCapability) {
    return __awaiter(this, void 0, void 0, function* () {
        let text = compileOutput.toString();
        // loglog("================");
        // loglog(text);
        // loglog("================");
        let settings = yield getDocumentSettings(textDocument.uri);
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
                if (hasDiagnosticRelatedInformationCapability && diagnosic != null) {
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
        server_1.connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
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
function loglog(msg) {
    server_1.connection.console.log(msg + "");
}
//# sourceMappingURL=p4_compiler_proxy.js.map