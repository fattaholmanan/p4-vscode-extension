/* --------------------------------------------------------------------------------------------
 * P4 Language Extension - client entry point.
 * Launches the language server and wires it to .p4 documents.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext): void {
	const serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));

	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			// --inspect=6009 lets VS Code attach to the running server (see .vscode/launch.json).
			options: { execArgv: ['--nolazy', '--inspect=6009'] },
		},
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'p4' }],
		synchronize: {
			// Watch P4 files so the server is notified when included files change on disk.
			fileEvents: workspace.createFileSystemWatcher('**/*.{p4,p4p}'),
		},
	};

	client = new LanguageClient('p4', 'P4 Language Server', serverOptions, clientOptions);
	void client.start();
}

export function deactivate(): Thenable<void> | undefined {
	return client?.stop();
}
