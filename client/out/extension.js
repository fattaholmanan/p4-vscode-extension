"use strict";
/* --------------------------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See License.txt in the project root for license information.
* ------------------------------------------------------------------------------------------ */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_1 = require("vscode");
const vscode = require("vscode");
const logger_1 = require("./logger");
const vscode_languageclient_1 = require("vscode-languageclient");
let client;
function p4ExtConfiguration() {
    let configuration_workspace = vscode.workspace.getConfiguration('p4Extension');
    return configuration_workspace;
}
function activate(context) {
    // The server is implemented in node
    let serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    let serverOptions = {
        run: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: vscode_languageclient_1.TransportKind.ipc,
            options: debugOptions
        }
    };
    // Options to control the language client
    let clientOptions = {
        // Register the server for plain text documents
        documentSelector: [{ scheme: 'file', language: 'p4' }],
        synchronize: {
            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: vscode_1.workspace.createFileSystemWatcher('**/.clientrc')
        }
    };
    // Create the language client and start the client.
    client = new vscode_languageclient_1.LanguageClient('p4Extension', 'P4 vscode Extension', serverOptions, clientOptions);
    client.onReady().then(() => {
        client.onNotification("custom/loadFiles", (files) => {
            logger_1.log("Loading files..." + files, logger_1.LOGGER_MODE.INFO);
        });
    });
    // Start the client. This will also launch the server
    client.start();
    context.subscriptions.push(vscode.commands.registerCommand('p4Extension.Login', () => {
        logger_1.log("Command called: LOGIN", logger_1.LOGGER_MODE.INFO);
        getUsernamePassword();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('p4Extension.Compile', () => {
        logger_1.log("Command called: COMPILE", logger_1.LOGGER_MODE.INFO);
        sendCompileRequest();
    }));
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
function sendCompileRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        let apiUrl = p4ExtConfiguration().compilerServerAddress + "/p4_compile";
        logger_1.logInfo("Sending API call for compile");
        logger_1.logDebug("API: " + apiUrl);
        const request = require('request');
        request.post({
            url: apiUrl,
            headers: {
                Cookie: ("remember_token=" + p4ExtConfiguration().userRememberToken)
            },
            json: {
                p4plugin: {
                    version: "0.1.0",
                    code: vscode.window.activeTextEditor.document.getText()
                }
            }
        }, function (err, response, body) {
            try {
                let new_body = JSON.parse(body.replace(/&quot;/g, '"'));
                if (!err && response.statusCode === 200) {
                    logger_1.logDebug("API HTTP status: " + new_body.status);
                    if (new_body.status == "error" || new_body.status == "p4c_error") {
                        logger_1.userLog("Compile Error!");
                    }
                    if (new_body.status == "ok") {
                        let compiledFile = JSON.stringify(new_body.output);
                        vscode.workspace.openTextDocument({ language: "json", content: compiledFile }).then(document => {
                            vscode.window.showTextDocument(document);
                            document.save();
                        });
                    }
                }
                else {
                    logger_1.userLog("Internal Server Error: " + err);
                }
            }
            catch (e) {
                logger_1.logDebug("Exception: " + e);
            }
        });
    });
}
function getUsernamePassword() {
    return __awaiter(this, void 0, void 0, function* () {
        let username;
        let password;
        let apiURL = p4ExtConfiguration().compilerServerAddress + "/signin";
        if (!p4ExtConfiguration().autoUserNamePassword) {
            username = yield vscode.window.showInputBox({
                placeHolder: "Please write your username!",
                value: "admin@cisco.com"
            });
            password = yield vscode.window.showInputBox({
                placeHolder: "Please write your password!",
                value: "admin1234",
                password: true
            });
        }
        else {
            username = p4ExtConfiguration().usernamePassword.username;
            password = p4ExtConfiguration().usernamePassword.password;
        }
        logger_1.logDebug("API Call: " + apiURL);
        const request = require('request');
        request.post({
            url: apiURL,
            json: {
                session: {
                    email: username,
                    password: password
                }
            }
        }, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                if (body.status == "ok") {
                    let auth_cookies = response.headers["set-cookie"][0];
                    for (let i = 0; i < auth_cookies.split(";").length; i++) {
                        const auth_cookie = auth_cookies.split(";")[i];
                        if (auth_cookie.startsWith("remember_token")) {
                            let cookie = auth_cookie.split("=")[1];
                            vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', undefined, vscode.ConfigurationTarget.Global);
                            vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', undefined, vscode.ConfigurationTarget.Workspace);
                            vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', undefined, vscode.ConfigurationTarget.WorkspaceFolder);
                            vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', cookie, vscode.ConfigurationTarget.Global);
                            vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', cookie, vscode.ConfigurationTarget.Workspace);
                            vscode.workspace.getConfiguration('p4Extension').update('userRememberToken', cookie, vscode.ConfigurationTarget.WorkspaceFolder);
                            logger_1.logDebug("Cookie got: " + cookie);
                            logger_1.userLog("Login Successfull!");
                        }
                    }
                }
                else {
                    logger_1.userLog("Login Failed!");
                }
            }
            else {
                logger_1.userLog("Login Failed!");
            }
        });
    });
}
//# sourceMappingURL=extension.js.map