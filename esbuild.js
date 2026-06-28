// Bundles the client and server into single CommonJS files for the VS Code host.
const esbuild = require('esbuild');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

/** @type {import('esbuild').BuildOptions} */
const shared = {
	bundle: true,
	format: 'cjs',
	platform: 'node',
	target: 'node18',
	sourcemap: !production,
	minify: production,
	logLevel: 'info',
	// `vscode` is provided by the extension host at runtime, never bundle it.
	external: ['vscode'],
};

async function main() {
	const contexts = await Promise.all([
		esbuild.context({
			...shared,
			entryPoints: ['client/src/extension.ts'],
			outfile: 'client/out/extension.js',
		}),
		esbuild.context({
			...shared,
			entryPoints: ['server/src/server.ts'],
			outfile: 'server/out/server.js',
		}),
	]);

	if (watch) {
		await Promise.all(contexts.map((ctx) => ctx.watch()));
		console.log('[esbuild] watching for changes...');
	} else {
		await Promise.all(contexts.map((ctx) => ctx.rebuild()));
		await Promise.all(contexts.map((ctx) => ctx.dispose()));
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
