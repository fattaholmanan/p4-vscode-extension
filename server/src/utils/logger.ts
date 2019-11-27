import { p4ExtensionServer } from '../server';

export enum LOGGER_MODE{
	DEBUG, // < INFO
	INFO, // < ERROR
	ERROR, // 
	USER_LOG
}

export function log(msg:string, mode:LOGGER_MODE){
	p4ExtensionServer.connection.console.log(msg);
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

export function logDebugT(msg:string){
	let t:Date = new Date();
	let time:string = "[" + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + Date.now()%1000 + "]  ";

	log(time + msg, LOGGER_MODE.DEBUG);
}