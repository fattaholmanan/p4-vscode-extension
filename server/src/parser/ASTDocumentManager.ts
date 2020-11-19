import { TextDocument } from "vscode-languageserver";
import ASTDocument from "./ASTDocument";

export class ASTDocumentManager {
  private docs: Map<string, ASTDocument> = new Map();

  updateDocument(uri: string, doc: TextDocument): void {
    const docdc = this.docs.get(uri);
    if (docdc) {
      docdc.parse(doc.getText());
    } else {
      const d = new ASTDocument(doc);
      this.docs.set(uri, d);
      d.parse(doc.getText());
    }
  }

  getASTDocument(uri: string): ASTDocument | undefined {
    return this.docs.get(uri);
  }
}

export default new ASTDocumentManager();
