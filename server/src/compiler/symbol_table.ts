import { ParserRuleContext } from 'antlr4ng';
import { TextDocumentPositionParams, CompletionItem } from 'vscode-languageserver';

import { logError } from '../utils/logger';
import Stack from '../utils/stack';
import { P4IR, Attribute } from './p4_ir';
import { P4IRTypes } from './p4_ir_types';
import IntervalDS from '../utils/interval_ds';

/**
 * Scoped symbol table built while walking the parse tree. A stack tracks the
 * currently open scope during the walk; an interval index lets completion look
 * up the innermost scope covering a given line.
 */
export class SymbolTable {
	private readonly SYMBOL_STACK: Stack<P4IR>;
	private readonly SYMBOL_ARR: IntervalDS;

	constructor() {
		this.SYMBOL_STACK = new Stack();
		this.SYMBOL_ARR = new IntervalDS();
	}

	getAutoCompletion(keyword: string | null, pos: TextDocumentPositionParams): CompletionItem[] {
		// LSP positions are 0-based; ANTLR context lines are 1-based.
		const lineNumber = pos.position.line + 1;
		const p4Ir = this.SYMBOL_ARR.get(lineNumber);
		if (!p4Ir) {
			return [];
		}
		return p4Ir.getAutoCompletion(keyword);
	}

	add_attr(attr: Attribute): void {
		const top = this.SYMBOL_STACK.peek();
		if (top) {
			top.add(attr);
		} else {
			logError('Symbol table is empty; cannot add attribute ' + attr.getVarName());
		}
	}

	push(ctx: ParserRuleContext, type: P4IRTypes, attr: Attribute | null): P4IR {
		const parent = this.SYMBOL_STACK.peek() ?? null;
		const node = new P4IR(type, parent, ctx);
		if (attr != null && parent) {
			parent.add(attr);
			attr.setP4Ir(node);
		}
		this.SYMBOL_STACK.push(node);
		this.SYMBOL_ARR.add(node);
		return node;
	}

	pop(): P4IR | undefined {
		return this.SYMBOL_STACK.pop();
	}
}
