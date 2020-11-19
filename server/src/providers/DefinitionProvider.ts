import {
  Definition,
  TextDocument,
  TextDocumentPositionParams,
} from "vscode-languageserver";
import { p4ExtensionServer } from "../server";
import ASTDocumentManager from "../parser/ASTDocumentManager";

export function definitionProvider(
  _textDocumentPosition: TextDocumentPositionParams
): Definition {
  const astDocument = ASTDocumentManager.getASTDocument(
    _textDocumentPosition.textDocument.uri
  );
  const textDocument = p4ExtensionServer.documents.get(
    _textDocumentPosition.textDocument.uri
  );
  const offset = textDocument.offsetAt(_textDocumentPosition.position);
  const identifier = astDocument.getNodeByOffset(offset).getType();
  const idoffset = astDocument.getDeclaredIdentifierOffset(identifier, offset);
  const typeoffset = astDocument.getDeclaredTypeOffset(identifier, offset);

  console.log(
    `definitionprovider identifier: ${identifier} | idoffset: ${idoffset} | typeoffset: ${typeoffset}`
  );

  const range = {
    start: textDocument.positionAt(idoffset !== -1 ? idoffset : typeoffset),
    end: textDocument.positionAt(idoffset !== -1 ? idoffset : typeoffset),
  };
  console.log(range);
  return {
    uri: textDocument.uri,
    range,
  };
}
