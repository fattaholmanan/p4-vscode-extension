import { TextDocumentPositionParams, TextDocument, CompletionItem } from 'vscode-languageserver';
import { p4ExtensionServer } from '../server';

export function completionProvider(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[]{
	let textDocument: TextDocument = p4ExtensionServer.documents.get(_textDocumentPosition.textDocument.uri);
	let _position = textDocument.offsetAt(_textDocumentPosition.position);
	let text: string = textDocument.getText();
	let keyword: string = findkeywordByPosition(text, _position);

	return null;//p4Program.getAutoCompletion(keyword);
}

function findkeywordByPosition(text: string, pos: number): string{
	let firstPart:string = text.substring(0, pos);
	let lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
	let lastLine: string = lines[lines.length - 1];
	var keyword = /[a-zA-Z]+[0-9]*\.(?!.*\..*)/.exec(lastLine);
	if(keyword != null)
		return keyword[0].substr(0,keyword[0].length - 1);
	return "";
}