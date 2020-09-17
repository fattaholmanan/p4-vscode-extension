import {
  TextDocumentPositionParams,
  TextDocument,
  CompletionItem,
  CompletionItemKind,
} from "vscode-languageserver";
import { p4ExtensionServer } from "../server";
import { logDebug } from "../utils/logger";
import { MY_LISTENER } from "../AntlrParser";

export function completionProvider(
  _textDocumentPosition: TextDocumentPositionParams
): CompletionItem[] {
  const textDocument: TextDocument = p4ExtensionServer.documents.get(
    _textDocumentPosition.textDocument.uri
  );
  const _position = textDocument.offsetAt(_textDocumentPosition.position);
  const text: string = textDocument.getText();
  const keyword: string = findkeywordByPosition(text, _position);

  const items: CompletionItem[] = MY_LISTENER.getAutoCompletions(
    keyword,
    _textDocumentPosition
  );
  for (const item of items) {
    logDebug("item: " + item);
  }
  return items;
}

function findkeywordByPosition(text: string, pos: number): string | null {
  const firstPart: string = text.substring(0, pos);
  const lines = firstPart.split(/(?:\r\n|\r|\n|' '|\t)/g);
  const lastLine: string = lines[lines.length - 1];
  const keywordArr: string[] = /([a-zA-Z_]+[0-9]*\.)+([a-zA-Z_]+[0-9]*)?(?=$)/.exec(
    lastLine
  );
  if (keywordArr != null) {
    const keyword: string = keywordArr[0];
    return keyword;
  }
  return null;
}
