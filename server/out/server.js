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
const remote_compiler_proxy_1 = require("./remote_compiler_proxy");
const antlr_compiler_proxy_1 = require("./antlr_compiler_proxy");
const logger_1 = require("./logger");
const utils_1 = require("./utils");
const CompletionProvider_1 = require("./providers/CompletionProvider");
let connection = vscode_languageserver_1.createConnection(vscode_languageserver_1.ProposedFeatures.all);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
exports.documentSettings = new Map();
class Server {
    constructor(connection) {
        this.connection = connection;
        this.documents = new vscode_languageserver_1.TextDocuments();
        this.initializeConnection();
        this.initializeDocuments();
        this.registerProviders();
        this.documents.listen(connection);
        this.connection.listen();
    }
    initializeDocuments() {
        this.documents.onDidChangeContent((change) => __awaiter(this, void 0, void 0, function* () {
            let mySetting = yield utils_1.getDocumentSettings(change.document.uri);
            if (mySetting.useRemoteServer)
                remote_compiler_proxy_1.sendToRemoteServer(change.document);
            antlr_compiler_proxy_1.sendToAntlrCompiler(change.document);
        }));
        this.connection.onDidChangeWatchedFiles(_change => {
            logger_1.logDebug('We received an file change event');
        });
        this.connection.onDidOpenTextDocument((params) => {
            // A text document got opened in VSCode.
            // params.uri uniquely identifies the document. For documents store on disk this is a file URI.
            // params.text the initial full content of the document.
            logger_1.logInfo(`${params.textDocument.uri} opened.`);
        });
        this.connection.onDidChangeTextDocument((params) => {
            // The content of a text document did change in VSCode.
            // params.uri uniquely identifies the document.
            // params.contentChanges describe the content changes to the document.
            logger_1.logInfo(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
        });
        this.connection.onDidCloseTextDocument((params) => {
            // A text document got closed in VSCode.
            // params.uri uniquely identifies the document.
            logger_1.logInfo(`${params.textDocument.uri} closed.`);
        });
    }
    initializeConnection() {
        this.connection.onInitialize((params) => {
            let capabilities = params.capabilities;
            hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
            hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
            return {
                capabilities: {
                    textDocumentSync: this.documents.syncKind,
                    completionProvider: {
                        resolveProvider: true,
                        triggerCharacters: ["<", ">", "."]
                    },
                    documentRangeFormattingProvider: true,
                    documentHighlightProvider: true,
                    foldingRangeProvider: true
                }
            };
        });
        this.connection.onInitialized(() => {
            if (hasConfigurationCapability) {
                // Register for all configuration changes.
                connection.client.register(vscode_languageserver_1.DidChangeConfigurationNotification.type, undefined);
            }
            if (hasWorkspaceFolderCapability) {
                connection.workspace.onDidChangeWorkspaceFolders(_event => {
                    logger_1.logInfo('Workspace folder change event received.');
                });
            }
        });
        this.connection.onDidChangeConfiguration((change) => __awaiter(this, void 0, void 0, function* () {
            // let mySetting = await getDocument\Settings();
            this.documents.all().forEach(remote_compiler_proxy_1.sendToRemoteServer);
            this.documents.all().forEach(antlr_compiler_proxy_1.sendToAntlrCompiler);
        }));
    }
    registerProviders() {
        // This handler provides the initial list of the completion items.
        connection.onCompletion(CompletionProvider_1.completionProvider);
        // This handler resolve additional information for the item selected in
        // the completion list.
        connection.onCompletionResolve((item) => {
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
    }
    sendDiagnostics(params) {
        this.connection.sendDiagnostics(params);
    }
}
exports.p4ExtensionServer = new Server(connection);
//# sourceMappingURL=server.js.map