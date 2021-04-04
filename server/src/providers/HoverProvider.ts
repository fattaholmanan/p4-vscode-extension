import {
  TextDocumentPositionParams,
  CompletionItem,
  DocumentHighlight,
  Hover,
  TextDocument,
} from "vscode-languageserver";
import ASTDocumentManager from "../parser/ASTDocumentManager";
import { p4ExtensionServer } from "../server";

/*
 * DocumentHighlightProvider
 *
 * Super basic highlight provider
 */

export function hoverProvider(
  _textDocumentPosition: TextDocumentPositionParams
): Hover {
  const textDocument: TextDocument = p4ExtensionServer.documents.get(
    _textDocumentPosition.textDocument.uri
  );
  const _position = textDocument.offsetAt(_textDocumentPosition.position);
  const astDocument = ASTDocumentManager.getASTDocument(
    _textDocumentPosition.textDocument.uri
  );
  const node = astDocument.getNodeByOffset(_position);
  const type = astDocument.getTypeOfIdentifierAtOffset(
    _position,
    node.getType()
  );
  if (type === undefined) {
    const offset = astDocument.getDeclaredTypeOffset(node.getType(), _position);
    if (offset === -1) {
      return null;
    }
    const node2 = astDocument.getNodeByOffset(offset);
    return {
      contents: node2.getType() + "Type information",
    };
  } else {
    return {
      contents: node.getType() + " - " + type.id + " " + type.identifier,
    };
  }
}
