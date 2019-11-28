import { TextDocumentPositionParams, TextDocument, CompletionItem } from 'vscode-languageserver';
import { p4ExtensionServer } from '../server';
import { logDebug } from '../utils/logger';
import { MY_LISTENER } from '../antlr_compiler_proxy';

export function completionProvider(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[]{
	let textDocument: TextDocument = p4ExtensionServer.documents.get(_textDocumentPosition.textDocument.uri);
	let _position = textDocument.offsetAt(_textDocumentPosition.position);
	let text: string = textDocument.getText();
	let keyword: string = findkeywordByPosition(text, _position);

	MY_LISTENER.getAutoCompletions(keyword, _textDocumentPosition);

	return [];//p4Program.getAutoCompletion(keyword);
}

function findkeywordByPosition(text: string, pos: number): string | null{
	let firstPart:string = text.substring(0, pos);
	let lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
	let lastLine: string = lines[lines.length - 1];
	let keywordArr = /[a-zA-Z]+[0-9]*\.(?!.*\..*)/.exec(lastLine);
	let keyword: string = "";
	if(keywordArr != null){
		keyword = keywordArr[0].substr(0,keywordArr[0].length - 1);
		return keyword;
	}
	return null;
}