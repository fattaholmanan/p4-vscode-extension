
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./P4Parser.js";
import { DeclarationContext } from "./P4Parser.js";
import { NonTypeNameContext } from "./P4Parser.js";
import { NameContext } from "./P4Parser.js";
import { NonTableKwNameContext } from "./P4Parser.js";
import { OptCONSTContext } from "./P4Parser.js";
import { OptAnnotationsContext } from "./P4Parser.js";
import { AnnotationsContext } from "./P4Parser.js";
import { AnnotationContext } from "./P4Parser.js";
import { AnnotationBodyContext } from "./P4Parser.js";
import { AnnotationTokenContext } from "./P4Parser.js";
import { KvListContext } from "./P4Parser.js";
import { KvPairContext } from "./P4Parser.js";
import { ParameterListContext } from "./P4Parser.js";
import { NonEmptyParameterListContext } from "./P4Parser.js";
import { ParameterContext } from "./P4Parser.js";
import { DirectionContext } from "./P4Parser.js";
import { PackageTypeDeclarationContext } from "./P4Parser.js";
import { InstantiationContext } from "./P4Parser.js";
import { ObjInitializerContext } from "./P4Parser.js";
import { ObjDeclarationsContext } from "./P4Parser.js";
import { ObjDeclarationContext } from "./P4Parser.js";
import { OptConstructorParametersContext } from "./P4Parser.js";
import { DotPrefixContext } from "./P4Parser.js";
import { ParserDeclarationContext } from "./P4Parser.js";
import { ParserLocalElementsContext } from "./P4Parser.js";
import { ParserLocalElementContext } from "./P4Parser.js";
import { ParserTypeDeclarationContext } from "./P4Parser.js";
import { ParserStatesContext } from "./P4Parser.js";
import { ParserStateContext } from "./P4Parser.js";
import { ParserStatementsContext } from "./P4Parser.js";
import { ParserStatementContext } from "./P4Parser.js";
import { ParserBlockStatementContext } from "./P4Parser.js";
import { TransitionStatementContext } from "./P4Parser.js";
import { StateExpressionContext } from "./P4Parser.js";
import { SelectExpressionContext } from "./P4Parser.js";
import { SelectCaseListContext } from "./P4Parser.js";
import { SelectCaseContext } from "./P4Parser.js";
import { KeysetExpressionContext } from "./P4Parser.js";
import { TupleKeysetExpressionContext } from "./P4Parser.js";
import { OptTrailingCommaContext } from "./P4Parser.js";
import { SimpleExpressionListContext } from "./P4Parser.js";
import { ReducedSimpleKeysetExpressionContext } from "./P4Parser.js";
import { SimpleKeysetExpressionContext } from "./P4Parser.js";
import { ValueSetDeclarationContext } from "./P4Parser.js";
import { ControlDeclarationContext } from "./P4Parser.js";
import { ControlTypeDeclarationContext } from "./P4Parser.js";
import { ControlLocalDeclarationsContext } from "./P4Parser.js";
import { ControlLocalDeclarationContext } from "./P4Parser.js";
import { ControlBodyContext } from "./P4Parser.js";
import { ExternDeclarationContext } from "./P4Parser.js";
import { MethodPrototypesContext } from "./P4Parser.js";
import { FunctionPrototypeContext } from "./P4Parser.js";
import { MethodPrototypeContext } from "./P4Parser.js";
import { TypeRefContext } from "./P4Parser.js";
import { NamedTypeContext } from "./P4Parser.js";
import { PrefixedTypeContext } from "./P4Parser.js";
import { TypeNameContext } from "./P4Parser.js";
import { P4listTypeContext } from "./P4Parser.js";
import { TupleTypeContext } from "./P4Parser.js";
import { HeaderStackTypeContext } from "./P4Parser.js";
import { SpecializedTypeContext } from "./P4Parser.js";
import { BaseTypeContext } from "./P4Parser.js";
import { TypeOrVoidContext } from "./P4Parser.js";
import { OptTypeParametersContext } from "./P4Parser.js";
import { TypeParameterListContext } from "./P4Parser.js";
import { TypeArgContext } from "./P4Parser.js";
import { TypeArgumentListContext } from "./P4Parser.js";
import { RealTypeArgContext } from "./P4Parser.js";
import { RealTypeArgumentListContext } from "./P4Parser.js";
import { TypeDeclarationContext } from "./P4Parser.js";
import { DerivedTypeDeclarationContext } from "./P4Parser.js";
import { HeaderTypeDeclarationContext } from "./P4Parser.js";
import { StructTypeDeclarationContext } from "./P4Parser.js";
import { HeaderUnionDeclarationContext } from "./P4Parser.js";
import { StructFieldListContext } from "./P4Parser.js";
import { StructFieldContext } from "./P4Parser.js";
import { EnumDeclarationContext } from "./P4Parser.js";
import { SpecifiedIdentifierListContext } from "./P4Parser.js";
import { SpecifiedIdentifierContext } from "./P4Parser.js";
import { ErrorDeclarationContext } from "./P4Parser.js";
import { MatchKindDeclarationContext } from "./P4Parser.js";
import { IdentifierListContext } from "./P4Parser.js";
import { TypedefDeclarationContext } from "./P4Parser.js";
import { AssignmentOrMethodCallStatementContext } from "./P4Parser.js";
import { EmptyStatementContext } from "./P4Parser.js";
import { ExitStatementContext } from "./P4Parser.js";
import { ReturnStatementContext } from "./P4Parser.js";
import { ConditionalStatementContext } from "./P4Parser.js";
import { DirectApplicationContext } from "./P4Parser.js";
import { StatementContext } from "./P4Parser.js";
import { BlockStatementContext } from "./P4Parser.js";
import { StatOrDeclListContext } from "./P4Parser.js";
import { SwitchStatementContext } from "./P4Parser.js";
import { SwitchCasesContext } from "./P4Parser.js";
import { SwitchCaseContext } from "./P4Parser.js";
import { SwitchLabelContext } from "./P4Parser.js";
import { StatementOrDeclarationContext } from "./P4Parser.js";
import { TableDeclarationContext } from "./P4Parser.js";
import { TablePropertyListContext } from "./P4Parser.js";
import { TablePropertyContext } from "./P4Parser.js";
import { KeyElementListContext } from "./P4Parser.js";
import { KeyElementContext } from "./P4Parser.js";
import { ActionListContext } from "./P4Parser.js";
import { ActionRefContext } from "./P4Parser.js";
import { EntryContext } from "./P4Parser.js";
import { EntryPriorityContext } from "./P4Parser.js";
import { EntriesListContext } from "./P4Parser.js";
import { ActionDeclarationContext } from "./P4Parser.js";
import { VariableDeclarationContext } from "./P4Parser.js";
import { ConstantDeclarationContext } from "./P4Parser.js";
import { OptInitializerContext } from "./P4Parser.js";
import { InitializerContext } from "./P4Parser.js";
import { FunctionDeclarationContext } from "./P4Parser.js";
import { ArgumentListContext } from "./P4Parser.js";
import { NonEmptyArgListContext } from "./P4Parser.js";
import { ArgumentContext } from "./P4Parser.js";
import { ExpressionListContext } from "./P4Parser.js";
import { StructuredAnnotationBodyContext } from "./P4Parser.js";
import { MemberContext } from "./P4Parser.js";
import { PrefixedNonTypeNameContext } from "./P4Parser.js";
import { LvalueContext } from "./P4Parser.js";
import { ExpressionContext } from "./P4Parser.js";
import { NonBraceExpressionContext } from "./P4Parser.js";
import { Type_or_idContext } from "./P4Parser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `P4Parser`.
 */
export class P4Listener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `P4Parser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.declaration`.
     * @param ctx the parse tree
     */
    enterDeclaration?: (ctx: DeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.declaration`.
     * @param ctx the parse tree
     */
    exitDeclaration?: (ctx: DeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.nonTypeName`.
     * @param ctx the parse tree
     */
    enterNonTypeName?: (ctx: NonTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.nonTypeName`.
     * @param ctx the parse tree
     */
    exitNonTypeName?: (ctx: NonTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.name`.
     * @param ctx the parse tree
     */
    enterName?: (ctx: NameContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.name`.
     * @param ctx the parse tree
     */
    exitName?: (ctx: NameContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.nonTableKwName`.
     * @param ctx the parse tree
     */
    enterNonTableKwName?: (ctx: NonTableKwNameContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.nonTableKwName`.
     * @param ctx the parse tree
     */
    exitNonTableKwName?: (ctx: NonTableKwNameContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.optCONST`.
     * @param ctx the parse tree
     */
    enterOptCONST?: (ctx: OptCONSTContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.optCONST`.
     * @param ctx the parse tree
     */
    exitOptCONST?: (ctx: OptCONSTContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.optAnnotations`.
     * @param ctx the parse tree
     */
    enterOptAnnotations?: (ctx: OptAnnotationsContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.optAnnotations`.
     * @param ctx the parse tree
     */
    exitOptAnnotations?: (ctx: OptAnnotationsContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.annotations`.
     * @param ctx the parse tree
     */
    enterAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.annotations`.
     * @param ctx the parse tree
     */
    exitAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.annotation`.
     * @param ctx the parse tree
     */
    enterAnnotation?: (ctx: AnnotationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.annotation`.
     * @param ctx the parse tree
     */
    exitAnnotation?: (ctx: AnnotationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.annotationBody`.
     * @param ctx the parse tree
     */
    enterAnnotationBody?: (ctx: AnnotationBodyContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.annotationBody`.
     * @param ctx the parse tree
     */
    exitAnnotationBody?: (ctx: AnnotationBodyContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.annotationToken`.
     * @param ctx the parse tree
     */
    enterAnnotationToken?: (ctx: AnnotationTokenContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.annotationToken`.
     * @param ctx the parse tree
     */
    exitAnnotationToken?: (ctx: AnnotationTokenContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.kvList`.
     * @param ctx the parse tree
     */
    enterKvList?: (ctx: KvListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.kvList`.
     * @param ctx the parse tree
     */
    exitKvList?: (ctx: KvListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.kvPair`.
     * @param ctx the parse tree
     */
    enterKvPair?: (ctx: KvPairContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.kvPair`.
     * @param ctx the parse tree
     */
    exitKvPair?: (ctx: KvPairContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parameterList`.
     * @param ctx the parse tree
     */
    enterParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parameterList`.
     * @param ctx the parse tree
     */
    exitParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.nonEmptyParameterList`.
     * @param ctx the parse tree
     */
    enterNonEmptyParameterList?: (ctx: NonEmptyParameterListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.nonEmptyParameterList`.
     * @param ctx the parse tree
     */
    exitNonEmptyParameterList?: (ctx: NonEmptyParameterListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.direction`.
     * @param ctx the parse tree
     */
    enterDirection?: (ctx: DirectionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.direction`.
     * @param ctx the parse tree
     */
    exitDirection?: (ctx: DirectionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.packageTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterPackageTypeDeclaration?: (ctx: PackageTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.packageTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitPackageTypeDeclaration?: (ctx: PackageTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.instantiation`.
     * @param ctx the parse tree
     */
    enterInstantiation?: (ctx: InstantiationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.instantiation`.
     * @param ctx the parse tree
     */
    exitInstantiation?: (ctx: InstantiationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.objInitializer`.
     * @param ctx the parse tree
     */
    enterObjInitializer?: (ctx: ObjInitializerContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.objInitializer`.
     * @param ctx the parse tree
     */
    exitObjInitializer?: (ctx: ObjInitializerContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.objDeclarations`.
     * @param ctx the parse tree
     */
    enterObjDeclarations?: (ctx: ObjDeclarationsContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.objDeclarations`.
     * @param ctx the parse tree
     */
    exitObjDeclarations?: (ctx: ObjDeclarationsContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.objDeclaration`.
     * @param ctx the parse tree
     */
    enterObjDeclaration?: (ctx: ObjDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.objDeclaration`.
     * @param ctx the parse tree
     */
    exitObjDeclaration?: (ctx: ObjDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.optConstructorParameters`.
     * @param ctx the parse tree
     */
    enterOptConstructorParameters?: (ctx: OptConstructorParametersContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.optConstructorParameters`.
     * @param ctx the parse tree
     */
    exitOptConstructorParameters?: (ctx: OptConstructorParametersContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.dotPrefix`.
     * @param ctx the parse tree
     */
    enterDotPrefix?: (ctx: DotPrefixContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.dotPrefix`.
     * @param ctx the parse tree
     */
    exitDotPrefix?: (ctx: DotPrefixContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserDeclaration`.
     * @param ctx the parse tree
     */
    enterParserDeclaration?: (ctx: ParserDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserDeclaration`.
     * @param ctx the parse tree
     */
    exitParserDeclaration?: (ctx: ParserDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserLocalElements`.
     * @param ctx the parse tree
     */
    enterParserLocalElements?: (ctx: ParserLocalElementsContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserLocalElements`.
     * @param ctx the parse tree
     */
    exitParserLocalElements?: (ctx: ParserLocalElementsContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserLocalElement`.
     * @param ctx the parse tree
     */
    enterParserLocalElement?: (ctx: ParserLocalElementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserLocalElement`.
     * @param ctx the parse tree
     */
    exitParserLocalElement?: (ctx: ParserLocalElementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterParserTypeDeclaration?: (ctx: ParserTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitParserTypeDeclaration?: (ctx: ParserTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserStates`.
     * @param ctx the parse tree
     */
    enterParserStates?: (ctx: ParserStatesContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserStates`.
     * @param ctx the parse tree
     */
    exitParserStates?: (ctx: ParserStatesContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserState`.
     * @param ctx the parse tree
     */
    enterParserState?: (ctx: ParserStateContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserState`.
     * @param ctx the parse tree
     */
    exitParserState?: (ctx: ParserStateContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserStatements`.
     * @param ctx the parse tree
     */
    enterParserStatements?: (ctx: ParserStatementsContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserStatements`.
     * @param ctx the parse tree
     */
    exitParserStatements?: (ctx: ParserStatementsContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserStatement`.
     * @param ctx the parse tree
     */
    enterParserStatement?: (ctx: ParserStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserStatement`.
     * @param ctx the parse tree
     */
    exitParserStatement?: (ctx: ParserStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.parserBlockStatement`.
     * @param ctx the parse tree
     */
    enterParserBlockStatement?: (ctx: ParserBlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.parserBlockStatement`.
     * @param ctx the parse tree
     */
    exitParserBlockStatement?: (ctx: ParserBlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.transitionStatement`.
     * @param ctx the parse tree
     */
    enterTransitionStatement?: (ctx: TransitionStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.transitionStatement`.
     * @param ctx the parse tree
     */
    exitTransitionStatement?: (ctx: TransitionStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.stateExpression`.
     * @param ctx the parse tree
     */
    enterStateExpression?: (ctx: StateExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.stateExpression`.
     * @param ctx the parse tree
     */
    exitStateExpression?: (ctx: StateExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.selectExpression`.
     * @param ctx the parse tree
     */
    enterSelectExpression?: (ctx: SelectExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.selectExpression`.
     * @param ctx the parse tree
     */
    exitSelectExpression?: (ctx: SelectExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.selectCaseList`.
     * @param ctx the parse tree
     */
    enterSelectCaseList?: (ctx: SelectCaseListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.selectCaseList`.
     * @param ctx the parse tree
     */
    exitSelectCaseList?: (ctx: SelectCaseListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.selectCase`.
     * @param ctx the parse tree
     */
    enterSelectCase?: (ctx: SelectCaseContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.selectCase`.
     * @param ctx the parse tree
     */
    exitSelectCase?: (ctx: SelectCaseContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.keysetExpression`.
     * @param ctx the parse tree
     */
    enterKeysetExpression?: (ctx: KeysetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.keysetExpression`.
     * @param ctx the parse tree
     */
    exitKeysetExpression?: (ctx: KeysetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.tupleKeysetExpression`.
     * @param ctx the parse tree
     */
    enterTupleKeysetExpression?: (ctx: TupleKeysetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.tupleKeysetExpression`.
     * @param ctx the parse tree
     */
    exitTupleKeysetExpression?: (ctx: TupleKeysetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.optTrailingComma`.
     * @param ctx the parse tree
     */
    enterOptTrailingComma?: (ctx: OptTrailingCommaContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.optTrailingComma`.
     * @param ctx the parse tree
     */
    exitOptTrailingComma?: (ctx: OptTrailingCommaContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.simpleExpressionList`.
     * @param ctx the parse tree
     */
    enterSimpleExpressionList?: (ctx: SimpleExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.simpleExpressionList`.
     * @param ctx the parse tree
     */
    exitSimpleExpressionList?: (ctx: SimpleExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.reducedSimpleKeysetExpression`.
     * @param ctx the parse tree
     */
    enterReducedSimpleKeysetExpression?: (ctx: ReducedSimpleKeysetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.reducedSimpleKeysetExpression`.
     * @param ctx the parse tree
     */
    exitReducedSimpleKeysetExpression?: (ctx: ReducedSimpleKeysetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.simpleKeysetExpression`.
     * @param ctx the parse tree
     */
    enterSimpleKeysetExpression?: (ctx: SimpleKeysetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.simpleKeysetExpression`.
     * @param ctx the parse tree
     */
    exitSimpleKeysetExpression?: (ctx: SimpleKeysetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.valueSetDeclaration`.
     * @param ctx the parse tree
     */
    enterValueSetDeclaration?: (ctx: ValueSetDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.valueSetDeclaration`.
     * @param ctx the parse tree
     */
    exitValueSetDeclaration?: (ctx: ValueSetDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.controlDeclaration`.
     * @param ctx the parse tree
     */
    enterControlDeclaration?: (ctx: ControlDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.controlDeclaration`.
     * @param ctx the parse tree
     */
    exitControlDeclaration?: (ctx: ControlDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.controlTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterControlTypeDeclaration?: (ctx: ControlTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.controlTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitControlTypeDeclaration?: (ctx: ControlTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.controlLocalDeclarations`.
     * @param ctx the parse tree
     */
    enterControlLocalDeclarations?: (ctx: ControlLocalDeclarationsContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.controlLocalDeclarations`.
     * @param ctx the parse tree
     */
    exitControlLocalDeclarations?: (ctx: ControlLocalDeclarationsContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.controlLocalDeclaration`.
     * @param ctx the parse tree
     */
    enterControlLocalDeclaration?: (ctx: ControlLocalDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.controlLocalDeclaration`.
     * @param ctx the parse tree
     */
    exitControlLocalDeclaration?: (ctx: ControlLocalDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.controlBody`.
     * @param ctx the parse tree
     */
    enterControlBody?: (ctx: ControlBodyContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.controlBody`.
     * @param ctx the parse tree
     */
    exitControlBody?: (ctx: ControlBodyContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.externDeclaration`.
     * @param ctx the parse tree
     */
    enterExternDeclaration?: (ctx: ExternDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.externDeclaration`.
     * @param ctx the parse tree
     */
    exitExternDeclaration?: (ctx: ExternDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.methodPrototypes`.
     * @param ctx the parse tree
     */
    enterMethodPrototypes?: (ctx: MethodPrototypesContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.methodPrototypes`.
     * @param ctx the parse tree
     */
    exitMethodPrototypes?: (ctx: MethodPrototypesContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.functionPrototype`.
     * @param ctx the parse tree
     */
    enterFunctionPrototype?: (ctx: FunctionPrototypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.functionPrototype`.
     * @param ctx the parse tree
     */
    exitFunctionPrototype?: (ctx: FunctionPrototypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.methodPrototype`.
     * @param ctx the parse tree
     */
    enterMethodPrototype?: (ctx: MethodPrototypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.methodPrototype`.
     * @param ctx the parse tree
     */
    exitMethodPrototype?: (ctx: MethodPrototypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeRef`.
     * @param ctx the parse tree
     */
    enterTypeRef?: (ctx: TypeRefContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeRef`.
     * @param ctx the parse tree
     */
    exitTypeRef?: (ctx: TypeRefContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.namedType`.
     * @param ctx the parse tree
     */
    enterNamedType?: (ctx: NamedTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.namedType`.
     * @param ctx the parse tree
     */
    exitNamedType?: (ctx: NamedTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.prefixedType`.
     * @param ctx the parse tree
     */
    enterPrefixedType?: (ctx: PrefixedTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.prefixedType`.
     * @param ctx the parse tree
     */
    exitPrefixedType?: (ctx: PrefixedTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeName`.
     * @param ctx the parse tree
     */
    enterTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeName`.
     * @param ctx the parse tree
     */
    exitTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.p4listType`.
     * @param ctx the parse tree
     */
    enterP4listType?: (ctx: P4listTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.p4listType`.
     * @param ctx the parse tree
     */
    exitP4listType?: (ctx: P4listTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.tupleType`.
     * @param ctx the parse tree
     */
    enterTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.tupleType`.
     * @param ctx the parse tree
     */
    exitTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.headerStackType`.
     * @param ctx the parse tree
     */
    enterHeaderStackType?: (ctx: HeaderStackTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.headerStackType`.
     * @param ctx the parse tree
     */
    exitHeaderStackType?: (ctx: HeaderStackTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.specializedType`.
     * @param ctx the parse tree
     */
    enterSpecializedType?: (ctx: SpecializedTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.specializedType`.
     * @param ctx the parse tree
     */
    exitSpecializedType?: (ctx: SpecializedTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.baseType`.
     * @param ctx the parse tree
     */
    enterBaseType?: (ctx: BaseTypeContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.baseType`.
     * @param ctx the parse tree
     */
    exitBaseType?: (ctx: BaseTypeContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeOrVoid`.
     * @param ctx the parse tree
     */
    enterTypeOrVoid?: (ctx: TypeOrVoidContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeOrVoid`.
     * @param ctx the parse tree
     */
    exitTypeOrVoid?: (ctx: TypeOrVoidContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.optTypeParameters`.
     * @param ctx the parse tree
     */
    enterOptTypeParameters?: (ctx: OptTypeParametersContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.optTypeParameters`.
     * @param ctx the parse tree
     */
    exitOptTypeParameters?: (ctx: OptTypeParametersContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeParameterList`.
     * @param ctx the parse tree
     */
    enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeParameterList`.
     * @param ctx the parse tree
     */
    exitTypeParameterList?: (ctx: TypeParameterListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeArg`.
     * @param ctx the parse tree
     */
    enterTypeArg?: (ctx: TypeArgContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeArg`.
     * @param ctx the parse tree
     */
    exitTypeArg?: (ctx: TypeArgContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeArgumentList`.
     * @param ctx the parse tree
     */
    enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeArgumentList`.
     * @param ctx the parse tree
     */
    exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.realTypeArg`.
     * @param ctx the parse tree
     */
    enterRealTypeArg?: (ctx: RealTypeArgContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.realTypeArg`.
     * @param ctx the parse tree
     */
    exitRealTypeArg?: (ctx: RealTypeArgContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.realTypeArgumentList`.
     * @param ctx the parse tree
     */
    enterRealTypeArgumentList?: (ctx: RealTypeArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.realTypeArgumentList`.
     * @param ctx the parse tree
     */
    exitRealTypeArgumentList?: (ctx: RealTypeArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typeDeclaration`.
     * @param ctx the parse tree
     */
    enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typeDeclaration`.
     * @param ctx the parse tree
     */
    exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.derivedTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterDerivedTypeDeclaration?: (ctx: DerivedTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.derivedTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitDerivedTypeDeclaration?: (ctx: DerivedTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.headerTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterHeaderTypeDeclaration?: (ctx: HeaderTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.headerTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitHeaderTypeDeclaration?: (ctx: HeaderTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.structTypeDeclaration`.
     * @param ctx the parse tree
     */
    enterStructTypeDeclaration?: (ctx: StructTypeDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.structTypeDeclaration`.
     * @param ctx the parse tree
     */
    exitStructTypeDeclaration?: (ctx: StructTypeDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.headerUnionDeclaration`.
     * @param ctx the parse tree
     */
    enterHeaderUnionDeclaration?: (ctx: HeaderUnionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.headerUnionDeclaration`.
     * @param ctx the parse tree
     */
    exitHeaderUnionDeclaration?: (ctx: HeaderUnionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.structFieldList`.
     * @param ctx the parse tree
     */
    enterStructFieldList?: (ctx: StructFieldListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.structFieldList`.
     * @param ctx the parse tree
     */
    exitStructFieldList?: (ctx: StructFieldListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.structField`.
     * @param ctx the parse tree
     */
    enterStructField?: (ctx: StructFieldContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.structField`.
     * @param ctx the parse tree
     */
    exitStructField?: (ctx: StructFieldContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.enumDeclaration`.
     * @param ctx the parse tree
     */
    enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.enumDeclaration`.
     * @param ctx the parse tree
     */
    exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.specifiedIdentifierList`.
     * @param ctx the parse tree
     */
    enterSpecifiedIdentifierList?: (ctx: SpecifiedIdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.specifiedIdentifierList`.
     * @param ctx the parse tree
     */
    exitSpecifiedIdentifierList?: (ctx: SpecifiedIdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.specifiedIdentifier`.
     * @param ctx the parse tree
     */
    enterSpecifiedIdentifier?: (ctx: SpecifiedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.specifiedIdentifier`.
     * @param ctx the parse tree
     */
    exitSpecifiedIdentifier?: (ctx: SpecifiedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.errorDeclaration`.
     * @param ctx the parse tree
     */
    enterErrorDeclaration?: (ctx: ErrorDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.errorDeclaration`.
     * @param ctx the parse tree
     */
    exitErrorDeclaration?: (ctx: ErrorDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.matchKindDeclaration`.
     * @param ctx the parse tree
     */
    enterMatchKindDeclaration?: (ctx: MatchKindDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.matchKindDeclaration`.
     * @param ctx the parse tree
     */
    exitMatchKindDeclaration?: (ctx: MatchKindDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.typedefDeclaration`.
     * @param ctx the parse tree
     */
    enterTypedefDeclaration?: (ctx: TypedefDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.typedefDeclaration`.
     * @param ctx the parse tree
     */
    exitTypedefDeclaration?: (ctx: TypedefDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.assignmentOrMethodCallStatement`.
     * @param ctx the parse tree
     */
    enterAssignmentOrMethodCallStatement?: (ctx: AssignmentOrMethodCallStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.assignmentOrMethodCallStatement`.
     * @param ctx the parse tree
     */
    exitAssignmentOrMethodCallStatement?: (ctx: AssignmentOrMethodCallStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.emptyStatement`.
     * @param ctx the parse tree
     */
    enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.emptyStatement`.
     * @param ctx the parse tree
     */
    exitEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.exitStatement`.
     * @param ctx the parse tree
     */
    enterExitStatement?: (ctx: ExitStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.exitStatement`.
     * @param ctx the parse tree
     */
    exitExitStatement?: (ctx: ExitStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.conditionalStatement`.
     * @param ctx the parse tree
     */
    enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.conditionalStatement`.
     * @param ctx the parse tree
     */
    exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.directApplication`.
     * @param ctx the parse tree
     */
    enterDirectApplication?: (ctx: DirectApplicationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.directApplication`.
     * @param ctx the parse tree
     */
    exitDirectApplication?: (ctx: DirectApplicationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.blockStatement`.
     * @param ctx the parse tree
     */
    enterBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.blockStatement`.
     * @param ctx the parse tree
     */
    exitBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.statOrDeclList`.
     * @param ctx the parse tree
     */
    enterStatOrDeclList?: (ctx: StatOrDeclListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.statOrDeclList`.
     * @param ctx the parse tree
     */
    exitStatOrDeclList?: (ctx: StatOrDeclListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.switchStatement`.
     * @param ctx the parse tree
     */
    enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.switchStatement`.
     * @param ctx the parse tree
     */
    exitSwitchStatement?: (ctx: SwitchStatementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.switchCases`.
     * @param ctx the parse tree
     */
    enterSwitchCases?: (ctx: SwitchCasesContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.switchCases`.
     * @param ctx the parse tree
     */
    exitSwitchCases?: (ctx: SwitchCasesContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.switchCase`.
     * @param ctx the parse tree
     */
    enterSwitchCase?: (ctx: SwitchCaseContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.switchCase`.
     * @param ctx the parse tree
     */
    exitSwitchCase?: (ctx: SwitchCaseContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.switchLabel`.
     * @param ctx the parse tree
     */
    enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.switchLabel`.
     * @param ctx the parse tree
     */
    exitSwitchLabel?: (ctx: SwitchLabelContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.statementOrDeclaration`.
     * @param ctx the parse tree
     */
    enterStatementOrDeclaration?: (ctx: StatementOrDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.statementOrDeclaration`.
     * @param ctx the parse tree
     */
    exitStatementOrDeclaration?: (ctx: StatementOrDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.tableDeclaration`.
     * @param ctx the parse tree
     */
    enterTableDeclaration?: (ctx: TableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.tableDeclaration`.
     * @param ctx the parse tree
     */
    exitTableDeclaration?: (ctx: TableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.tablePropertyList`.
     * @param ctx the parse tree
     */
    enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.tablePropertyList`.
     * @param ctx the parse tree
     */
    exitTablePropertyList?: (ctx: TablePropertyListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.tableProperty`.
     * @param ctx the parse tree
     */
    enterTableProperty?: (ctx: TablePropertyContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.tableProperty`.
     * @param ctx the parse tree
     */
    exitTableProperty?: (ctx: TablePropertyContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.keyElementList`.
     * @param ctx the parse tree
     */
    enterKeyElementList?: (ctx: KeyElementListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.keyElementList`.
     * @param ctx the parse tree
     */
    exitKeyElementList?: (ctx: KeyElementListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.keyElement`.
     * @param ctx the parse tree
     */
    enterKeyElement?: (ctx: KeyElementContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.keyElement`.
     * @param ctx the parse tree
     */
    exitKeyElement?: (ctx: KeyElementContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.actionList`.
     * @param ctx the parse tree
     */
    enterActionList?: (ctx: ActionListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.actionList`.
     * @param ctx the parse tree
     */
    exitActionList?: (ctx: ActionListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.actionRef`.
     * @param ctx the parse tree
     */
    enterActionRef?: (ctx: ActionRefContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.actionRef`.
     * @param ctx the parse tree
     */
    exitActionRef?: (ctx: ActionRefContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.entry`.
     * @param ctx the parse tree
     */
    enterEntry?: (ctx: EntryContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.entry`.
     * @param ctx the parse tree
     */
    exitEntry?: (ctx: EntryContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.entryPriority`.
     * @param ctx the parse tree
     */
    enterEntryPriority?: (ctx: EntryPriorityContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.entryPriority`.
     * @param ctx the parse tree
     */
    exitEntryPriority?: (ctx: EntryPriorityContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.entriesList`.
     * @param ctx the parse tree
     */
    enterEntriesList?: (ctx: EntriesListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.entriesList`.
     * @param ctx the parse tree
     */
    exitEntriesList?: (ctx: EntriesListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.actionDeclaration`.
     * @param ctx the parse tree
     */
    enterActionDeclaration?: (ctx: ActionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.actionDeclaration`.
     * @param ctx the parse tree
     */
    exitActionDeclaration?: (ctx: ActionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.constantDeclaration`.
     * @param ctx the parse tree
     */
    enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.constantDeclaration`.
     * @param ctx the parse tree
     */
    exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.optInitializer`.
     * @param ctx the parse tree
     */
    enterOptInitializer?: (ctx: OptInitializerContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.optInitializer`.
     * @param ctx the parse tree
     */
    exitOptInitializer?: (ctx: OptInitializerContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.initializer`.
     * @param ctx the parse tree
     */
    enterInitializer?: (ctx: InitializerContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.initializer`.
     * @param ctx the parse tree
     */
    exitInitializer?: (ctx: InitializerContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.argumentList`.
     * @param ctx the parse tree
     */
    enterArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.argumentList`.
     * @param ctx the parse tree
     */
    exitArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.nonEmptyArgList`.
     * @param ctx the parse tree
     */
    enterNonEmptyArgList?: (ctx: NonEmptyArgListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.nonEmptyArgList`.
     * @param ctx the parse tree
     */
    exitNonEmptyArgList?: (ctx: NonEmptyArgListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.argument`.
     * @param ctx the parse tree
     */
    enterArgument?: (ctx: ArgumentContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.argument`.
     * @param ctx the parse tree
     */
    exitArgument?: (ctx: ArgumentContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.expressionList`.
     * @param ctx the parse tree
     */
    enterExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.expressionList`.
     * @param ctx the parse tree
     */
    exitExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.structuredAnnotationBody`.
     * @param ctx the parse tree
     */
    enterStructuredAnnotationBody?: (ctx: StructuredAnnotationBodyContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.structuredAnnotationBody`.
     * @param ctx the parse tree
     */
    exitStructuredAnnotationBody?: (ctx: StructuredAnnotationBodyContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.member`.
     * @param ctx the parse tree
     */
    enterMember?: (ctx: MemberContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.member`.
     * @param ctx the parse tree
     */
    exitMember?: (ctx: MemberContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.prefixedNonTypeName`.
     * @param ctx the parse tree
     */
    enterPrefixedNonTypeName?: (ctx: PrefixedNonTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.prefixedNonTypeName`.
     * @param ctx the parse tree
     */
    exitPrefixedNonTypeName?: (ctx: PrefixedNonTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.lvalue`.
     * @param ctx the parse tree
     */
    enterLvalue?: (ctx: LvalueContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.lvalue`.
     * @param ctx the parse tree
     */
    exitLvalue?: (ctx: LvalueContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.nonBraceExpression`.
     * @param ctx the parse tree
     */
    enterNonBraceExpression?: (ctx: NonBraceExpressionContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.nonBraceExpression`.
     * @param ctx the parse tree
     */
    exitNonBraceExpression?: (ctx: NonBraceExpressionContext) => void;
    /**
     * Enter a parse tree produced by `P4Parser.type_or_id`.
     * @param ctx the parse tree
     */
    enterType_or_id?: (ctx: Type_or_idContext) => void;
    /**
     * Exit a parse tree produced by `P4Parser.type_or_id`.
     * @param ctx the parse tree
     */
    exitType_or_id?: (ctx: Type_or_idContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

