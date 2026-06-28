import { p4ExtensionServer } from '../server';

export enum LOGGER_MODE{
	DEBUG, // < INFO
	INFO, // < ERROR
	ERROR, // 
	USER_LOG
}

export function log(msg: string, _mode: LOGGER_MODE): void {
	p4ExtensionServer.connection.console.log(msg);
}

export function logInfo(_msg: string): void {
	// intentionally quiet in production
}

export function logDebug(msg:string){
	log(msg, LOGGER_MODE.DEBUG);
}

export function logError(msg:string){
	log(msg, LOGGER_MODE.ERROR);
}

export function logDebugT(msg: string): void {
	const t = new Date();
	const time = `[${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}.${Date.now() % 1000}]  `;

	logDebug(time + msg);
}