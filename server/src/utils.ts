import { connection } from './server';
import { P4ExtensionSettings } from './p4_extension_setting';


export function loglog(msg: string | number){
	// connection.console.log(msg + "");
}

export function logloglog(msg: string | number){
	connection.console.log(msg + "");
}

export function getDocumentSettings(resource: string): Thenable<P4ExtensionSettings> {
	let result = connection.workspace.getConfiguration({
		scopeUri: resource,
		section: 'p4Extension'
	});
	return result;
}