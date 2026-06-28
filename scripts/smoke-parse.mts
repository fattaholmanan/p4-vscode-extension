// Dev utility: preprocess and parse .p4 files, reporting syntax/preprocessor errors.
// Usage: npx tsx scripts/smoke-parse.mts <file.p4> [more.p4 ...]
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CharStream, CommonTokenStream, BaseErrorListener } from 'antlr4ng';
import { P4Lexer } from '../server/src/parser/P4Lexer.js';
import { P4Parser } from '../server/src/parser/P4Parser.js';
import { preprocess } from '../server/src/preprocessor/preprocessor.js';
import { P4ErrorListener } from '../server/src/antlr_error_listner.js';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const bundledIncludes = join(repoRoot, 'p4include');

class Collector extends BaseErrorListener {
	errors: string[] = [];
	override syntaxError(_r: unknown, _s: unknown, line: number, col: number, msg: string): void {
		this.errors.push(`${line}:${col} ${msg}`);
	}
}

let total = 0;
for (const file of process.argv.slice(2)) {
	const abs = resolve(file);
	const pp = preprocess({ uri: abs, includePaths: [dirname(abs), bundledIncludes] });
	const errorListener = new P4ErrorListener(pp.sourceMap, pp.fileContents);
	errorListener.addPreprocessDiagnostics(pp.diagnostics);

	const lexer = new P4Lexer(CharStream.fromString(pp.text));
	lexer.removeErrorListeners();
	lexer.addErrorListener(errorListener);
	const parser = new P4Parser(new CommonTokenStream(lexer));
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);
	parser.program();

	const count = errorListener.allDiagnostics().length;
	total += count;
	console.log(`\n${file}: ${count} error(s)`);
	for (const d of errorListener.allDiagnostics().slice(0, 40)) {
		console.log('   ', d.message);
	}
}
console.log(`\nTOTAL ERRORS: ${total}`);
process.exit(total === 0 ? 0 : 1);
