import { connection } from './server';

export enum LOGGER_MODE{
	DEBUG, // < INFO
	INFO, // < ERROR
	ERROR, // 
	USER_LOG
}

export function log(msg:string, mode:LOGGER_MODE){
	connection.console.log(msg);
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
