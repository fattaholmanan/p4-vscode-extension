import { ParserRuleContext } from 'antlr4ng';
import { TextDocumentPositionParams, CompletionItem, CompletionItemKind } from 'vscode-languageserver';

import { P4Listener } from '../parser/P4Listener';
import {
	ProgramContext,
	TableDeclarationContext,
	ControlDeclarationContext,
	ActionDeclarationContext,
	HeaderTypeDeclarationContext,
	StructTypeDeclarationContext,
	ConstantDeclarationContext,
	VariableDeclarationContext,
	ParameterContext,
	StructFieldContext,
} from '../parser/P4Parser';
import { P4IRTypes } from './p4_ir_types';
import { SymbolTable } from './symbol_table';
import { Attribute, P4IR } from './p4_ir';
import { getName } from '../antlr_compiler_proxy';

/**
 * Walks the parse tree and records declarations (headers, structs, controls,
 * tables, actions, variables, parameters, fields) into a scoped symbol table
 * used to answer completion requests.
 */
export class MyP4Listener extends P4Listener {
	private readonly sTable: SymbolTable;

	constructor() {
		super();
		this.sTable = new SymbolTable();
	}

	getAutoCompletions(keyword: string | null, pos: TextDocumentPositionParams): CompletionItem[] {
		return this.sTable.getAutoCompletion(keyword, pos);
	}

	private pushBlock(type: P4IRTypes, ctx: ParserRuleContext): P4IR {
		const name = getName(ctx);
		const attr = name != null ? new Attribute(name, name, CompletionItemKind.Class) : null;
		return this.sTable.push(ctx, type, attr);
	}

	override enterProgram = (ctx: ProgramContext): void => {
		this.sTable.push(ctx, P4IRTypes.P4_PROGRAM, null);
	};
	override exitProgram = (): void => {
		this.sTable.pop();
	};

	override enterTableDeclaration = (ctx: TableDeclarationContext): void => {
		const block = this.pushBlock(P4IRTypes.TABLE, ctx);
		block.add(new Attribute('apply()', 'method', CompletionItemKind.Function));
	};
	override exitTableDeclaration = (): void => {
		this.sTable.pop();
	};

	override enterControlDeclaration = (ctx: ControlDeclarationContext): void => {
		const block = this.pushBlock(P4IRTypes.CONTROLLER, ctx);
		block.add(new Attribute('apply()', 'method', CompletionItemKind.Function));
	};
	override exitControlDeclaration = (): void => {
		this.sTable.pop();
	};

	override enterActionDeclaration = (ctx: ActionDeclarationContext): void => {
		this.pushBlock(P4IRTypes.ACTION, ctx);
	};
	override exitActionDeclaration = (): void => {
		this.sTable.pop();
	};

	override enterHeaderTypeDeclaration = (ctx: HeaderTypeDeclarationContext): void => {
		this.pushBlock(P4IRTypes.HEADER, ctx);
	};
	override exitHeaderTypeDeclaration = (): void => {
		this.sTable.pop();
	};

	override enterStructTypeDeclaration = (ctx: StructTypeDeclarationContext): void => {
		this.pushBlock(P4IRTypes.STRUCT, ctx);
	};
	override exitStructTypeDeclaration = (): void => {
		this.sTable.pop();
	};

	override enterConstantDeclaration = (ctx: ConstantDeclarationContext): void => {
		const name = getName(ctx);
		if (name == null) {
			return;
		}
		const type = ctx.typeRef()?.getText() ?? '';
		this.sTable.add_attr(new Attribute(name, type, CompletionItemKind.Constant));
	};

	override enterVariableDeclaration = (ctx: VariableDeclarationContext): void => {
		const name = getName(ctx);
		if (name == null) {
			return;
		}
		const type = ctx.typeRef()?.getText() ?? '';
		this.sTable.add_attr(new Attribute(name, type, CompletionItemKind.Variable));
	};

	override enterParameter = (ctx: ParameterContext): void => {
		const name = ctx.name()?.getText();
		if (!name) {
			return;
		}
		const type = ctx.typeRef()?.getText() ?? '';
		this.sTable.add_attr(new Attribute(name, type, CompletionItemKind.Variable));
	};

	override enterStructField = (ctx: StructFieldContext): void => {
		const name = ctx.name()?.getText();
		if (!name) {
			return;
		}
		const type = ctx.typeRef()?.getText() ?? '';
		this.sTable.add_attr(new Attribute(name, type, CompletionItemKind.Field));
	};
}
