import { join } from 'node:path';

/**
 * Absolute path to the bundled standard P4 library shipped with the extension
 * (from p4lang/p4c p4include: core.p4, v1model.p4, …).
 *
 * At runtime the server bundle lives in `server/out/`, so p4include is two
 * levels up from `__dirname`.
 */
export function bundledP4IncludeDir(serverOutDir: string = __dirname): string {
	return join(serverOutDir, '..', '..', 'p4include');
}
