import * as vscode from 'vscode';

export enum LOGGER_MODE{
	DEBUG, // < INFO
	INFO, // < ERROR
	ERROR, // 
	USER_LOG
}

export function log(msg:string, mode:LOGGER_MODE){
	console.log(msg);
}

export function logInfo(msg:string){
	log(msg, LOGGER_MODE.INFO);
}

export function logDebug(msg:string){
	log(msg, LOGGER_MODE.DEBUG);
}

export function logError(msg:string){
	log(msg, LOGGER_MODE.ERROR);
}

export function userLog(msg:string){
	vscode.window.showInformationMessage(msg);
	log(msg, LOGGER_MODE.USER_LOG);
}