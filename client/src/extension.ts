/* --------------------------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See License.txt in the project root for license information.
* ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext} from 'vscode';
import * as vscode from 'vscode';
import { log, LOGGER_MODE, logDebug, logInfo, userLog } from './logger';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
} from 'vscode-languageclient';
import { P4ExtensionSettings } from './p4_extension_setting';

let client: LanguageClient;

function p4ExtConfiguration(): P4ExtensionSettings{
	let configuration_workspace = <P4ExtensionSettings>(<any>vscode.workspace.getConfiguration('p4Extension'));
	return configuration_workspace;
}

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	let serverModule = context.asAbsolutePath(
		path.join('server', 'build', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	
	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};
	
	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'p4' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};
	
	// Create the language client and start the client.
	client = new LanguageClient( 'p4Extension', 'P4 vscode Extension', serverOptions, clientOptions );
		
		
	client.onReady().then(() => {
		client.onNotification("custom/loadFiles", (files: Array<String>) => {
			log("Loading files..." + files, LOGGER_MODE.INFO);
		});
	});
		
	// Start the client. This will also launch the server
	client.start();
	
	context.subscriptions.push(vscode.commands.registerCommand('p4Extension.Login', () => {
		log("Command called: LOGIN", LOGGER_MODE.INFO);
		getUsernamePassword();
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('p4Extension.Compile', () => {
		log("Command called: COMPILE", LOGGER_MODE.INFO);
		sendCompileRequest();
	}));
}
		
export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
		
async function sendCompileRequest() {
	let apiUrl:string = p4ExtConfiguration().compilerServerAddress + "/p4_compile";
	
	logInfo("Sending API call for compile");
	logDebug("API: " + apiUrl);
	const request = require('request');
	request.post({
		url: apiUrl,
		headers: {
			Cookie: ("remember_token=" + p4ExtConfiguration().userRememberToken)
		},
		json: {
			p4plugin:{
				version: "0.1.0",
				code: vscode.window.activeTextEditor.document.getText()
			}
		}
	},
	function(err,response,body){
		try{
			let new_body:any = JSON.parse(body.replace(/&quot;/g,'"'));
			if (!err && response.statusCode === 200) {
				logDebug("API HTTP status: " + new_body.status);
				
				if(new_body.status == "error" || new_body.status == "p4c_error"){
					userLog("Compile Error!");
				}
				if(new_body.status == "ok"){
					let compiledFile: string = JSON.stringify(new_body.output);
					vscode.workspace.openTextDocument({ language: "json", content: compiledFile}).then(document => {
						vscode.window.showTextDocument(document);
						document.save();
					});
				}
			}
			else {
				userLog("Internal Server Error: " + err);
			}
		}catch(e){
			logDebug("Exception: " + e);
		}
	});
}

async function getUsernamePassword() {
	let username: string;
	let password: string;
	let apiURL:string = p4ExtConfiguration().compilerServerAddress + "/signin";
	
	if(!p4ExtConfiguration().autoUserNamePassword){
		username = await vscode.window.showInputBox({
			placeHolder: "Please write your username!",
			value: "admin@cisco.com"
		});
		password = await vscode.window.showInputBox({
			placeHolder: "Please write your password!",
			value: "admin1234",
			password:true
		});
	}else{
		username = p4ExtConfiguration().usernamePassword.username;
		password = p4ExtConfiguration().usernamePassword.password;
	}
	logDebug("API Call: " + apiURL);
	const request = require('request');
	request.post({
		url: apiURL, 
		json: {
			session:{
				email: username,
				password: password
			}
		}
	},
	function(err,response,body){
		if (!err && response.statusCode === 200) {
			if(body.status == "ok"){
				let auth_cookies: string = response.headers["set-cookie"][0];
				for (let i = 0; i < auth_cookies.split(";").length; i++) {
					const auth_cookie = auth_cookies.split(";")[i];
					if(auth_cookie.startsWith("remember_token")){
						let cookie: string = auth_cookie.split("=")[1];
						
						vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', undefined, vscode.ConfigurationTarget.Global);
						vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', undefined, vscode.ConfigurationTarget.Workspace);
						vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', undefined, vscode.ConfigurationTarget.WorkspaceFolder);
						
						vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', cookie, vscode.ConfigurationTarget.Global);
						vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', cookie, vscode.ConfigurationTarget.Workspace);
						vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', cookie, vscode.ConfigurationTarget.WorkspaceFolder);
						
						logDebug("Cookie got: " + cookie);
						userLog("Login Successfull!");
					}
				}
			}else{
				userLog("Login Failed!");
			}
		}
		else {
			userLog("Login Failed!");
		}
	});
}
