import { TextDocumentPositionParams, TextDocument, CompletionItem, CompletionItemKind } from 'vscode-languageserver';
import { p4ExtensionServer } from '../server';
import { logDebug } from '../utils/logger';
import { MY_LISTENER } from '../antlr_compiler_proxy';

export function completionProvider(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[]{
	let textDocument: TextDocument = p4ExtensionServer.documents.get(_textDocumentPosition.textDocument.uri);
	let _position = textDocument.offsetAt(_textDocumentPosition.position);
	let text: string = textDocument.getText();
	let keyword: string = findkeywordByPosition(text, _position);
	
	let items: CompletionItem[] = MY_LISTENER.getAutoCompletions(keyword, _textDocumentPosition);
	for(let item of items){
		logDebug("item: " + item);
	}
	return items; 
}

function findkeywordByPosition(text: string, pos: number): string | null{
	let firstPart: string = text.substring(0, pos);
	let lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
	let lastLine: string = lines[lines.length - 1];
	let keywordArr: string[] = /([a-zA-Z]+[0-9]*\.)+([a-zA-Z]+[0-9]*)?(?=$)/.exec(lastLine);
	if(keywordArr != null){
		let keyword: string = keywordArr[0];
		return keyword;
	}
	return null;
}