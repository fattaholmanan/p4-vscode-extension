import {
  Definition,
  TextDocument,
  TextDocumentPositionParams,
} from "vscode-languageserver";
import { p4ExtensionServer } from "../server";
import ASTMetadata from "../parser/ASTMetadata";

export function definitionProvider(
  _textDocumentPosition: TextDocumentPositionParams
): Definition {
  const textDocument: TextDocument = p4ExtensionServer.documents.get(
    _textDocumentPosition.textDocument.uri
  );
  const offset = textDocument.offsetAt(_textDocumentPosition.position);
  console.log(_textDocumentPosition.position);
  const text: string = textDocument.getText();
  const metadata = new ASTMetadata();
  const identifier = metadata.getNodeByOffset(offset).getType();
  const idoffset = metadata.getDeclaredIdentifierOffset(identifier, offset);
  const typeoffset = metadata.getDeclaredTypeOffset(identifier, offset);

  console.log(
    `definitionprovider identifier: ${identifier} | idoffset: ${idoffset} | typeoffset: ${typeoffset}`
  );

  const range = {
    start: textDocument.positionAt(idoffset !== -1 ? idoffset : typeoffset),
    end: textDocument.positionAt(
      (idoffset !== -1 ? idoffset : typeoffset) + 10
    ),
  };
  console.log("range ", range);
  return {
    uri: textDocument.uri,
    range,
  };
}
