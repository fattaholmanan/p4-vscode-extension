import { TextDocumentPositionParams, CompletionItem, DocumentHighlight } from 'vscode-languageserver';

/*
 * DocumentHighlightProvider
 *
 * Super basic highlight provider
 */

export function highlightProvider(_textDocumentPosition: TextDocumentPositionParams): DocumentHighlight[]{
	return [];
}