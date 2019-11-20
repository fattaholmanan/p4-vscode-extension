/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
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
const cisco_compiler_proxy_1 = require("./cisco_compiler_proxy");
const P4Program_1 = require("./domain/P4Program");
const antlr_compiler_proxy_1 = require("./antlr_compiler_proxy");
const p4_extension_setting_1 = require("./p4_extension_setting");
const utils_1 = require("./utils");
// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
exports.connection = vscode_languageserver_1.createConnection(vscode_languageserver_1.ProposedFeatures.all);
// create an object for the AST. Now it is very minimalist.
exports.p4Program = new P4Program_1.P4Program();
// Create a simple text document manager. The text document manager
// supports full document sync only
let documents = new vscode_languageserver_1.TextDocuments();
exports.hasConfigurationCapability = false;
exports.hasWorkspaceFolderCapability = false;
exports.hasDiagnosticRelatedInformationCapability = false;
exports.connection.onInitialize((params) => {
    let capabilities = params.capabilities;
    // Does the client support the `workspace/configuration` request?
    // If not, we will fall back using global settings
    exports.hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    exports.hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    exports.hasDiagnosticRelatedInformationCapability =
        !!(capabilities.textDocument &&
            capabilities.textDocument.publishDiagnostics &&
            capabilities.textDocument.publishDiagnostics.relatedInformation);
    return {
        capabilities: {
            textDocumentSync: documents.syncKind,
            // Tell the client that the server supports code completion
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: ["<", ">", "."]
            }
        }
    };
});
exports.connection.onInitialized(() => {
    if (exports.hasConfigurationCapability) {
        // Register for all configuration changes.
        exports.connection.client.register(vscode_languageserver_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (exports.hasWorkspaceFolderCapability) {
        exports.connection.workspace.onDidChangeWorkspaceFolders(_event => {
            utils_1.loglog('Workspace folder change event received.');
        });
    }
});
// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
exports.globalSettings = p4_extension_setting_1.defaultSettings;
// Cache the settings of all open documents
exports.documentSettings = new Map();
exports.connection.onDidChangeConfiguration((change) => __awaiter(this, void 0, void 0, function* () {
    // let mySetting = await getDocumentSettings();
    documents.all().forEach(cisco_compiler_proxy_1.sendToCiscoServer);
    documents.all().forEach(antlr_compiler_proxy_1.sendToAntlrCompiler);
}));
// function getDocumentSettings(): Thenable<P4ExtensionSettings> {
// 	let result = connection.workspace.getConfiguration({
// 		section: 'p4Extension'
// 	});
// 	return result;
// }
// Only keep settings for open documents
documents.onDidClose(e => {
    exports.documentSettings.delete(e.document.uri);
});
exports.connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VSCode
    utils_1.loglog('We received an file change event');
});
// This handler provides the initial list of the completion items.
exports.connection.onCompletion((_textDocumentPosition) => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    let textDocument = documents.get(_textDocumentPosition.textDocument.uri);
    let _position = textDocument.offsetAt(_textDocumentPosition.position);
    let text = textDocument.getText();
    let keyword = findkeywordByPosition(text, _position);
    return exports.p4Program.getAutoCompletion(keyword);
});
function findkeywordByPosition(text, pos) {
    let firstPart = text.substring(0, pos);
    let lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
    let lastLine = lines[lines.length - 1];
    var keyword = /[a-zA-Z]+[0-9]*\.(?!.*\..*)/.exec(lastLine);
    if (keyword != null)
        return keyword[0].substr(0, keyword[0].length - 1);
    return "";
}
// This handler resolve additional information for the item selected in
// the completion list.
exports.connection.onCompletionResolve((item) => {
    if (item.data === 1) {
        (item.detail = 'TypeScript details'),
            (item.documentation = 'TypeScript documentation');
    }
    else if (item.data === 2) {
        (item.detail = 'JavaScript details'),
            (item.documentation = 'JavaScript documentation');
    }
    return item;
});
/*
connection.onDidOpenTextDocument((params) => {
    // A text document got opened in VSCode.
    // params.uri uniquely identifies the document. For documents store on disk this is a file URI.
    // params.text the initial full content of the document.
    loglog(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
    // The content of a text document did change in VSCode.
    // params.uri uniquely identifies the document.
    // params.contentChanges describe the content changes to the document.
    loglog(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
    // A text document got closed in VSCode.
    // params.uri uniquely identifies the document.
    loglog(`${params.textDocument.uri} closed.`);
});
*/
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(exports.connection);
// Listen on the connection
exports.connection.listen();
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    cisco_compiler_proxy_1.sendToCiscoServer(change.document);
    antlr_compiler_proxy_1.sendToAntlrCompiler(change.document);
});
//# sourceMappingURL=server.js.map