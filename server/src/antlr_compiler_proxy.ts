import { CharStream, CommonTokenStream, ParseTreeWalker, ParserRuleContext } from 'antlr4ng';
import { dirname } from 'node:path';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { P4Lexer } from './parser/P4Lexer';
import { P4Parser, NameContext } from './parser/P4Parser';
import { P4Listener } from './parser/P4Listener';
import { p4ExtensionServer } from './server';
import { P4ErrorListener } from './antlr_error_listner';
import { MyP4Listener } from './compiler/my_p4_listener';
import { logError } from './utils/logger';
import { getDocumentSettings } from './utils';
import { preprocess } from './preprocessor/preprocessor';
import { bundledP4IncludeDir } from './bundled_paths';

/** The most recently built symbol-table listener, consumed by the completion provider. */
export let MY_LISTENER: MyP4Listener | null = null;

/** Default #include search paths: bundled p4include first, then the current file's directory. */
function defaultIncludePaths(forUri: string): string[] {
	const fileDir = dirname(forUri.replace(/^file:\/\//, ''));
	return [bundledP4IncludeDir(), fileDir];
}

export async function sendToAntlrCompiler(textDocument: TextDocument): Promise<void> {
	const settings = await getDocumentSettings(textDocument.uri);
	const includePaths = [...defaultIncludePaths(textDocument.uri), ...settings.includePaths];

	const pp = preprocess({
		uri: textDocument.uri.replace(/^file:\/\//, ''),
		includePaths,
	});

	const errorListener = new P4ErrorListener(pp.sourceMap, pp.fileContents);
	errorListener.addPreprocessDiagnostics(pp.diagnostics);

	const tree = parseText(pp.text, errorListener);

	try {
		if (MY_LISTENER) {
			ParseTreeWalker.DEFAULT.walk(MY_LISTENER, tree);
		}
	} catch (e) {
		logError('Listener walk error: ' + e);
	}

	for (const [uri, diagnostics] of errorListener.diagnosticsByUri()) {
		p4ExtensionServer.connection.sendDiagnostics({ uri, diagnostics });
	}
}

function parseText(source: string, errorListener: P4ErrorListener) {
	MY_LISTENER = new MyP4Listener();

	const chars = CharStream.fromString(source);
	const lexer = new P4Lexer(chars);
	lexer.removeErrorListeners();
	lexer.addErrorListener(errorListener);

	const tokens = new CommonTokenStream(lexer);
	const parser = new P4Parser(tokens);
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);
	parser.buildParseTrees = true;

	return parser.program();
}

/**
 * Walks a subtree and returns the first `name` token it encounters, which for a
 * declaration context is the declared identifier.
 */
export function getName(ctx: ParserRuleContext): string | null {
	class NameListener extends P4Listener {
		public found: string | null = null;
		override enterName = (nameCtx: NameContext): void => {
			if (this.found == null) {
				this.found = nameCtx.getText();
			}
		};
	}

	const nameListener = new NameListener();
	try {
		ParseTreeWalker.DEFAULT.walk(nameListener, ctx);
	} catch (e) {
		logError('getName walk error: ' + e);
	}
	return nameListener.found;
}
