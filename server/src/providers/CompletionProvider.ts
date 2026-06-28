import { TextDocumentPositionParams, CompletionItem } from 'vscode-languageserver';
import { p4ExtensionServer } from '../server';
import { MY_LISTENER } from '../antlr_compiler_proxy';

export function completionProvider(params: TextDocumentPositionParams): CompletionItem[] {
	const textDocument = p4ExtensionServer.documents.get(params.textDocument.uri);
	if (!textDocument || !MY_LISTENER) {
		return [];
	}

	const offset = textDocument.offsetAt(params.position);
	const keyword = findKeywordByPosition(textDocument.getText(), offset);
	return MY_LISTENER.getAutoCompletions(keyword, params);
}

/**
 * Extracts a dotted access chain (e.g. `hdr.ipv4.`) immediately to the left of
 * the cursor, used to resolve member completions. Returns null for a plain scope.
 */
function findKeywordByPosition(text: string, pos: number): string | null {
	const firstPart = text.substring(0, pos);
	const lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
	const lastLine = lines[lines.length - 1];
	const keywordArr = /([a-zA-Z_]+[0-9]*\.)+([a-zA-Z_]+[0-9]*)?(?=$)/.exec(lastLine);
	return keywordArr ? keywordArr[0] : null;
}
