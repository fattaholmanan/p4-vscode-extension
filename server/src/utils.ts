import { connection } from './server';
import { P4ExtensionSettings } from './p4_extension_setting';

export function getDocumentSettings(resource: string): Thenable<P4ExtensionSettings> {
	let result = connection.workspace.getConfiguration({
		scopeUri: resource,
		section: 'p4Extension'
	});
	return result;
}