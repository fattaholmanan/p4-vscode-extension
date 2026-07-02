/* --------------------------------------------------------------------------------------------
 * P4 Language Extension - client entry point.
 * Launches the language server and wires it to .p4 documents.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext, window, env, Uri } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
} from 'vscode-languageclient/node';

let client: LanguageClient;

const LAST_SEEN_VERSION_KEY = 'p4.lastSeenVersion';

/** Show a one-time banner after an upgrade, or a welcome message on first install. */
function showUpdateNotification(context: ExtensionContext): void {
	const currentVersion: string = context.extension.packageJSON.version;
	const lastSeen = context.globalState.get<string>(LAST_SEEN_VERSION_KEY);

	if (lastSeen === currentVersion) {
		return;
	}

	void context.globalState.update(LAST_SEEN_VERSION_KEY, currentVersion);

	const repoUrl: string =
		context.extension.packageJSON.repository?.url ??
		'https://github.com/fattaholmanan/p4-vscode-extension';
	const releaseNotes = Uri.parse(
		`${repoUrl.replace(/^git\+/, '').replace(/\.git$/, '')}/blob/master/README.md`,
	);

	const message =
		lastSeen === undefined
			? `P4 Language Extension v${currentVersion} is ready. Includes a modern P4_16 grammar, preprocessor support, and bundled p4include headers.`
			: `P4 Language Extension updated to v${currentVersion}. Includes a modern P4_16 grammar, preprocessor support, and bundled p4include headers.`;

	void window.showInformationMessage(message, 'Learn more').then((choice) => {
		if (choice === 'Learn more') {
			void env.openExternal(releaseNotes);
		}
	});
}

export function activate(context: ExtensionContext): void {
	showUpdateNotification(context);
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
