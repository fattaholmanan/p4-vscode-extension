/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

'use strict';
import {
	createConnection,
	TextDocuments,
	TextDocument,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
} from 'vscode-languageserver';
import { sendToRemoteServer } from './remote_compiler_proxy' ;
import { P4Program } from './domain/P4Program';
import { sendToAntlrCompiler } from './antlr_compiler_proxy';
import { P4ExtensionSettings, defaultSettings } from './p4_extension_setting';
import { logDebug, logInfo } from './logger';
import { getDocumentSettings } from './utils';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
export let connection = createConnection(ProposedFeatures.all);

// create an object for the AST. Now it is very minimalist.
export const p4Program = new P4Program();

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

export let hasConfigurationCapability: boolean = false;
export let hasWorkspaceFolderCapability: boolean = false;
export let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
	hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
	hasDiagnosticRelatedInformationCapability =
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

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(
			DidChangeConfigurationNotification.type,
			undefined
		);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			logInfo('Workspace folder change event received.');
		});
	}
});

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
export let globalSettings: P4ExtensionSettings = defaultSettings;

// Cache the settings of all open documents
export let documentSettings: Map<string, Thenable<P4ExtensionSettings>> = new Map();

connection.onDidChangeConfiguration(async change => {
	// let mySetting = await getDocument\Settings();

	documents.all().forEach(sendToRemoteServer);
	documents.all().forEach(sendToAntlrCompiler);
});

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

connection.onDidChangeWatchedFiles(_change => {
	logDebug('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		let textDocument: TextDocument = documents.get(_textDocumentPosition.textDocument.uri);
		let _position = textDocument.offsetAt(_textDocumentPosition.position);
		let text: string = textDocument.getText();
		let keyword: string = findkeywordByPosition(text, _position);

		return p4Program.getAutoCompletion(keyword);
	}
);

function findkeywordByPosition(text: string, pos: number): string{
	let firstPart:string = text.substring(0, pos);
	let lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
	let lastLine: string = lines[lines.length - 1];
	var keyword = /[a-zA-Z]+[0-9]*\.(?!.*\..*)/.exec(lastLine);
	if(keyword != null)
		return keyword[0].substr(0,keyword[0].length - 1);
	return "";
}

// This handler resolve additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			(item.detail = 'TypeScript details'),
				(item.documentation = 'TypeScript documentation');
		} else if (item.data === 2) {
			(item.detail = 'JavaScript details'),
				(item.documentation = 'JavaScript documentation');
		}
		return item;
	}
);


connection.onDidOpenTextDocument((params) => {
	// A text document got opened in VSCode.
	// params.uri uniquely identifies the document. For documents store on disk this is a file URI.
	// params.text the initial full content of the document.
	logInfo(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
	// The content of a text document did change in VSCode.
	// params.uri uniquely identifies the document.
	// params.contentChanges describe the content changes to the document.
	logInfo(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
	// A text document got closed in VSCode.
	// params.uri uniquely identifies the document.
	logInfo(`${params.textDocument.uri} closed.`);
});


// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(async change => {
	let mySetting = await getDocumentSettings(change.document.uri);
	if(mySetting.useRemoteServer)
		sendToRemoteServer(change.document);
	sendToAntlrCompiler(change.document);
});