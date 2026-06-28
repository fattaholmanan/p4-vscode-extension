import { P4Settings, defaultSettings } from './p4_extension_setting';
import { p4ExtensionServer } from './server';

export async function getDocumentSettings(resource: string): Promise<P4Settings> {
	try {
		const settings = await p4ExtensionServer.connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'p4',
		});
		return { ...defaultSettings, ...(settings ?? {}) };
	} catch {
		return defaultSettings;
	}
}
