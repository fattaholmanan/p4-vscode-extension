import {
  TextDocumentPositionParams,
  TextDocument,
  CompletionItem,
} from "vscode-languageserver";
import { p4ExtensionServer } from "../server";
import ASTDocumentManager from "../parser/ASTDocumentManager";

export function completionProvider(
  _textDocumentPosition: TextDocumentPositionParams
): CompletionItem[] {
  const textDocument: TextDocument = p4ExtensionServer.documents.get(
    _textDocumentPosition.textDocument.uri
  );
  const _position = textDocument.offsetAt(_textDocumentPosition.position);
  const text: string = textDocument.getText();
  const keyword: string = findkeywordByPosition(text, _position);
  const astDocument = ASTDocumentManager.getASTDocument(
    _textDocumentPosition.textDocument.uri
  );
  const identifiers = astDocument.getIdentifiersAtOffset(_position);
  const items: CompletionItem[] = [];
  const split = keyword.split(".");
  let identifiersStruct = [];

  if (split.length > 1) {
    const baseType = astDocument.getTypeOfIdentifierAtOffset(
      _position,
      split[0]
    );
    if (baseType !== undefined && baseType.id === "struct") {
      let nestedType = baseType;
      identifiersStruct = Object.keys(nestedType.members);
      split.splice(0, 1);
      while (split.length > 1) {
        const typeName = nestedType.members[split[0]];
        const type = astDocument.getDeclaredTypeAtOffset(typeName, _position);
        if (type.id === "struct") {
          nestedType = type;
          identifiersStruct = Object.keys(nestedType.members);
        }
        split.splice(0, 1);
      }
    }
  }

  if (identifiersStruct.length > 0) {
    return identifiersStruct.map((id) => ({ label: id }));
  }
  return identifiers.map((id) => ({ label: id }));
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
