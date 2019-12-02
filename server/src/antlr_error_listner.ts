import { ErrorListener } from 'antlr4/error';

import { TextDocument, Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';

export class MyErrorListner extends ErrorListener {
	textDocument: TextDocument;
	diagnostics: Diagnostic[] = [];

	constructor(text: TextDocument){
		super();
		this.textDocument = text;
		this.diagnostics = [];
	}

	isEmpty(): boolean {
		return this.diagnostics.length == 0;
	}

	getDiagnostics(): Diagnostic[]{
		return this.diagnostics;
	}

	syntaxError(recognizer, symbol, line, column, message, payload) {
		let diagnosic : Diagnostic = this.convertToDiagnostic(symbol, message);
		this.diagnostics.push(diagnosic);
	}

	convertToDiagnostic(symbol, message): Diagnostic{
		let diagnosic: Diagnostic = {
			severity: DiagnosticSeverity.Error,
			range: {
				start: this.textDocument.positionAt(symbol.start),
				end: this.textDocument.positionAt(symbol.stop),
			},
			message: message,
			source: 'P4 Extension'
		};
		return diagnosic;
	}
}