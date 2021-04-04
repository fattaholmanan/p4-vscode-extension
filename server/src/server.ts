/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

"use strict";
import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  CompletionItem,
  Connection,
  DidChangeConfigurationNotification,
} from "vscode-languageserver";
import { P4ExtensionSettings } from "./Settings";
import { logDebug, logInfo } from "./utils/logger";
import { completionProvider } from "./providers/CompletionProvider";
import { definitionProvider } from "./providers/DefinitionProvider";
import { highlightProvider } from "./providers/DocumentHighlightProvider";
import { hoverProvider } from "./providers/HoverProvider";
import LocalCompiler from "./compilers/LocalCompiler";
import ASTMetadata from "./parser/ASTDocument";
import ASTDocumentManager from "./parser/ASTDocumentManager";
const connection = createConnection(ProposedFeatures.all);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

export const documentSettings: Map<
  string,
  Thenable<P4ExtensionSettings>
> = new Map();

class Server {
  public connection: Connection;
  public documents: TextDocuments;

  private localCompiler: LocalCompiler = null;

  constructor(connection: Connection) {
    this.connection = connection;
    this.documents = new TextDocuments();

    this.initializeConnection();
    this.initializeDocuments();
    this.registerProviders();

    this.documents.listen(connection);
    this.connection.listen();
    this.localCompiler = new LocalCompiler();
  }

  initializeDocuments() {
    this.documents.onDidChangeContent(async (change) => {
      ASTDocumentManager.updateDocument(change.document.uri, change.document);
      const diagnostics = ASTDocumentManager.getASTDocument(
        change.document.uri
      ).getDiagnostics();
      this.sendDiagnostics({
        uri: change.document.uri,
        diagnostics,
      });
    });

    this.connection.onDidChangeWatchedFiles((_change) => {
      logDebug("We received a file change event");
    });

    this.connection.onDidOpenTextDocument((params) => {
      // A text document got opened in VSCode.
      // params.uri uniquely identifies the document. For documents store on disk this is a file URI.
      // params.text the initial full content of the document.
      logInfo(`${params.textDocument.uri} opened.`);
    });
    this.connection.onDidChangeTextDocument((params) => {
      // The content of a text document did change in VSCode.
      // params.uri uniquely identifies the document.
      // params.contentChanges describe the content changes to the document.
      logInfo(
        `${params.textDocument.uri} changed: ${JSON.stringify(
          params.contentChanges
        )}`
      );
    });
    this.connection.onDidCloseTextDocument((params) => {
      // A text document got closed in VSCode.
      // params.uri uniquely identifies the document.
      logInfo(`${params.textDocument.uri} closed.`);
    });
  }

  private initializeConnection() {
    this.connection.onInitialize((params: InitializeParams) => {
      const capabilities = params.capabilities;
      hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
      );
      hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
      );

      return {
        capabilities: {
          textDocumentSync: this.documents.syncKind,
          completionProvider: {
            resolveProvider: true,
            triggerCharacters: ["<", ">", "."],
          },
          definitionProvider: true,
          hoverProvider: true,
          documentRangeFormattingProvider: true,
          documentHighlightProvider: true,
          foldingRangeProvider: false,
        },
      };
    });

    this.connection.onInitialized(() => {
      if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(
          DidChangeConfigurationNotification.type,
          undefined
        );
      }
      if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders((_event) => {
          logInfo("Workspace folder change event received.");
        });
      }
    });

    this.connection.onDidChangeConfiguration(async (change) => {
      // let mySetting = await getDocument\Settings();
      //this.documents.all().forEach(sendToRemoteServer);
      //this.documents.all().forEach(sendToAntlrCompiler);
    });
  }

  private registerProviders() {
    // This handler provides the initial list of the completion items.
    connection.onCompletion(completionProvider);
    connection.onDefinition(definitionProvider);
    connection.onDocumentHighlight(highlightProvider);
    connection.onHover(hoverProvider);

    // This handler resolve additional information for the item selected in
    // the completion list.
    connection.onCompletionResolve(
      (item: CompletionItem): CompletionItem => {
        if (item.data === 1) {
          (item.detail = "TypeScript details"),
            (item.documentation = "TypeScript documentation");
        } else if (item.data === 2) {
          (item.detail = "JavaScript details"),
            (item.documentation = "JavaScript documentation");
        }
        return item;
      }
    );
  }

  public sendDiagnostics(params): void {
    this.connection.sendDiagnostics(params);
  }
}

export const p4ExtensionServer = new Server(connection);
