/* --------------------------------------------------------------------------------------------
 * P4 Language Server - entry point.
 * Sets up the LSP connection, document manager, and feature providers.
 * ------------------------------------------------------------------------------------------ */

'use strict';
import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	InitializeResult,
	CompletionItem,
	Connection,
	TextDocumentSyncKind,
	PublishDiagnosticsParams,
	DidChangeConfigurationNotification,
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { sendToAntlrCompiler } from './antlr_compiler_proxy';
import { logInfo } from './utils/logger';
import { completionProvider } from './providers/CompletionProvider';
import { highlightProvider } from './providers/DocumentHighlightProvider';

const connection = createConnection(ProposedFeatures.all);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

class Server {
	public connection: Connection;
	public documents: TextDocuments<TextDocument>;

	constructor(connection: Connection) {
		this.connection = connection;
		this.documents = new TextDocuments(TextDocument);

		this.initializeConnection();
		this.initializeDocuments();
		this.registerProviders();

		this.documents.listen(this.connection);
		this.connection.listen();
	}

	private initializeDocuments(): void {
		this.documents.onDidChangeContent((change) => {
			void sendToAntlrCompiler(change.document);
		});

		// When a watched file (e.g. an included header) changes on disk, re-validate open docs.
		this.connection.onDidChangeWatchedFiles(() => {
			this.documents.all().forEach((doc) => void sendToAntlrCompiler(doc));
		});
	}

	private initializeConnection(): void {
		this.connection.onInitialize((params: InitializeParams): InitializeResult => {
			const capabilities = params.capabilities;
			hasConfigurationCapability = !!capabilities.workspace?.configuration;
			hasWorkspaceFolderCapability = !!capabilities.workspace?.workspaceFolders;

			return {
				capabilities: {
					textDocumentSync: TextDocumentSyncKind.Incremental,
					completionProvider: {
						resolveProvider: true,
						triggerCharacters: ['<', '>', '.'],
					},
					documentHighlightProvider: true,
				},
			};
		});

		this.connection.onInitialized(() => {
			if (hasConfigurationCapability) {
				void this.connection.client.register(DidChangeConfigurationNotification.type, undefined);
			}
			if (hasWorkspaceFolderCapability) {
				this.connection.workspace.onDidChangeWorkspaceFolders(() => {
					logInfo('Workspace folder change event received.');
				});
			}
		});

		this.connection.onDidChangeConfiguration(() => {
			this.documents.all().forEach((doc) => void sendToAntlrCompiler(doc));
		});
	}

	private registerProviders(): void {
		this.connection.onCompletion(completionProvider);
		this.connection.onDocumentHighlight(highlightProvider);
		this.connection.onCompletionResolve((item: CompletionItem): CompletionItem => item);
	}

	public sendDiagnostics(params: PublishDiagnosticsParams): void {
		this.connection.sendDiagnostics(params);
	}
}

export const p4ExtensionServer = new Server(connection);
