import {
  TextDocumentPositionParams,
  TextDocument,
  CompletionItem,
} from "vscode-languageserver";
import { p4ExtensionServer } from "../server";
import ASTMetadata from "../parser/ASTMetadata";
import { TypeDeclaration } from "../parser/ASTNode";

export function completionProvider(
  _textDocumentPosition: TextDocumentPositionParams
): CompletionItem[] {
  const textDocument: TextDocument = p4ExtensionServer.documents.get(
    _textDocumentPosition.textDocument.uri
  );
  const _position = textDocument.offsetAt(_textDocumentPosition.position);
  const text: string = textDocument.getText();
  const keyword: string = findkeywordByPosition(text, _position);
  const metadata = new ASTMetadata();
  metadata.parse(text);
  const identifiers = metadata.getIdentifiersAtOffset(_position);
  const items: CompletionItem[] = [];
  console.log("keyword:", keyword);
  const split = keyword.split(".");
  let identifiersStruct = [];

  if (split.length > 1) {
    const baseType = metadata.getTypeOfIdentifierAtOffset(_position, split[0]);
    if (baseType !== undefined && baseType.id === "struct") {
      let nestedType = baseType;
      identifiersStruct = Object.keys(nestedType.members);
      split.splice(0, 1);
      while (split.length > 1) {
        const typeName = baseType.members[split[0]];
        console.log("struct nested type: " + typeName);
        const t = metadata.getDeclaredTypeAtOffset(typeName, _position);
        console.log("retrieved nested type: ", t);
        if (t.id === "struct") {
          console.log("updated nested type: ", t);
          nestedType = t;
          identifiersStruct = Object.keys(nestedType.members);
        }
        console.log(split);
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
