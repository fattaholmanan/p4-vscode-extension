import {
	TextDocument,
	Diagnostic,
	DiagnosticSeverity,
	CompletionItemKind,
} from 'vscode-languageserver';

import { connection, hasDiagnosticRelatedInformationCapability, p4Program } from './server';
import { P4Header } from './domain/P4Header';
import { loglog , getDocumentSettings, logloglog} from './utils';

export async function sendToCiscoServer(textDocument: TextDocument){
	loglog("A change is requested!");

	const request = require('request');
	let mySetting = await getDocumentSettings(textDocument.uri);
	let apiUrl: string = mySetting.compilerServerAddress + "/p4_codes";

	loglog("cookie to call API: " + mySetting.userRememberToken);
	
	request.post({
		url: apiUrl,
		headers: {
			Cookie: ("remember_token="+mySetting.userRememberToken)
		},
		json: {
			p4plugin:{
				version: "0.1.0",
				code: textDocument.getText()
			}
		}
	},

	function(err,response,body){
		try{
			let new_body:any = JSON.parse(body.replace(/&quot;/g,'"'));
			loglog(JSON.stringify(new_body));
			loglog("---------------------------)");

			if (!err && response.statusCode === 200) {
				loglog("API HTTP status: " + new_body.status);

				if(new_body.status == "error" && new_body["content"] == "compile_error"){
					loglog("code has some error");
					// parseBmv2CompilerOutputErr(new_body.output, textDocument, hasDiagnosticRelatedInformationCapability);
				}
				if(new_body.status == "ok" && new_body["content"] == "json_header"){
					loglog("Code has been succesfully merged!");
					parseBmv2CompilerOutputOk(new_body.output, textDocument);
				}
			}
			else {
				loglog("server error: " + err);
			}
		}catch(e){
			loglog("Exception: " + e);
		}
	});
}

function parseBmv2CompilerOutputOk(compiledJsonFile: JSON, textDocument: TextDocument){
	if(p4Program.isEmpty())
		updateInternalDataStructures(compiledJsonFile);
	let diagnostics: Diagnostic[] = [];
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// parse the compiler json file so as to reply to autocomplition
function updateInternalDataStructures(jsonObj){
	if(jsonObj == null)
		return;

	for(var h in jsonObj.header_types){
		let newHeader: P4Header = new P4Header(h, jsonObj.header_types[h]);
		p4Program.addHeader(newHeader);
	}

	for(var inst in jsonObj.instantiations){
		let headerType: string = jsonObj.instantiations[inst];
		p4Program.addHeaderInstantiation(headerType, inst);
	}
}

function extractErrorMessage(errSection: string): string{
	var first_layer: RegExpExecArray = /(\(\d+\))?(error.*)/.exec(errSection);
	if (first_layer == null)
		return null;
	if(first_layer.length == 0)
		return null;

	try{	
		var second_layer = /(\].*(?!.*error.*)|error:.*)/.exec(first_layer[0])[0];
		var error_index: number = second_layer.indexOf("error:");
		if(error_index > 0){
			second_layer = second_layer.substring(error_index + 6, second_layer.length);
		}
		return second_layer;
	}catch(e){
		return first_layer[0];
	}
}

async function parseBmv2CompilerOutputErr(compileOutput: string, textDocument: TextDocument, hasDiagnosticRelatedInformationCapability:boolean){
	let text = compileOutput.toString();

	let settings = await getDocumentSettings(textDocument.uri);

	let errorSectionPattern = /.*\/(?=[^\/]+\.p4\(\d+\))/g;
	let lineNumberPattern = /\(\d+\)/;
	let diagnostics: Diagnostic[] = [];
	let arrayOfErrors = text.split(errorSectionPattern);

	// remove the first non-important error in the console!
	for(var i = 1; i < arrayOfErrors.length && i < settings.maxNumberOfProblems; i++){
		let errSection: string = arrayOfErrors[i];
		var lineNumber = parseInt(/\d+/.exec(lineNumberPattern.exec(errSection)[0])[0]);
		var errorMessage: string = extractErrorMessage(errSection);
		if(errorMessage == null)		
			continue;
		var errorP4Code = errSection.split(/[\r\n]+/g)[1].trim();
		var startIndex = getStartingOffsetOfDocument(lineNumber, errorP4Code, textDocument);

		let diagnosic: Diagnostic;
		if(errorMessage != null) {
			diagnosic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: textDocument.positionAt(startIndex),
					end: textDocument.positionAt(startIndex + errorP4Code.length)
				},
				message: `${errorMessage}`,
				source: 'bmv2'
			};
			diagnosic.relatedInformation = [];
			diagnostics.push(diagnosic);
		}else{
			diagnosic = diagnostics[diagnostics.length - 1];
			if (hasDiagnosticRelatedInformationCapability && diagnosic != null) {
				diagnosic.relatedInformation.push({
					location: {
						uri: textDocument.uri,
						range: {
							start: textDocument.positionAt(startIndex),
							end: textDocument.positionAt(startIndex + errorP4Code.length)
						}
					},
					message: ``
				});
			}
		}
	}
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

function getStartingOffsetOfDocument(lineNumber: number, rawCode: string, textDocument: TextDocument): number{
	var text = textDocument.getText();
	var lines = text.split(/(?:\r\n|\r|\n)/g);
	var myOffset = 0;

	for(var i = 0; i < lines.length; i++){
		if(i == lineNumber - 1){
			myOffset += lines[i].indexOf(rawCode.trim());
			break;
		}else
			myOffset += lines[i].length + 1;
	}
	return myOffset;
}