import assert from 'node:assert/strict';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preprocess } from '../preprocessor/preprocessor';
import { evaluateCondition } from '../preprocessor/cond_expression';
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { P4Lexer } from '../parser/P4Lexer';
import { P4Parser } from '../parser/P4Parser';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const bundledIncludes = join(repoRoot, 'p4include');

describe('preprocessor', () => {
	it('resolves #include and #if/#else for v1model register extern', () => {
		const v1model = resolve(bundledIncludes, 'v1model.p4');
		const pp = preprocess({ uri: v1model, includePaths: [bundledIncludes] });
		assert.equal(pp.diagnostics.length, 0);
		assert.match(pp.text, /extern register/);
		assert.doesNotMatch(pp.text, /extern register<T, I>\s*\n\s*extern register<T>/);
	});

	it('evaluates V1MODEL_VERSION >= 20200408', () => {
		assert.equal(evaluateCondition('20200408 >= 20200408'), 1);
		assert.equal(evaluateCondition('20180101 >= 20200408'), 0);
	});
});

describe('parser', () => {
	function parseFile(absPath: string): number {
		const pp = preprocess({
			uri: absPath,
			includePaths: [bundledIncludes, join(repoRoot, 'p4src_example')],
		});
		assert.equal(pp.diagnostics.length, 0, pp.diagnostics.map((d) => d.message).join('; '));
		const lexer = new P4Lexer(CharStream.fromString(pp.text));
		const parser = new P4Parser(new CommonTokenStream(lexer));
		parser.program();
		return parser.numberOfSyntaxErrors;
	}

	it('parses core.p4', () => {
		assert.equal(parseFile(resolve(bundledIncludes, 'core.p4')), 0);
	});

	it('parses v1model.p4', () => {
		assert.equal(parseFile(resolve(bundledIncludes, 'v1model.p4')), 0);
	});

	it('parses bmv2_simple_switch.p4', () => {
		assert.equal(parseFile(resolve(repoRoot, 'p4src_example/bmv2_simple_switch.p4')), 0);
	});
});

describe('completion symbol table', () => {
	it('parses modern_features fixture without syntax errors', () => {
		const fixture = resolve(repoRoot, 'server/src/test/fixtures/modern_features.p4');
		const pp = preprocess({ uri: fixture, includePaths: [bundledIncludes] });
		assert.equal(pp.diagnostics.length, 0);
		const parser = new P4Parser(new CommonTokenStream(new P4Lexer(CharStream.fromString(pp.text))));
		parser.program();
		assert.equal(parser.numberOfSyntaxErrors, 0);
	});
});
