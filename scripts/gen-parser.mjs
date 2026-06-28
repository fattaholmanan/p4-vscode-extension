#!/usr/bin/env node
/**
 * Regenerate the TypeScript ANTLR parser from grammar/P4.g4 using antlr-ng
 * (Node-native; no Java required on the local machine).
 *
 * Output: server/src/parser/{P4Lexer,P4Parser,P4Listener}.ts
 */
import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const antlrNg = join(root, 'node_modules', '.bin', 'antlr-ng');
const grammar = join(root, 'grammar', 'P4.g4');
const outDir = join(root, 'server', 'src', 'parser');

const result = spawnSync(
	antlrNg,
	[grammar, '-o', outDir, '--exact-output-dir', '-D', 'language=TypeScript'],
	{ stdio: 'inherit', cwd: root },
);

process.exit(result.status ?? 1);
