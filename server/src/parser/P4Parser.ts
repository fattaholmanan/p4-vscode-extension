
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { P4Listener } from "./P4Listener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class P4Parser extends antlr.Parser {
    public static readonly PRAGMA = 1;
    public static readonly ABSTRACT = 2;
    public static readonly ACTION = 3;
    public static readonly ACTIONS = 4;
    public static readonly APPLY = 5;
    public static readonly BOOL = 6;
    public static readonly BIT = 7;
    public static readonly CONST = 8;
    public static readonly CONTROL = 9;
    public static readonly DEFAULT = 10;
    public static readonly ELSE = 11;
    public static readonly ENTRIES = 12;
    public static readonly ENUM = 13;
    public static readonly ERROR = 14;
    public static readonly EXIT = 15;
    public static readonly EXTERN = 16;
    public static readonly FALSE = 17;
    public static readonly HEADER = 18;
    public static readonly HEADER_UNION = 19;
    public static readonly IF = 20;
    public static readonly IN = 21;
    public static readonly INOUT = 22;
    public static readonly INT = 23;
    public static readonly KEY = 24;
    public static readonly LIST = 25;
    public static readonly MATCH_KIND = 26;
    public static readonly TYPE = 27;
    public static readonly OUT = 28;
    public static readonly PARSER = 29;
    public static readonly PACKAGE = 30;
    public static readonly PRIORITY = 31;
    public static readonly RETURN = 32;
    public static readonly SELECT = 33;
    public static readonly STATE = 34;
    public static readonly STRING = 35;
    public static readonly STRUCT = 36;
    public static readonly SWITCH = 37;
    public static readonly TABLE = 38;
    public static readonly THIS = 39;
    public static readonly TRANSITION = 40;
    public static readonly TRUE = 41;
    public static readonly TUPLE = 42;
    public static readonly TYPEDEF = 43;
    public static readonly VARBIT = 44;
    public static readonly VALUESET = 45;
    public static readonly VOID = 46;
    public static readonly DONTCARE = 47;
    public static readonly MASK = 48;
    public static readonly DOTS = 49;
    public static readonly RANGE = 50;
    public static readonly SHL = 51;
    public static readonly AND = 52;
    public static readonly OR = 53;
    public static readonly EQ = 54;
    public static readonly NE = 55;
    public static readonly GE = 56;
    public static readonly LE = 57;
    public static readonly PP = 58;
    public static readonly PLUS = 59;
    public static readonly PLUS_SAT = 60;
    public static readonly MINUS = 61;
    public static readonly MINUS_SAT = 62;
    public static readonly MUL = 63;
    public static readonly DIV = 64;
    public static readonly MOD = 65;
    public static readonly BIT_OR = 66;
    public static readonly BIT_AND = 67;
    public static readonly BIT_XOR = 68;
    public static readonly COMPLEMENT = 69;
    public static readonly L_PAREN = 70;
    public static readonly R_PAREN = 71;
    public static readonly L_BRACKET = 72;
    public static readonly R_BRACKET = 73;
    public static readonly INVALID_HEADER = 74;
    public static readonly L_BRACE = 75;
    public static readonly R_BRACE = 76;
    public static readonly L_ANGLE = 77;
    public static readonly R_ANGLE = 78;
    public static readonly NOT = 79;
    public static readonly COLON = 80;
    public static readonly COMMA = 81;
    public static readonly QUESTION = 82;
    public static readonly DOT = 83;
    public static readonly ASSIGN = 84;
    public static readonly SEMICOLON = 85;
    public static readonly AT = 86;
    public static readonly WS = 87;
    public static readonly COMMENT = 88;
    public static readonly LINE_COMMENT = 89;
    public static readonly STRING_LITERAL = 90;
    public static readonly IDENTIFIER = 91;
    public static readonly INTEGER = 92;
    public static readonly RULE_program = 0;
    public static readonly RULE_declaration = 1;
    public static readonly RULE_nonTypeName = 2;
    public static readonly RULE_name = 3;
    public static readonly RULE_nonTableKwName = 4;
    public static readonly RULE_optCONST = 5;
    public static readonly RULE_optAnnotations = 6;
    public static readonly RULE_annotations = 7;
    public static readonly RULE_annotation = 8;
    public static readonly RULE_annotationBody = 9;
    public static readonly RULE_annotationToken = 10;
    public static readonly RULE_kvList = 11;
    public static readonly RULE_kvPair = 12;
    public static readonly RULE_parameterList = 13;
    public static readonly RULE_nonEmptyParameterList = 14;
    public static readonly RULE_parameter = 15;
    public static readonly RULE_direction = 16;
    public static readonly RULE_packageTypeDeclaration = 17;
    public static readonly RULE_instantiation = 18;
    public static readonly RULE_objInitializer = 19;
    public static readonly RULE_objDeclarations = 20;
    public static readonly RULE_objDeclaration = 21;
    public static readonly RULE_optConstructorParameters = 22;
    public static readonly RULE_dotPrefix = 23;
    public static readonly RULE_parserDeclaration = 24;
    public static readonly RULE_parserLocalElements = 25;
    public static readonly RULE_parserLocalElement = 26;
    public static readonly RULE_parserTypeDeclaration = 27;
    public static readonly RULE_parserStates = 28;
    public static readonly RULE_parserState = 29;
    public static readonly RULE_parserStatements = 30;
    public static readonly RULE_parserStatement = 31;
    public static readonly RULE_parserBlockStatement = 32;
    public static readonly RULE_transitionStatement = 33;
    public static readonly RULE_stateExpression = 34;
    public static readonly RULE_selectExpression = 35;
    public static readonly RULE_selectCaseList = 36;
    public static readonly RULE_selectCase = 37;
    public static readonly RULE_keysetExpression = 38;
    public static readonly RULE_tupleKeysetExpression = 39;
    public static readonly RULE_optTrailingComma = 40;
    public static readonly RULE_simpleExpressionList = 41;
    public static readonly RULE_reducedSimpleKeysetExpression = 42;
    public static readonly RULE_simpleKeysetExpression = 43;
    public static readonly RULE_valueSetDeclaration = 44;
    public static readonly RULE_controlDeclaration = 45;
    public static readonly RULE_controlTypeDeclaration = 46;
    public static readonly RULE_controlLocalDeclarations = 47;
    public static readonly RULE_controlLocalDeclaration = 48;
    public static readonly RULE_controlBody = 49;
    public static readonly RULE_externDeclaration = 50;
    public static readonly RULE_methodPrototypes = 51;
    public static readonly RULE_functionPrototype = 52;
    public static readonly RULE_methodPrototype = 53;
    public static readonly RULE_typeRef = 54;
    public static readonly RULE_namedType = 55;
    public static readonly RULE_prefixedType = 56;
    public static readonly RULE_typeName = 57;
    public static readonly RULE_p4listType = 58;
    public static readonly RULE_tupleType = 59;
    public static readonly RULE_headerStackType = 60;
    public static readonly RULE_specializedType = 61;
    public static readonly RULE_baseType = 62;
    public static readonly RULE_typeOrVoid = 63;
    public static readonly RULE_optTypeParameters = 64;
    public static readonly RULE_typeParameterList = 65;
    public static readonly RULE_typeArg = 66;
    public static readonly RULE_typeArgumentList = 67;
    public static readonly RULE_realTypeArg = 68;
    public static readonly RULE_realTypeArgumentList = 69;
    public static readonly RULE_typeDeclaration = 70;
    public static readonly RULE_derivedTypeDeclaration = 71;
    public static readonly RULE_headerTypeDeclaration = 72;
    public static readonly RULE_structTypeDeclaration = 73;
    public static readonly RULE_headerUnionDeclaration = 74;
    public static readonly RULE_structFieldList = 75;
    public static readonly RULE_structField = 76;
    public static readonly RULE_enumDeclaration = 77;
    public static readonly RULE_specifiedIdentifierList = 78;
    public static readonly RULE_specifiedIdentifier = 79;
    public static readonly RULE_errorDeclaration = 80;
    public static readonly RULE_matchKindDeclaration = 81;
    public static readonly RULE_identifierList = 82;
    public static readonly RULE_typedefDeclaration = 83;
    public static readonly RULE_assignmentOrMethodCallStatement = 84;
    public static readonly RULE_emptyStatement = 85;
    public static readonly RULE_exitStatement = 86;
    public static readonly RULE_returnStatement = 87;
    public static readonly RULE_conditionalStatement = 88;
    public static readonly RULE_directApplication = 89;
    public static readonly RULE_statement = 90;
    public static readonly RULE_blockStatement = 91;
    public static readonly RULE_statOrDeclList = 92;
    public static readonly RULE_switchStatement = 93;
    public static readonly RULE_switchCases = 94;
    public static readonly RULE_switchCase = 95;
    public static readonly RULE_switchLabel = 96;
    public static readonly RULE_statementOrDeclaration = 97;
    public static readonly RULE_tableDeclaration = 98;
    public static readonly RULE_tablePropertyList = 99;
    public static readonly RULE_tableProperty = 100;
    public static readonly RULE_keyElementList = 101;
    public static readonly RULE_keyElement = 102;
    public static readonly RULE_actionList = 103;
    public static readonly RULE_actionRef = 104;
    public static readonly RULE_entry = 105;
    public static readonly RULE_entryPriority = 106;
    public static readonly RULE_entriesList = 107;
    public static readonly RULE_actionDeclaration = 108;
    public static readonly RULE_variableDeclaration = 109;
    public static readonly RULE_constantDeclaration = 110;
    public static readonly RULE_optInitializer = 111;
    public static readonly RULE_initializer = 112;
    public static readonly RULE_functionDeclaration = 113;
    public static readonly RULE_argumentList = 114;
    public static readonly RULE_nonEmptyArgList = 115;
    public static readonly RULE_argument = 116;
    public static readonly RULE_expressionList = 117;
    public static readonly RULE_structuredAnnotationBody = 118;
    public static readonly RULE_member = 119;
    public static readonly RULE_prefixedNonTypeName = 120;
    public static readonly RULE_lvalue = 121;
    public static readonly RULE_expression = 122;
    public static readonly RULE_nonBraceExpression = 123;
    public static readonly RULE_type_or_id = 124;

    public static readonly literalNames = [
        null, "'@pragma'", "'abstract'", "'action'", "'actions'", "'apply'", 
        "'bool'", "'bit'", "'const'", "'control'", "'default'", "'else'", 
        "'entries'", "'enum'", "'error'", "'exit'", "'extern'", "'false'", 
        "'header'", "'header_union'", "'if'", "'in'", "'inout'", "'int'", 
        "'key'", "'list'", "'match_kind'", "'type'", "'out'", "'parser'", 
        "'package'", "'priority'", "'return'", "'select'", "'state'", "'string'", 
        "'struct'", "'switch'", "'table'", "'this'", "'transition'", "'true'", 
        "'tuple'", "'typedef'", "'varbit'", "'value_set'", "'void'", "'_'", 
        "'&&&'", "'...'", "'..'", "'<<'", "'&&'", "'||'", "'=='", "'!='", 
        "'>='", "'<='", "'++'", "'+'", "'|+|'", "'-'", "'|-|'", "'*'", "'/'", 
        "'%'", "'|'", "'&'", "'^'", "'~'", "'('", "')'", "'['", "']'", "'{#}'", 
        "'{'", "'}'", "'<'", "'>'", "'!'", "':'", "','", "'?'", "'.'", "'='", 
        "';'", "'@'"
    ];

    public static readonly symbolicNames = [
        null, "PRAGMA", "ABSTRACT", "ACTION", "ACTIONS", "APPLY", "BOOL", 
        "BIT", "CONST", "CONTROL", "DEFAULT", "ELSE", "ENTRIES", "ENUM", 
        "ERROR", "EXIT", "EXTERN", "FALSE", "HEADER", "HEADER_UNION", "IF", 
        "IN", "INOUT", "INT", "KEY", "LIST", "MATCH_KIND", "TYPE", "OUT", 
        "PARSER", "PACKAGE", "PRIORITY", "RETURN", "SELECT", "STATE", "STRING", 
        "STRUCT", "SWITCH", "TABLE", "THIS", "TRANSITION", "TRUE", "TUPLE", 
        "TYPEDEF", "VARBIT", "VALUESET", "VOID", "DONTCARE", "MASK", "DOTS", 
        "RANGE", "SHL", "AND", "OR", "EQ", "NE", "GE", "LE", "PP", "PLUS", 
        "PLUS_SAT", "MINUS", "MINUS_SAT", "MUL", "DIV", "MOD", "BIT_OR", 
        "BIT_AND", "BIT_XOR", "COMPLEMENT", "L_PAREN", "R_PAREN", "L_BRACKET", 
        "R_BRACKET", "INVALID_HEADER", "L_BRACE", "R_BRACE", "L_ANGLE", 
        "R_ANGLE", "NOT", "COLON", "COMMA", "QUESTION", "DOT", "ASSIGN", 
        "SEMICOLON", "AT", "WS", "COMMENT", "LINE_COMMENT", "STRING_LITERAL", 
        "IDENTIFIER", "INTEGER"
    ];
    public static readonly ruleNames = [
        "program", "declaration", "nonTypeName", "name", "nonTableKwName", 
        "optCONST", "optAnnotations", "annotations", "annotation", "annotationBody", 
        "annotationToken", "kvList", "kvPair", "parameterList", "nonEmptyParameterList", 
        "parameter", "direction", "packageTypeDeclaration", "instantiation", 
        "objInitializer", "objDeclarations", "objDeclaration", "optConstructorParameters", 
        "dotPrefix", "parserDeclaration", "parserLocalElements", "parserLocalElement", 
        "parserTypeDeclaration", "parserStates", "parserState", "parserStatements", 
        "parserStatement", "parserBlockStatement", "transitionStatement", 
        "stateExpression", "selectExpression", "selectCaseList", "selectCase", 
        "keysetExpression", "tupleKeysetExpression", "optTrailingComma", 
        "simpleExpressionList", "reducedSimpleKeysetExpression", "simpleKeysetExpression", 
        "valueSetDeclaration", "controlDeclaration", "controlTypeDeclaration", 
        "controlLocalDeclarations", "controlLocalDeclaration", "controlBody", 
        "externDeclaration", "methodPrototypes", "functionPrototype", "methodPrototype", 
        "typeRef", "namedType", "prefixedType", "typeName", "p4listType", 
        "tupleType", "headerStackType", "specializedType", "baseType", "typeOrVoid", 
        "optTypeParameters", "typeParameterList", "typeArg", "typeArgumentList", 
        "realTypeArg", "realTypeArgumentList", "typeDeclaration", "derivedTypeDeclaration", 
        "headerTypeDeclaration", "structTypeDeclaration", "headerUnionDeclaration", 
        "structFieldList", "structField", "enumDeclaration", "specifiedIdentifierList", 
        "specifiedIdentifier", "errorDeclaration", "matchKindDeclaration", 
        "identifierList", "typedefDeclaration", "assignmentOrMethodCallStatement", 
        "emptyStatement", "exitStatement", "returnStatement", "conditionalStatement", 
        "directApplication", "statement", "blockStatement", "statOrDeclList", 
        "switchStatement", "switchCases", "switchCase", "switchLabel", "statementOrDeclaration", 
        "tableDeclaration", "tablePropertyList", "tableProperty", "keyElementList", 
        "keyElement", "actionList", "actionRef", "entry", "entryPriority", 
        "entriesList", "actionDeclaration", "variableDeclaration", "constantDeclaration", 
        "optInitializer", "initializer", "functionDeclaration", "argumentList", 
        "nonEmptyArgList", "argument", "expressionList", "structuredAnnotationBody", 
        "member", "prefixedNonTypeName", "lvalue", "expression", "nonBraceExpression", 
        "type_or_id",
    ];

    public get grammarFileName(): string { return "P4.g4"; }
    public get literalNames(): (string | null)[] { return P4Parser.literalNames; }
    public get symbolicNames(): (string | null)[] { return P4Parser.symbolicNames; }
    public get ruleNames(): string[] { return P4Parser.ruleNames; }
    public get serializedATN(): number[] { return P4Parser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, P4Parser._ATN, P4Parser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, P4Parser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1854759882) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2947) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 269) !== 0)) {
                {
                this.state = 252;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case P4Parser.PRAGMA:
                case P4Parser.ACTION:
                case P4Parser.BOOL:
                case P4Parser.BIT:
                case P4Parser.CONST:
                case P4Parser.CONTROL:
                case P4Parser.ENUM:
                case P4Parser.ERROR:
                case P4Parser.EXTERN:
                case P4Parser.HEADER:
                case P4Parser.HEADER_UNION:
                case P4Parser.INT:
                case P4Parser.LIST:
                case P4Parser.MATCH_KIND:
                case P4Parser.TYPE:
                case P4Parser.PARSER:
                case P4Parser.PACKAGE:
                case P4Parser.STRING:
                case P4Parser.STRUCT:
                case P4Parser.TUPLE:
                case P4Parser.TYPEDEF:
                case P4Parser.VARBIT:
                case P4Parser.VOID:
                case P4Parser.DOT:
                case P4Parser.AT:
                case P4Parser.IDENTIFIER:
                    {
                    this.state = 250;
                    this.declaration();
                    }
                    break;
                case P4Parser.SEMICOLON:
                    {
                    this.state = 251;
                    this.match(P4Parser.SEMICOLON);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 257;
            this.match(P4Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaration(): DeclarationContext {
        let localContext = new DeclarationContext(this.context, this.state);
        this.enterRule(localContext, 2, P4Parser.RULE_declaration);
        try {
            this.state = 269;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 259;
                this.constantDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 260;
                this.externDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 261;
                this.actionDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 262;
                this.parserDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 263;
                this.typeDeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 264;
                this.controlDeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 265;
                this.instantiation();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 266;
                this.errorDeclaration();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 267;
                this.matchKindDeclaration();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 268;
                this.functionDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonTypeName(): NonTypeNameContext {
        let localContext = new NonTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 4, P4Parser.RULE_nonTypeName);
        try {
            this.state = 279;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 271;
                this.type_or_id();
                }
                break;
            case P4Parser.APPLY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 272;
                this.match(P4Parser.APPLY);
                }
                break;
            case P4Parser.KEY:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 273;
                this.match(P4Parser.KEY);
                }
                break;
            case P4Parser.ACTIONS:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 274;
                this.match(P4Parser.ACTIONS);
                }
                break;
            case P4Parser.STATE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 275;
                this.match(P4Parser.STATE);
                }
                break;
            case P4Parser.ENTRIES:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 276;
                this.match(P4Parser.ENTRIES);
                }
                break;
            case P4Parser.TYPE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 277;
                this.match(P4Parser.TYPE);
                }
                break;
            case P4Parser.PRIORITY:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 278;
                this.match(P4Parser.PRIORITY);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public name(): NameContext {
        let localContext = new NameContext(this.context, this.state);
        this.enterRule(localContext, 6, P4Parser.RULE_name);
        try {
            this.state = 283;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.ENTRIES:
            case P4Parser.KEY:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 281;
                this.nonTypeName();
                }
                break;
            case P4Parser.LIST:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 282;
                this.match(P4Parser.LIST);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonTableKwName(): NonTableKwNameContext {
        let localContext = new NonTableKwNameContext(this.context, this.state);
        this.enterRule(localContext, 8, P4Parser.RULE_nonTableKwName);
        try {
            this.state = 290;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 285;
                this.type_or_id();
                }
                break;
            case P4Parser.APPLY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 286;
                this.match(P4Parser.APPLY);
                }
                break;
            case P4Parser.STATE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 287;
                this.match(P4Parser.STATE);
                }
                break;
            case P4Parser.TYPE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 288;
                this.match(P4Parser.TYPE);
                }
                break;
            case P4Parser.PRIORITY:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 289;
                this.match(P4Parser.PRIORITY);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optCONST(): OptCONSTContext {
        let localContext = new OptCONSTContext(this.context, this.state);
        this.enterRule(localContext, 10, P4Parser.RULE_optCONST);
        try {
            this.state = 294;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.DEFAULT:
            case P4Parser.ENTRIES:
            case P4Parser.ERROR:
            case P4Parser.FALSE:
            case P4Parser.KEY:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.THIS:
            case P4Parser.TRUE:
            case P4Parser.DONTCARE:
            case P4Parser.DOTS:
            case P4Parser.PLUS:
            case P4Parser.MINUS:
            case P4Parser.COMPLEMENT:
            case P4Parser.L_PAREN:
            case P4Parser.INVALID_HEADER:
            case P4Parser.L_BRACE:
            case P4Parser.NOT:
            case P4Parser.DOT:
            case P4Parser.STRING_LITERAL:
            case P4Parser.IDENTIFIER:
            case P4Parser.INTEGER:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.CONST:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 293;
                this.match(P4Parser.CONST);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optAnnotations(): OptAnnotationsContext {
        let localContext = new OptAnnotationsContext(this.context, this.state);
        this.enterRule(localContext, 12, P4Parser.RULE_optAnnotations);
        try {
            this.state = 298;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ABSTRACT:
            case P4Parser.ACTION:
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.BOOL:
            case P4Parser.BIT:
            case P4Parser.CONST:
            case P4Parser.CONTROL:
            case P4Parser.ENTRIES:
            case P4Parser.ENUM:
            case P4Parser.ERROR:
            case P4Parser.EXTERN:
            case P4Parser.HEADER:
            case P4Parser.HEADER_UNION:
            case P4Parser.IN:
            case P4Parser.INOUT:
            case P4Parser.INT:
            case P4Parser.KEY:
            case P4Parser.LIST:
            case P4Parser.MATCH_KIND:
            case P4Parser.TYPE:
            case P4Parser.OUT:
            case P4Parser.PARSER:
            case P4Parser.PACKAGE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.STRING:
            case P4Parser.STRUCT:
            case P4Parser.TABLE:
            case P4Parser.TUPLE:
            case P4Parser.TYPEDEF:
            case P4Parser.VARBIT:
            case P4Parser.VALUESET:
            case P4Parser.VOID:
            case P4Parser.L_BRACE:
            case P4Parser.DOT:
            case P4Parser.SEMICOLON:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.PRAGMA:
            case P4Parser.AT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 297;
                this.annotations(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public annotations(): AnnotationsContext;
    public annotations(_p: number): AnnotationsContext;
    public annotations(_p?: number): AnnotationsContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AnnotationsContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 14;
        this.enterRecursionRule(localContext, 14, P4Parser.RULE_annotations, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 301;
            this.annotation();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 307;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new AnnotationsContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_annotations);
                    this.state = 303;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 304;
                    this.annotation();
                    }
                    }
                }
                this.state = 309;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public annotation(): AnnotationContext {
        let localContext = new AnnotationContext(this.context, this.state);
        this.enterRule(localContext, 16, P4Parser.RULE_annotation);
        try {
            this.state = 328;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 310;
                this.match(P4Parser.AT);
                this.state = 311;
                this.name();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 312;
                this.match(P4Parser.AT);
                this.state = 313;
                this.name();
                this.state = 314;
                this.match(P4Parser.L_PAREN);
                this.state = 315;
                this.annotationBody(0);
                this.state = 316;
                this.match(P4Parser.R_PAREN);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 318;
                this.match(P4Parser.AT);
                this.state = 319;
                this.name();
                this.state = 320;
                this.match(P4Parser.L_BRACKET);
                this.state = 321;
                this.structuredAnnotationBody();
                this.state = 322;
                this.match(P4Parser.R_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 324;
                this.match(P4Parser.PRAGMA);
                this.state = 325;
                this.name();
                this.state = 326;
                this.annotationBody(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public annotationBody(): AnnotationBodyContext;
    public annotationBody(_p: number): AnnotationBodyContext;
    public annotationBody(_p?: number): AnnotationBodyContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AnnotationBodyContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 18;
        this.enterRecursionRule(localContext, 18, P4Parser.RULE_annotationBody, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 340;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 338;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
                    case 1:
                        {
                        localContext = new AnnotationBodyContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_annotationBody);
                        this.state = 331;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 332;
                        this.match(P4Parser.L_PAREN);
                        this.state = 333;
                        this.annotationBody(0);
                        this.state = 334;
                        this.match(P4Parser.R_PAREN);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AnnotationBodyContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_annotationBody);
                        this.state = 336;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 337;
                        this.annotationToken();
                        }
                        break;
                    }
                    }
                }
                this.state = 342;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public annotationToken(): AnnotationTokenContext {
        let localContext = new AnnotationTokenContext(this.context, this.state);
        this.enterRule(localContext, 20, P4Parser.RULE_annotationToken);
        try {
            this.state = 429;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ABSTRACT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 343;
                this.match(P4Parser.ABSTRACT);
                }
                break;
            case P4Parser.ACTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 344;
                this.match(P4Parser.ACTION);
                }
                break;
            case P4Parser.ACTIONS:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 345;
                this.match(P4Parser.ACTIONS);
                }
                break;
            case P4Parser.APPLY:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 346;
                this.match(P4Parser.APPLY);
                }
                break;
            case P4Parser.BOOL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 347;
                this.match(P4Parser.BOOL);
                }
                break;
            case P4Parser.BIT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 348;
                this.match(P4Parser.BIT);
                }
                break;
            case P4Parser.CONST:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 349;
                this.match(P4Parser.CONST);
                }
                break;
            case P4Parser.CONTROL:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 350;
                this.match(P4Parser.CONTROL);
                }
                break;
            case P4Parser.DEFAULT:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 351;
                this.match(P4Parser.DEFAULT);
                }
                break;
            case P4Parser.ELSE:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 352;
                this.match(P4Parser.ELSE);
                }
                break;
            case P4Parser.ENTRIES:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 353;
                this.match(P4Parser.ENTRIES);
                }
                break;
            case P4Parser.ENUM:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 354;
                this.match(P4Parser.ENUM);
                }
                break;
            case P4Parser.ERROR:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 355;
                this.match(P4Parser.ERROR);
                }
                break;
            case P4Parser.EXIT:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 356;
                this.match(P4Parser.EXIT);
                }
                break;
            case P4Parser.EXTERN:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 357;
                this.match(P4Parser.EXTERN);
                }
                break;
            case P4Parser.FALSE:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 358;
                this.match(P4Parser.FALSE);
                }
                break;
            case P4Parser.HEADER:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 359;
                this.match(P4Parser.HEADER);
                }
                break;
            case P4Parser.HEADER_UNION:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 360;
                this.match(P4Parser.HEADER_UNION);
                }
                break;
            case P4Parser.IF:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 361;
                this.match(P4Parser.IF);
                }
                break;
            case P4Parser.IN:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 362;
                this.match(P4Parser.IN);
                }
                break;
            case P4Parser.INOUT:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 363;
                this.match(P4Parser.INOUT);
                }
                break;
            case P4Parser.INT:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 364;
                this.match(P4Parser.INT);
                }
                break;
            case P4Parser.KEY:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 365;
                this.match(P4Parser.KEY);
                }
                break;
            case P4Parser.MATCH_KIND:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 366;
                this.match(P4Parser.MATCH_KIND);
                }
                break;
            case P4Parser.TYPE:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 367;
                this.match(P4Parser.TYPE);
                }
                break;
            case P4Parser.OUT:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 368;
                this.match(P4Parser.OUT);
                }
                break;
            case P4Parser.PARSER:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 369;
                this.match(P4Parser.PARSER);
                }
                break;
            case P4Parser.PACKAGE:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 370;
                this.match(P4Parser.PACKAGE);
                }
                break;
            case P4Parser.PRAGMA:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 371;
                this.match(P4Parser.PRAGMA);
                }
                break;
            case P4Parser.PRIORITY:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 372;
                this.match(P4Parser.PRIORITY);
                }
                break;
            case P4Parser.RETURN:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 373;
                this.match(P4Parser.RETURN);
                }
                break;
            case P4Parser.SELECT:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 374;
                this.match(P4Parser.SELECT);
                }
                break;
            case P4Parser.STATE:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 375;
                this.match(P4Parser.STATE);
                }
                break;
            case P4Parser.STRING:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 376;
                this.match(P4Parser.STRING);
                }
                break;
            case P4Parser.STRUCT:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 377;
                this.match(P4Parser.STRUCT);
                }
                break;
            case P4Parser.SWITCH:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 378;
                this.match(P4Parser.SWITCH);
                }
                break;
            case P4Parser.TABLE:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 379;
                this.match(P4Parser.TABLE);
                }
                break;
            case P4Parser.THIS:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 380;
                this.match(P4Parser.THIS);
                }
                break;
            case P4Parser.TRANSITION:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 381;
                this.match(P4Parser.TRANSITION);
                }
                break;
            case P4Parser.TRUE:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 382;
                this.match(P4Parser.TRUE);
                }
                break;
            case P4Parser.TUPLE:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 383;
                this.match(P4Parser.TUPLE);
                }
                break;
            case P4Parser.TYPEDEF:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 384;
                this.match(P4Parser.TYPEDEF);
                }
                break;
            case P4Parser.VARBIT:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 385;
                this.match(P4Parser.VARBIT);
                }
                break;
            case P4Parser.VALUESET:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 386;
                this.match(P4Parser.VALUESET);
                }
                break;
            case P4Parser.LIST:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 387;
                this.match(P4Parser.LIST);
                }
                break;
            case P4Parser.VOID:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 388;
                this.match(P4Parser.VOID);
                }
                break;
            case P4Parser.DONTCARE:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 389;
                this.match(P4Parser.DONTCARE);
                }
                break;
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 390;
                this.type_or_id();
                }
                break;
            case P4Parser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 391;
                this.match(P4Parser.STRING_LITERAL);
                }
                break;
            case P4Parser.INTEGER:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 392;
                this.match(P4Parser.INTEGER);
                }
                break;
            case P4Parser.MASK:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 393;
                this.match(P4Parser.MASK);
                }
                break;
            case P4Parser.RANGE:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 394;
                this.match(P4Parser.RANGE);
                }
                break;
            case P4Parser.DOTS:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 395;
                this.match(P4Parser.DOTS);
                }
                break;
            case P4Parser.SHL:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 396;
                this.match(P4Parser.SHL);
                }
                break;
            case P4Parser.AND:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 397;
                this.match(P4Parser.AND);
                }
                break;
            case P4Parser.OR:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 398;
                this.match(P4Parser.OR);
                }
                break;
            case P4Parser.EQ:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 399;
                this.match(P4Parser.EQ);
                }
                break;
            case P4Parser.NE:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 400;
                this.match(P4Parser.NE);
                }
                break;
            case P4Parser.GE:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 401;
                this.match(P4Parser.GE);
                }
                break;
            case P4Parser.LE:
                this.enterOuterAlt(localContext, 60);
                {
                this.state = 402;
                this.match(P4Parser.LE);
                }
                break;
            case P4Parser.PP:
                this.enterOuterAlt(localContext, 61);
                {
                this.state = 403;
                this.match(P4Parser.PP);
                }
                break;
            case P4Parser.PLUS:
                this.enterOuterAlt(localContext, 62);
                {
                this.state = 404;
                this.match(P4Parser.PLUS);
                }
                break;
            case P4Parser.PLUS_SAT:
                this.enterOuterAlt(localContext, 63);
                {
                this.state = 405;
                this.match(P4Parser.PLUS_SAT);
                }
                break;
            case P4Parser.MINUS:
                this.enterOuterAlt(localContext, 64);
                {
                this.state = 406;
                this.match(P4Parser.MINUS);
                }
                break;
            case P4Parser.MINUS_SAT:
                this.enterOuterAlt(localContext, 65);
                {
                this.state = 407;
                this.match(P4Parser.MINUS_SAT);
                }
                break;
            case P4Parser.MUL:
                this.enterOuterAlt(localContext, 66);
                {
                this.state = 408;
                this.match(P4Parser.MUL);
                }
                break;
            case P4Parser.DIV:
                this.enterOuterAlt(localContext, 67);
                {
                this.state = 409;
                this.match(P4Parser.DIV);
                }
                break;
            case P4Parser.MOD:
                this.enterOuterAlt(localContext, 68);
                {
                this.state = 410;
                this.match(P4Parser.MOD);
                }
                break;
            case P4Parser.BIT_OR:
                this.enterOuterAlt(localContext, 69);
                {
                this.state = 411;
                this.match(P4Parser.BIT_OR);
                }
                break;
            case P4Parser.BIT_AND:
                this.enterOuterAlt(localContext, 70);
                {
                this.state = 412;
                this.match(P4Parser.BIT_AND);
                }
                break;
            case P4Parser.BIT_XOR:
                this.enterOuterAlt(localContext, 71);
                {
                this.state = 413;
                this.match(P4Parser.BIT_XOR);
                }
                break;
            case P4Parser.COMPLEMENT:
                this.enterOuterAlt(localContext, 72);
                {
                this.state = 414;
                this.match(P4Parser.COMPLEMENT);
                }
                break;
            case P4Parser.L_BRACKET:
                this.enterOuterAlt(localContext, 73);
                {
                this.state = 415;
                this.match(P4Parser.L_BRACKET);
                }
                break;
            case P4Parser.R_BRACKET:
                this.enterOuterAlt(localContext, 74);
                {
                this.state = 416;
                this.match(P4Parser.R_BRACKET);
                }
                break;
            case P4Parser.L_BRACE:
                this.enterOuterAlt(localContext, 75);
                {
                this.state = 417;
                this.match(P4Parser.L_BRACE);
                }
                break;
            case P4Parser.R_BRACE:
                this.enterOuterAlt(localContext, 76);
                {
                this.state = 418;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case P4Parser.L_ANGLE:
                this.enterOuterAlt(localContext, 77);
                {
                this.state = 419;
                this.match(P4Parser.L_ANGLE);
                }
                break;
            case P4Parser.R_ANGLE:
                this.enterOuterAlt(localContext, 78);
                {
                this.state = 420;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            case P4Parser.NOT:
                this.enterOuterAlt(localContext, 79);
                {
                this.state = 421;
                this.match(P4Parser.NOT);
                }
                break;
            case P4Parser.COLON:
                this.enterOuterAlt(localContext, 80);
                {
                this.state = 422;
                this.match(P4Parser.COLON);
                }
                break;
            case P4Parser.COMMA:
                this.enterOuterAlt(localContext, 81);
                {
                this.state = 423;
                this.match(P4Parser.COMMA);
                }
                break;
            case P4Parser.QUESTION:
                this.enterOuterAlt(localContext, 82);
                {
                this.state = 424;
                this.match(P4Parser.QUESTION);
                }
                break;
            case P4Parser.DOT:
                this.enterOuterAlt(localContext, 83);
                {
                this.state = 425;
                this.match(P4Parser.DOT);
                }
                break;
            case P4Parser.ASSIGN:
                this.enterOuterAlt(localContext, 84);
                {
                this.state = 426;
                this.match(P4Parser.ASSIGN);
                }
                break;
            case P4Parser.SEMICOLON:
                this.enterOuterAlt(localContext, 85);
                {
                this.state = 427;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case P4Parser.AT:
                this.enterOuterAlt(localContext, 86);
                {
                this.state = 428;
                this.match(P4Parser.AT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public kvList(): KvListContext;
    public kvList(_p: number): KvListContext;
    public kvList(_p?: number): KvListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new KvListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 22;
        this.enterRecursionRule(localContext, 22, P4Parser.RULE_kvList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 432;
            this.kvPair();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 439;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new KvListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_kvList);
                    this.state = 434;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 435;
                    this.match(P4Parser.COMMA);
                    this.state = 436;
                    this.kvPair();
                    }
                    }
                }
                this.state = 441;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public kvPair(): KvPairContext {
        let localContext = new KvPairContext(this.context, this.state);
        this.enterRule(localContext, 24, P4Parser.RULE_kvPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 442;
            this.name();
            this.state = 443;
            this.match(P4Parser.ASSIGN);
            this.state = 444;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 26, P4Parser.RULE_parameterList);
        try {
            this.state = 448;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.R_PAREN:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.PRAGMA:
            case P4Parser.BOOL:
            case P4Parser.BIT:
            case P4Parser.ERROR:
            case P4Parser.IN:
            case P4Parser.INOUT:
            case P4Parser.INT:
            case P4Parser.LIST:
            case P4Parser.MATCH_KIND:
            case P4Parser.OUT:
            case P4Parser.STRING:
            case P4Parser.TUPLE:
            case P4Parser.VARBIT:
            case P4Parser.DOT:
            case P4Parser.AT:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 447;
                this.nonEmptyParameterList(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public nonEmptyParameterList(): NonEmptyParameterListContext;
    public nonEmptyParameterList(_p: number): NonEmptyParameterListContext;
    public nonEmptyParameterList(_p?: number): NonEmptyParameterListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NonEmptyParameterListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 28;
        this.enterRecursionRule(localContext, 28, P4Parser.RULE_nonEmptyParameterList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 451;
            this.parameter();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 458;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new NonEmptyParameterListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonEmptyParameterList);
                    this.state = 453;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 454;
                    this.match(P4Parser.COMMA);
                    this.state = 455;
                    this.parameter();
                    }
                    }
                }
                this.state = 460;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 30, P4Parser.RULE_parameter);
        try {
            this.state = 473;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 461;
                this.optAnnotations();
                this.state = 462;
                this.direction();
                this.state = 463;
                this.typeRef();
                this.state = 464;
                this.name();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 466;
                this.optAnnotations();
                this.state = 467;
                this.direction();
                this.state = 468;
                this.typeRef();
                this.state = 469;
                this.name();
                this.state = 470;
                this.match(P4Parser.ASSIGN);
                this.state = 471;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public direction(): DirectionContext {
        let localContext = new DirectionContext(this.context, this.state);
        this.enterRule(localContext, 32, P4Parser.RULE_direction);
        try {
            this.state = 479;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.IN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 475;
                this.match(P4Parser.IN);
                }
                break;
            case P4Parser.OUT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 476;
                this.match(P4Parser.OUT);
                }
                break;
            case P4Parser.INOUT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 477;
                this.match(P4Parser.INOUT);
                }
                break;
            case P4Parser.BOOL:
            case P4Parser.BIT:
            case P4Parser.ERROR:
            case P4Parser.INT:
            case P4Parser.LIST:
            case P4Parser.MATCH_KIND:
            case P4Parser.STRING:
            case P4Parser.TUPLE:
            case P4Parser.VARBIT:
            case P4Parser.DOT:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public packageTypeDeclaration(): PackageTypeDeclarationContext {
        let localContext = new PackageTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 34, P4Parser.RULE_packageTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 481;
            this.optAnnotations();
            this.state = 482;
            this.match(P4Parser.PACKAGE);
            this.state = 483;
            this.name();
            this.state = 484;
            this.optTypeParameters();
            this.state = 485;
            this.match(P4Parser.L_PAREN);
            this.state = 486;
            this.parameterList();
            this.state = 487;
            this.match(P4Parser.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public instantiation(): InstantiationContext {
        let localContext = new InstantiationContext(this.context, this.state);
        this.enterRule(localContext, 36, P4Parser.RULE_instantiation);
        try {
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 489;
                this.annotations(0);
                this.state = 490;
                this.typeRef();
                this.state = 491;
                this.match(P4Parser.L_PAREN);
                this.state = 492;
                this.argumentList();
                this.state = 493;
                this.match(P4Parser.R_PAREN);
                this.state = 494;
                this.name();
                this.state = 495;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 497;
                this.typeRef();
                this.state = 498;
                this.match(P4Parser.L_PAREN);
                this.state = 499;
                this.argumentList();
                this.state = 500;
                this.match(P4Parser.R_PAREN);
                this.state = 501;
                this.name();
                this.state = 502;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 504;
                this.annotations(0);
                this.state = 505;
                this.typeRef();
                this.state = 506;
                this.match(P4Parser.L_PAREN);
                this.state = 507;
                this.argumentList();
                this.state = 508;
                this.match(P4Parser.R_PAREN);
                this.state = 509;
                this.name();
                this.state = 510;
                this.match(P4Parser.ASSIGN);
                this.state = 511;
                this.objInitializer();
                this.state = 512;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 514;
                this.typeRef();
                this.state = 515;
                this.match(P4Parser.L_PAREN);
                this.state = 516;
                this.argumentList();
                this.state = 517;
                this.match(P4Parser.R_PAREN);
                this.state = 518;
                this.name();
                this.state = 519;
                this.match(P4Parser.ASSIGN);
                this.state = 520;
                this.objInitializer();
                this.state = 521;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objInitializer(): ObjInitializerContext {
        let localContext = new ObjInitializerContext(this.context, this.state);
        this.enterRule(localContext, 38, P4Parser.RULE_objInitializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 525;
            this.match(P4Parser.L_BRACE);
            this.state = 526;
            this.objDeclarations(0);
            this.state = 527;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public objDeclarations(): ObjDeclarationsContext;
    public objDeclarations(_p: number): ObjDeclarationsContext;
    public objDeclarations(_p?: number): ObjDeclarationsContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ObjDeclarationsContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 40;
        this.enterRecursionRule(localContext, 40, P4Parser.RULE_objDeclarations, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 534;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ObjDeclarationsContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_objDeclarations);
                    this.state = 530;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 531;
                    this.objDeclaration();
                    }
                    }
                }
                this.state = 536;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public objDeclaration(): ObjDeclarationContext {
        let localContext = new ObjDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 42, P4Parser.RULE_objDeclaration);
        try {
            this.state = 539;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 537;
                this.functionDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 538;
                this.instantiation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optConstructorParameters(): OptConstructorParametersContext {
        let localContext = new OptConstructorParametersContext(this.context, this.state);
        this.enterRule(localContext, 44, P4Parser.RULE_optConstructorParameters);
        try {
            this.state = 546;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.L_BRACE:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.L_PAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 542;
                this.match(P4Parser.L_PAREN);
                this.state = 543;
                this.parameterList();
                this.state = 544;
                this.match(P4Parser.R_PAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dotPrefix(): DotPrefixContext {
        let localContext = new DotPrefixContext(this.context, this.state);
        this.enterRule(localContext, 46, P4Parser.RULE_dotPrefix);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 548;
            this.match(P4Parser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parserDeclaration(): ParserDeclarationContext {
        let localContext = new ParserDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 48, P4Parser.RULE_parserDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 550;
            this.parserTypeDeclaration();
            this.state = 551;
            this.optConstructorParameters();
            this.state = 552;
            this.match(P4Parser.L_BRACE);
            this.state = 553;
            this.parserLocalElements(0);
            this.state = 554;
            this.parserStates(0);
            this.state = 555;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public parserLocalElements(): ParserLocalElementsContext;
    public parserLocalElements(_p: number): ParserLocalElementsContext;
    public parserLocalElements(_p?: number): ParserLocalElementsContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ParserLocalElementsContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 50;
        this.enterRecursionRule(localContext, 50, P4Parser.RULE_parserLocalElements, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 562;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ParserLocalElementsContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_parserLocalElements);
                    this.state = 558;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 559;
                    this.parserLocalElement();
                    }
                    }
                }
                this.state = 564;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public parserLocalElement(): ParserLocalElementContext {
        let localContext = new ParserLocalElementContext(this.context, this.state);
        this.enterRule(localContext, 52, P4Parser.RULE_parserLocalElement);
        try {
            this.state = 569;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 565;
                this.constantDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 566;
                this.instantiation();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 567;
                this.variableDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 568;
                this.valueSetDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parserTypeDeclaration(): ParserTypeDeclarationContext {
        let localContext = new ParserTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 54, P4Parser.RULE_parserTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 571;
            this.optAnnotations();
            this.state = 572;
            this.match(P4Parser.PARSER);
            this.state = 573;
            this.name();
            this.state = 574;
            this.optTypeParameters();
            this.state = 575;
            this.match(P4Parser.L_PAREN);
            this.state = 576;
            this.parameterList();
            this.state = 577;
            this.match(P4Parser.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public parserStates(): ParserStatesContext;
    public parserStates(_p: number): ParserStatesContext;
    public parserStates(_p?: number): ParserStatesContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ParserStatesContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 56;
        this.enterRecursionRule(localContext, 56, P4Parser.RULE_parserStates, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 580;
            this.parserState();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 586;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ParserStatesContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_parserStates);
                    this.state = 582;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 583;
                    this.parserState();
                    }
                    }
                }
                this.state = 588;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public parserState(): ParserStateContext {
        let localContext = new ParserStateContext(this.context, this.state);
        this.enterRule(localContext, 58, P4Parser.RULE_parserState);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 589;
            this.optAnnotations();
            this.state = 590;
            this.match(P4Parser.STATE);
            this.state = 591;
            this.name();
            this.state = 592;
            this.match(P4Parser.L_BRACE);
            this.state = 593;
            this.parserStatements(0);
            this.state = 594;
            this.transitionStatement();
            this.state = 595;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public parserStatements(): ParserStatementsContext;
    public parserStatements(_p: number): ParserStatementsContext;
    public parserStatements(_p?: number): ParserStatementsContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ParserStatementsContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 60;
        this.enterRecursionRule(localContext, 60, P4Parser.RULE_parserStatements, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 602;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ParserStatementsContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_parserStatements);
                    this.state = 598;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 599;
                    this.parserStatement();
                    }
                    }
                }
                this.state = 604;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public parserStatement(): ParserStatementContext {
        let localContext = new ParserStatementContext(this.context, this.state);
        this.enterRule(localContext, 62, P4Parser.RULE_parserStatement);
        try {
            this.state = 612;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 605;
                this.assignmentOrMethodCallStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 606;
                this.directApplication();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 607;
                this.emptyStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 608;
                this.variableDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 609;
                this.constantDeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 610;
                this.parserBlockStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 611;
                this.conditionalStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parserBlockStatement(): ParserBlockStatementContext {
        let localContext = new ParserBlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 64, P4Parser.RULE_parserBlockStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 614;
            this.optAnnotations();
            this.state = 615;
            this.match(P4Parser.L_BRACE);
            this.state = 616;
            this.parserStatements(0);
            this.state = 617;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transitionStatement(): TransitionStatementContext {
        let localContext = new TransitionStatementContext(this.context, this.state);
        this.enterRule(localContext, 66, P4Parser.RULE_transitionStatement);
        try {
            this.state = 622;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.R_BRACE:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.TRANSITION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 620;
                this.match(P4Parser.TRANSITION);
                this.state = 621;
                this.stateExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stateExpression(): StateExpressionContext {
        let localContext = new StateExpressionContext(this.context, this.state);
        this.enterRule(localContext, 68, P4Parser.RULE_stateExpression);
        try {
            this.state = 628;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.ENTRIES:
            case P4Parser.KEY:
            case P4Parser.LIST:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 624;
                this.name();
                this.state = 625;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case P4Parser.SELECT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 627;
                this.selectExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectExpression(): SelectExpressionContext {
        let localContext = new SelectExpressionContext(this.context, this.state);
        this.enterRule(localContext, 70, P4Parser.RULE_selectExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 630;
            this.match(P4Parser.SELECT);
            this.state = 631;
            this.match(P4Parser.L_PAREN);
            this.state = 632;
            this.expressionList(0);
            this.state = 633;
            this.match(P4Parser.R_PAREN);
            this.state = 634;
            this.match(P4Parser.L_BRACE);
            this.state = 635;
            this.selectCaseList(0);
            this.state = 636;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public selectCaseList(): SelectCaseListContext;
    public selectCaseList(_p: number): SelectCaseListContext;
    public selectCaseList(_p?: number): SelectCaseListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new SelectCaseListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 72;
        this.enterRecursionRule(localContext, 72, P4Parser.RULE_selectCaseList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 643;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new SelectCaseListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_selectCaseList);
                    this.state = 639;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 640;
                    this.selectCase();
                    }
                    }
                }
                this.state = 645;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public selectCase(): SelectCaseContext {
        let localContext = new SelectCaseContext(this.context, this.state);
        this.enterRule(localContext, 74, P4Parser.RULE_selectCase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
            this.keysetExpression();
            this.state = 647;
            this.match(P4Parser.COLON);
            this.state = 648;
            this.name();
            this.state = 649;
            this.match(P4Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keysetExpression(): KeysetExpressionContext {
        let localContext = new KeysetExpressionContext(this.context, this.state);
        this.enterRule(localContext, 76, P4Parser.RULE_keysetExpression);
        try {
            this.state = 653;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 651;
                this.tupleKeysetExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 652;
                this.simpleKeysetExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleKeysetExpression(): TupleKeysetExpressionContext {
        let localContext = new TupleKeysetExpressionContext(this.context, this.state);
        this.enterRule(localContext, 78, P4Parser.RULE_tupleKeysetExpression);
        try {
            this.state = 665;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 655;
                this.match(P4Parser.L_PAREN);
                this.state = 656;
                this.simpleKeysetExpression();
                this.state = 657;
                this.match(P4Parser.COMMA);
                this.state = 658;
                this.simpleExpressionList(0);
                this.state = 659;
                this.match(P4Parser.R_PAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 661;
                this.match(P4Parser.L_PAREN);
                this.state = 662;
                this.reducedSimpleKeysetExpression();
                this.state = 663;
                this.match(P4Parser.R_PAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optTrailingComma(): OptTrailingCommaContext {
        let localContext = new OptTrailingCommaContext(this.context, this.state);
        this.enterRule(localContext, 80, P4Parser.RULE_optTrailingComma);
        try {
            this.state = 669;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.R_BRACKET:
            case P4Parser.R_BRACE:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.COMMA:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 668;
                this.match(P4Parser.COMMA);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public simpleExpressionList(): SimpleExpressionListContext;
    public simpleExpressionList(_p: number): SimpleExpressionListContext;
    public simpleExpressionList(_p?: number): SimpleExpressionListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new SimpleExpressionListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 82;
        this.enterRecursionRule(localContext, 82, P4Parser.RULE_simpleExpressionList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 672;
            this.simpleKeysetExpression();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 679;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new SimpleExpressionListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_simpleExpressionList);
                    this.state = 674;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 675;
                    this.match(P4Parser.COMMA);
                    this.state = 676;
                    this.simpleKeysetExpression();
                    }
                    }
                }
                this.state = 681;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public reducedSimpleKeysetExpression(): ReducedSimpleKeysetExpressionContext {
        let localContext = new ReducedSimpleKeysetExpressionContext(this.context, this.state);
        this.enterRule(localContext, 84, P4Parser.RULE_reducedSimpleKeysetExpression);
        try {
            this.state = 692;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 682;
                this.expression(0);
                this.state = 683;
                this.match(P4Parser.MASK);
                this.state = 684;
                this.expression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 686;
                this.expression(0);
                this.state = 687;
                this.match(P4Parser.RANGE);
                this.state = 688;
                this.expression(0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 690;
                this.match(P4Parser.DEFAULT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 691;
                this.match(P4Parser.DONTCARE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleKeysetExpression(): SimpleKeysetExpressionContext {
        let localContext = new SimpleKeysetExpressionContext(this.context, this.state);
        this.enterRule(localContext, 86, P4Parser.RULE_simpleKeysetExpression);
        try {
            this.state = 705;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 694;
                this.expression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 695;
                this.expression(0);
                this.state = 696;
                this.match(P4Parser.MASK);
                this.state = 697;
                this.expression(0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 699;
                this.expression(0);
                this.state = 700;
                this.match(P4Parser.RANGE);
                this.state = 701;
                this.expression(0);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 703;
                this.match(P4Parser.DEFAULT);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 704;
                this.match(P4Parser.DONTCARE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueSetDeclaration(): ValueSetDeclarationContext {
        let localContext = new ValueSetDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 88, P4Parser.RULE_valueSetDeclaration);
        try {
            this.state = 740;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 707;
                this.optAnnotations();
                this.state = 708;
                this.match(P4Parser.VALUESET);
                this.state = 709;
                this.match(P4Parser.L_ANGLE);
                this.state = 710;
                this.baseType();
                this.state = 711;
                this.match(P4Parser.R_ANGLE);
                this.state = 712;
                this.match(P4Parser.L_PAREN);
                this.state = 713;
                this.expression(0);
                this.state = 714;
                this.match(P4Parser.R_PAREN);
                this.state = 715;
                this.name();
                this.state = 716;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 718;
                this.optAnnotations();
                this.state = 719;
                this.match(P4Parser.VALUESET);
                this.state = 720;
                this.match(P4Parser.L_ANGLE);
                this.state = 721;
                this.tupleType();
                this.state = 722;
                this.match(P4Parser.R_ANGLE);
                this.state = 723;
                this.match(P4Parser.L_PAREN);
                this.state = 724;
                this.expression(0);
                this.state = 725;
                this.match(P4Parser.R_PAREN);
                this.state = 726;
                this.name();
                this.state = 727;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 729;
                this.optAnnotations();
                this.state = 730;
                this.match(P4Parser.VALUESET);
                this.state = 731;
                this.match(P4Parser.L_ANGLE);
                this.state = 732;
                this.typeName();
                this.state = 733;
                this.match(P4Parser.R_ANGLE);
                this.state = 734;
                this.match(P4Parser.L_PAREN);
                this.state = 735;
                this.expression(0);
                this.state = 736;
                this.match(P4Parser.R_PAREN);
                this.state = 737;
                this.name();
                this.state = 738;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public controlDeclaration(): ControlDeclarationContext {
        let localContext = new ControlDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 90, P4Parser.RULE_controlDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 742;
            this.controlTypeDeclaration();
            this.state = 743;
            this.optConstructorParameters();
            this.state = 744;
            this.match(P4Parser.L_BRACE);
            this.state = 745;
            this.controlLocalDeclarations(0);
            this.state = 746;
            this.match(P4Parser.APPLY);
            this.state = 747;
            this.controlBody();
            this.state = 748;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public controlTypeDeclaration(): ControlTypeDeclarationContext {
        let localContext = new ControlTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 92, P4Parser.RULE_controlTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 750;
            this.optAnnotations();
            this.state = 751;
            this.match(P4Parser.CONTROL);
            this.state = 752;
            this.name();
            this.state = 753;
            this.optTypeParameters();
            this.state = 754;
            this.match(P4Parser.L_PAREN);
            this.state = 755;
            this.parameterList();
            this.state = 756;
            this.match(P4Parser.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public controlLocalDeclarations(): ControlLocalDeclarationsContext;
    public controlLocalDeclarations(_p: number): ControlLocalDeclarationsContext;
    public controlLocalDeclarations(_p?: number): ControlLocalDeclarationsContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ControlLocalDeclarationsContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 94;
        this.enterRecursionRule(localContext, 94, P4Parser.RULE_controlLocalDeclarations, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 763;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ControlLocalDeclarationsContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_controlLocalDeclarations);
                    this.state = 759;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 760;
                    this.controlLocalDeclaration();
                    }
                    }
                }
                this.state = 765;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public controlLocalDeclaration(): ControlLocalDeclarationContext {
        let localContext = new ControlLocalDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 96, P4Parser.RULE_controlLocalDeclaration);
        try {
            this.state = 771;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 766;
                this.constantDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 767;
                this.actionDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 768;
                this.tableDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 769;
                this.instantiation();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 770;
                this.variableDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public controlBody(): ControlBodyContext {
        let localContext = new ControlBodyContext(this.context, this.state);
        this.enterRule(localContext, 98, P4Parser.RULE_controlBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 773;
            this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externDeclaration(): ExternDeclarationContext {
        let localContext = new ExternDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 100, P4Parser.RULE_externDeclaration);
        try {
            this.state = 793;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 775;
                this.optAnnotations();
                this.state = 776;
                this.match(P4Parser.EXTERN);
                this.state = 777;
                this.nonTypeName();
                this.state = 778;
                this.optTypeParameters();
                this.state = 779;
                this.match(P4Parser.L_BRACE);
                this.state = 780;
                this.methodPrototypes(0);
                this.state = 781;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 783;
                this.optAnnotations();
                this.state = 784;
                this.match(P4Parser.EXTERN);
                this.state = 785;
                this.functionPrototype();
                this.state = 786;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 788;
                this.optAnnotations();
                this.state = 789;
                this.match(P4Parser.EXTERN);
                this.state = 790;
                this.name();
                this.state = 791;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public methodPrototypes(): MethodPrototypesContext;
    public methodPrototypes(_p: number): MethodPrototypesContext;
    public methodPrototypes(_p?: number): MethodPrototypesContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new MethodPrototypesContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 102;
        this.enterRecursionRule(localContext, 102, P4Parser.RULE_methodPrototypes, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 800;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new MethodPrototypesContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_methodPrototypes);
                    this.state = 796;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 797;
                    this.methodPrototype();
                    }
                    }
                }
                this.state = 802;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public functionPrototype(): FunctionPrototypeContext {
        let localContext = new FunctionPrototypeContext(this.context, this.state);
        this.enterRule(localContext, 104, P4Parser.RULE_functionPrototype);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 803;
            this.typeOrVoid();
            this.state = 804;
            this.name();
            this.state = 805;
            this.optTypeParameters();
            this.state = 806;
            this.match(P4Parser.L_PAREN);
            this.state = 807;
            this.parameterList();
            this.state = 808;
            this.match(P4Parser.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodPrototype(): MethodPrototypeContext {
        let localContext = new MethodPrototypeContext(this.context, this.state);
        this.enterRule(localContext, 106, P4Parser.RULE_methodPrototype);
        try {
            this.state = 826;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 810;
                this.optAnnotations();
                this.state = 811;
                this.functionPrototype();
                this.state = 812;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 814;
                this.optAnnotations();
                this.state = 815;
                this.match(P4Parser.ABSTRACT);
                this.state = 816;
                this.functionPrototype();
                this.state = 817;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 819;
                this.optAnnotations();
                this.state = 820;
                this.type_or_id();
                this.state = 821;
                this.match(P4Parser.L_PAREN);
                this.state = 822;
                this.parameterList();
                this.state = 823;
                this.match(P4Parser.R_PAREN);
                this.state = 824;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeRef(): TypeRefContext {
        let localContext = new TypeRefContext(this.context, this.state);
        this.enterRule(localContext, 108, P4Parser.RULE_typeRef);
        try {
            this.state = 834;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 828;
                this.baseType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 829;
                this.typeName();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 830;
                this.specializedType();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 831;
                this.headerStackType();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 832;
                this.p4listType();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 833;
                this.tupleType();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedType(): NamedTypeContext {
        let localContext = new NamedTypeContext(this.context, this.state);
        this.enterRule(localContext, 110, P4Parser.RULE_namedType);
        try {
            this.state = 838;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 836;
                this.typeName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 837;
                this.specializedType();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prefixedType(): PrefixedTypeContext {
        let localContext = new PrefixedTypeContext(this.context, this.state);
        this.enterRule(localContext, 112, P4Parser.RULE_prefixedType);
        try {
            this.state = 844;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 840;
                this.type_or_id();
                }
                break;
            case P4Parser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 841;
                this.dotPrefix();
                this.state = 842;
                this.type_or_id();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeName(): TypeNameContext {
        let localContext = new TypeNameContext(this.context, this.state);
        this.enterRule(localContext, 114, P4Parser.RULE_typeName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 846;
            this.prefixedType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public p4listType(): P4listTypeContext {
        let localContext = new P4listTypeContext(this.context, this.state);
        this.enterRule(localContext, 116, P4Parser.RULE_p4listType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 848;
            this.match(P4Parser.LIST);
            this.state = 849;
            this.match(P4Parser.L_ANGLE);
            this.state = 850;
            this.typeArg();
            this.state = 851;
            this.match(P4Parser.R_ANGLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleType(): TupleTypeContext {
        let localContext = new TupleTypeContext(this.context, this.state);
        this.enterRule(localContext, 118, P4Parser.RULE_tupleType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 853;
            this.match(P4Parser.TUPLE);
            this.state = 854;
            this.match(P4Parser.L_ANGLE);
            this.state = 855;
            this.typeArgumentList(0);
            this.state = 856;
            this.match(P4Parser.R_ANGLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public headerStackType(): HeaderStackTypeContext {
        let localContext = new HeaderStackTypeContext(this.context, this.state);
        this.enterRule(localContext, 120, P4Parser.RULE_headerStackType);
        try {
            this.state = 868;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 858;
                this.typeName();
                this.state = 859;
                this.match(P4Parser.L_BRACKET);
                this.state = 860;
                this.expression(0);
                this.state = 861;
                this.match(P4Parser.R_BRACKET);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 863;
                this.specializedType();
                this.state = 864;
                this.match(P4Parser.L_BRACKET);
                this.state = 865;
                this.expression(0);
                this.state = 866;
                this.match(P4Parser.R_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public specializedType(): SpecializedTypeContext {
        let localContext = new SpecializedTypeContext(this.context, this.state);
        this.enterRule(localContext, 122, P4Parser.RULE_specializedType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 870;
            this.typeName();
            this.state = 871;
            this.match(P4Parser.L_ANGLE);
            this.state = 872;
            this.typeArgumentList(0);
            this.state = 873;
            this.match(P4Parser.R_ANGLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public baseType(): BaseTypeContext {
        let localContext = new BaseTypeContext(this.context, this.state);
        this.enterRule(localContext, 124, P4Parser.RULE_baseType);
        try {
            this.state = 914;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 875;
                this.match(P4Parser.BOOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 876;
                this.match(P4Parser.MATCH_KIND);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 877;
                this.match(P4Parser.ERROR);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 878;
                this.match(P4Parser.BIT);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 879;
                this.match(P4Parser.STRING);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 880;
                this.match(P4Parser.INT);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 881;
                this.match(P4Parser.BIT);
                this.state = 882;
                this.match(P4Parser.L_ANGLE);
                this.state = 883;
                this.match(P4Parser.INTEGER);
                this.state = 884;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 885;
                this.match(P4Parser.INT);
                this.state = 886;
                this.match(P4Parser.L_ANGLE);
                this.state = 887;
                this.match(P4Parser.INTEGER);
                this.state = 888;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 889;
                this.match(P4Parser.VARBIT);
                this.state = 890;
                this.match(P4Parser.L_ANGLE);
                this.state = 891;
                this.match(P4Parser.INTEGER);
                this.state = 892;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 893;
                this.match(P4Parser.BIT);
                this.state = 894;
                this.match(P4Parser.L_ANGLE);
                this.state = 895;
                this.match(P4Parser.L_PAREN);
                this.state = 896;
                this.expression(0);
                this.state = 897;
                this.match(P4Parser.R_PAREN);
                this.state = 898;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 900;
                this.match(P4Parser.INT);
                this.state = 901;
                this.match(P4Parser.L_ANGLE);
                this.state = 902;
                this.match(P4Parser.L_PAREN);
                this.state = 903;
                this.expression(0);
                this.state = 904;
                this.match(P4Parser.R_PAREN);
                this.state = 905;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 907;
                this.match(P4Parser.VARBIT);
                this.state = 908;
                this.match(P4Parser.L_ANGLE);
                this.state = 909;
                this.match(P4Parser.L_PAREN);
                this.state = 910;
                this.expression(0);
                this.state = 911;
                this.match(P4Parser.R_PAREN);
                this.state = 912;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeOrVoid(): TypeOrVoidContext {
        let localContext = new TypeOrVoidContext(this.context, this.state);
        this.enterRule(localContext, 126, P4Parser.RULE_typeOrVoid);
        try {
            this.state = 919;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 916;
                this.typeRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 917;
                this.match(P4Parser.VOID);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 918;
                this.type_or_id();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optTypeParameters(): OptTypeParametersContext {
        let localContext = new OptTypeParametersContext(this.context, this.state);
        this.enterRule(localContext, 128, P4Parser.RULE_optTypeParameters);
        try {
            this.state = 926;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.L_PAREN:
            case P4Parser.L_BRACE:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.L_ANGLE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 922;
                this.match(P4Parser.L_ANGLE);
                this.state = 923;
                this.typeParameterList(0);
                this.state = 924;
                this.match(P4Parser.R_ANGLE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public typeParameterList(): TypeParameterListContext;
    public typeParameterList(_p: number): TypeParameterListContext;
    public typeParameterList(_p?: number): TypeParameterListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeParameterListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 130;
        this.enterRecursionRule(localContext, 130, P4Parser.RULE_typeParameterList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 929;
            this.name();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 936;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeParameterListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_typeParameterList);
                    this.state = 931;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 932;
                    this.match(P4Parser.COMMA);
                    this.state = 933;
                    this.name();
                    }
                    }
                }
                this.state = 938;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public typeArg(): TypeArgContext {
        let localContext = new TypeArgContext(this.context, this.state);
        this.enterRule(localContext, 132, P4Parser.RULE_typeArg);
        try {
            this.state = 943;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 939;
                this.typeRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 940;
                this.nonTypeName();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 941;
                this.match(P4Parser.VOID);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 942;
                this.match(P4Parser.DONTCARE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public typeArgumentList(): TypeArgumentListContext;
    public typeArgumentList(_p: number): TypeArgumentListContext;
    public typeArgumentList(_p?: number): TypeArgumentListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeArgumentListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 134;
        this.enterRecursionRule(localContext, 134, P4Parser.RULE_typeArgumentList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 947;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                {
                }
                break;
            case 2:
                {
                this.state = 946;
                this.typeArg();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 954;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeArgumentListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_typeArgumentList);
                    this.state = 949;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 950;
                    this.match(P4Parser.COMMA);
                    this.state = 951;
                    this.typeArg();
                    }
                    }
                }
                this.state = 956;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public realTypeArg(): RealTypeArgContext {
        let localContext = new RealTypeArgContext(this.context, this.state);
        this.enterRule(localContext, 136, P4Parser.RULE_realTypeArg);
        try {
            this.state = 960;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.BOOL:
            case P4Parser.BIT:
            case P4Parser.ERROR:
            case P4Parser.INT:
            case P4Parser.LIST:
            case P4Parser.MATCH_KIND:
            case P4Parser.STRING:
            case P4Parser.TUPLE:
            case P4Parser.VARBIT:
            case P4Parser.DOT:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 957;
                this.typeRef();
                }
                break;
            case P4Parser.VOID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 958;
                this.match(P4Parser.VOID);
                }
                break;
            case P4Parser.DONTCARE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 959;
                this.match(P4Parser.DONTCARE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public realTypeArgumentList(): RealTypeArgumentListContext;
    public realTypeArgumentList(_p: number): RealTypeArgumentListContext;
    public realTypeArgumentList(_p?: number): RealTypeArgumentListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RealTypeArgumentListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 138;
        this.enterRecursionRule(localContext, 138, P4Parser.RULE_realTypeArgumentList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 963;
            this.realTypeArg();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 970;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new RealTypeArgumentListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_realTypeArgumentList);
                    this.state = 965;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 966;
                    this.match(P4Parser.COMMA);
                    this.state = 967;
                    this.typeArg();
                    }
                    }
                }
                this.state = 972;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public typeDeclaration(): TypeDeclarationContext {
        let localContext = new TypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 140, P4Parser.RULE_typeDeclaration);
        try {
            this.state = 986;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 973;
                this.derivedTypeDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 974;
                this.typedefDeclaration();
                this.state = 975;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 977;
                this.parserTypeDeclaration();
                this.state = 978;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 980;
                this.controlTypeDeclaration();
                this.state = 981;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 983;
                this.packageTypeDeclaration();
                this.state = 984;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public derivedTypeDeclaration(): DerivedTypeDeclarationContext {
        let localContext = new DerivedTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 142, P4Parser.RULE_derivedTypeDeclaration);
        try {
            this.state = 992;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 988;
                this.headerTypeDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 989;
                this.headerUnionDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 990;
                this.structTypeDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 991;
                this.enumDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public headerTypeDeclaration(): HeaderTypeDeclarationContext {
        let localContext = new HeaderTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 144, P4Parser.RULE_headerTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 994;
            this.optAnnotations();
            this.state = 995;
            this.match(P4Parser.HEADER);
            this.state = 996;
            this.name();
            this.state = 997;
            this.optTypeParameters();
            this.state = 998;
            this.match(P4Parser.L_BRACE);
            this.state = 999;
            this.structFieldList(0);
            this.state = 1000;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structTypeDeclaration(): StructTypeDeclarationContext {
        let localContext = new StructTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 146, P4Parser.RULE_structTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1002;
            this.optAnnotations();
            this.state = 1003;
            this.match(P4Parser.STRUCT);
            this.state = 1004;
            this.name();
            this.state = 1005;
            this.optTypeParameters();
            this.state = 1006;
            this.match(P4Parser.L_BRACE);
            this.state = 1007;
            this.structFieldList(0);
            this.state = 1008;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public headerUnionDeclaration(): HeaderUnionDeclarationContext {
        let localContext = new HeaderUnionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 148, P4Parser.RULE_headerUnionDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1010;
            this.optAnnotations();
            this.state = 1011;
            this.match(P4Parser.HEADER_UNION);
            this.state = 1012;
            this.name();
            this.state = 1013;
            this.optTypeParameters();
            this.state = 1014;
            this.match(P4Parser.L_BRACE);
            this.state = 1015;
            this.structFieldList(0);
            this.state = 1016;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public structFieldList(): StructFieldListContext;
    public structFieldList(_p: number): StructFieldListContext;
    public structFieldList(_p?: number): StructFieldListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new StructFieldListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 150;
        this.enterRecursionRule(localContext, 150, P4Parser.RULE_structFieldList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1023;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 57, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new StructFieldListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_structFieldList);
                    this.state = 1019;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1020;
                    this.structField();
                    }
                    }
                }
                this.state = 1025;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 57, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public structField(): StructFieldContext {
        let localContext = new StructFieldContext(this.context, this.state);
        this.enterRule(localContext, 152, P4Parser.RULE_structField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1026;
            this.optAnnotations();
            this.state = 1027;
            this.typeRef();
            this.state = 1028;
            this.name();
            this.state = 1029;
            this.match(P4Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDeclaration(): EnumDeclarationContext {
        let localContext = new EnumDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 154, P4Parser.RULE_enumDeclaration);
        try {
            this.state = 1048;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1031;
                this.optAnnotations();
                this.state = 1032;
                this.match(P4Parser.ENUM);
                this.state = 1033;
                this.name();
                this.state = 1034;
                this.match(P4Parser.L_BRACE);
                this.state = 1035;
                this.identifierList(0);
                this.state = 1036;
                this.optTrailingComma();
                this.state = 1037;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1039;
                this.optAnnotations();
                this.state = 1040;
                this.match(P4Parser.ENUM);
                this.state = 1041;
                this.typeRef();
                this.state = 1042;
                this.name();
                this.state = 1043;
                this.match(P4Parser.L_BRACE);
                this.state = 1044;
                this.specifiedIdentifierList(0);
                this.state = 1045;
                this.optTrailingComma();
                this.state = 1046;
                this.match(P4Parser.R_BRACE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public specifiedIdentifierList(): SpecifiedIdentifierListContext;
    public specifiedIdentifierList(_p: number): SpecifiedIdentifierListContext;
    public specifiedIdentifierList(_p?: number): SpecifiedIdentifierListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new SpecifiedIdentifierListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 156;
        this.enterRecursionRule(localContext, 156, P4Parser.RULE_specifiedIdentifierList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1051;
            this.specifiedIdentifier();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1058;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 59, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new SpecifiedIdentifierListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_specifiedIdentifierList);
                    this.state = 1053;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1054;
                    this.match(P4Parser.COMMA);
                    this.state = 1055;
                    this.specifiedIdentifier();
                    }
                    }
                }
                this.state = 1060;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 59, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public specifiedIdentifier(): SpecifiedIdentifierContext {
        let localContext = new SpecifiedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 158, P4Parser.RULE_specifiedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1061;
            this.name();
            this.state = 1062;
            this.match(P4Parser.ASSIGN);
            this.state = 1063;
            this.initializer();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorDeclaration(): ErrorDeclarationContext {
        let localContext = new ErrorDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 160, P4Parser.RULE_errorDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1065;
            this.match(P4Parser.ERROR);
            this.state = 1066;
            this.match(P4Parser.L_BRACE);
            this.state = 1067;
            this.identifierList(0);
            this.state = 1068;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchKindDeclaration(): MatchKindDeclarationContext {
        let localContext = new MatchKindDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 162, P4Parser.RULE_matchKindDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1070;
            this.match(P4Parser.MATCH_KIND);
            this.state = 1071;
            this.match(P4Parser.L_BRACE);
            this.state = 1072;
            this.identifierList(0);
            this.state = 1073;
            this.optTrailingComma();
            this.state = 1074;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public identifierList(): IdentifierListContext;
    public identifierList(_p: number): IdentifierListContext;
    public identifierList(_p?: number): IdentifierListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new IdentifierListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 164;
        this.enterRecursionRule(localContext, 164, P4Parser.RULE_identifierList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1077;
            this.name();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1084;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new IdentifierListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_identifierList);
                    this.state = 1079;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1080;
                    this.match(P4Parser.COMMA);
                    this.state = 1081;
                    this.name();
                    }
                    }
                }
                this.state = 1086;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public typedefDeclaration(): TypedefDeclarationContext {
        let localContext = new TypedefDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 166, P4Parser.RULE_typedefDeclaration);
        try {
            this.state = 1102;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1087;
                this.optAnnotations();
                this.state = 1088;
                this.match(P4Parser.TYPEDEF);
                this.state = 1089;
                this.typeRef();
                this.state = 1090;
                this.name();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1092;
                this.optAnnotations();
                this.state = 1093;
                this.match(P4Parser.TYPEDEF);
                this.state = 1094;
                this.derivedTypeDeclaration();
                this.state = 1095;
                this.name();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1097;
                this.optAnnotations();
                this.state = 1098;
                this.match(P4Parser.TYPE);
                this.state = 1099;
                this.typeRef();
                this.state = 1100;
                this.name();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentOrMethodCallStatement(): AssignmentOrMethodCallStatementContext {
        let localContext = new AssignmentOrMethodCallStatementContext(this.context, this.state);
        this.enterRule(localContext, 168, P4Parser.RULE_assignmentOrMethodCallStatement);
        try {
            this.state = 1124;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1104;
                this.lvalue(0);
                this.state = 1105;
                this.match(P4Parser.L_PAREN);
                this.state = 1106;
                this.argumentList();
                this.state = 1107;
                this.match(P4Parser.R_PAREN);
                this.state = 1108;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1110;
                this.lvalue(0);
                this.state = 1111;
                this.match(P4Parser.L_ANGLE);
                this.state = 1112;
                this.typeArgumentList(0);
                this.state = 1113;
                this.match(P4Parser.R_ANGLE);
                this.state = 1114;
                this.match(P4Parser.L_PAREN);
                this.state = 1115;
                this.argumentList();
                this.state = 1116;
                this.match(P4Parser.R_PAREN);
                this.state = 1117;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1119;
                this.lvalue(0);
                this.state = 1120;
                this.match(P4Parser.ASSIGN);
                this.state = 1121;
                this.expression(0);
                this.state = 1122;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyStatement(): EmptyStatementContext {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 170, P4Parser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1126;
            this.match(P4Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exitStatement(): ExitStatementContext {
        let localContext = new ExitStatementContext(this.context, this.state);
        this.enterRule(localContext, 172, P4Parser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1128;
            this.match(P4Parser.EXIT);
            this.state = 1129;
            this.match(P4Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 174, P4Parser.RULE_returnStatement);
        try {
            this.state = 1137;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1131;
                this.match(P4Parser.RETURN);
                this.state = 1132;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1133;
                this.match(P4Parser.RETURN);
                this.state = 1134;
                this.expression(0);
                this.state = 1135;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditionalStatement(): ConditionalStatementContext {
        let localContext = new ConditionalStatementContext(this.context, this.state);
        this.enterRule(localContext, 176, P4Parser.RULE_conditionalStatement);
        try {
            this.state = 1153;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1139;
                this.match(P4Parser.IF);
                this.state = 1140;
                this.match(P4Parser.L_PAREN);
                this.state = 1141;
                this.expression(0);
                this.state = 1142;
                this.match(P4Parser.R_PAREN);
                this.state = 1143;
                this.statement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1145;
                this.match(P4Parser.IF);
                this.state = 1146;
                this.match(P4Parser.L_PAREN);
                this.state = 1147;
                this.expression(0);
                this.state = 1148;
                this.match(P4Parser.R_PAREN);
                this.state = 1149;
                this.statement();
                this.state = 1150;
                this.match(P4Parser.ELSE);
                this.state = 1151;
                this.statement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directApplication(): DirectApplicationContext {
        let localContext = new DirectApplicationContext(this.context, this.state);
        this.enterRule(localContext, 178, P4Parser.RULE_directApplication);
        try {
            this.state = 1171;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1155;
                this.typeName();
                this.state = 1156;
                this.match(P4Parser.DOT);
                this.state = 1157;
                this.match(P4Parser.APPLY);
                this.state = 1158;
                this.match(P4Parser.L_PAREN);
                this.state = 1159;
                this.argumentList();
                this.state = 1160;
                this.match(P4Parser.R_PAREN);
                this.state = 1161;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1163;
                this.specializedType();
                this.state = 1164;
                this.match(P4Parser.DOT);
                this.state = 1165;
                this.match(P4Parser.APPLY);
                this.state = 1166;
                this.match(P4Parser.L_PAREN);
                this.state = 1167;
                this.argumentList();
                this.state = 1168;
                this.match(P4Parser.R_PAREN);
                this.state = 1169;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 180, P4Parser.RULE_statement);
        try {
            this.state = 1181;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1173;
                this.assignmentOrMethodCallStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1174;
                this.directApplication();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1175;
                this.conditionalStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1176;
                this.emptyStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1177;
                this.blockStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1178;
                this.returnStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1179;
                this.exitStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1180;
                this.switchStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 182, P4Parser.RULE_blockStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1183;
            this.optAnnotations();
            this.state = 1184;
            this.match(P4Parser.L_BRACE);
            this.state = 1185;
            this.statOrDeclList(0);
            this.state = 1186;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public statOrDeclList(): StatOrDeclListContext;
    public statOrDeclList(_p: number): StatOrDeclListContext;
    public statOrDeclList(_p?: number): StatOrDeclListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new StatOrDeclListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 184;
        this.enterRecursionRule(localContext, 184, P4Parser.RULE_statOrDeclList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1193;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new StatOrDeclListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_statOrDeclList);
                    this.state = 1189;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1190;
                    this.statementOrDeclaration();
                    }
                    }
                }
                this.state = 1195;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public switchStatement(): SwitchStatementContext {
        let localContext = new SwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 186, P4Parser.RULE_switchStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1196;
            this.match(P4Parser.SWITCH);
            this.state = 1197;
            this.match(P4Parser.L_PAREN);
            this.state = 1198;
            this.expression(0);
            this.state = 1199;
            this.match(P4Parser.R_PAREN);
            this.state = 1200;
            this.match(P4Parser.L_BRACE);
            this.state = 1201;
            this.switchCases(0);
            this.state = 1202;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public switchCases(): SwitchCasesContext;
    public switchCases(_p: number): SwitchCasesContext;
    public switchCases(_p?: number): SwitchCasesContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new SwitchCasesContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 188;
        this.enterRecursionRule(localContext, 188, P4Parser.RULE_switchCases, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1209;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new SwitchCasesContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_switchCases);
                    this.state = 1205;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1206;
                    this.switchCase();
                    }
                    }
                }
                this.state = 1211;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public switchCase(): SwitchCaseContext {
        let localContext = new SwitchCaseContext(this.context, this.state);
        this.enterRule(localContext, 190, P4Parser.RULE_switchCase);
        try {
            this.state = 1219;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1212;
                this.switchLabel();
                this.state = 1213;
                this.match(P4Parser.COLON);
                this.state = 1214;
                this.blockStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1216;
                this.switchLabel();
                this.state = 1217;
                this.match(P4Parser.COLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchLabel(): SwitchLabelContext {
        let localContext = new SwitchLabelContext(this.context, this.state);
        this.enterRule(localContext, 192, P4Parser.RULE_switchLabel);
        try {
            this.state = 1223;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.DEFAULT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1221;
                this.match(P4Parser.DEFAULT);
                }
                break;
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.ENTRIES:
            case P4Parser.ERROR:
            case P4Parser.FALSE:
            case P4Parser.KEY:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.THIS:
            case P4Parser.TRUE:
            case P4Parser.PLUS:
            case P4Parser.MINUS:
            case P4Parser.COMPLEMENT:
            case P4Parser.L_PAREN:
            case P4Parser.NOT:
            case P4Parser.DOT:
            case P4Parser.STRING_LITERAL:
            case P4Parser.IDENTIFIER:
            case P4Parser.INTEGER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1222;
                this.nonBraceExpression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementOrDeclaration(): StatementOrDeclarationContext {
        let localContext = new StatementOrDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 194, P4Parser.RULE_statementOrDeclaration);
        try {
            this.state = 1229;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1225;
                this.variableDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1226;
                this.constantDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1227;
                this.statement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1228;
                this.instantiation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableDeclaration(): TableDeclarationContext {
        let localContext = new TableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 196, P4Parser.RULE_tableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1231;
            this.optAnnotations();
            this.state = 1232;
            this.match(P4Parser.TABLE);
            this.state = 1233;
            this.name();
            this.state = 1234;
            this.match(P4Parser.L_BRACE);
            this.state = 1235;
            this.tablePropertyList(0);
            this.state = 1236;
            this.match(P4Parser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public tablePropertyList(): TablePropertyListContext;
    public tablePropertyList(_p: number): TablePropertyListContext;
    public tablePropertyList(_p?: number): TablePropertyListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TablePropertyListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 198;
        this.enterRecursionRule(localContext, 198, P4Parser.RULE_tablePropertyList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1239;
            this.tableProperty();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1245;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TablePropertyListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_tablePropertyList);
                    this.state = 1241;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1242;
                    this.tableProperty();
                    }
                    }
                }
                this.state = 1247;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public tableProperty(): TablePropertyContext {
        let localContext = new TablePropertyContext(this.context, this.state);
        this.enterRule(localContext, 200, P4Parser.RULE_tableProperty);
        try {
            this.state = 1275;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1248;
                this.match(P4Parser.KEY);
                this.state = 1249;
                this.match(P4Parser.ASSIGN);
                this.state = 1250;
                this.match(P4Parser.L_BRACE);
                this.state = 1251;
                this.keyElementList(0);
                this.state = 1252;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1254;
                this.match(P4Parser.ACTIONS);
                this.state = 1255;
                this.match(P4Parser.ASSIGN);
                this.state = 1256;
                this.match(P4Parser.L_BRACE);
                this.state = 1257;
                this.actionList(0);
                this.state = 1258;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1260;
                this.optAnnotations();
                this.state = 1261;
                this.optCONST();
                this.state = 1262;
                this.match(P4Parser.ENTRIES);
                this.state = 1263;
                this.match(P4Parser.ASSIGN);
                this.state = 1264;
                this.match(P4Parser.L_BRACE);
                this.state = 1265;
                this.entriesList(0);
                this.state = 1266;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1268;
                this.optAnnotations();
                this.state = 1269;
                this.optCONST();
                this.state = 1270;
                this.nonTableKwName();
                this.state = 1271;
                this.match(P4Parser.ASSIGN);
                this.state = 1272;
                this.initializer();
                this.state = 1273;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public keyElementList(): KeyElementListContext;
    public keyElementList(_p: number): KeyElementListContext;
    public keyElementList(_p?: number): KeyElementListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new KeyElementListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 202;
        this.enterRecursionRule(localContext, 202, P4Parser.RULE_keyElementList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1282;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new KeyElementListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_keyElementList);
                    this.state = 1278;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1279;
                    this.keyElement();
                    }
                    }
                }
                this.state = 1284;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public keyElement(): KeyElementContext {
        let localContext = new KeyElementContext(this.context, this.state);
        this.enterRule(localContext, 204, P4Parser.RULE_keyElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1285;
            this.expression(0);
            this.state = 1286;
            this.match(P4Parser.COLON);
            this.state = 1287;
            this.name();
            this.state = 1288;
            this.optAnnotations();
            this.state = 1289;
            this.match(P4Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public actionList(): ActionListContext;
    public actionList(_p: number): ActionListContext;
    public actionList(_p?: number): ActionListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ActionListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 206;
        this.enterRecursionRule(localContext, 206, P4Parser.RULE_actionList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1299;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ActionListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_actionList);
                    this.state = 1292;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1293;
                    this.optAnnotations();
                    this.state = 1294;
                    this.actionRef();
                    this.state = 1295;
                    this.match(P4Parser.SEMICOLON);
                    }
                    }
                }
                this.state = 1301;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public actionRef(): ActionRefContext {
        let localContext = new ActionRefContext(this.context, this.state);
        this.enterRule(localContext, 208, P4Parser.RULE_actionRef);
        try {
            this.state = 1308;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1302;
                this.prefixedNonTypeName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1303;
                this.prefixedNonTypeName();
                this.state = 1304;
                this.match(P4Parser.L_PAREN);
                this.state = 1305;
                this.argumentList();
                this.state = 1306;
                this.match(P4Parser.R_PAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public entry(): EntryContext {
        let localContext = new EntryContext(this.context, this.state);
        this.enterRule(localContext, 210, P4Parser.RULE_entry);
        try {
            this.state = 1325;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1310;
                this.optCONST();
                this.state = 1311;
                this.entryPriority();
                this.state = 1312;
                this.keysetExpression();
                this.state = 1313;
                this.match(P4Parser.COLON);
                this.state = 1314;
                this.actionRef();
                this.state = 1315;
                this.optAnnotations();
                this.state = 1316;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1318;
                this.optCONST();
                this.state = 1319;
                this.keysetExpression();
                this.state = 1320;
                this.match(P4Parser.COLON);
                this.state = 1321;
                this.actionRef();
                this.state = 1322;
                this.optAnnotations();
                this.state = 1323;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public entryPriority(): EntryPriorityContext {
        let localContext = new EntryPriorityContext(this.context, this.state);
        this.enterRule(localContext, 212, P4Parser.RULE_entryPriority);
        try {
            this.state = 1338;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1327;
                this.match(P4Parser.PRIORITY);
                this.state = 1328;
                this.match(P4Parser.ASSIGN);
                this.state = 1329;
                this.match(P4Parser.INTEGER);
                this.state = 1330;
                this.match(P4Parser.COLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1331;
                this.match(P4Parser.PRIORITY);
                this.state = 1332;
                this.match(P4Parser.ASSIGN);
                this.state = 1333;
                this.match(P4Parser.L_PAREN);
                this.state = 1334;
                this.expression(0);
                this.state = 1335;
                this.match(P4Parser.R_PAREN);
                this.state = 1336;
                this.match(P4Parser.COLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public entriesList(): EntriesListContext;
    public entriesList(_p: number): EntriesListContext;
    public entriesList(_p?: number): EntriesListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new EntriesListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 214;
        this.enterRecursionRule(localContext, 214, P4Parser.RULE_entriesList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1345;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new EntriesListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_entriesList);
                    this.state = 1341;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1342;
                    this.entry();
                    }
                    }
                }
                this.state = 1347;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public actionDeclaration(): ActionDeclarationContext {
        let localContext = new ActionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 216, P4Parser.RULE_actionDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1348;
            this.optAnnotations();
            this.state = 1349;
            this.match(P4Parser.ACTION);
            this.state = 1350;
            this.name();
            this.state = 1351;
            this.match(P4Parser.L_PAREN);
            this.state = 1352;
            this.parameterList();
            this.state = 1353;
            this.match(P4Parser.R_PAREN);
            this.state = 1354;
            this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 218, P4Parser.RULE_variableDeclaration);
        try {
            this.state = 1367;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.PRAGMA:
            case P4Parser.AT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1356;
                this.annotations(0);
                this.state = 1357;
                this.typeRef();
                this.state = 1358;
                this.name();
                this.state = 1359;
                this.optInitializer();
                this.state = 1360;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            case P4Parser.BOOL:
            case P4Parser.BIT:
            case P4Parser.ERROR:
            case P4Parser.INT:
            case P4Parser.LIST:
            case P4Parser.MATCH_KIND:
            case P4Parser.STRING:
            case P4Parser.TUPLE:
            case P4Parser.VARBIT:
            case P4Parser.DOT:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1362;
                this.typeRef();
                this.state = 1363;
                this.name();
                this.state = 1364;
                this.optInitializer();
                this.state = 1365;
                this.match(P4Parser.SEMICOLON);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantDeclaration(): ConstantDeclarationContext {
        let localContext = new ConstantDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 220, P4Parser.RULE_constantDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1369;
            this.optAnnotations();
            this.state = 1370;
            this.match(P4Parser.CONST);
            this.state = 1371;
            this.typeRef();
            this.state = 1372;
            this.name();
            this.state = 1373;
            this.match(P4Parser.ASSIGN);
            this.state = 1374;
            this.initializer();
            this.state = 1375;
            this.match(P4Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optInitializer(): OptInitializerContext {
        let localContext = new OptInitializerContext(this.context, this.state);
        this.enterRule(localContext, 222, P4Parser.RULE_optInitializer);
        try {
            this.state = 1380;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.SEMICOLON:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.ASSIGN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1378;
                this.match(P4Parser.ASSIGN);
                this.state = 1379;
                this.initializer();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public initializer(): InitializerContext {
        let localContext = new InitializerContext(this.context, this.state);
        this.enterRule(localContext, 224, P4Parser.RULE_initializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1382;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDeclaration(): FunctionDeclarationContext {
        let localContext = new FunctionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 226, P4Parser.RULE_functionDeclaration);
        try {
            this.state = 1391;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.PRAGMA:
            case P4Parser.AT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1384;
                this.annotations(0);
                this.state = 1385;
                this.functionPrototype();
                this.state = 1386;
                this.blockStatement();
                }
                break;
            case P4Parser.BOOL:
            case P4Parser.BIT:
            case P4Parser.ERROR:
            case P4Parser.INT:
            case P4Parser.LIST:
            case P4Parser.MATCH_KIND:
            case P4Parser.STRING:
            case P4Parser.TUPLE:
            case P4Parser.VARBIT:
            case P4Parser.VOID:
            case P4Parser.DOT:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1388;
                this.functionPrototype();
                this.state = 1389;
                this.blockStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 228, P4Parser.RULE_argumentList);
        try {
            this.state = 1395;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.R_PAREN:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.ENTRIES:
            case P4Parser.ERROR:
            case P4Parser.FALSE:
            case P4Parser.KEY:
            case P4Parser.LIST:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.THIS:
            case P4Parser.TRUE:
            case P4Parser.DONTCARE:
            case P4Parser.DOTS:
            case P4Parser.PLUS:
            case P4Parser.MINUS:
            case P4Parser.COMPLEMENT:
            case P4Parser.L_PAREN:
            case P4Parser.INVALID_HEADER:
            case P4Parser.L_BRACE:
            case P4Parser.NOT:
            case P4Parser.DOT:
            case P4Parser.STRING_LITERAL:
            case P4Parser.IDENTIFIER:
            case P4Parser.INTEGER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1394;
                this.nonEmptyArgList(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public nonEmptyArgList(): NonEmptyArgListContext;
    public nonEmptyArgList(_p: number): NonEmptyArgListContext;
    public nonEmptyArgList(_p?: number): NonEmptyArgListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NonEmptyArgListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 230;
        this.enterRecursionRule(localContext, 230, P4Parser.RULE_nonEmptyArgList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1398;
            this.argument();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1405;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 84, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new NonEmptyArgListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonEmptyArgList);
                    this.state = 1400;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1401;
                    this.match(P4Parser.COMMA);
                    this.state = 1402;
                    this.argument();
                    }
                    }
                }
                this.state = 1407;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 84, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public argument(): ArgumentContext {
        let localContext = new ArgumentContext(this.context, this.state);
        this.enterRule(localContext, 232, P4Parser.RULE_argument);
        try {
            this.state = 1418;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1408;
                this.expression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1409;
                this.name();
                this.state = 1410;
                this.match(P4Parser.ASSIGN);
                this.state = 1411;
                this.expression(0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1413;
                this.match(P4Parser.DONTCARE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1414;
                this.name();
                this.state = 1415;
                this.match(P4Parser.ASSIGN);
                this.state = 1416;
                this.match(P4Parser.DONTCARE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expressionList(): ExpressionListContext;
    public expressionList(_p: number): ExpressionListContext;
    public expressionList(_p?: number): ExpressionListContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionListContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 234;
        this.enterRecursionRule(localContext, 234, P4Parser.RULE_expressionList, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1422;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
            case 1:
                {
                }
                break;
            case 2:
                {
                this.state = 1421;
                this.expression(0);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1429;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExpressionListContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expressionList);
                    this.state = 1424;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1425;
                    this.match(P4Parser.COMMA);
                    this.state = 1426;
                    this.expression(0);
                    }
                    }
                }
                this.state = 1431;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public structuredAnnotationBody(): StructuredAnnotationBodyContext {
        let localContext = new StructuredAnnotationBodyContext(this.context, this.state);
        this.enterRule(localContext, 236, P4Parser.RULE_structuredAnnotationBody);
        try {
            this.state = 1438;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1432;
                this.expressionList(0);
                this.state = 1433;
                this.optTrailingComma();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1435;
                this.kvList(0);
                this.state = 1436;
                this.optTrailingComma();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public member(): MemberContext {
        let localContext = new MemberContext(this.context, this.state);
        this.enterRule(localContext, 238, P4Parser.RULE_member);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1440;
            this.name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prefixedNonTypeName(): PrefixedNonTypeNameContext {
        let localContext = new PrefixedNonTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 240, P4Parser.RULE_prefixedNonTypeName);
        try {
            this.state = 1446;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.ENTRIES:
            case P4Parser.KEY:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1442;
                this.nonTypeName();
                }
                break;
            case P4Parser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1443;
                this.dotPrefix();
                this.state = 1444;
                this.nonTypeName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public lvalue(): LvalueContext;
    public lvalue(_p: number): LvalueContext;
    public lvalue(_p?: number): LvalueContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LvalueContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 242;
        this.enterRecursionRule(localContext, 242, P4Parser.RULE_lvalue, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1455;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case P4Parser.ACTIONS:
            case P4Parser.APPLY:
            case P4Parser.ENTRIES:
            case P4Parser.KEY:
            case P4Parser.TYPE:
            case P4Parser.PRIORITY:
            case P4Parser.STATE:
            case P4Parser.DOT:
            case P4Parser.IDENTIFIER:
                {
                this.state = 1449;
                this.prefixedNonTypeName();
                }
                break;
            case P4Parser.THIS:
                {
                this.state = 1450;
                this.match(P4Parser.THIS);
                }
                break;
            case P4Parser.L_PAREN:
                {
                this.state = 1451;
                this.match(P4Parser.L_PAREN);
                this.state = 1452;
                this.lvalue(0);
                this.state = 1453;
                this.match(P4Parser.R_PAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1474;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1472;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context) ) {
                    case 1:
                        {
                        localContext = new LvalueContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_lvalue);
                        this.state = 1457;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1458;
                        this.match(P4Parser.DOT);
                        this.state = 1459;
                        this.member();
                        }
                        break;
                    case 2:
                        {
                        localContext = new LvalueContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_lvalue);
                        this.state = 1460;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1461;
                        this.match(P4Parser.L_BRACKET);
                        this.state = 1462;
                        this.expression(0);
                        this.state = 1463;
                        this.match(P4Parser.R_BRACKET);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LvalueContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_lvalue);
                        this.state = 1465;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1466;
                        this.match(P4Parser.L_BRACKET);
                        this.state = 1467;
                        this.expression(0);
                        this.state = 1468;
                        this.match(P4Parser.COLON);
                        this.state = 1469;
                        this.expression(0);
                        this.state = 1470;
                        this.match(P4Parser.R_BRACKET);
                        }
                        break;
                    }
                    }
                }
                this.state = 1476;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 244;
        this.enterRecursionRule(localContext, 244, P4Parser.RULE_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1535;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                {
                this.state = 1478;
                this.match(P4Parser.INTEGER);
                }
                break;
            case 2:
                {
                this.state = 1479;
                this.match(P4Parser.DOTS);
                }
                break;
            case 3:
                {
                this.state = 1480;
                this.match(P4Parser.STRING_LITERAL);
                }
                break;
            case 4:
                {
                this.state = 1481;
                this.match(P4Parser.TRUE);
                }
                break;
            case 5:
                {
                this.state = 1482;
                this.match(P4Parser.FALSE);
                }
                break;
            case 6:
                {
                this.state = 1483;
                this.match(P4Parser.THIS);
                }
                break;
            case 7:
                {
                this.state = 1484;
                this.nonTypeName();
                }
                break;
            case 8:
                {
                this.state = 1485;
                this.dotPrefix();
                this.state = 1486;
                this.nonTypeName();
                }
                break;
            case 9:
                {
                this.state = 1488;
                this.match(P4Parser.L_BRACE);
                this.state = 1489;
                this.expressionList(0);
                this.state = 1490;
                this.optTrailingComma();
                this.state = 1491;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 10:
                {
                this.state = 1493;
                this.match(P4Parser.INVALID_HEADER);
                }
                break;
            case 11:
                {
                this.state = 1494;
                this.match(P4Parser.L_BRACE);
                this.state = 1495;
                this.kvList(0);
                this.state = 1496;
                this.optTrailingComma();
                this.state = 1497;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 12:
                {
                this.state = 1499;
                this.match(P4Parser.L_BRACE);
                this.state = 1500;
                this.kvList(0);
                this.state = 1501;
                this.match(P4Parser.COMMA);
                this.state = 1502;
                this.match(P4Parser.DOTS);
                this.state = 1503;
                this.optTrailingComma();
                this.state = 1504;
                this.match(P4Parser.R_BRACE);
                }
                break;
            case 13:
                {
                this.state = 1506;
                this.match(P4Parser.L_PAREN);
                this.state = 1507;
                this.expression(0);
                this.state = 1508;
                this.match(P4Parser.R_PAREN);
                }
                break;
            case 14:
                {
                this.state = 1510;
                this.match(P4Parser.NOT);
                this.state = 1511;
                this.expression(33);
                }
                break;
            case 15:
                {
                this.state = 1512;
                this.match(P4Parser.COMPLEMENT);
                this.state = 1513;
                this.expression(32);
                }
                break;
            case 16:
                {
                this.state = 1514;
                this.match(P4Parser.MINUS);
                this.state = 1515;
                this.expression(31);
                }
                break;
            case 17:
                {
                this.state = 1516;
                this.match(P4Parser.PLUS);
                this.state = 1517;
                this.expression(30);
                }
                break;
            case 18:
                {
                this.state = 1518;
                this.typeName();
                this.state = 1519;
                this.match(P4Parser.DOT);
                this.state = 1520;
                this.member();
                }
                break;
            case 19:
                {
                this.state = 1522;
                this.match(P4Parser.ERROR);
                this.state = 1523;
                this.match(P4Parser.DOT);
                this.state = 1524;
                this.member();
                }
                break;
            case 20:
                {
                this.state = 1525;
                this.namedType();
                this.state = 1526;
                this.match(P4Parser.L_PAREN);
                this.state = 1527;
                this.argumentList();
                this.state = 1528;
                this.match(P4Parser.R_PAREN);
                }
                break;
            case 21:
                {
                this.state = 1530;
                this.match(P4Parser.L_PAREN);
                this.state = 1531;
                this.typeRef();
                this.state = 1532;
                this.match(P4Parser.R_PAREN);
                this.state = 1533;
                this.expression(1);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1637;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 95, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1635;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1537;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 1538;
                        this.match(P4Parser.MUL);
                        this.state = 1539;
                        this.expression(27);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1540;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 1541;
                        this.match(P4Parser.DIV);
                        this.state = 1542;
                        this.expression(26);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1543;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 1544;
                        this.match(P4Parser.MOD);
                        this.state = 1545;
                        this.expression(25);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1546;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 1547;
                        this.match(P4Parser.PLUS);
                        this.state = 1548;
                        this.expression(24);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1549;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 1550;
                        this.match(P4Parser.MINUS);
                        this.state = 1551;
                        this.expression(23);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1552;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1553;
                        this.match(P4Parser.PLUS_SAT);
                        this.state = 1554;
                        this.expression(22);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1555;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 1556;
                        this.match(P4Parser.MINUS_SAT);
                        this.state = 1557;
                        this.expression(21);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1558;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 1559;
                        this.match(P4Parser.SHL);
                        this.state = 1560;
                        this.expression(20);
                        }
                        break;
                    case 9:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1561;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 1562;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1563;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1564;
                        this.expression(19);
                        }
                        break;
                    case 10:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1565;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1566;
                        this.match(P4Parser.LE);
                        this.state = 1567;
                        this.expression(18);
                        }
                        break;
                    case 11:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1568;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 1569;
                        this.match(P4Parser.GE);
                        this.state = 1570;
                        this.expression(17);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1571;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1572;
                        this.match(P4Parser.L_ANGLE);
                        this.state = 1573;
                        this.expression(16);
                        }
                        break;
                    case 13:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1574;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1575;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1576;
                        this.expression(15);
                        }
                        break;
                    case 14:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1577;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1578;
                        this.match(P4Parser.NE);
                        this.state = 1579;
                        this.expression(14);
                        }
                        break;
                    case 15:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1580;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1581;
                        this.match(P4Parser.EQ);
                        this.state = 1582;
                        this.expression(13);
                        }
                        break;
                    case 16:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1583;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1584;
                        this.match(P4Parser.BIT_AND);
                        this.state = 1585;
                        this.expression(12);
                        }
                        break;
                    case 17:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1586;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1587;
                        this.match(P4Parser.BIT_XOR);
                        this.state = 1588;
                        this.expression(11);
                        }
                        break;
                    case 18:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1589;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 1590;
                        this.match(P4Parser.BIT_OR);
                        this.state = 1591;
                        this.expression(10);
                        }
                        break;
                    case 19:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1592;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 1593;
                        this.match(P4Parser.PP);
                        this.state = 1594;
                        this.expression(9);
                        }
                        break;
                    case 20:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1595;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1596;
                        this.match(P4Parser.AND);
                        this.state = 1597;
                        this.expression(8);
                        }
                        break;
                    case 21:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1598;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1599;
                        this.match(P4Parser.OR);
                        this.state = 1600;
                        this.expression(7);
                        }
                        break;
                    case 22:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1601;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1602;
                        this.match(P4Parser.QUESTION);
                        this.state = 1603;
                        this.expression(0);
                        this.state = 1604;
                        this.match(P4Parser.COLON);
                        this.state = 1605;
                        this.expression(6);
                        }
                        break;
                    case 23:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1607;
                        if (!(this.precpred(this.context, 40))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 40)");
                        }
                        this.state = 1608;
                        this.match(P4Parser.L_BRACKET);
                        this.state = 1609;
                        this.expression(0);
                        this.state = 1610;
                        this.match(P4Parser.R_BRACKET);
                        }
                        break;
                    case 24:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1612;
                        if (!(this.precpred(this.context, 39))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 39)");
                        }
                        this.state = 1613;
                        this.match(P4Parser.L_BRACKET);
                        this.state = 1614;
                        this.expression(0);
                        this.state = 1615;
                        this.match(P4Parser.COLON);
                        this.state = 1616;
                        this.expression(0);
                        this.state = 1617;
                        this.match(P4Parser.R_BRACKET);
                        }
                        break;
                    case 25:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1619;
                        if (!(this.precpred(this.context, 27))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 27)");
                        }
                        this.state = 1620;
                        this.match(P4Parser.DOT);
                        this.state = 1621;
                        this.member();
                        }
                        break;
                    case 26:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1622;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1623;
                        this.match(P4Parser.L_ANGLE);
                        this.state = 1624;
                        this.realTypeArgumentList(0);
                        this.state = 1625;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1626;
                        this.match(P4Parser.L_PAREN);
                        this.state = 1627;
                        this.argumentList();
                        this.state = 1628;
                        this.match(P4Parser.R_PAREN);
                        }
                        break;
                    case 27:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_expression);
                        this.state = 1630;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1631;
                        this.match(P4Parser.L_PAREN);
                        this.state = 1632;
                        this.argumentList();
                        this.state = 1633;
                        this.match(P4Parser.R_PAREN);
                        }
                        break;
                    }
                    }
                }
                this.state = 1639;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 95, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public nonBraceExpression(): NonBraceExpressionContext;
    public nonBraceExpression(_p: number): NonBraceExpressionContext;
    public nonBraceExpression(_p?: number): NonBraceExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NonBraceExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 246;
        this.enterRecursionRule(localContext, 246, P4Parser.RULE_nonBraceExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1679;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context) ) {
            case 1:
                {
                this.state = 1641;
                this.match(P4Parser.INTEGER);
                }
                break;
            case 2:
                {
                this.state = 1642;
                this.match(P4Parser.STRING_LITERAL);
                }
                break;
            case 3:
                {
                this.state = 1643;
                this.match(P4Parser.TRUE);
                }
                break;
            case 4:
                {
                this.state = 1644;
                this.match(P4Parser.FALSE);
                }
                break;
            case 5:
                {
                this.state = 1645;
                this.match(P4Parser.THIS);
                }
                break;
            case 6:
                {
                this.state = 1646;
                this.nonTypeName();
                }
                break;
            case 7:
                {
                this.state = 1647;
                this.dotPrefix();
                this.state = 1648;
                this.nonTypeName();
                }
                break;
            case 8:
                {
                this.state = 1650;
                this.match(P4Parser.L_PAREN);
                this.state = 1651;
                this.expression(0);
                this.state = 1652;
                this.match(P4Parser.R_PAREN);
                }
                break;
            case 9:
                {
                this.state = 1654;
                this.match(P4Parser.NOT);
                this.state = 1655;
                this.expression(0);
                }
                break;
            case 10:
                {
                this.state = 1656;
                this.match(P4Parser.COMPLEMENT);
                this.state = 1657;
                this.expression(0);
                }
                break;
            case 11:
                {
                this.state = 1658;
                this.match(P4Parser.MINUS);
                this.state = 1659;
                this.expression(0);
                }
                break;
            case 12:
                {
                this.state = 1660;
                this.match(P4Parser.PLUS);
                this.state = 1661;
                this.expression(0);
                }
                break;
            case 13:
                {
                this.state = 1662;
                this.typeName();
                this.state = 1663;
                this.match(P4Parser.DOT);
                this.state = 1664;
                this.member();
                }
                break;
            case 14:
                {
                this.state = 1666;
                this.match(P4Parser.ERROR);
                this.state = 1667;
                this.match(P4Parser.DOT);
                this.state = 1668;
                this.member();
                }
                break;
            case 15:
                {
                this.state = 1669;
                this.namedType();
                this.state = 1670;
                this.match(P4Parser.L_PAREN);
                this.state = 1671;
                this.argumentList();
                this.state = 1672;
                this.match(P4Parser.R_PAREN);
                }
                break;
            case 16:
                {
                this.state = 1674;
                this.match(P4Parser.L_PAREN);
                this.state = 1675;
                this.typeRef();
                this.state = 1676;
                this.match(P4Parser.R_PAREN);
                this.state = 1677;
                this.expression(0);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1781;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1779;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
                    case 1:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1681;
                        if (!(this.precpred(this.context, 36))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 36)");
                        }
                        this.state = 1682;
                        this.match(P4Parser.L_BRACKET);
                        this.state = 1683;
                        this.expression(0);
                        this.state = 1684;
                        this.match(P4Parser.R_BRACKET);
                        }
                        break;
                    case 2:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1686;
                        if (!(this.precpred(this.context, 35))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 35)");
                        }
                        this.state = 1687;
                        this.match(P4Parser.L_BRACKET);
                        this.state = 1688;
                        this.expression(0);
                        this.state = 1689;
                        this.match(P4Parser.COLON);
                        this.state = 1690;
                        this.expression(0);
                        this.state = 1691;
                        this.match(P4Parser.R_BRACKET);
                        }
                        break;
                    case 3:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1693;
                        if (!(this.precpred(this.context, 27))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 27)");
                        }
                        this.state = 1694;
                        this.match(P4Parser.DOT);
                        this.state = 1695;
                        this.member();
                        }
                        break;
                    case 4:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1696;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 1697;
                        this.match(P4Parser.MUL);
                        this.state = 1698;
                        this.expression(0);
                        }
                        break;
                    case 5:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1699;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 1700;
                        this.match(P4Parser.DIV);
                        this.state = 1701;
                        this.expression(0);
                        }
                        break;
                    case 6:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1702;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 1703;
                        this.match(P4Parser.MOD);
                        this.state = 1704;
                        this.expression(0);
                        }
                        break;
                    case 7:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1705;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 1706;
                        this.match(P4Parser.PLUS);
                        this.state = 1707;
                        this.expression(0);
                        }
                        break;
                    case 8:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1708;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 1709;
                        this.match(P4Parser.MINUS);
                        this.state = 1710;
                        this.expression(0);
                        }
                        break;
                    case 9:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1711;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1712;
                        this.match(P4Parser.PLUS_SAT);
                        this.state = 1713;
                        this.expression(0);
                        }
                        break;
                    case 10:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1714;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 1715;
                        this.match(P4Parser.MINUS_SAT);
                        this.state = 1716;
                        this.expression(0);
                        }
                        break;
                    case 11:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1717;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 1718;
                        this.match(P4Parser.SHL);
                        this.state = 1719;
                        this.expression(0);
                        }
                        break;
                    case 12:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1720;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 1721;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1722;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1723;
                        this.expression(0);
                        }
                        break;
                    case 13:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1724;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1725;
                        this.match(P4Parser.LE);
                        this.state = 1726;
                        this.expression(0);
                        }
                        break;
                    case 14:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1727;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 1728;
                        this.match(P4Parser.GE);
                        this.state = 1729;
                        this.expression(0);
                        }
                        break;
                    case 15:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1730;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1731;
                        this.match(P4Parser.L_ANGLE);
                        this.state = 1732;
                        this.expression(0);
                        }
                        break;
                    case 16:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1733;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1734;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1735;
                        this.expression(0);
                        }
                        break;
                    case 17:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1736;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1737;
                        this.match(P4Parser.NE);
                        this.state = 1738;
                        this.expression(0);
                        }
                        break;
                    case 18:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1739;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1740;
                        this.match(P4Parser.EQ);
                        this.state = 1741;
                        this.expression(0);
                        }
                        break;
                    case 19:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1742;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1743;
                        this.match(P4Parser.BIT_AND);
                        this.state = 1744;
                        this.expression(0);
                        }
                        break;
                    case 20:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1745;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1746;
                        this.match(P4Parser.BIT_XOR);
                        this.state = 1747;
                        this.expression(0);
                        }
                        break;
                    case 21:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1748;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 1749;
                        this.match(P4Parser.BIT_OR);
                        this.state = 1750;
                        this.expression(0);
                        }
                        break;
                    case 22:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1751;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 1752;
                        this.match(P4Parser.PP);
                        this.state = 1753;
                        this.expression(0);
                        }
                        break;
                    case 23:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1754;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1755;
                        this.match(P4Parser.AND);
                        this.state = 1756;
                        this.expression(0);
                        }
                        break;
                    case 24:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1757;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1758;
                        this.match(P4Parser.OR);
                        this.state = 1759;
                        this.expression(0);
                        }
                        break;
                    case 25:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1760;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1761;
                        this.match(P4Parser.QUESTION);
                        this.state = 1762;
                        this.expression(0);
                        this.state = 1763;
                        this.match(P4Parser.COLON);
                        this.state = 1764;
                        this.expression(0);
                        }
                        break;
                    case 26:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1766;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1767;
                        this.match(P4Parser.L_ANGLE);
                        this.state = 1768;
                        this.realTypeArgumentList(0);
                        this.state = 1769;
                        this.match(P4Parser.R_ANGLE);
                        this.state = 1770;
                        this.match(P4Parser.L_PAREN);
                        this.state = 1771;
                        this.argumentList();
                        this.state = 1772;
                        this.match(P4Parser.R_PAREN);
                        }
                        break;
                    case 27:
                        {
                        localContext = new NonBraceExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, P4Parser.RULE_nonBraceExpression);
                        this.state = 1774;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1775;
                        this.match(P4Parser.L_PAREN);
                        this.state = 1776;
                        this.argumentList();
                        this.state = 1777;
                        this.match(P4Parser.R_PAREN);
                        }
                        break;
                    }
                    }
                }
                this.state = 1783;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public type_or_id(): Type_or_idContext {
        let localContext = new Type_or_idContext(this.context, this.state);
        this.enterRule(localContext, 248, P4Parser.RULE_type_or_id);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1784;
            this.match(P4Parser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 7:
            return this.annotations_sempred(localContext as AnnotationsContext, predIndex);
        case 9:
            return this.annotationBody_sempred(localContext as AnnotationBodyContext, predIndex);
        case 11:
            return this.kvList_sempred(localContext as KvListContext, predIndex);
        case 14:
            return this.nonEmptyParameterList_sempred(localContext as NonEmptyParameterListContext, predIndex);
        case 20:
            return this.objDeclarations_sempred(localContext as ObjDeclarationsContext, predIndex);
        case 25:
            return this.parserLocalElements_sempred(localContext as ParserLocalElementsContext, predIndex);
        case 28:
            return this.parserStates_sempred(localContext as ParserStatesContext, predIndex);
        case 30:
            return this.parserStatements_sempred(localContext as ParserStatementsContext, predIndex);
        case 36:
            return this.selectCaseList_sempred(localContext as SelectCaseListContext, predIndex);
        case 41:
            return this.simpleExpressionList_sempred(localContext as SimpleExpressionListContext, predIndex);
        case 47:
            return this.controlLocalDeclarations_sempred(localContext as ControlLocalDeclarationsContext, predIndex);
        case 51:
            return this.methodPrototypes_sempred(localContext as MethodPrototypesContext, predIndex);
        case 65:
            return this.typeParameterList_sempred(localContext as TypeParameterListContext, predIndex);
        case 67:
            return this.typeArgumentList_sempred(localContext as TypeArgumentListContext, predIndex);
        case 69:
            return this.realTypeArgumentList_sempred(localContext as RealTypeArgumentListContext, predIndex);
        case 75:
            return this.structFieldList_sempred(localContext as StructFieldListContext, predIndex);
        case 78:
            return this.specifiedIdentifierList_sempred(localContext as SpecifiedIdentifierListContext, predIndex);
        case 82:
            return this.identifierList_sempred(localContext as IdentifierListContext, predIndex);
        case 92:
            return this.statOrDeclList_sempred(localContext as StatOrDeclListContext, predIndex);
        case 94:
            return this.switchCases_sempred(localContext as SwitchCasesContext, predIndex);
        case 99:
            return this.tablePropertyList_sempred(localContext as TablePropertyListContext, predIndex);
        case 101:
            return this.keyElementList_sempred(localContext as KeyElementListContext, predIndex);
        case 103:
            return this.actionList_sempred(localContext as ActionListContext, predIndex);
        case 107:
            return this.entriesList_sempred(localContext as EntriesListContext, predIndex);
        case 115:
            return this.nonEmptyArgList_sempred(localContext as NonEmptyArgListContext, predIndex);
        case 117:
            return this.expressionList_sempred(localContext as ExpressionListContext, predIndex);
        case 121:
            return this.lvalue_sempred(localContext as LvalueContext, predIndex);
        case 122:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 123:
            return this.nonBraceExpression_sempred(localContext as NonBraceExpressionContext, predIndex);
        }
        return true;
    }
    private annotations_sempred(localContext: AnnotationsContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private annotationBody_sempred(localContext: AnnotationBodyContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 2);
        case 2:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private kvList_sempred(localContext: KvListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private nonEmptyParameterList_sempred(localContext: NonEmptyParameterListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private objDeclarations_sempred(localContext: ObjDeclarationsContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private parserLocalElements_sempred(localContext: ParserLocalElementsContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 6:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private parserStates_sempred(localContext: ParserStatesContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 7:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private parserStatements_sempred(localContext: ParserStatementsContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 8:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private selectCaseList_sempred(localContext: SelectCaseListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 9:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private simpleExpressionList_sempred(localContext: SimpleExpressionListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 10:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private controlLocalDeclarations_sempred(localContext: ControlLocalDeclarationsContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 11:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private methodPrototypes_sempred(localContext: MethodPrototypesContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 12:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private typeParameterList_sempred(localContext: TypeParameterListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 13:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private typeArgumentList_sempred(localContext: TypeArgumentListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 14:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private realTypeArgumentList_sempred(localContext: RealTypeArgumentListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 15:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private structFieldList_sempred(localContext: StructFieldListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 16:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private specifiedIdentifierList_sempred(localContext: SpecifiedIdentifierListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 17:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private identifierList_sempred(localContext: IdentifierListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 18:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private statOrDeclList_sempred(localContext: StatOrDeclListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 19:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private switchCases_sempred(localContext: SwitchCasesContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 20:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private tablePropertyList_sempred(localContext: TablePropertyListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 21:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private keyElementList_sempred(localContext: KeyElementListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 22:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private actionList_sempred(localContext: ActionListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 23:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private entriesList_sempred(localContext: EntriesListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 24:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private nonEmptyArgList_sempred(localContext: NonEmptyArgListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 25:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private expressionList_sempred(localContext: ExpressionListContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 26:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private lvalue_sempred(localContext: LvalueContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 27:
            return this.precpred(this.context, 4);
        case 28:
            return this.precpred(this.context, 3);
        case 29:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 30:
            return this.precpred(this.context, 26);
        case 31:
            return this.precpred(this.context, 25);
        case 32:
            return this.precpred(this.context, 24);
        case 33:
            return this.precpred(this.context, 23);
        case 34:
            return this.precpred(this.context, 22);
        case 35:
            return this.precpred(this.context, 21);
        case 36:
            return this.precpred(this.context, 20);
        case 37:
            return this.precpred(this.context, 19);
        case 38:
            return this.precpred(this.context, 18);
        case 39:
            return this.precpred(this.context, 17);
        case 40:
            return this.precpred(this.context, 16);
        case 41:
            return this.precpred(this.context, 15);
        case 42:
            return this.precpred(this.context, 14);
        case 43:
            return this.precpred(this.context, 13);
        case 44:
            return this.precpred(this.context, 12);
        case 45:
            return this.precpred(this.context, 11);
        case 46:
            return this.precpred(this.context, 10);
        case 47:
            return this.precpred(this.context, 9);
        case 48:
            return this.precpred(this.context, 8);
        case 49:
            return this.precpred(this.context, 7);
        case 50:
            return this.precpred(this.context, 6);
        case 51:
            return this.precpred(this.context, 5);
        case 52:
            return this.precpred(this.context, 40);
        case 53:
            return this.precpred(this.context, 39);
        case 54:
            return this.precpred(this.context, 27);
        case 55:
            return this.precpred(this.context, 4);
        case 56:
            return this.precpred(this.context, 3);
        }
        return true;
    }
    private nonBraceExpression_sempred(localContext: NonBraceExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 57:
            return this.precpred(this.context, 36);
        case 58:
            return this.precpred(this.context, 35);
        case 59:
            return this.precpred(this.context, 27);
        case 60:
            return this.precpred(this.context, 26);
        case 61:
            return this.precpred(this.context, 25);
        case 62:
            return this.precpred(this.context, 24);
        case 63:
            return this.precpred(this.context, 23);
        case 64:
            return this.precpred(this.context, 22);
        case 65:
            return this.precpred(this.context, 21);
        case 66:
            return this.precpred(this.context, 20);
        case 67:
            return this.precpred(this.context, 19);
        case 68:
            return this.precpred(this.context, 18);
        case 69:
            return this.precpred(this.context, 17);
        case 70:
            return this.precpred(this.context, 16);
        case 71:
            return this.precpred(this.context, 15);
        case 72:
            return this.precpred(this.context, 14);
        case 73:
            return this.precpred(this.context, 13);
        case 74:
            return this.precpred(this.context, 12);
        case 75:
            return this.precpred(this.context, 11);
        case 76:
            return this.precpred(this.context, 10);
        case 77:
            return this.precpred(this.context, 9);
        case 78:
            return this.precpred(this.context, 8);
        case 79:
            return this.precpred(this.context, 7);
        case 80:
            return this.precpred(this.context, 6);
        case 81:
            return this.precpred(this.context, 5);
        case 82:
            return this.precpred(this.context, 4);
        case 83:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,92,1787,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,1,0,1,0,5,
        0,253,8,0,10,0,12,0,256,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,3,1,270,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,280,
        8,2,1,3,1,3,3,3,284,8,3,1,4,1,4,1,4,1,4,1,4,3,4,291,8,4,1,5,1,5,
        3,5,295,8,5,1,6,1,6,3,6,299,8,6,1,7,1,7,1,7,1,7,1,7,5,7,306,8,7,
        10,7,12,7,309,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,329,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
        9,1,9,5,9,339,8,9,10,9,12,9,342,9,9,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,3,10,430,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,438,8,
        11,10,11,12,11,441,9,11,1,12,1,12,1,12,1,12,1,13,1,13,3,13,449,8,
        13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,457,8,14,10,14,12,14,460,9,
        14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,
        15,474,8,15,1,16,1,16,1,16,1,16,3,16,480,8,16,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
        524,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,5,20,533,8,20,10,20,
        12,20,536,9,20,1,21,1,21,3,21,540,8,21,1,22,1,22,1,22,1,22,1,22,
        3,22,547,8,22,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,
        1,25,1,25,5,25,561,8,25,10,25,12,25,564,9,25,1,26,1,26,1,26,1,26,
        3,26,570,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,
        1,28,1,28,1,28,5,28,585,8,28,10,28,12,28,588,9,28,1,29,1,29,1,29,
        1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,5,30,601,8,30,10,30,12,30,
        604,9,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,613,8,31,1,32,1,
        32,1,32,1,32,1,32,1,33,1,33,1,33,3,33,623,8,33,1,34,1,34,1,34,1,
        34,3,34,629,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,
        36,1,36,5,36,642,8,36,10,36,12,36,645,9,36,1,37,1,37,1,37,1,37,1,
        37,1,38,1,38,3,38,654,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
        39,1,39,1,39,3,39,666,8,39,1,40,1,40,3,40,670,8,40,1,41,1,41,1,41,
        1,41,1,41,1,41,5,41,678,8,41,10,41,12,41,681,9,41,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,693,8,42,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,706,8,43,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,3,44,741,8,44,1,45,1,45,1,45,1,45,1,45,
        1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,
        1,47,5,47,762,8,47,10,47,12,47,765,9,47,1,48,1,48,1,48,1,48,1,48,
        3,48,772,8,48,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,
        1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,794,8,50,
        1,51,1,51,1,51,5,51,799,8,51,10,51,12,51,802,9,51,1,52,1,52,1,52,
        1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,827,8,53,1,54,1,54,1,54,
        1,54,1,54,1,54,3,54,835,8,54,1,55,1,55,3,55,839,8,55,1,56,1,56,1,
        56,1,56,3,56,845,8,56,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,59,1,
        59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
        60,3,60,869,8,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,
        62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,
        62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,
        62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,915,8,62,1,63,1,
        63,1,63,3,63,920,8,63,1,64,1,64,1,64,1,64,1,64,3,64,927,8,64,1,65,
        1,65,1,65,1,65,1,65,1,65,5,65,935,8,65,10,65,12,65,938,9,65,1,66,
        1,66,1,66,1,66,3,66,944,8,66,1,67,1,67,3,67,948,8,67,1,67,1,67,1,
        67,5,67,953,8,67,10,67,12,67,956,9,67,1,68,1,68,1,68,3,68,961,8,
        68,1,69,1,69,1,69,1,69,1,69,1,69,5,69,969,8,69,10,69,12,69,972,9,
        69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
        70,3,70,987,8,70,1,71,1,71,1,71,1,71,3,71,993,8,71,1,72,1,72,1,72,
        1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
        1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,5,75,1022,
        8,75,10,75,12,75,1025,9,75,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,
        77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,
        77,1,77,3,77,1049,8,77,1,78,1,78,1,78,1,78,1,78,1,78,5,78,1057,8,
        78,10,78,12,78,1060,9,78,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,
        1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,
        5,82,1083,8,82,10,82,12,82,1086,9,82,1,83,1,83,1,83,1,83,1,83,1,
        83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1103,8,83,1,
        84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,
        84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1125,8,84,1,85,1,85,1,86,1,
        86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,3,87,1138,8,87,1,88,1,88,1,
        88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1154,
        8,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,
        1,89,1,89,1,89,1,89,3,89,1172,8,89,1,90,1,90,1,90,1,90,1,90,1,90,
        1,90,1,90,3,90,1182,8,90,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,
        5,92,1192,8,92,10,92,12,92,1195,9,92,1,93,1,93,1,93,1,93,1,93,1,
        93,1,93,1,93,1,94,1,94,1,94,5,94,1208,8,94,10,94,12,94,1211,9,94,
        1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1220,8,95,1,96,1,96,3,96,
        1224,8,96,1,97,1,97,1,97,1,97,3,97,1230,8,97,1,98,1,98,1,98,1,98,
        1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,5,99,1244,8,99,10,99,12,
        99,1247,9,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,100,1,100,3,100,1276,8,100,1,101,
        1,101,1,101,5,101,1281,8,101,10,101,12,101,1284,9,101,1,102,1,102,
        1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,103,5,103,
        1298,8,103,10,103,12,103,1301,9,103,1,104,1,104,1,104,1,104,1,104,
        1,104,3,104,1309,8,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
        1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1326,8,105,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,
        3,106,1339,8,106,1,107,1,107,1,107,5,107,1344,8,107,10,107,12,107,
        1347,9,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,109,
        1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,3,109,
        1368,8,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,
        1,111,1,111,3,111,1381,8,111,1,112,1,112,1,113,1,113,1,113,1,113,
        1,113,1,113,1,113,3,113,1392,8,113,1,114,1,114,3,114,1396,8,114,
        1,115,1,115,1,115,1,115,1,115,1,115,5,115,1404,8,115,10,115,12,115,
        1407,9,115,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,
        1,116,3,116,1419,8,116,1,117,1,117,3,117,1423,8,117,1,117,1,117,
        1,117,5,117,1428,8,117,10,117,12,117,1431,9,117,1,118,1,118,1,118,
        1,118,1,118,1,118,3,118,1439,8,118,1,119,1,119,1,120,1,120,1,120,
        1,120,3,120,1447,8,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
        3,121,1456,8,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
        1,121,1,121,1,121,1,121,1,121,1,121,1,121,5,121,1473,8,121,10,121,
        12,121,1476,9,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,3,122,1536,8,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,5,122,1636,8,122,
        10,122,12,122,1639,9,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,
        1680,8,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,5,123,1780,8,123,10,123,12,123,1783,9,123,1,124,1,124,1,124,
        0,29,14,18,22,28,40,50,56,60,72,82,94,102,130,134,138,150,156,164,
        184,188,198,202,206,214,230,234,242,244,246,125,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
        198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
        230,232,234,236,238,240,242,244,246,248,0,0,2007,0,254,1,0,0,0,2,
        269,1,0,0,0,4,279,1,0,0,0,6,283,1,0,0,0,8,290,1,0,0,0,10,294,1,0,
        0,0,12,298,1,0,0,0,14,300,1,0,0,0,16,328,1,0,0,0,18,330,1,0,0,0,
        20,429,1,0,0,0,22,431,1,0,0,0,24,442,1,0,0,0,26,448,1,0,0,0,28,450,
        1,0,0,0,30,473,1,0,0,0,32,479,1,0,0,0,34,481,1,0,0,0,36,523,1,0,
        0,0,38,525,1,0,0,0,40,529,1,0,0,0,42,539,1,0,0,0,44,546,1,0,0,0,
        46,548,1,0,0,0,48,550,1,0,0,0,50,557,1,0,0,0,52,569,1,0,0,0,54,571,
        1,0,0,0,56,579,1,0,0,0,58,589,1,0,0,0,60,597,1,0,0,0,62,612,1,0,
        0,0,64,614,1,0,0,0,66,622,1,0,0,0,68,628,1,0,0,0,70,630,1,0,0,0,
        72,638,1,0,0,0,74,646,1,0,0,0,76,653,1,0,0,0,78,665,1,0,0,0,80,669,
        1,0,0,0,82,671,1,0,0,0,84,692,1,0,0,0,86,705,1,0,0,0,88,740,1,0,
        0,0,90,742,1,0,0,0,92,750,1,0,0,0,94,758,1,0,0,0,96,771,1,0,0,0,
        98,773,1,0,0,0,100,793,1,0,0,0,102,795,1,0,0,0,104,803,1,0,0,0,106,
        826,1,0,0,0,108,834,1,0,0,0,110,838,1,0,0,0,112,844,1,0,0,0,114,
        846,1,0,0,0,116,848,1,0,0,0,118,853,1,0,0,0,120,868,1,0,0,0,122,
        870,1,0,0,0,124,914,1,0,0,0,126,919,1,0,0,0,128,926,1,0,0,0,130,
        928,1,0,0,0,132,943,1,0,0,0,134,947,1,0,0,0,136,960,1,0,0,0,138,
        962,1,0,0,0,140,986,1,0,0,0,142,992,1,0,0,0,144,994,1,0,0,0,146,
        1002,1,0,0,0,148,1010,1,0,0,0,150,1018,1,0,0,0,152,1026,1,0,0,0,
        154,1048,1,0,0,0,156,1050,1,0,0,0,158,1061,1,0,0,0,160,1065,1,0,
        0,0,162,1070,1,0,0,0,164,1076,1,0,0,0,166,1102,1,0,0,0,168,1124,
        1,0,0,0,170,1126,1,0,0,0,172,1128,1,0,0,0,174,1137,1,0,0,0,176,1153,
        1,0,0,0,178,1171,1,0,0,0,180,1181,1,0,0,0,182,1183,1,0,0,0,184,1188,
        1,0,0,0,186,1196,1,0,0,0,188,1204,1,0,0,0,190,1219,1,0,0,0,192,1223,
        1,0,0,0,194,1229,1,0,0,0,196,1231,1,0,0,0,198,1238,1,0,0,0,200,1275,
        1,0,0,0,202,1277,1,0,0,0,204,1285,1,0,0,0,206,1291,1,0,0,0,208,1308,
        1,0,0,0,210,1325,1,0,0,0,212,1338,1,0,0,0,214,1340,1,0,0,0,216,1348,
        1,0,0,0,218,1367,1,0,0,0,220,1369,1,0,0,0,222,1380,1,0,0,0,224,1382,
        1,0,0,0,226,1391,1,0,0,0,228,1395,1,0,0,0,230,1397,1,0,0,0,232,1418,
        1,0,0,0,234,1422,1,0,0,0,236,1438,1,0,0,0,238,1440,1,0,0,0,240,1446,
        1,0,0,0,242,1455,1,0,0,0,244,1535,1,0,0,0,246,1679,1,0,0,0,248,1784,
        1,0,0,0,250,253,3,2,1,0,251,253,5,85,0,0,252,250,1,0,0,0,252,251,
        1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,257,
        1,0,0,0,256,254,1,0,0,0,257,258,5,0,0,1,258,1,1,0,0,0,259,270,3,
        220,110,0,260,270,3,100,50,0,261,270,3,216,108,0,262,270,3,48,24,
        0,263,270,3,140,70,0,264,270,3,90,45,0,265,270,3,36,18,0,266,270,
        3,160,80,0,267,270,3,162,81,0,268,270,3,226,113,0,269,259,1,0,0,
        0,269,260,1,0,0,0,269,261,1,0,0,0,269,262,1,0,0,0,269,263,1,0,0,
        0,269,264,1,0,0,0,269,265,1,0,0,0,269,266,1,0,0,0,269,267,1,0,0,
        0,269,268,1,0,0,0,270,3,1,0,0,0,271,280,3,248,124,0,272,280,5,5,
        0,0,273,280,5,24,0,0,274,280,5,4,0,0,275,280,5,34,0,0,276,280,5,
        12,0,0,277,280,5,27,0,0,278,280,5,31,0,0,279,271,1,0,0,0,279,272,
        1,0,0,0,279,273,1,0,0,0,279,274,1,0,0,0,279,275,1,0,0,0,279,276,
        1,0,0,0,279,277,1,0,0,0,279,278,1,0,0,0,280,5,1,0,0,0,281,284,3,
        4,2,0,282,284,5,25,0,0,283,281,1,0,0,0,283,282,1,0,0,0,284,7,1,0,
        0,0,285,291,3,248,124,0,286,291,5,5,0,0,287,291,5,34,0,0,288,291,
        5,27,0,0,289,291,5,31,0,0,290,285,1,0,0,0,290,286,1,0,0,0,290,287,
        1,0,0,0,290,288,1,0,0,0,290,289,1,0,0,0,291,9,1,0,0,0,292,295,1,
        0,0,0,293,295,5,8,0,0,294,292,1,0,0,0,294,293,1,0,0,0,295,11,1,0,
        0,0,296,299,1,0,0,0,297,299,3,14,7,0,298,296,1,0,0,0,298,297,1,0,
        0,0,299,13,1,0,0,0,300,301,6,7,-1,0,301,302,3,16,8,0,302,307,1,0,
        0,0,303,304,10,1,0,0,304,306,3,16,8,0,305,303,1,0,0,0,306,309,1,
        0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,15,1,0,0,0,309,307,1,0,
        0,0,310,311,5,86,0,0,311,329,3,6,3,0,312,313,5,86,0,0,313,314,3,
        6,3,0,314,315,5,70,0,0,315,316,3,18,9,0,316,317,5,71,0,0,317,329,
        1,0,0,0,318,319,5,86,0,0,319,320,3,6,3,0,320,321,5,72,0,0,321,322,
        3,236,118,0,322,323,5,73,0,0,323,329,1,0,0,0,324,325,5,1,0,0,325,
        326,3,6,3,0,326,327,3,18,9,0,327,329,1,0,0,0,328,310,1,0,0,0,328,
        312,1,0,0,0,328,318,1,0,0,0,328,324,1,0,0,0,329,17,1,0,0,0,330,340,
        6,9,-1,0,331,332,10,2,0,0,332,333,5,70,0,0,333,334,3,18,9,0,334,
        335,5,71,0,0,335,339,1,0,0,0,336,337,10,1,0,0,337,339,3,20,10,0,
        338,331,1,0,0,0,338,336,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,
        340,341,1,0,0,0,341,19,1,0,0,0,342,340,1,0,0,0,343,430,5,2,0,0,344,
        430,5,3,0,0,345,430,5,4,0,0,346,430,5,5,0,0,347,430,5,6,0,0,348,
        430,5,7,0,0,349,430,5,8,0,0,350,430,5,9,0,0,351,430,5,10,0,0,352,
        430,5,11,0,0,353,430,5,12,0,0,354,430,5,13,0,0,355,430,5,14,0,0,
        356,430,5,15,0,0,357,430,5,16,0,0,358,430,5,17,0,0,359,430,5,18,
        0,0,360,430,5,19,0,0,361,430,5,20,0,0,362,430,5,21,0,0,363,430,5,
        22,0,0,364,430,5,23,0,0,365,430,5,24,0,0,366,430,5,26,0,0,367,430,
        5,27,0,0,368,430,5,28,0,0,369,430,5,29,0,0,370,430,5,30,0,0,371,
        430,5,1,0,0,372,430,5,31,0,0,373,430,5,32,0,0,374,430,5,33,0,0,375,
        430,5,34,0,0,376,430,5,35,0,0,377,430,5,36,0,0,378,430,5,37,0,0,
        379,430,5,38,0,0,380,430,5,39,0,0,381,430,5,40,0,0,382,430,5,41,
        0,0,383,430,5,42,0,0,384,430,5,43,0,0,385,430,5,44,0,0,386,430,5,
        45,0,0,387,430,5,25,0,0,388,430,5,46,0,0,389,430,5,47,0,0,390,430,
        3,248,124,0,391,430,5,90,0,0,392,430,5,92,0,0,393,430,5,48,0,0,394,
        430,5,50,0,0,395,430,5,49,0,0,396,430,5,51,0,0,397,430,5,52,0,0,
        398,430,5,53,0,0,399,430,5,54,0,0,400,430,5,55,0,0,401,430,5,56,
        0,0,402,430,5,57,0,0,403,430,5,58,0,0,404,430,5,59,0,0,405,430,5,
        60,0,0,406,430,5,61,0,0,407,430,5,62,0,0,408,430,5,63,0,0,409,430,
        5,64,0,0,410,430,5,65,0,0,411,430,5,66,0,0,412,430,5,67,0,0,413,
        430,5,68,0,0,414,430,5,69,0,0,415,430,5,72,0,0,416,430,5,73,0,0,
        417,430,5,75,0,0,418,430,5,76,0,0,419,430,5,77,0,0,420,430,5,78,
        0,0,421,430,5,79,0,0,422,430,5,80,0,0,423,430,5,81,0,0,424,430,5,
        82,0,0,425,430,5,83,0,0,426,430,5,84,0,0,427,430,5,85,0,0,428,430,
        5,86,0,0,429,343,1,0,0,0,429,344,1,0,0,0,429,345,1,0,0,0,429,346,
        1,0,0,0,429,347,1,0,0,0,429,348,1,0,0,0,429,349,1,0,0,0,429,350,
        1,0,0,0,429,351,1,0,0,0,429,352,1,0,0,0,429,353,1,0,0,0,429,354,
        1,0,0,0,429,355,1,0,0,0,429,356,1,0,0,0,429,357,1,0,0,0,429,358,
        1,0,0,0,429,359,1,0,0,0,429,360,1,0,0,0,429,361,1,0,0,0,429,362,
        1,0,0,0,429,363,1,0,0,0,429,364,1,0,0,0,429,365,1,0,0,0,429,366,
        1,0,0,0,429,367,1,0,0,0,429,368,1,0,0,0,429,369,1,0,0,0,429,370,
        1,0,0,0,429,371,1,0,0,0,429,372,1,0,0,0,429,373,1,0,0,0,429,374,
        1,0,0,0,429,375,1,0,0,0,429,376,1,0,0,0,429,377,1,0,0,0,429,378,
        1,0,0,0,429,379,1,0,0,0,429,380,1,0,0,0,429,381,1,0,0,0,429,382,
        1,0,0,0,429,383,1,0,0,0,429,384,1,0,0,0,429,385,1,0,0,0,429,386,
        1,0,0,0,429,387,1,0,0,0,429,388,1,0,0,0,429,389,1,0,0,0,429,390,
        1,0,0,0,429,391,1,0,0,0,429,392,1,0,0,0,429,393,1,0,0,0,429,394,
        1,0,0,0,429,395,1,0,0,0,429,396,1,0,0,0,429,397,1,0,0,0,429,398,
        1,0,0,0,429,399,1,0,0,0,429,400,1,0,0,0,429,401,1,0,0,0,429,402,
        1,0,0,0,429,403,1,0,0,0,429,404,1,0,0,0,429,405,1,0,0,0,429,406,
        1,0,0,0,429,407,1,0,0,0,429,408,1,0,0,0,429,409,1,0,0,0,429,410,
        1,0,0,0,429,411,1,0,0,0,429,412,1,0,0,0,429,413,1,0,0,0,429,414,
        1,0,0,0,429,415,1,0,0,0,429,416,1,0,0,0,429,417,1,0,0,0,429,418,
        1,0,0,0,429,419,1,0,0,0,429,420,1,0,0,0,429,421,1,0,0,0,429,422,
        1,0,0,0,429,423,1,0,0,0,429,424,1,0,0,0,429,425,1,0,0,0,429,426,
        1,0,0,0,429,427,1,0,0,0,429,428,1,0,0,0,430,21,1,0,0,0,431,432,6,
        11,-1,0,432,433,3,24,12,0,433,439,1,0,0,0,434,435,10,1,0,0,435,436,
        5,81,0,0,436,438,3,24,12,0,437,434,1,0,0,0,438,441,1,0,0,0,439,437,
        1,0,0,0,439,440,1,0,0,0,440,23,1,0,0,0,441,439,1,0,0,0,442,443,3,
        6,3,0,443,444,5,84,0,0,444,445,3,244,122,0,445,25,1,0,0,0,446,449,
        1,0,0,0,447,449,3,28,14,0,448,446,1,0,0,0,448,447,1,0,0,0,449,27,
        1,0,0,0,450,451,6,14,-1,0,451,452,3,30,15,0,452,458,1,0,0,0,453,
        454,10,1,0,0,454,455,5,81,0,0,455,457,3,30,15,0,456,453,1,0,0,0,
        457,460,1,0,0,0,458,456,1,0,0,0,458,459,1,0,0,0,459,29,1,0,0,0,460,
        458,1,0,0,0,461,462,3,12,6,0,462,463,3,32,16,0,463,464,3,108,54,
        0,464,465,3,6,3,0,465,474,1,0,0,0,466,467,3,12,6,0,467,468,3,32,
        16,0,468,469,3,108,54,0,469,470,3,6,3,0,470,471,5,84,0,0,471,472,
        3,244,122,0,472,474,1,0,0,0,473,461,1,0,0,0,473,466,1,0,0,0,474,
        31,1,0,0,0,475,480,5,21,0,0,476,480,5,28,0,0,477,480,5,22,0,0,478,
        480,1,0,0,0,479,475,1,0,0,0,479,476,1,0,0,0,479,477,1,0,0,0,479,
        478,1,0,0,0,480,33,1,0,0,0,481,482,3,12,6,0,482,483,5,30,0,0,483,
        484,3,6,3,0,484,485,3,128,64,0,485,486,5,70,0,0,486,487,3,26,13,
        0,487,488,5,71,0,0,488,35,1,0,0,0,489,490,3,14,7,0,490,491,3,108,
        54,0,491,492,5,70,0,0,492,493,3,228,114,0,493,494,5,71,0,0,494,495,
        3,6,3,0,495,496,5,85,0,0,496,524,1,0,0,0,497,498,3,108,54,0,498,
        499,5,70,0,0,499,500,3,228,114,0,500,501,5,71,0,0,501,502,3,6,3,
        0,502,503,5,85,0,0,503,524,1,0,0,0,504,505,3,14,7,0,505,506,3,108,
        54,0,506,507,5,70,0,0,507,508,3,228,114,0,508,509,5,71,0,0,509,510,
        3,6,3,0,510,511,5,84,0,0,511,512,3,38,19,0,512,513,5,85,0,0,513,
        524,1,0,0,0,514,515,3,108,54,0,515,516,5,70,0,0,516,517,3,228,114,
        0,517,518,5,71,0,0,518,519,3,6,3,0,519,520,5,84,0,0,520,521,3,38,
        19,0,521,522,5,85,0,0,522,524,1,0,0,0,523,489,1,0,0,0,523,497,1,
        0,0,0,523,504,1,0,0,0,523,514,1,0,0,0,524,37,1,0,0,0,525,526,5,75,
        0,0,526,527,3,40,20,0,527,528,5,76,0,0,528,39,1,0,0,0,529,534,6,
        20,-1,0,530,531,10,1,0,0,531,533,3,42,21,0,532,530,1,0,0,0,533,536,
        1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,41,1,0,0,0,536,534,1,
        0,0,0,537,540,3,226,113,0,538,540,3,36,18,0,539,537,1,0,0,0,539,
        538,1,0,0,0,540,43,1,0,0,0,541,547,1,0,0,0,542,543,5,70,0,0,543,
        544,3,26,13,0,544,545,5,71,0,0,545,547,1,0,0,0,546,541,1,0,0,0,546,
        542,1,0,0,0,547,45,1,0,0,0,548,549,5,83,0,0,549,47,1,0,0,0,550,551,
        3,54,27,0,551,552,3,44,22,0,552,553,5,75,0,0,553,554,3,50,25,0,554,
        555,3,56,28,0,555,556,5,76,0,0,556,49,1,0,0,0,557,562,6,25,-1,0,
        558,559,10,1,0,0,559,561,3,52,26,0,560,558,1,0,0,0,561,564,1,0,0,
        0,562,560,1,0,0,0,562,563,1,0,0,0,563,51,1,0,0,0,564,562,1,0,0,0,
        565,570,3,220,110,0,566,570,3,36,18,0,567,570,3,218,109,0,568,570,
        3,88,44,0,569,565,1,0,0,0,569,566,1,0,0,0,569,567,1,0,0,0,569,568,
        1,0,0,0,570,53,1,0,0,0,571,572,3,12,6,0,572,573,5,29,0,0,573,574,
        3,6,3,0,574,575,3,128,64,0,575,576,5,70,0,0,576,577,3,26,13,0,577,
        578,5,71,0,0,578,55,1,0,0,0,579,580,6,28,-1,0,580,581,3,58,29,0,
        581,586,1,0,0,0,582,583,10,1,0,0,583,585,3,58,29,0,584,582,1,0,0,
        0,585,588,1,0,0,0,586,584,1,0,0,0,586,587,1,0,0,0,587,57,1,0,0,0,
        588,586,1,0,0,0,589,590,3,12,6,0,590,591,5,34,0,0,591,592,3,6,3,
        0,592,593,5,75,0,0,593,594,3,60,30,0,594,595,3,66,33,0,595,596,5,
        76,0,0,596,59,1,0,0,0,597,602,6,30,-1,0,598,599,10,1,0,0,599,601,
        3,62,31,0,600,598,1,0,0,0,601,604,1,0,0,0,602,600,1,0,0,0,602,603,
        1,0,0,0,603,61,1,0,0,0,604,602,1,0,0,0,605,613,3,168,84,0,606,613,
        3,178,89,0,607,613,3,170,85,0,608,613,3,218,109,0,609,613,3,220,
        110,0,610,613,3,64,32,0,611,613,3,176,88,0,612,605,1,0,0,0,612,606,
        1,0,0,0,612,607,1,0,0,0,612,608,1,0,0,0,612,609,1,0,0,0,612,610,
        1,0,0,0,612,611,1,0,0,0,613,63,1,0,0,0,614,615,3,12,6,0,615,616,
        5,75,0,0,616,617,3,60,30,0,617,618,5,76,0,0,618,65,1,0,0,0,619,623,
        1,0,0,0,620,621,5,40,0,0,621,623,3,68,34,0,622,619,1,0,0,0,622,620,
        1,0,0,0,623,67,1,0,0,0,624,625,3,6,3,0,625,626,5,85,0,0,626,629,
        1,0,0,0,627,629,3,70,35,0,628,624,1,0,0,0,628,627,1,0,0,0,629,69,
        1,0,0,0,630,631,5,33,0,0,631,632,5,70,0,0,632,633,3,234,117,0,633,
        634,5,71,0,0,634,635,5,75,0,0,635,636,3,72,36,0,636,637,5,76,0,0,
        637,71,1,0,0,0,638,643,6,36,-1,0,639,640,10,1,0,0,640,642,3,74,37,
        0,641,639,1,0,0,0,642,645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,
        0,644,73,1,0,0,0,645,643,1,0,0,0,646,647,3,76,38,0,647,648,5,80,
        0,0,648,649,3,6,3,0,649,650,5,85,0,0,650,75,1,0,0,0,651,654,3,78,
        39,0,652,654,3,86,43,0,653,651,1,0,0,0,653,652,1,0,0,0,654,77,1,
        0,0,0,655,656,5,70,0,0,656,657,3,86,43,0,657,658,5,81,0,0,658,659,
        3,82,41,0,659,660,5,71,0,0,660,666,1,0,0,0,661,662,5,70,0,0,662,
        663,3,84,42,0,663,664,5,71,0,0,664,666,1,0,0,0,665,655,1,0,0,0,665,
        661,1,0,0,0,666,79,1,0,0,0,667,670,1,0,0,0,668,670,5,81,0,0,669,
        667,1,0,0,0,669,668,1,0,0,0,670,81,1,0,0,0,671,672,6,41,-1,0,672,
        673,3,86,43,0,673,679,1,0,0,0,674,675,10,1,0,0,675,676,5,81,0,0,
        676,678,3,86,43,0,677,674,1,0,0,0,678,681,1,0,0,0,679,677,1,0,0,
        0,679,680,1,0,0,0,680,83,1,0,0,0,681,679,1,0,0,0,682,683,3,244,122,
        0,683,684,5,48,0,0,684,685,3,244,122,0,685,693,1,0,0,0,686,687,3,
        244,122,0,687,688,5,50,0,0,688,689,3,244,122,0,689,693,1,0,0,0,690,
        693,5,10,0,0,691,693,5,47,0,0,692,682,1,0,0,0,692,686,1,0,0,0,692,
        690,1,0,0,0,692,691,1,0,0,0,693,85,1,0,0,0,694,706,3,244,122,0,695,
        696,3,244,122,0,696,697,5,48,0,0,697,698,3,244,122,0,698,706,1,0,
        0,0,699,700,3,244,122,0,700,701,5,50,0,0,701,702,3,244,122,0,702,
        706,1,0,0,0,703,706,5,10,0,0,704,706,5,47,0,0,705,694,1,0,0,0,705,
        695,1,0,0,0,705,699,1,0,0,0,705,703,1,0,0,0,705,704,1,0,0,0,706,
        87,1,0,0,0,707,708,3,12,6,0,708,709,5,45,0,0,709,710,5,77,0,0,710,
        711,3,124,62,0,711,712,5,78,0,0,712,713,5,70,0,0,713,714,3,244,122,
        0,714,715,5,71,0,0,715,716,3,6,3,0,716,717,5,85,0,0,717,741,1,0,
        0,0,718,719,3,12,6,0,719,720,5,45,0,0,720,721,5,77,0,0,721,722,3,
        118,59,0,722,723,5,78,0,0,723,724,5,70,0,0,724,725,3,244,122,0,725,
        726,5,71,0,0,726,727,3,6,3,0,727,728,5,85,0,0,728,741,1,0,0,0,729,
        730,3,12,6,0,730,731,5,45,0,0,731,732,5,77,0,0,732,733,3,114,57,
        0,733,734,5,78,0,0,734,735,5,70,0,0,735,736,3,244,122,0,736,737,
        5,71,0,0,737,738,3,6,3,0,738,739,5,85,0,0,739,741,1,0,0,0,740,707,
        1,0,0,0,740,718,1,0,0,0,740,729,1,0,0,0,741,89,1,0,0,0,742,743,3,
        92,46,0,743,744,3,44,22,0,744,745,5,75,0,0,745,746,3,94,47,0,746,
        747,5,5,0,0,747,748,3,98,49,0,748,749,5,76,0,0,749,91,1,0,0,0,750,
        751,3,12,6,0,751,752,5,9,0,0,752,753,3,6,3,0,753,754,3,128,64,0,
        754,755,5,70,0,0,755,756,3,26,13,0,756,757,5,71,0,0,757,93,1,0,0,
        0,758,763,6,47,-1,0,759,760,10,1,0,0,760,762,3,96,48,0,761,759,1,
        0,0,0,762,765,1,0,0,0,763,761,1,0,0,0,763,764,1,0,0,0,764,95,1,0,
        0,0,765,763,1,0,0,0,766,772,3,220,110,0,767,772,3,216,108,0,768,
        772,3,196,98,0,769,772,3,36,18,0,770,772,3,218,109,0,771,766,1,0,
        0,0,771,767,1,0,0,0,771,768,1,0,0,0,771,769,1,0,0,0,771,770,1,0,
        0,0,772,97,1,0,0,0,773,774,3,182,91,0,774,99,1,0,0,0,775,776,3,12,
        6,0,776,777,5,16,0,0,777,778,3,4,2,0,778,779,3,128,64,0,779,780,
        5,75,0,0,780,781,3,102,51,0,781,782,5,76,0,0,782,794,1,0,0,0,783,
        784,3,12,6,0,784,785,5,16,0,0,785,786,3,104,52,0,786,787,5,85,0,
        0,787,794,1,0,0,0,788,789,3,12,6,0,789,790,5,16,0,0,790,791,3,6,
        3,0,791,792,5,85,0,0,792,794,1,0,0,0,793,775,1,0,0,0,793,783,1,0,
        0,0,793,788,1,0,0,0,794,101,1,0,0,0,795,800,6,51,-1,0,796,797,10,
        1,0,0,797,799,3,106,53,0,798,796,1,0,0,0,799,802,1,0,0,0,800,798,
        1,0,0,0,800,801,1,0,0,0,801,103,1,0,0,0,802,800,1,0,0,0,803,804,
        3,126,63,0,804,805,3,6,3,0,805,806,3,128,64,0,806,807,5,70,0,0,807,
        808,3,26,13,0,808,809,5,71,0,0,809,105,1,0,0,0,810,811,3,12,6,0,
        811,812,3,104,52,0,812,813,5,85,0,0,813,827,1,0,0,0,814,815,3,12,
        6,0,815,816,5,2,0,0,816,817,3,104,52,0,817,818,5,85,0,0,818,827,
        1,0,0,0,819,820,3,12,6,0,820,821,3,248,124,0,821,822,5,70,0,0,822,
        823,3,26,13,0,823,824,5,71,0,0,824,825,5,85,0,0,825,827,1,0,0,0,
        826,810,1,0,0,0,826,814,1,0,0,0,826,819,1,0,0,0,827,107,1,0,0,0,
        828,835,3,124,62,0,829,835,3,114,57,0,830,835,3,122,61,0,831,835,
        3,120,60,0,832,835,3,116,58,0,833,835,3,118,59,0,834,828,1,0,0,0,
        834,829,1,0,0,0,834,830,1,0,0,0,834,831,1,0,0,0,834,832,1,0,0,0,
        834,833,1,0,0,0,835,109,1,0,0,0,836,839,3,114,57,0,837,839,3,122,
        61,0,838,836,1,0,0,0,838,837,1,0,0,0,839,111,1,0,0,0,840,845,3,248,
        124,0,841,842,3,46,23,0,842,843,3,248,124,0,843,845,1,0,0,0,844,
        840,1,0,0,0,844,841,1,0,0,0,845,113,1,0,0,0,846,847,3,112,56,0,847,
        115,1,0,0,0,848,849,5,25,0,0,849,850,5,77,0,0,850,851,3,132,66,0,
        851,852,5,78,0,0,852,117,1,0,0,0,853,854,5,42,0,0,854,855,5,77,0,
        0,855,856,3,134,67,0,856,857,5,78,0,0,857,119,1,0,0,0,858,859,3,
        114,57,0,859,860,5,72,0,0,860,861,3,244,122,0,861,862,5,73,0,0,862,
        869,1,0,0,0,863,864,3,122,61,0,864,865,5,72,0,0,865,866,3,244,122,
        0,866,867,5,73,0,0,867,869,1,0,0,0,868,858,1,0,0,0,868,863,1,0,0,
        0,869,121,1,0,0,0,870,871,3,114,57,0,871,872,5,77,0,0,872,873,3,
        134,67,0,873,874,5,78,0,0,874,123,1,0,0,0,875,915,5,6,0,0,876,915,
        5,26,0,0,877,915,5,14,0,0,878,915,5,7,0,0,879,915,5,35,0,0,880,915,
        5,23,0,0,881,882,5,7,0,0,882,883,5,77,0,0,883,884,5,92,0,0,884,915,
        5,78,0,0,885,886,5,23,0,0,886,887,5,77,0,0,887,888,5,92,0,0,888,
        915,5,78,0,0,889,890,5,44,0,0,890,891,5,77,0,0,891,892,5,92,0,0,
        892,915,5,78,0,0,893,894,5,7,0,0,894,895,5,77,0,0,895,896,5,70,0,
        0,896,897,3,244,122,0,897,898,5,71,0,0,898,899,5,78,0,0,899,915,
        1,0,0,0,900,901,5,23,0,0,901,902,5,77,0,0,902,903,5,70,0,0,903,904,
        3,244,122,0,904,905,5,71,0,0,905,906,5,78,0,0,906,915,1,0,0,0,907,
        908,5,44,0,0,908,909,5,77,0,0,909,910,5,70,0,0,910,911,3,244,122,
        0,911,912,5,71,0,0,912,913,5,78,0,0,913,915,1,0,0,0,914,875,1,0,
        0,0,914,876,1,0,0,0,914,877,1,0,0,0,914,878,1,0,0,0,914,879,1,0,
        0,0,914,880,1,0,0,0,914,881,1,0,0,0,914,885,1,0,0,0,914,889,1,0,
        0,0,914,893,1,0,0,0,914,900,1,0,0,0,914,907,1,0,0,0,915,125,1,0,
        0,0,916,920,3,108,54,0,917,920,5,46,0,0,918,920,3,248,124,0,919,
        916,1,0,0,0,919,917,1,0,0,0,919,918,1,0,0,0,920,127,1,0,0,0,921,
        927,1,0,0,0,922,923,5,77,0,0,923,924,3,130,65,0,924,925,5,78,0,0,
        925,927,1,0,0,0,926,921,1,0,0,0,926,922,1,0,0,0,927,129,1,0,0,0,
        928,929,6,65,-1,0,929,930,3,6,3,0,930,936,1,0,0,0,931,932,10,1,0,
        0,932,933,5,81,0,0,933,935,3,6,3,0,934,931,1,0,0,0,935,938,1,0,0,
        0,936,934,1,0,0,0,936,937,1,0,0,0,937,131,1,0,0,0,938,936,1,0,0,
        0,939,944,3,108,54,0,940,944,3,4,2,0,941,944,5,46,0,0,942,944,5,
        47,0,0,943,939,1,0,0,0,943,940,1,0,0,0,943,941,1,0,0,0,943,942,1,
        0,0,0,944,133,1,0,0,0,945,948,6,67,-1,0,946,948,3,132,66,0,947,945,
        1,0,0,0,947,946,1,0,0,0,948,954,1,0,0,0,949,950,10,1,0,0,950,951,
        5,81,0,0,951,953,3,132,66,0,952,949,1,0,0,0,953,956,1,0,0,0,954,
        952,1,0,0,0,954,955,1,0,0,0,955,135,1,0,0,0,956,954,1,0,0,0,957,
        961,3,108,54,0,958,961,5,46,0,0,959,961,5,47,0,0,960,957,1,0,0,0,
        960,958,1,0,0,0,960,959,1,0,0,0,961,137,1,0,0,0,962,963,6,69,-1,
        0,963,964,3,136,68,0,964,970,1,0,0,0,965,966,10,1,0,0,966,967,5,
        81,0,0,967,969,3,132,66,0,968,965,1,0,0,0,969,972,1,0,0,0,970,968,
        1,0,0,0,970,971,1,0,0,0,971,139,1,0,0,0,972,970,1,0,0,0,973,987,
        3,142,71,0,974,975,3,166,83,0,975,976,5,85,0,0,976,987,1,0,0,0,977,
        978,3,54,27,0,978,979,5,85,0,0,979,987,1,0,0,0,980,981,3,92,46,0,
        981,982,5,85,0,0,982,987,1,0,0,0,983,984,3,34,17,0,984,985,5,85,
        0,0,985,987,1,0,0,0,986,973,1,0,0,0,986,974,1,0,0,0,986,977,1,0,
        0,0,986,980,1,0,0,0,986,983,1,0,0,0,987,141,1,0,0,0,988,993,3,144,
        72,0,989,993,3,148,74,0,990,993,3,146,73,0,991,993,3,154,77,0,992,
        988,1,0,0,0,992,989,1,0,0,0,992,990,1,0,0,0,992,991,1,0,0,0,993,
        143,1,0,0,0,994,995,3,12,6,0,995,996,5,18,0,0,996,997,3,6,3,0,997,
        998,3,128,64,0,998,999,5,75,0,0,999,1000,3,150,75,0,1000,1001,5,
        76,0,0,1001,145,1,0,0,0,1002,1003,3,12,6,0,1003,1004,5,36,0,0,1004,
        1005,3,6,3,0,1005,1006,3,128,64,0,1006,1007,5,75,0,0,1007,1008,3,
        150,75,0,1008,1009,5,76,0,0,1009,147,1,0,0,0,1010,1011,3,12,6,0,
        1011,1012,5,19,0,0,1012,1013,3,6,3,0,1013,1014,3,128,64,0,1014,1015,
        5,75,0,0,1015,1016,3,150,75,0,1016,1017,5,76,0,0,1017,149,1,0,0,
        0,1018,1023,6,75,-1,0,1019,1020,10,1,0,0,1020,1022,3,152,76,0,1021,
        1019,1,0,0,0,1022,1025,1,0,0,0,1023,1021,1,0,0,0,1023,1024,1,0,0,
        0,1024,151,1,0,0,0,1025,1023,1,0,0,0,1026,1027,3,12,6,0,1027,1028,
        3,108,54,0,1028,1029,3,6,3,0,1029,1030,5,85,0,0,1030,153,1,0,0,0,
        1031,1032,3,12,6,0,1032,1033,5,13,0,0,1033,1034,3,6,3,0,1034,1035,
        5,75,0,0,1035,1036,3,164,82,0,1036,1037,3,80,40,0,1037,1038,5,76,
        0,0,1038,1049,1,0,0,0,1039,1040,3,12,6,0,1040,1041,5,13,0,0,1041,
        1042,3,108,54,0,1042,1043,3,6,3,0,1043,1044,5,75,0,0,1044,1045,3,
        156,78,0,1045,1046,3,80,40,0,1046,1047,5,76,0,0,1047,1049,1,0,0,
        0,1048,1031,1,0,0,0,1048,1039,1,0,0,0,1049,155,1,0,0,0,1050,1051,
        6,78,-1,0,1051,1052,3,158,79,0,1052,1058,1,0,0,0,1053,1054,10,1,
        0,0,1054,1055,5,81,0,0,1055,1057,3,158,79,0,1056,1053,1,0,0,0,1057,
        1060,1,0,0,0,1058,1056,1,0,0,0,1058,1059,1,0,0,0,1059,157,1,0,0,
        0,1060,1058,1,0,0,0,1061,1062,3,6,3,0,1062,1063,5,84,0,0,1063,1064,
        3,224,112,0,1064,159,1,0,0,0,1065,1066,5,14,0,0,1066,1067,5,75,0,
        0,1067,1068,3,164,82,0,1068,1069,5,76,0,0,1069,161,1,0,0,0,1070,
        1071,5,26,0,0,1071,1072,5,75,0,0,1072,1073,3,164,82,0,1073,1074,
        3,80,40,0,1074,1075,5,76,0,0,1075,163,1,0,0,0,1076,1077,6,82,-1,
        0,1077,1078,3,6,3,0,1078,1084,1,0,0,0,1079,1080,10,1,0,0,1080,1081,
        5,81,0,0,1081,1083,3,6,3,0,1082,1079,1,0,0,0,1083,1086,1,0,0,0,1084,
        1082,1,0,0,0,1084,1085,1,0,0,0,1085,165,1,0,0,0,1086,1084,1,0,0,
        0,1087,1088,3,12,6,0,1088,1089,5,43,0,0,1089,1090,3,108,54,0,1090,
        1091,3,6,3,0,1091,1103,1,0,0,0,1092,1093,3,12,6,0,1093,1094,5,43,
        0,0,1094,1095,3,142,71,0,1095,1096,3,6,3,0,1096,1103,1,0,0,0,1097,
        1098,3,12,6,0,1098,1099,5,27,0,0,1099,1100,3,108,54,0,1100,1101,
        3,6,3,0,1101,1103,1,0,0,0,1102,1087,1,0,0,0,1102,1092,1,0,0,0,1102,
        1097,1,0,0,0,1103,167,1,0,0,0,1104,1105,3,242,121,0,1105,1106,5,
        70,0,0,1106,1107,3,228,114,0,1107,1108,5,71,0,0,1108,1109,5,85,0,
        0,1109,1125,1,0,0,0,1110,1111,3,242,121,0,1111,1112,5,77,0,0,1112,
        1113,3,134,67,0,1113,1114,5,78,0,0,1114,1115,5,70,0,0,1115,1116,
        3,228,114,0,1116,1117,5,71,0,0,1117,1118,5,85,0,0,1118,1125,1,0,
        0,0,1119,1120,3,242,121,0,1120,1121,5,84,0,0,1121,1122,3,244,122,
        0,1122,1123,5,85,0,0,1123,1125,1,0,0,0,1124,1104,1,0,0,0,1124,1110,
        1,0,0,0,1124,1119,1,0,0,0,1125,169,1,0,0,0,1126,1127,5,85,0,0,1127,
        171,1,0,0,0,1128,1129,5,15,0,0,1129,1130,5,85,0,0,1130,173,1,0,0,
        0,1131,1132,5,32,0,0,1132,1138,5,85,0,0,1133,1134,5,32,0,0,1134,
        1135,3,244,122,0,1135,1136,5,85,0,0,1136,1138,1,0,0,0,1137,1131,
        1,0,0,0,1137,1133,1,0,0,0,1138,175,1,0,0,0,1139,1140,5,20,0,0,1140,
        1141,5,70,0,0,1141,1142,3,244,122,0,1142,1143,5,71,0,0,1143,1144,
        3,180,90,0,1144,1154,1,0,0,0,1145,1146,5,20,0,0,1146,1147,5,70,0,
        0,1147,1148,3,244,122,0,1148,1149,5,71,0,0,1149,1150,3,180,90,0,
        1150,1151,5,11,0,0,1151,1152,3,180,90,0,1152,1154,1,0,0,0,1153,1139,
        1,0,0,0,1153,1145,1,0,0,0,1154,177,1,0,0,0,1155,1156,3,114,57,0,
        1156,1157,5,83,0,0,1157,1158,5,5,0,0,1158,1159,5,70,0,0,1159,1160,
        3,228,114,0,1160,1161,5,71,0,0,1161,1162,5,85,0,0,1162,1172,1,0,
        0,0,1163,1164,3,122,61,0,1164,1165,5,83,0,0,1165,1166,5,5,0,0,1166,
        1167,5,70,0,0,1167,1168,3,228,114,0,1168,1169,5,71,0,0,1169,1170,
        5,85,0,0,1170,1172,1,0,0,0,1171,1155,1,0,0,0,1171,1163,1,0,0,0,1172,
        179,1,0,0,0,1173,1182,3,168,84,0,1174,1182,3,178,89,0,1175,1182,
        3,176,88,0,1176,1182,3,170,85,0,1177,1182,3,182,91,0,1178,1182,3,
        174,87,0,1179,1182,3,172,86,0,1180,1182,3,186,93,0,1181,1173,1,0,
        0,0,1181,1174,1,0,0,0,1181,1175,1,0,0,0,1181,1176,1,0,0,0,1181,1177,
        1,0,0,0,1181,1178,1,0,0,0,1181,1179,1,0,0,0,1181,1180,1,0,0,0,1182,
        181,1,0,0,0,1183,1184,3,12,6,0,1184,1185,5,75,0,0,1185,1186,3,184,
        92,0,1186,1187,5,76,0,0,1187,183,1,0,0,0,1188,1193,6,92,-1,0,1189,
        1190,10,1,0,0,1190,1192,3,194,97,0,1191,1189,1,0,0,0,1192,1195,1,
        0,0,0,1193,1191,1,0,0,0,1193,1194,1,0,0,0,1194,185,1,0,0,0,1195,
        1193,1,0,0,0,1196,1197,5,37,0,0,1197,1198,5,70,0,0,1198,1199,3,244,
        122,0,1199,1200,5,71,0,0,1200,1201,5,75,0,0,1201,1202,3,188,94,0,
        1202,1203,5,76,0,0,1203,187,1,0,0,0,1204,1209,6,94,-1,0,1205,1206,
        10,1,0,0,1206,1208,3,190,95,0,1207,1205,1,0,0,0,1208,1211,1,0,0,
        0,1209,1207,1,0,0,0,1209,1210,1,0,0,0,1210,189,1,0,0,0,1211,1209,
        1,0,0,0,1212,1213,3,192,96,0,1213,1214,5,80,0,0,1214,1215,3,182,
        91,0,1215,1220,1,0,0,0,1216,1217,3,192,96,0,1217,1218,5,80,0,0,1218,
        1220,1,0,0,0,1219,1212,1,0,0,0,1219,1216,1,0,0,0,1220,191,1,0,0,
        0,1221,1224,5,10,0,0,1222,1224,3,246,123,0,1223,1221,1,0,0,0,1223,
        1222,1,0,0,0,1224,193,1,0,0,0,1225,1230,3,218,109,0,1226,1230,3,
        220,110,0,1227,1230,3,180,90,0,1228,1230,3,36,18,0,1229,1225,1,0,
        0,0,1229,1226,1,0,0,0,1229,1227,1,0,0,0,1229,1228,1,0,0,0,1230,195,
        1,0,0,0,1231,1232,3,12,6,0,1232,1233,5,38,0,0,1233,1234,3,6,3,0,
        1234,1235,5,75,0,0,1235,1236,3,198,99,0,1236,1237,5,76,0,0,1237,
        197,1,0,0,0,1238,1239,6,99,-1,0,1239,1240,3,200,100,0,1240,1245,
        1,0,0,0,1241,1242,10,1,0,0,1242,1244,3,200,100,0,1243,1241,1,0,0,
        0,1244,1247,1,0,0,0,1245,1243,1,0,0,0,1245,1246,1,0,0,0,1246,199,
        1,0,0,0,1247,1245,1,0,0,0,1248,1249,5,24,0,0,1249,1250,5,84,0,0,
        1250,1251,5,75,0,0,1251,1252,3,202,101,0,1252,1253,5,76,0,0,1253,
        1276,1,0,0,0,1254,1255,5,4,0,0,1255,1256,5,84,0,0,1256,1257,5,75,
        0,0,1257,1258,3,206,103,0,1258,1259,5,76,0,0,1259,1276,1,0,0,0,1260,
        1261,3,12,6,0,1261,1262,3,10,5,0,1262,1263,5,12,0,0,1263,1264,5,
        84,0,0,1264,1265,5,75,0,0,1265,1266,3,214,107,0,1266,1267,5,76,0,
        0,1267,1276,1,0,0,0,1268,1269,3,12,6,0,1269,1270,3,10,5,0,1270,1271,
        3,8,4,0,1271,1272,5,84,0,0,1272,1273,3,224,112,0,1273,1274,5,85,
        0,0,1274,1276,1,0,0,0,1275,1248,1,0,0,0,1275,1254,1,0,0,0,1275,1260,
        1,0,0,0,1275,1268,1,0,0,0,1276,201,1,0,0,0,1277,1282,6,101,-1,0,
        1278,1279,10,1,0,0,1279,1281,3,204,102,0,1280,1278,1,0,0,0,1281,
        1284,1,0,0,0,1282,1280,1,0,0,0,1282,1283,1,0,0,0,1283,203,1,0,0,
        0,1284,1282,1,0,0,0,1285,1286,3,244,122,0,1286,1287,5,80,0,0,1287,
        1288,3,6,3,0,1288,1289,3,12,6,0,1289,1290,5,85,0,0,1290,205,1,0,
        0,0,1291,1299,6,103,-1,0,1292,1293,10,1,0,0,1293,1294,3,12,6,0,1294,
        1295,3,208,104,0,1295,1296,5,85,0,0,1296,1298,1,0,0,0,1297,1292,
        1,0,0,0,1298,1301,1,0,0,0,1299,1297,1,0,0,0,1299,1300,1,0,0,0,1300,
        207,1,0,0,0,1301,1299,1,0,0,0,1302,1309,3,240,120,0,1303,1304,3,
        240,120,0,1304,1305,5,70,0,0,1305,1306,3,228,114,0,1306,1307,5,71,
        0,0,1307,1309,1,0,0,0,1308,1302,1,0,0,0,1308,1303,1,0,0,0,1309,209,
        1,0,0,0,1310,1311,3,10,5,0,1311,1312,3,212,106,0,1312,1313,3,76,
        38,0,1313,1314,5,80,0,0,1314,1315,3,208,104,0,1315,1316,3,12,6,0,
        1316,1317,5,85,0,0,1317,1326,1,0,0,0,1318,1319,3,10,5,0,1319,1320,
        3,76,38,0,1320,1321,5,80,0,0,1321,1322,3,208,104,0,1322,1323,3,12,
        6,0,1323,1324,5,85,0,0,1324,1326,1,0,0,0,1325,1310,1,0,0,0,1325,
        1318,1,0,0,0,1326,211,1,0,0,0,1327,1328,5,31,0,0,1328,1329,5,84,
        0,0,1329,1330,5,92,0,0,1330,1339,5,80,0,0,1331,1332,5,31,0,0,1332,
        1333,5,84,0,0,1333,1334,5,70,0,0,1334,1335,3,244,122,0,1335,1336,
        5,71,0,0,1336,1337,5,80,0,0,1337,1339,1,0,0,0,1338,1327,1,0,0,0,
        1338,1331,1,0,0,0,1339,213,1,0,0,0,1340,1345,6,107,-1,0,1341,1342,
        10,1,0,0,1342,1344,3,210,105,0,1343,1341,1,0,0,0,1344,1347,1,0,0,
        0,1345,1343,1,0,0,0,1345,1346,1,0,0,0,1346,215,1,0,0,0,1347,1345,
        1,0,0,0,1348,1349,3,12,6,0,1349,1350,5,3,0,0,1350,1351,3,6,3,0,1351,
        1352,5,70,0,0,1352,1353,3,26,13,0,1353,1354,5,71,0,0,1354,1355,3,
        182,91,0,1355,217,1,0,0,0,1356,1357,3,14,7,0,1357,1358,3,108,54,
        0,1358,1359,3,6,3,0,1359,1360,3,222,111,0,1360,1361,5,85,0,0,1361,
        1368,1,0,0,0,1362,1363,3,108,54,0,1363,1364,3,6,3,0,1364,1365,3,
        222,111,0,1365,1366,5,85,0,0,1366,1368,1,0,0,0,1367,1356,1,0,0,0,
        1367,1362,1,0,0,0,1368,219,1,0,0,0,1369,1370,3,12,6,0,1370,1371,
        5,8,0,0,1371,1372,3,108,54,0,1372,1373,3,6,3,0,1373,1374,5,84,0,
        0,1374,1375,3,224,112,0,1375,1376,5,85,0,0,1376,221,1,0,0,0,1377,
        1381,1,0,0,0,1378,1379,5,84,0,0,1379,1381,3,224,112,0,1380,1377,
        1,0,0,0,1380,1378,1,0,0,0,1381,223,1,0,0,0,1382,1383,3,244,122,0,
        1383,225,1,0,0,0,1384,1385,3,14,7,0,1385,1386,3,104,52,0,1386,1387,
        3,182,91,0,1387,1392,1,0,0,0,1388,1389,3,104,52,0,1389,1390,3,182,
        91,0,1390,1392,1,0,0,0,1391,1384,1,0,0,0,1391,1388,1,0,0,0,1392,
        227,1,0,0,0,1393,1396,1,0,0,0,1394,1396,3,230,115,0,1395,1393,1,
        0,0,0,1395,1394,1,0,0,0,1396,229,1,0,0,0,1397,1398,6,115,-1,0,1398,
        1399,3,232,116,0,1399,1405,1,0,0,0,1400,1401,10,1,0,0,1401,1402,
        5,81,0,0,1402,1404,3,232,116,0,1403,1400,1,0,0,0,1404,1407,1,0,0,
        0,1405,1403,1,0,0,0,1405,1406,1,0,0,0,1406,231,1,0,0,0,1407,1405,
        1,0,0,0,1408,1419,3,244,122,0,1409,1410,3,6,3,0,1410,1411,5,84,0,
        0,1411,1412,3,244,122,0,1412,1419,1,0,0,0,1413,1419,5,47,0,0,1414,
        1415,3,6,3,0,1415,1416,5,84,0,0,1416,1417,5,47,0,0,1417,1419,1,0,
        0,0,1418,1408,1,0,0,0,1418,1409,1,0,0,0,1418,1413,1,0,0,0,1418,1414,
        1,0,0,0,1419,233,1,0,0,0,1420,1423,6,117,-1,0,1421,1423,3,244,122,
        0,1422,1420,1,0,0,0,1422,1421,1,0,0,0,1423,1429,1,0,0,0,1424,1425,
        10,1,0,0,1425,1426,5,81,0,0,1426,1428,3,244,122,0,1427,1424,1,0,
        0,0,1428,1431,1,0,0,0,1429,1427,1,0,0,0,1429,1430,1,0,0,0,1430,235,
        1,0,0,0,1431,1429,1,0,0,0,1432,1433,3,234,117,0,1433,1434,3,80,40,
        0,1434,1439,1,0,0,0,1435,1436,3,22,11,0,1436,1437,3,80,40,0,1437,
        1439,1,0,0,0,1438,1432,1,0,0,0,1438,1435,1,0,0,0,1439,237,1,0,0,
        0,1440,1441,3,6,3,0,1441,239,1,0,0,0,1442,1447,3,4,2,0,1443,1444,
        3,46,23,0,1444,1445,3,4,2,0,1445,1447,1,0,0,0,1446,1442,1,0,0,0,
        1446,1443,1,0,0,0,1447,241,1,0,0,0,1448,1449,6,121,-1,0,1449,1456,
        3,240,120,0,1450,1456,5,39,0,0,1451,1452,5,70,0,0,1452,1453,3,242,
        121,0,1453,1454,5,71,0,0,1454,1456,1,0,0,0,1455,1448,1,0,0,0,1455,
        1450,1,0,0,0,1455,1451,1,0,0,0,1456,1474,1,0,0,0,1457,1458,10,4,
        0,0,1458,1459,5,83,0,0,1459,1473,3,238,119,0,1460,1461,10,3,0,0,
        1461,1462,5,72,0,0,1462,1463,3,244,122,0,1463,1464,5,73,0,0,1464,
        1473,1,0,0,0,1465,1466,10,2,0,0,1466,1467,5,72,0,0,1467,1468,3,244,
        122,0,1468,1469,5,80,0,0,1469,1470,3,244,122,0,1470,1471,5,73,0,
        0,1471,1473,1,0,0,0,1472,1457,1,0,0,0,1472,1460,1,0,0,0,1472,1465,
        1,0,0,0,1473,1476,1,0,0,0,1474,1472,1,0,0,0,1474,1475,1,0,0,0,1475,
        243,1,0,0,0,1476,1474,1,0,0,0,1477,1478,6,122,-1,0,1478,1536,5,92,
        0,0,1479,1536,5,49,0,0,1480,1536,5,90,0,0,1481,1536,5,41,0,0,1482,
        1536,5,17,0,0,1483,1536,5,39,0,0,1484,1536,3,4,2,0,1485,1486,3,46,
        23,0,1486,1487,3,4,2,0,1487,1536,1,0,0,0,1488,1489,5,75,0,0,1489,
        1490,3,234,117,0,1490,1491,3,80,40,0,1491,1492,5,76,0,0,1492,1536,
        1,0,0,0,1493,1536,5,74,0,0,1494,1495,5,75,0,0,1495,1496,3,22,11,
        0,1496,1497,3,80,40,0,1497,1498,5,76,0,0,1498,1536,1,0,0,0,1499,
        1500,5,75,0,0,1500,1501,3,22,11,0,1501,1502,5,81,0,0,1502,1503,5,
        49,0,0,1503,1504,3,80,40,0,1504,1505,5,76,0,0,1505,1536,1,0,0,0,
        1506,1507,5,70,0,0,1507,1508,3,244,122,0,1508,1509,5,71,0,0,1509,
        1536,1,0,0,0,1510,1511,5,79,0,0,1511,1536,3,244,122,33,1512,1513,
        5,69,0,0,1513,1536,3,244,122,32,1514,1515,5,61,0,0,1515,1536,3,244,
        122,31,1516,1517,5,59,0,0,1517,1536,3,244,122,30,1518,1519,3,114,
        57,0,1519,1520,5,83,0,0,1520,1521,3,238,119,0,1521,1536,1,0,0,0,
        1522,1523,5,14,0,0,1523,1524,5,83,0,0,1524,1536,3,238,119,0,1525,
        1526,3,110,55,0,1526,1527,5,70,0,0,1527,1528,3,228,114,0,1528,1529,
        5,71,0,0,1529,1536,1,0,0,0,1530,1531,5,70,0,0,1531,1532,3,108,54,
        0,1532,1533,5,71,0,0,1533,1534,3,244,122,1,1534,1536,1,0,0,0,1535,
        1477,1,0,0,0,1535,1479,1,0,0,0,1535,1480,1,0,0,0,1535,1481,1,0,0,
        0,1535,1482,1,0,0,0,1535,1483,1,0,0,0,1535,1484,1,0,0,0,1535,1485,
        1,0,0,0,1535,1488,1,0,0,0,1535,1493,1,0,0,0,1535,1494,1,0,0,0,1535,
        1499,1,0,0,0,1535,1506,1,0,0,0,1535,1510,1,0,0,0,1535,1512,1,0,0,
        0,1535,1514,1,0,0,0,1535,1516,1,0,0,0,1535,1518,1,0,0,0,1535,1522,
        1,0,0,0,1535,1525,1,0,0,0,1535,1530,1,0,0,0,1536,1637,1,0,0,0,1537,
        1538,10,26,0,0,1538,1539,5,63,0,0,1539,1636,3,244,122,27,1540,1541,
        10,25,0,0,1541,1542,5,64,0,0,1542,1636,3,244,122,26,1543,1544,10,
        24,0,0,1544,1545,5,65,0,0,1545,1636,3,244,122,25,1546,1547,10,23,
        0,0,1547,1548,5,59,0,0,1548,1636,3,244,122,24,1549,1550,10,22,0,
        0,1550,1551,5,61,0,0,1551,1636,3,244,122,23,1552,1553,10,21,0,0,
        1553,1554,5,60,0,0,1554,1636,3,244,122,22,1555,1556,10,20,0,0,1556,
        1557,5,62,0,0,1557,1636,3,244,122,21,1558,1559,10,19,0,0,1559,1560,
        5,51,0,0,1560,1636,3,244,122,20,1561,1562,10,18,0,0,1562,1563,5,
        78,0,0,1563,1564,5,78,0,0,1564,1636,3,244,122,19,1565,1566,10,17,
        0,0,1566,1567,5,57,0,0,1567,1636,3,244,122,18,1568,1569,10,16,0,
        0,1569,1570,5,56,0,0,1570,1636,3,244,122,17,1571,1572,10,15,0,0,
        1572,1573,5,77,0,0,1573,1636,3,244,122,16,1574,1575,10,14,0,0,1575,
        1576,5,78,0,0,1576,1636,3,244,122,15,1577,1578,10,13,0,0,1578,1579,
        5,55,0,0,1579,1636,3,244,122,14,1580,1581,10,12,0,0,1581,1582,5,
        54,0,0,1582,1636,3,244,122,13,1583,1584,10,11,0,0,1584,1585,5,67,
        0,0,1585,1636,3,244,122,12,1586,1587,10,10,0,0,1587,1588,5,68,0,
        0,1588,1636,3,244,122,11,1589,1590,10,9,0,0,1590,1591,5,66,0,0,1591,
        1636,3,244,122,10,1592,1593,10,8,0,0,1593,1594,5,58,0,0,1594,1636,
        3,244,122,9,1595,1596,10,7,0,0,1596,1597,5,52,0,0,1597,1636,3,244,
        122,8,1598,1599,10,6,0,0,1599,1600,5,53,0,0,1600,1636,3,244,122,
        7,1601,1602,10,5,0,0,1602,1603,5,82,0,0,1603,1604,3,244,122,0,1604,
        1605,5,80,0,0,1605,1606,3,244,122,6,1606,1636,1,0,0,0,1607,1608,
        10,40,0,0,1608,1609,5,72,0,0,1609,1610,3,244,122,0,1610,1611,5,73,
        0,0,1611,1636,1,0,0,0,1612,1613,10,39,0,0,1613,1614,5,72,0,0,1614,
        1615,3,244,122,0,1615,1616,5,80,0,0,1616,1617,3,244,122,0,1617,1618,
        5,73,0,0,1618,1636,1,0,0,0,1619,1620,10,27,0,0,1620,1621,5,83,0,
        0,1621,1636,3,238,119,0,1622,1623,10,4,0,0,1623,1624,5,77,0,0,1624,
        1625,3,138,69,0,1625,1626,5,78,0,0,1626,1627,5,70,0,0,1627,1628,
        3,228,114,0,1628,1629,5,71,0,0,1629,1636,1,0,0,0,1630,1631,10,3,
        0,0,1631,1632,5,70,0,0,1632,1633,3,228,114,0,1633,1634,5,71,0,0,
        1634,1636,1,0,0,0,1635,1537,1,0,0,0,1635,1540,1,0,0,0,1635,1543,
        1,0,0,0,1635,1546,1,0,0,0,1635,1549,1,0,0,0,1635,1552,1,0,0,0,1635,
        1555,1,0,0,0,1635,1558,1,0,0,0,1635,1561,1,0,0,0,1635,1565,1,0,0,
        0,1635,1568,1,0,0,0,1635,1571,1,0,0,0,1635,1574,1,0,0,0,1635,1577,
        1,0,0,0,1635,1580,1,0,0,0,1635,1583,1,0,0,0,1635,1586,1,0,0,0,1635,
        1589,1,0,0,0,1635,1592,1,0,0,0,1635,1595,1,0,0,0,1635,1598,1,0,0,
        0,1635,1601,1,0,0,0,1635,1607,1,0,0,0,1635,1612,1,0,0,0,1635,1619,
        1,0,0,0,1635,1622,1,0,0,0,1635,1630,1,0,0,0,1636,1639,1,0,0,0,1637,
        1635,1,0,0,0,1637,1638,1,0,0,0,1638,245,1,0,0,0,1639,1637,1,0,0,
        0,1640,1641,6,123,-1,0,1641,1680,5,92,0,0,1642,1680,5,90,0,0,1643,
        1680,5,41,0,0,1644,1680,5,17,0,0,1645,1680,5,39,0,0,1646,1680,3,
        4,2,0,1647,1648,3,46,23,0,1648,1649,3,4,2,0,1649,1680,1,0,0,0,1650,
        1651,5,70,0,0,1651,1652,3,244,122,0,1652,1653,5,71,0,0,1653,1680,
        1,0,0,0,1654,1655,5,79,0,0,1655,1680,3,244,122,0,1656,1657,5,69,
        0,0,1657,1680,3,244,122,0,1658,1659,5,61,0,0,1659,1680,3,244,122,
        0,1660,1661,5,59,0,0,1661,1680,3,244,122,0,1662,1663,3,114,57,0,
        1663,1664,5,83,0,0,1664,1665,3,238,119,0,1665,1680,1,0,0,0,1666,
        1667,5,14,0,0,1667,1668,5,83,0,0,1668,1680,3,238,119,0,1669,1670,
        3,110,55,0,1670,1671,5,70,0,0,1671,1672,3,228,114,0,1672,1673,5,
        71,0,0,1673,1680,1,0,0,0,1674,1675,5,70,0,0,1675,1676,3,108,54,0,
        1676,1677,5,71,0,0,1677,1678,3,244,122,0,1678,1680,1,0,0,0,1679,
        1640,1,0,0,0,1679,1642,1,0,0,0,1679,1643,1,0,0,0,1679,1644,1,0,0,
        0,1679,1645,1,0,0,0,1679,1646,1,0,0,0,1679,1647,1,0,0,0,1679,1650,
        1,0,0,0,1679,1654,1,0,0,0,1679,1656,1,0,0,0,1679,1658,1,0,0,0,1679,
        1660,1,0,0,0,1679,1662,1,0,0,0,1679,1666,1,0,0,0,1679,1669,1,0,0,
        0,1679,1674,1,0,0,0,1680,1781,1,0,0,0,1681,1682,10,36,0,0,1682,1683,
        5,72,0,0,1683,1684,3,244,122,0,1684,1685,5,73,0,0,1685,1780,1,0,
        0,0,1686,1687,10,35,0,0,1687,1688,5,72,0,0,1688,1689,3,244,122,0,
        1689,1690,5,80,0,0,1690,1691,3,244,122,0,1691,1692,5,73,0,0,1692,
        1780,1,0,0,0,1693,1694,10,27,0,0,1694,1695,5,83,0,0,1695,1780,3,
        238,119,0,1696,1697,10,26,0,0,1697,1698,5,63,0,0,1698,1780,3,244,
        122,0,1699,1700,10,25,0,0,1700,1701,5,64,0,0,1701,1780,3,244,122,
        0,1702,1703,10,24,0,0,1703,1704,5,65,0,0,1704,1780,3,244,122,0,1705,
        1706,10,23,0,0,1706,1707,5,59,0,0,1707,1780,3,244,122,0,1708,1709,
        10,22,0,0,1709,1710,5,61,0,0,1710,1780,3,244,122,0,1711,1712,10,
        21,0,0,1712,1713,5,60,0,0,1713,1780,3,244,122,0,1714,1715,10,20,
        0,0,1715,1716,5,62,0,0,1716,1780,3,244,122,0,1717,1718,10,19,0,0,
        1718,1719,5,51,0,0,1719,1780,3,244,122,0,1720,1721,10,18,0,0,1721,
        1722,5,78,0,0,1722,1723,5,78,0,0,1723,1780,3,244,122,0,1724,1725,
        10,17,0,0,1725,1726,5,57,0,0,1726,1780,3,244,122,0,1727,1728,10,
        16,0,0,1728,1729,5,56,0,0,1729,1780,3,244,122,0,1730,1731,10,15,
        0,0,1731,1732,5,77,0,0,1732,1780,3,244,122,0,1733,1734,10,14,0,0,
        1734,1735,5,78,0,0,1735,1780,3,244,122,0,1736,1737,10,13,0,0,1737,
        1738,5,55,0,0,1738,1780,3,244,122,0,1739,1740,10,12,0,0,1740,1741,
        5,54,0,0,1741,1780,3,244,122,0,1742,1743,10,11,0,0,1743,1744,5,67,
        0,0,1744,1780,3,244,122,0,1745,1746,10,10,0,0,1746,1747,5,68,0,0,
        1747,1780,3,244,122,0,1748,1749,10,9,0,0,1749,1750,5,66,0,0,1750,
        1780,3,244,122,0,1751,1752,10,8,0,0,1752,1753,5,58,0,0,1753,1780,
        3,244,122,0,1754,1755,10,7,0,0,1755,1756,5,52,0,0,1756,1780,3,244,
        122,0,1757,1758,10,6,0,0,1758,1759,5,53,0,0,1759,1780,3,244,122,
        0,1760,1761,10,5,0,0,1761,1762,5,82,0,0,1762,1763,3,244,122,0,1763,
        1764,5,80,0,0,1764,1765,3,244,122,0,1765,1780,1,0,0,0,1766,1767,
        10,4,0,0,1767,1768,5,77,0,0,1768,1769,3,138,69,0,1769,1770,5,78,
        0,0,1770,1771,5,70,0,0,1771,1772,3,228,114,0,1772,1773,5,71,0,0,
        1773,1780,1,0,0,0,1774,1775,10,3,0,0,1775,1776,5,70,0,0,1776,1777,
        3,228,114,0,1777,1778,5,71,0,0,1778,1780,1,0,0,0,1779,1681,1,0,0,
        0,1779,1686,1,0,0,0,1779,1693,1,0,0,0,1779,1696,1,0,0,0,1779,1699,
        1,0,0,0,1779,1702,1,0,0,0,1779,1705,1,0,0,0,1779,1708,1,0,0,0,1779,
        1711,1,0,0,0,1779,1714,1,0,0,0,1779,1717,1,0,0,0,1779,1720,1,0,0,
        0,1779,1724,1,0,0,0,1779,1727,1,0,0,0,1779,1730,1,0,0,0,1779,1733,
        1,0,0,0,1779,1736,1,0,0,0,1779,1739,1,0,0,0,1779,1742,1,0,0,0,1779,
        1745,1,0,0,0,1779,1748,1,0,0,0,1779,1751,1,0,0,0,1779,1754,1,0,0,
        0,1779,1757,1,0,0,0,1779,1760,1,0,0,0,1779,1766,1,0,0,0,1779,1774,
        1,0,0,0,1780,1783,1,0,0,0,1781,1779,1,0,0,0,1781,1782,1,0,0,0,1782,
        247,1,0,0,0,1783,1781,1,0,0,0,1784,1785,5,91,0,0,1785,249,1,0,0,
        0,99,252,254,269,279,283,290,294,298,307,328,338,340,429,439,448,
        458,473,479,523,534,539,546,562,569,586,602,612,622,628,643,653,
        665,669,679,692,705,740,763,771,793,800,826,834,838,844,868,914,
        919,926,936,943,947,954,960,970,986,992,1023,1048,1058,1084,1102,
        1124,1137,1153,1171,1181,1193,1209,1219,1223,1229,1245,1275,1282,
        1299,1308,1325,1338,1345,1367,1380,1391,1395,1405,1418,1422,1429,
        1438,1446,1455,1472,1474,1535,1635,1637,1679,1779,1781
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!P4Parser.__ATN) {
            P4Parser.__ATN = new antlr.ATNDeserializer().deserialize(P4Parser._serializedATN);
        }

        return P4Parser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(P4Parser.literalNames, P4Parser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return P4Parser.vocabulary;
    }

    private static readonly decisionsToDFA = P4Parser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(P4Parser.EOF, 0)!;
    }
    public declaration(): DeclarationContext[];
    public declaration(i: number): DeclarationContext | null;
    public declaration(i?: number): DeclarationContext[] | DeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }

        return this.getRuleContext(i, DeclarationContext);
    }
    public SEMICOLON(): antlr.TerminalNode[];
    public SEMICOLON(i: number): antlr.TerminalNode | null;
    public SEMICOLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(P4Parser.SEMICOLON);
    	} else {
    		return this.getToken(P4Parser.SEMICOLON, i);
    	}
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_program;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
}


export class DeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public externDeclaration(): ExternDeclarationContext | null {
        return this.getRuleContext(0, ExternDeclarationContext);
    }
    public actionDeclaration(): ActionDeclarationContext | null {
        return this.getRuleContext(0, ActionDeclarationContext);
    }
    public parserDeclaration(): ParserDeclarationContext | null {
        return this.getRuleContext(0, ParserDeclarationContext);
    }
    public typeDeclaration(): TypeDeclarationContext | null {
        return this.getRuleContext(0, TypeDeclarationContext);
    }
    public controlDeclaration(): ControlDeclarationContext | null {
        return this.getRuleContext(0, ControlDeclarationContext);
    }
    public instantiation(): InstantiationContext | null {
        return this.getRuleContext(0, InstantiationContext);
    }
    public errorDeclaration(): ErrorDeclarationContext | null {
        return this.getRuleContext(0, ErrorDeclarationContext);
    }
    public matchKindDeclaration(): MatchKindDeclarationContext | null {
        return this.getRuleContext(0, MatchKindDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_declaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterDeclaration) {
             listener.enterDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitDeclaration) {
             listener.exitDeclaration(this);
        }
    }
}


export class NonTypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_or_id(): Type_or_idContext | null {
        return this.getRuleContext(0, Type_or_idContext);
    }
    public APPLY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.APPLY, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.KEY, 0);
    }
    public ACTIONS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ACTIONS, 0);
    }
    public STATE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STATE, 0);
    }
    public ENTRIES(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ENTRIES, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TYPE, 0);
    }
    public PRIORITY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PRIORITY, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_nonTypeName;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterNonTypeName) {
             listener.enterNonTypeName(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitNonTypeName) {
             listener.exitNonTypeName(this);
        }
    }
}


export class NameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonTypeName(): NonTypeNameContext | null {
        return this.getRuleContext(0, NonTypeNameContext);
    }
    public LIST(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.LIST, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_name;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterName) {
             listener.enterName(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitName) {
             listener.exitName(this);
        }
    }
}


export class NonTableKwNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_or_id(): Type_or_idContext | null {
        return this.getRuleContext(0, Type_or_idContext);
    }
    public APPLY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.APPLY, 0);
    }
    public STATE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STATE, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TYPE, 0);
    }
    public PRIORITY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PRIORITY, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_nonTableKwName;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterNonTableKwName) {
             listener.enterNonTableKwName(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitNonTableKwName) {
             listener.exitNonTableKwName(this);
        }
    }
}


export class OptCONSTContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.CONST, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_optCONST;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterOptCONST) {
             listener.enterOptCONST(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitOptCONST) {
             listener.exitOptCONST(this);
        }
    }
}


export class OptAnnotationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotations(): AnnotationsContext | null {
        return this.getRuleContext(0, AnnotationsContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_optAnnotations;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterOptAnnotations) {
             listener.enterOptAnnotations(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitOptAnnotations) {
             listener.exitOptAnnotations(this);
        }
    }
}


export class AnnotationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotation(): AnnotationContext {
        return this.getRuleContext(0, AnnotationContext)!;
    }
    public annotations(): AnnotationsContext | null {
        return this.getRuleContext(0, AnnotationsContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_annotations;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterAnnotations) {
             listener.enterAnnotations(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitAnnotations) {
             listener.exitAnnotations(this);
        }
    }
}


export class AnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.AT, 0);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public annotationBody(): AnnotationBodyContext | null {
        return this.getRuleContext(0, AnnotationBodyContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public L_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACKET, 0);
    }
    public structuredAnnotationBody(): StructuredAnnotationBodyContext | null {
        return this.getRuleContext(0, StructuredAnnotationBodyContext);
    }
    public R_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACKET, 0);
    }
    public PRAGMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PRAGMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_annotation;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterAnnotation) {
             listener.enterAnnotation(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitAnnotation) {
             listener.exitAnnotation(this);
        }
    }
}


export class AnnotationBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotationBody(): AnnotationBodyContext[];
    public annotationBody(i: number): AnnotationBodyContext | null;
    public annotationBody(i?: number): AnnotationBodyContext[] | AnnotationBodyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationBodyContext);
        }

        return this.getRuleContext(i, AnnotationBodyContext);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public annotationToken(): AnnotationTokenContext | null {
        return this.getRuleContext(0, AnnotationTokenContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_annotationBody;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterAnnotationBody) {
             listener.enterAnnotationBody(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitAnnotationBody) {
             listener.exitAnnotationBody(this);
        }
    }
}


export class AnnotationTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ABSTRACT, 0);
    }
    public ACTION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ACTION, 0);
    }
    public ACTIONS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ACTIONS, 0);
    }
    public APPLY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.APPLY, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BOOL, 0);
    }
    public BIT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT, 0);
    }
    public CONST(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.CONST, 0);
    }
    public CONTROL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.CONTROL, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DEFAULT, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ELSE, 0);
    }
    public ENTRIES(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ENTRIES, 0);
    }
    public ENUM(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ENUM, 0);
    }
    public ERROR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ERROR, 0);
    }
    public EXIT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.EXIT, 0);
    }
    public EXTERN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.EXTERN, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.FALSE, 0);
    }
    public HEADER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.HEADER, 0);
    }
    public HEADER_UNION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.HEADER_UNION, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.IF, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.IN, 0);
    }
    public INOUT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INOUT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INT, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.KEY, 0);
    }
    public MATCH_KIND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MATCH_KIND, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TYPE, 0);
    }
    public OUT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.OUT, 0);
    }
    public PARSER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PARSER, 0);
    }
    public PACKAGE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PACKAGE, 0);
    }
    public PRAGMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PRAGMA, 0);
    }
    public PRIORITY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PRIORITY, 0);
    }
    public RETURN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.RETURN, 0);
    }
    public SELECT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SELECT, 0);
    }
    public STATE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STATE, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STRING, 0);
    }
    public STRUCT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STRUCT, 0);
    }
    public SWITCH(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SWITCH, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TABLE, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.THIS, 0);
    }
    public TRANSITION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TRANSITION, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TRUE, 0);
    }
    public TUPLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TUPLE, 0);
    }
    public TYPEDEF(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TYPEDEF, 0);
    }
    public VARBIT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VARBIT, 0);
    }
    public VALUESET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VALUESET, 0);
    }
    public LIST(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.LIST, 0);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VOID, 0);
    }
    public DONTCARE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DONTCARE, 0);
    }
    public type_or_id(): Type_or_idContext | null {
        return this.getRuleContext(0, Type_or_idContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STRING_LITERAL, 0);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INTEGER, 0);
    }
    public MASK(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MASK, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.RANGE, 0);
    }
    public DOTS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DOTS, 0);
    }
    public SHL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SHL, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.OR, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.EQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.NE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.LE, 0);
    }
    public PP(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PP, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PLUS, 0);
    }
    public PLUS_SAT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PLUS_SAT, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MINUS, 0);
    }
    public MINUS_SAT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MINUS_SAT, 0);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MUL, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MOD, 0);
    }
    public BIT_OR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_OR, 0);
    }
    public BIT_AND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_AND, 0);
    }
    public BIT_XOR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_XOR, 0);
    }
    public COMPLEMENT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMPLEMENT, 0);
    }
    public L_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACKET, 0);
    }
    public R_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACKET, 0);
    }
    public L_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACE, 0);
    }
    public R_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACE, 0);
    }
    public L_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_ANGLE, 0);
    }
    public R_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_ANGLE, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.NOT, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COLON, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.QUESTION, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DOT, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ASSIGN, 0);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SEMICOLON, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.AT, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_annotationToken;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterAnnotationToken) {
             listener.enterAnnotationToken(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitAnnotationToken) {
             listener.exitAnnotationToken(this);
        }
    }
}


export class KvListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kvPair(): KvPairContext {
        return this.getRuleContext(0, KvPairContext)!;
    }
    public kvList(): KvListContext | null {
        return this.getRuleContext(0, KvListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_kvList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterKvList) {
             listener.enterKvList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitKvList) {
             listener.exitKvList(this);
        }
    }
}


export class KvPairContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(P4Parser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_kvPair;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterKvPair) {
             listener.enterKvPair(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitKvPair) {
             listener.exitKvPair(this);
        }
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonEmptyParameterList(): NonEmptyParameterListContext | null {
        return this.getRuleContext(0, NonEmptyParameterListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parameterList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParameterList) {
             listener.enterParameterList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParameterList) {
             listener.exitParameterList(this);
        }
    }
}


export class NonEmptyParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameter(): ParameterContext {
        return this.getRuleContext(0, ParameterContext)!;
    }
    public nonEmptyParameterList(): NonEmptyParameterListContext | null {
        return this.getRuleContext(0, NonEmptyParameterListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_nonEmptyParameterList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterNonEmptyParameterList) {
             listener.enterNonEmptyParameterList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitNonEmptyParameterList) {
             listener.exitNonEmptyParameterList(this);
        }
    }
}


export class ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public direction(): DirectionContext {
        return this.getRuleContext(0, DirectionContext)!;
    }
    public typeRef(): TypeRefContext {
        return this.getRuleContext(0, TypeRefContext)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ASSIGN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parameter;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
}


export class DirectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.IN, 0);
    }
    public OUT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.OUT, 0);
    }
    public INOUT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INOUT, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_direction;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterDirection) {
             listener.enterDirection(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitDirection) {
             listener.exitDirection(this);
        }
    }
}


export class PackageTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public PACKAGE(): antlr.TerminalNode {
        return this.getToken(P4Parser.PACKAGE, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_packageTypeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterPackageTypeDeclaration) {
             listener.enterPackageTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitPackageTypeDeclaration) {
             listener.exitPackageTypeDeclaration(this);
        }
    }
}


export class InstantiationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotations(): AnnotationsContext | null {
        return this.getRuleContext(0, AnnotationsContext);
    }
    public typeRef(): TypeRefContext {
        return this.getRuleContext(0, TypeRefContext)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public argumentList(): ArgumentListContext {
        return this.getRuleContext(0, ArgumentListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ASSIGN, 0);
    }
    public objInitializer(): ObjInitializerContext | null {
        return this.getRuleContext(0, ObjInitializerContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_instantiation;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterInstantiation) {
             listener.enterInstantiation(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitInstantiation) {
             listener.exitInstantiation(this);
        }
    }
}


export class ObjInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public objDeclarations(): ObjDeclarationsContext {
        return this.getRuleContext(0, ObjDeclarationsContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_objInitializer;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterObjInitializer) {
             listener.enterObjInitializer(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitObjInitializer) {
             listener.exitObjInitializer(this);
        }
    }
}


export class ObjDeclarationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public objDeclarations(): ObjDeclarationsContext | null {
        return this.getRuleContext(0, ObjDeclarationsContext);
    }
    public objDeclaration(): ObjDeclarationContext | null {
        return this.getRuleContext(0, ObjDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_objDeclarations;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterObjDeclarations) {
             listener.enterObjDeclarations(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitObjDeclarations) {
             listener.exitObjDeclarations(this);
        }
    }
}


export class ObjDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public instantiation(): InstantiationContext | null {
        return this.getRuleContext(0, InstantiationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_objDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterObjDeclaration) {
             listener.enterObjDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitObjDeclaration) {
             listener.exitObjDeclaration(this);
        }
    }
}


export class OptConstructorParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_optConstructorParameters;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterOptConstructorParameters) {
             listener.enterOptConstructorParameters(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitOptConstructorParameters) {
             listener.exitOptConstructorParameters(this);
        }
    }
}


export class DotPrefixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(P4Parser.DOT, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_dotPrefix;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterDotPrefix) {
             listener.enterDotPrefix(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitDotPrefix) {
             listener.exitDotPrefix(this);
        }
    }
}


export class ParserDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parserTypeDeclaration(): ParserTypeDeclarationContext {
        return this.getRuleContext(0, ParserTypeDeclarationContext)!;
    }
    public optConstructorParameters(): OptConstructorParametersContext {
        return this.getRuleContext(0, OptConstructorParametersContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public parserLocalElements(): ParserLocalElementsContext {
        return this.getRuleContext(0, ParserLocalElementsContext)!;
    }
    public parserStates(): ParserStatesContext {
        return this.getRuleContext(0, ParserStatesContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserDeclaration) {
             listener.enterParserDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserDeclaration) {
             listener.exitParserDeclaration(this);
        }
    }
}


export class ParserLocalElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parserLocalElements(): ParserLocalElementsContext | null {
        return this.getRuleContext(0, ParserLocalElementsContext);
    }
    public parserLocalElement(): ParserLocalElementContext | null {
        return this.getRuleContext(0, ParserLocalElementContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserLocalElements;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserLocalElements) {
             listener.enterParserLocalElements(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserLocalElements) {
             listener.exitParserLocalElements(this);
        }
    }
}


export class ParserLocalElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public instantiation(): InstantiationContext | null {
        return this.getRuleContext(0, InstantiationContext);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public valueSetDeclaration(): ValueSetDeclarationContext | null {
        return this.getRuleContext(0, ValueSetDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserLocalElement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserLocalElement) {
             listener.enterParserLocalElement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserLocalElement) {
             listener.exitParserLocalElement(this);
        }
    }
}


export class ParserTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public PARSER(): antlr.TerminalNode {
        return this.getToken(P4Parser.PARSER, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserTypeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserTypeDeclaration) {
             listener.enterParserTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserTypeDeclaration) {
             listener.exitParserTypeDeclaration(this);
        }
    }
}


export class ParserStatesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parserState(): ParserStateContext {
        return this.getRuleContext(0, ParserStateContext)!;
    }
    public parserStates(): ParserStatesContext | null {
        return this.getRuleContext(0, ParserStatesContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserStates;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserStates) {
             listener.enterParserStates(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserStates) {
             listener.exitParserStates(this);
        }
    }
}


export class ParserStateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public STATE(): antlr.TerminalNode {
        return this.getToken(P4Parser.STATE, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public parserStatements(): ParserStatementsContext {
        return this.getRuleContext(0, ParserStatementsContext)!;
    }
    public transitionStatement(): TransitionStatementContext {
        return this.getRuleContext(0, TransitionStatementContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserState;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserState) {
             listener.enterParserState(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserState) {
             listener.exitParserState(this);
        }
    }
}


export class ParserStatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parserStatements(): ParserStatementsContext | null {
        return this.getRuleContext(0, ParserStatementsContext);
    }
    public parserStatement(): ParserStatementContext | null {
        return this.getRuleContext(0, ParserStatementContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserStatements;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserStatements) {
             listener.enterParserStatements(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserStatements) {
             listener.exitParserStatements(this);
        }
    }
}


export class ParserStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentOrMethodCallStatement(): AssignmentOrMethodCallStatementContext | null {
        return this.getRuleContext(0, AssignmentOrMethodCallStatementContext);
    }
    public directApplication(): DirectApplicationContext | null {
        return this.getRuleContext(0, DirectApplicationContext);
    }
    public emptyStatement(): EmptyStatementContext | null {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public parserBlockStatement(): ParserBlockStatementContext | null {
        return this.getRuleContext(0, ParserBlockStatementContext);
    }
    public conditionalStatement(): ConditionalStatementContext | null {
        return this.getRuleContext(0, ConditionalStatementContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserStatement) {
             listener.enterParserStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserStatement) {
             listener.exitParserStatement(this);
        }
    }
}


export class ParserBlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public parserStatements(): ParserStatementsContext {
        return this.getRuleContext(0, ParserStatementsContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_parserBlockStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterParserBlockStatement) {
             listener.enterParserBlockStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitParserBlockStatement) {
             listener.exitParserBlockStatement(this);
        }
    }
}


export class TransitionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRANSITION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TRANSITION, 0);
    }
    public stateExpression(): StateExpressionContext | null {
        return this.getRuleContext(0, StateExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_transitionStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTransitionStatement) {
             listener.enterTransitionStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTransitionStatement) {
             listener.exitTransitionStatement(this);
        }
    }
}


export class StateExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SEMICOLON, 0);
    }
    public selectExpression(): SelectExpressionContext | null {
        return this.getRuleContext(0, SelectExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_stateExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStateExpression) {
             listener.enterStateExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStateExpression) {
             listener.exitStateExpression(this);
        }
    }
}


export class SelectExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(P4Parser.SELECT, 0)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public expressionList(): ExpressionListContext {
        return this.getRuleContext(0, ExpressionListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public selectCaseList(): SelectCaseListContext {
        return this.getRuleContext(0, SelectCaseListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_selectExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSelectExpression) {
             listener.enterSelectExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSelectExpression) {
             listener.exitSelectExpression(this);
        }
    }
}


export class SelectCaseListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectCaseList(): SelectCaseListContext | null {
        return this.getRuleContext(0, SelectCaseListContext);
    }
    public selectCase(): SelectCaseContext | null {
        return this.getRuleContext(0, SelectCaseContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_selectCaseList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSelectCaseList) {
             listener.enterSelectCaseList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSelectCaseList) {
             listener.exitSelectCaseList(this);
        }
    }
}


export class SelectCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keysetExpression(): KeysetExpressionContext {
        return this.getRuleContext(0, KeysetExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.COLON, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_selectCase;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSelectCase) {
             listener.enterSelectCase(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSelectCase) {
             listener.exitSelectCase(this);
        }
    }
}


export class KeysetExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tupleKeysetExpression(): TupleKeysetExpressionContext | null {
        return this.getRuleContext(0, TupleKeysetExpressionContext);
    }
    public simpleKeysetExpression(): SimpleKeysetExpressionContext | null {
        return this.getRuleContext(0, SimpleKeysetExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_keysetExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterKeysetExpression) {
             listener.enterKeysetExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitKeysetExpression) {
             listener.exitKeysetExpression(this);
        }
    }
}


export class TupleKeysetExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public simpleKeysetExpression(): SimpleKeysetExpressionContext | null {
        return this.getRuleContext(0, SimpleKeysetExpressionContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public simpleExpressionList(): SimpleExpressionListContext | null {
        return this.getRuleContext(0, SimpleExpressionListContext);
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public reducedSimpleKeysetExpression(): ReducedSimpleKeysetExpressionContext | null {
        return this.getRuleContext(0, ReducedSimpleKeysetExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_tupleKeysetExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTupleKeysetExpression) {
             listener.enterTupleKeysetExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTupleKeysetExpression) {
             listener.exitTupleKeysetExpression(this);
        }
    }
}


export class OptTrailingCommaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_optTrailingComma;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterOptTrailingComma) {
             listener.enterOptTrailingComma(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitOptTrailingComma) {
             listener.exitOptTrailingComma(this);
        }
    }
}


export class SimpleExpressionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleKeysetExpression(): SimpleKeysetExpressionContext {
        return this.getRuleContext(0, SimpleKeysetExpressionContext)!;
    }
    public simpleExpressionList(): SimpleExpressionListContext | null {
        return this.getRuleContext(0, SimpleExpressionListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_simpleExpressionList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSimpleExpressionList) {
             listener.enterSimpleExpressionList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSimpleExpressionList) {
             listener.exitSimpleExpressionList(this);
        }
    }
}


export class ReducedSimpleKeysetExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public MASK(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MASK, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.RANGE, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DEFAULT, 0);
    }
    public DONTCARE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DONTCARE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_reducedSimpleKeysetExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterReducedSimpleKeysetExpression) {
             listener.enterReducedSimpleKeysetExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitReducedSimpleKeysetExpression) {
             listener.exitReducedSimpleKeysetExpression(this);
        }
    }
}


export class SimpleKeysetExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public MASK(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MASK, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.RANGE, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DEFAULT, 0);
    }
    public DONTCARE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DONTCARE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_simpleKeysetExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSimpleKeysetExpression) {
             listener.enterSimpleKeysetExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSimpleKeysetExpression) {
             listener.exitSimpleKeysetExpression(this);
        }
    }
}


export class ValueSetDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public VALUESET(): antlr.TerminalNode {
        return this.getToken(P4Parser.VALUESET, 0)!;
    }
    public L_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_ANGLE, 0)!;
    }
    public baseType(): BaseTypeContext | null {
        return this.getRuleContext(0, BaseTypeContext);
    }
    public R_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_ANGLE, 0)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public tupleType(): TupleTypeContext | null {
        return this.getRuleContext(0, TupleTypeContext);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_valueSetDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterValueSetDeclaration) {
             listener.enterValueSetDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitValueSetDeclaration) {
             listener.exitValueSetDeclaration(this);
        }
    }
}


export class ControlDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public controlTypeDeclaration(): ControlTypeDeclarationContext {
        return this.getRuleContext(0, ControlTypeDeclarationContext)!;
    }
    public optConstructorParameters(): OptConstructorParametersContext {
        return this.getRuleContext(0, OptConstructorParametersContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public controlLocalDeclarations(): ControlLocalDeclarationsContext {
        return this.getRuleContext(0, ControlLocalDeclarationsContext)!;
    }
    public APPLY(): antlr.TerminalNode {
        return this.getToken(P4Parser.APPLY, 0)!;
    }
    public controlBody(): ControlBodyContext {
        return this.getRuleContext(0, ControlBodyContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_controlDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterControlDeclaration) {
             listener.enterControlDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitControlDeclaration) {
             listener.exitControlDeclaration(this);
        }
    }
}


export class ControlTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public CONTROL(): antlr.TerminalNode {
        return this.getToken(P4Parser.CONTROL, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_controlTypeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterControlTypeDeclaration) {
             listener.enterControlTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitControlTypeDeclaration) {
             listener.exitControlTypeDeclaration(this);
        }
    }
}


export class ControlLocalDeclarationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public controlLocalDeclarations(): ControlLocalDeclarationsContext | null {
        return this.getRuleContext(0, ControlLocalDeclarationsContext);
    }
    public controlLocalDeclaration(): ControlLocalDeclarationContext | null {
        return this.getRuleContext(0, ControlLocalDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_controlLocalDeclarations;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterControlLocalDeclarations) {
             listener.enterControlLocalDeclarations(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitControlLocalDeclarations) {
             listener.exitControlLocalDeclarations(this);
        }
    }
}


export class ControlLocalDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public actionDeclaration(): ActionDeclarationContext | null {
        return this.getRuleContext(0, ActionDeclarationContext);
    }
    public tableDeclaration(): TableDeclarationContext | null {
        return this.getRuleContext(0, TableDeclarationContext);
    }
    public instantiation(): InstantiationContext | null {
        return this.getRuleContext(0, InstantiationContext);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_controlLocalDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterControlLocalDeclaration) {
             listener.enterControlLocalDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitControlLocalDeclaration) {
             listener.exitControlLocalDeclaration(this);
        }
    }
}


export class ControlBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_controlBody;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterControlBody) {
             listener.enterControlBody(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitControlBody) {
             listener.exitControlBody(this);
        }
    }
}


export class ExternDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public EXTERN(): antlr.TerminalNode {
        return this.getToken(P4Parser.EXTERN, 0)!;
    }
    public nonTypeName(): NonTypeNameContext | null {
        return this.getRuleContext(0, NonTypeNameContext);
    }
    public optTypeParameters(): OptTypeParametersContext | null {
        return this.getRuleContext(0, OptTypeParametersContext);
    }
    public L_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACE, 0);
    }
    public methodPrototypes(): MethodPrototypesContext | null {
        return this.getRuleContext(0, MethodPrototypesContext);
    }
    public R_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACE, 0);
    }
    public functionPrototype(): FunctionPrototypeContext | null {
        return this.getRuleContext(0, FunctionPrototypeContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SEMICOLON, 0);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_externDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterExternDeclaration) {
             listener.enterExternDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitExternDeclaration) {
             listener.exitExternDeclaration(this);
        }
    }
}


export class MethodPrototypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodPrototypes(): MethodPrototypesContext | null {
        return this.getRuleContext(0, MethodPrototypesContext);
    }
    public methodPrototype(): MethodPrototypeContext | null {
        return this.getRuleContext(0, MethodPrototypeContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_methodPrototypes;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterMethodPrototypes) {
             listener.enterMethodPrototypes(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitMethodPrototypes) {
             listener.exitMethodPrototypes(this);
        }
    }
}


export class FunctionPrototypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeOrVoid(): TypeOrVoidContext {
        return this.getRuleContext(0, TypeOrVoidContext)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_functionPrototype;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterFunctionPrototype) {
             listener.enterFunctionPrototype(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitFunctionPrototype) {
             listener.exitFunctionPrototype(this);
        }
    }
}


export class MethodPrototypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public functionPrototype(): FunctionPrototypeContext | null {
        return this.getRuleContext(0, FunctionPrototypeContext);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ABSTRACT, 0);
    }
    public type_or_id(): Type_or_idContext | null {
        return this.getRuleContext(0, Type_or_idContext);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_methodPrototype;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterMethodPrototype) {
             listener.enterMethodPrototype(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitMethodPrototype) {
             listener.exitMethodPrototype(this);
        }
    }
}


export class TypeRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public baseType(): BaseTypeContext | null {
        return this.getRuleContext(0, BaseTypeContext);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public specializedType(): SpecializedTypeContext | null {
        return this.getRuleContext(0, SpecializedTypeContext);
    }
    public headerStackType(): HeaderStackTypeContext | null {
        return this.getRuleContext(0, HeaderStackTypeContext);
    }
    public p4listType(): P4listTypeContext | null {
        return this.getRuleContext(0, P4listTypeContext);
    }
    public tupleType(): TupleTypeContext | null {
        return this.getRuleContext(0, TupleTypeContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeRef;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeRef) {
             listener.enterTypeRef(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeRef) {
             listener.exitTypeRef(this);
        }
    }
}


export class NamedTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public specializedType(): SpecializedTypeContext | null {
        return this.getRuleContext(0, SpecializedTypeContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_namedType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterNamedType) {
             listener.enterNamedType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitNamedType) {
             listener.exitNamedType(this);
        }
    }
}


export class PrefixedTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_or_id(): Type_or_idContext {
        return this.getRuleContext(0, Type_or_idContext)!;
    }
    public dotPrefix(): DotPrefixContext | null {
        return this.getRuleContext(0, DotPrefixContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_prefixedType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterPrefixedType) {
             listener.enterPrefixedType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitPrefixedType) {
             listener.exitPrefixedType(this);
        }
    }
}


export class TypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public prefixedType(): PrefixedTypeContext {
        return this.getRuleContext(0, PrefixedTypeContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeName;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeName) {
             listener.enterTypeName(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeName) {
             listener.exitTypeName(this);
        }
    }
}


export class P4listTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIST(): antlr.TerminalNode {
        return this.getToken(P4Parser.LIST, 0)!;
    }
    public L_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_ANGLE, 0)!;
    }
    public typeArg(): TypeArgContext {
        return this.getRuleContext(0, TypeArgContext)!;
    }
    public R_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_ANGLE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_p4listType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterP4listType) {
             listener.enterP4listType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitP4listType) {
             listener.exitP4listType(this);
        }
    }
}


export class TupleTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TUPLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.TUPLE, 0)!;
    }
    public L_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_ANGLE, 0)!;
    }
    public typeArgumentList(): TypeArgumentListContext {
        return this.getRuleContext(0, TypeArgumentListContext)!;
    }
    public R_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_ANGLE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_tupleType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTupleType) {
             listener.enterTupleType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTupleType) {
             listener.exitTupleType(this);
        }
    }
}


export class HeaderStackTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public L_BRACKET(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public R_BRACKET(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACKET, 0)!;
    }
    public specializedType(): SpecializedTypeContext | null {
        return this.getRuleContext(0, SpecializedTypeContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_headerStackType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterHeaderStackType) {
             listener.enterHeaderStackType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitHeaderStackType) {
             listener.exitHeaderStackType(this);
        }
    }
}


export class SpecializedTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public L_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_ANGLE, 0)!;
    }
    public typeArgumentList(): TypeArgumentListContext {
        return this.getRuleContext(0, TypeArgumentListContext)!;
    }
    public R_ANGLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_ANGLE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_specializedType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSpecializedType) {
             listener.enterSpecializedType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSpecializedType) {
             listener.exitSpecializedType(this);
        }
    }
}


export class BaseTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BOOL, 0);
    }
    public MATCH_KIND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MATCH_KIND, 0);
    }
    public ERROR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ERROR, 0);
    }
    public BIT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STRING, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INT, 0);
    }
    public L_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_ANGLE, 0);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INTEGER, 0);
    }
    public R_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_ANGLE, 0);
    }
    public VARBIT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VARBIT, 0);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_baseType;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterBaseType) {
             listener.enterBaseType(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitBaseType) {
             listener.exitBaseType(this);
        }
    }
}


export class TypeOrVoidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VOID, 0);
    }
    public type_or_id(): Type_or_idContext | null {
        return this.getRuleContext(0, Type_or_idContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeOrVoid;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeOrVoid) {
             listener.enterTypeOrVoid(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeOrVoid) {
             listener.exitTypeOrVoid(this);
        }
    }
}


export class OptTypeParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public L_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_ANGLE, 0);
    }
    public typeParameterList(): TypeParameterListContext | null {
        return this.getRuleContext(0, TypeParameterListContext);
    }
    public R_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_ANGLE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_optTypeParameters;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterOptTypeParameters) {
             listener.enterOptTypeParameters(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitOptTypeParameters) {
             listener.exitOptTypeParameters(this);
        }
    }
}


export class TypeParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public typeParameterList(): TypeParameterListContext | null {
        return this.getRuleContext(0, TypeParameterListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeParameterList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeParameterList) {
             listener.enterTypeParameterList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeParameterList) {
             listener.exitTypeParameterList(this);
        }
    }
}


export class TypeArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public nonTypeName(): NonTypeNameContext | null {
        return this.getRuleContext(0, NonTypeNameContext);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VOID, 0);
    }
    public DONTCARE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DONTCARE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeArg;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeArg) {
             listener.enterTypeArg(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeArg) {
             listener.exitTypeArg(this);
        }
    }
}


export class TypeArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeArg(): TypeArgContext | null {
        return this.getRuleContext(0, TypeArgContext);
    }
    public typeArgumentList(): TypeArgumentListContext | null {
        return this.getRuleContext(0, TypeArgumentListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeArgumentList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeArgumentList) {
             listener.enterTypeArgumentList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeArgumentList) {
             listener.exitTypeArgumentList(this);
        }
    }
}


export class RealTypeArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.VOID, 0);
    }
    public DONTCARE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DONTCARE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_realTypeArg;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterRealTypeArg) {
             listener.enterRealTypeArg(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitRealTypeArg) {
             listener.exitRealTypeArg(this);
        }
    }
}


export class RealTypeArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public realTypeArg(): RealTypeArgContext | null {
        return this.getRuleContext(0, RealTypeArgContext);
    }
    public realTypeArgumentList(): RealTypeArgumentListContext | null {
        return this.getRuleContext(0, RealTypeArgumentListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public typeArg(): TypeArgContext | null {
        return this.getRuleContext(0, TypeArgContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_realTypeArgumentList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterRealTypeArgumentList) {
             listener.enterRealTypeArgumentList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitRealTypeArgumentList) {
             listener.exitRealTypeArgumentList(this);
        }
    }
}


export class TypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public derivedTypeDeclaration(): DerivedTypeDeclarationContext | null {
        return this.getRuleContext(0, DerivedTypeDeclarationContext);
    }
    public typedefDeclaration(): TypedefDeclarationContext | null {
        return this.getRuleContext(0, TypedefDeclarationContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SEMICOLON, 0);
    }
    public parserTypeDeclaration(): ParserTypeDeclarationContext | null {
        return this.getRuleContext(0, ParserTypeDeclarationContext);
    }
    public controlTypeDeclaration(): ControlTypeDeclarationContext | null {
        return this.getRuleContext(0, ControlTypeDeclarationContext);
    }
    public packageTypeDeclaration(): PackageTypeDeclarationContext | null {
        return this.getRuleContext(0, PackageTypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypeDeclaration) {
             listener.enterTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypeDeclaration) {
             listener.exitTypeDeclaration(this);
        }
    }
}


export class DerivedTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public headerTypeDeclaration(): HeaderTypeDeclarationContext | null {
        return this.getRuleContext(0, HeaderTypeDeclarationContext);
    }
    public headerUnionDeclaration(): HeaderUnionDeclarationContext | null {
        return this.getRuleContext(0, HeaderUnionDeclarationContext);
    }
    public structTypeDeclaration(): StructTypeDeclarationContext | null {
        return this.getRuleContext(0, StructTypeDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_derivedTypeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterDerivedTypeDeclaration) {
             listener.enterDerivedTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitDerivedTypeDeclaration) {
             listener.exitDerivedTypeDeclaration(this);
        }
    }
}


export class HeaderTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public HEADER(): antlr.TerminalNode {
        return this.getToken(P4Parser.HEADER, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public structFieldList(): StructFieldListContext {
        return this.getRuleContext(0, StructFieldListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_headerTypeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterHeaderTypeDeclaration) {
             listener.enterHeaderTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitHeaderTypeDeclaration) {
             listener.exitHeaderTypeDeclaration(this);
        }
    }
}


export class StructTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(P4Parser.STRUCT, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public structFieldList(): StructFieldListContext {
        return this.getRuleContext(0, StructFieldListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_structTypeDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStructTypeDeclaration) {
             listener.enterStructTypeDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStructTypeDeclaration) {
             listener.exitStructTypeDeclaration(this);
        }
    }
}


export class HeaderUnionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public HEADER_UNION(): antlr.TerminalNode {
        return this.getToken(P4Parser.HEADER_UNION, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optTypeParameters(): OptTypeParametersContext {
        return this.getRuleContext(0, OptTypeParametersContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public structFieldList(): StructFieldListContext {
        return this.getRuleContext(0, StructFieldListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_headerUnionDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterHeaderUnionDeclaration) {
             listener.enterHeaderUnionDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitHeaderUnionDeclaration) {
             listener.exitHeaderUnionDeclaration(this);
        }
    }
}


export class StructFieldListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structFieldList(): StructFieldListContext | null {
        return this.getRuleContext(0, StructFieldListContext);
    }
    public structField(): StructFieldContext | null {
        return this.getRuleContext(0, StructFieldContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_structFieldList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStructFieldList) {
             listener.enterStructFieldList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStructFieldList) {
             listener.exitStructFieldList(this);
        }
    }
}


export class StructFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public typeRef(): TypeRefContext {
        return this.getRuleContext(0, TypeRefContext)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_structField;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStructField) {
             listener.enterStructField(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStructField) {
             listener.exitStructField(this);
        }
    }
}


export class EnumDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public ENUM(): antlr.TerminalNode {
        return this.getToken(P4Parser.ENUM, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public identifierList(): IdentifierListContext | null {
        return this.getRuleContext(0, IdentifierListContext);
    }
    public optTrailingComma(): OptTrailingCommaContext {
        return this.getRuleContext(0, OptTrailingCommaContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public specifiedIdentifierList(): SpecifiedIdentifierListContext | null {
        return this.getRuleContext(0, SpecifiedIdentifierListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_enumDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterEnumDeclaration) {
             listener.enterEnumDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitEnumDeclaration) {
             listener.exitEnumDeclaration(this);
        }
    }
}


export class SpecifiedIdentifierListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public specifiedIdentifier(): SpecifiedIdentifierContext {
        return this.getRuleContext(0, SpecifiedIdentifierContext)!;
    }
    public specifiedIdentifierList(): SpecifiedIdentifierListContext | null {
        return this.getRuleContext(0, SpecifiedIdentifierListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_specifiedIdentifierList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSpecifiedIdentifierList) {
             listener.enterSpecifiedIdentifierList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSpecifiedIdentifierList) {
             listener.exitSpecifiedIdentifierList(this);
        }
    }
}


export class SpecifiedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(P4Parser.ASSIGN, 0)!;
    }
    public initializer(): InitializerContext {
        return this.getRuleContext(0, InitializerContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_specifiedIdentifier;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSpecifiedIdentifier) {
             listener.enterSpecifiedIdentifier(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSpecifiedIdentifier) {
             listener.exitSpecifiedIdentifier(this);
        }
    }
}


export class ErrorDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ERROR(): antlr.TerminalNode {
        return this.getToken(P4Parser.ERROR, 0)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public identifierList(): IdentifierListContext {
        return this.getRuleContext(0, IdentifierListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_errorDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterErrorDeclaration) {
             listener.enterErrorDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitErrorDeclaration) {
             listener.exitErrorDeclaration(this);
        }
    }
}


export class MatchKindDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH_KIND(): antlr.TerminalNode {
        return this.getToken(P4Parser.MATCH_KIND, 0)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public identifierList(): IdentifierListContext {
        return this.getRuleContext(0, IdentifierListContext)!;
    }
    public optTrailingComma(): OptTrailingCommaContext {
        return this.getRuleContext(0, OptTrailingCommaContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_matchKindDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterMatchKindDeclaration) {
             listener.enterMatchKindDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitMatchKindDeclaration) {
             listener.exitMatchKindDeclaration(this);
        }
    }
}


export class IdentifierListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public identifierList(): IdentifierListContext | null {
        return this.getRuleContext(0, IdentifierListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_identifierList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterIdentifierList) {
             listener.enterIdentifierList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitIdentifierList) {
             listener.exitIdentifierList(this);
        }
    }
}


export class TypedefDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public TYPEDEF(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TYPEDEF, 0);
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public derivedTypeDeclaration(): DerivedTypeDeclarationContext | null {
        return this.getRuleContext(0, DerivedTypeDeclarationContext);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TYPE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_typedefDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTypedefDeclaration) {
             listener.enterTypedefDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTypedefDeclaration) {
             listener.exitTypedefDeclaration(this);
        }
    }
}


export class AssignmentOrMethodCallStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lvalue(): LvalueContext {
        return this.getRuleContext(0, LvalueContext)!;
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public L_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_ANGLE, 0);
    }
    public typeArgumentList(): TypeArgumentListContext | null {
        return this.getRuleContext(0, TypeArgumentListContext);
    }
    public R_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_ANGLE, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ASSIGN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_assignmentOrMethodCallStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterAssignmentOrMethodCallStatement) {
             listener.enterAssignmentOrMethodCallStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitAssignmentOrMethodCallStatement) {
             listener.exitAssignmentOrMethodCallStatement(this);
        }
    }
}


export class EmptyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_emptyStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterEmptyStatement) {
             listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitEmptyStatement) {
             listener.exitEmptyStatement(this);
        }
    }
}


export class ExitStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXIT(): antlr.TerminalNode {
        return this.getToken(P4Parser.EXIT, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_exitStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterExitStatement) {
             listener.enterExitStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitExitStatement) {
             listener.exitExitStatement(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(P4Parser.RETURN, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_returnStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
}


export class ConditionalStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(P4Parser.IF, 0)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_conditionalStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterConditionalStatement) {
             listener.enterConditionalStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitConditionalStatement) {
             listener.exitConditionalStatement(this);
        }
    }
}


export class DirectApplicationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(P4Parser.DOT, 0)!;
    }
    public APPLY(): antlr.TerminalNode {
        return this.getToken(P4Parser.APPLY, 0)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public argumentList(): ArgumentListContext {
        return this.getRuleContext(0, ArgumentListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public specializedType(): SpecializedTypeContext | null {
        return this.getRuleContext(0, SpecializedTypeContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_directApplication;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterDirectApplication) {
             listener.enterDirectApplication(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitDirectApplication) {
             listener.exitDirectApplication(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentOrMethodCallStatement(): AssignmentOrMethodCallStatementContext | null {
        return this.getRuleContext(0, AssignmentOrMethodCallStatementContext);
    }
    public directApplication(): DirectApplicationContext | null {
        return this.getRuleContext(0, DirectApplicationContext);
    }
    public conditionalStatement(): ConditionalStatementContext | null {
        return this.getRuleContext(0, ConditionalStatementContext);
    }
    public emptyStatement(): EmptyStatementContext | null {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public exitStatement(): ExitStatementContext | null {
        return this.getRuleContext(0, ExitStatementContext);
    }
    public switchStatement(): SwitchStatementContext | null {
        return this.getRuleContext(0, SwitchStatementContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_statement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public statOrDeclList(): StatOrDeclListContext {
        return this.getRuleContext(0, StatOrDeclListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_blockStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
}


export class StatOrDeclListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statOrDeclList(): StatOrDeclListContext | null {
        return this.getRuleContext(0, StatOrDeclListContext);
    }
    public statementOrDeclaration(): StatementOrDeclarationContext | null {
        return this.getRuleContext(0, StatementOrDeclarationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_statOrDeclList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStatOrDeclList) {
             listener.enterStatOrDeclList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStatOrDeclList) {
             listener.exitStatOrDeclList(this);
        }
    }
}


export class SwitchStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SWITCH(): antlr.TerminalNode {
        return this.getToken(P4Parser.SWITCH, 0)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public switchCases(): SwitchCasesContext {
        return this.getRuleContext(0, SwitchCasesContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_switchStatement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSwitchStatement) {
             listener.enterSwitchStatement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSwitchStatement) {
             listener.exitSwitchStatement(this);
        }
    }
}


export class SwitchCasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public switchCases(): SwitchCasesContext | null {
        return this.getRuleContext(0, SwitchCasesContext);
    }
    public switchCase(): SwitchCaseContext | null {
        return this.getRuleContext(0, SwitchCaseContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_switchCases;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSwitchCases) {
             listener.enterSwitchCases(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSwitchCases) {
             listener.exitSwitchCases(this);
        }
    }
}


export class SwitchCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public switchLabel(): SwitchLabelContext {
        return this.getRuleContext(0, SwitchLabelContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.COLON, 0)!;
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_switchCase;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSwitchCase) {
             listener.enterSwitchCase(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSwitchCase) {
             listener.exitSwitchCase(this);
        }
    }
}


export class SwitchLabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DEFAULT, 0);
    }
    public nonBraceExpression(): NonBraceExpressionContext | null {
        return this.getRuleContext(0, NonBraceExpressionContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_switchLabel;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterSwitchLabel) {
             listener.enterSwitchLabel(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitSwitchLabel) {
             listener.exitSwitchLabel(this);
        }
    }
}


export class StatementOrDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public constantDeclaration(): ConstantDeclarationContext | null {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public instantiation(): InstantiationContext | null {
        return this.getRuleContext(0, InstantiationContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_statementOrDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStatementOrDeclaration) {
             listener.enterStatementOrDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStatementOrDeclaration) {
             listener.exitStatementOrDeclaration(this);
        }
    }
}


export class TableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(P4Parser.TABLE, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public L_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_BRACE, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public R_BRACE(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_BRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_tableDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTableDeclaration) {
             listener.enterTableDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTableDeclaration) {
             listener.exitTableDeclaration(this);
        }
    }
}


export class TablePropertyListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableProperty(): TablePropertyContext {
        return this.getRuleContext(0, TablePropertyContext)!;
    }
    public tablePropertyList(): TablePropertyListContext | null {
        return this.getRuleContext(0, TablePropertyListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_tablePropertyList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTablePropertyList) {
             listener.enterTablePropertyList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTablePropertyList) {
             listener.exitTablePropertyList(this);
        }
    }
}


export class TablePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.KEY, 0);
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(P4Parser.ASSIGN, 0)!;
    }
    public L_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACE, 0);
    }
    public keyElementList(): KeyElementListContext | null {
        return this.getRuleContext(0, KeyElementListContext);
    }
    public R_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACE, 0);
    }
    public ACTIONS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ACTIONS, 0);
    }
    public actionList(): ActionListContext | null {
        return this.getRuleContext(0, ActionListContext);
    }
    public optAnnotations(): OptAnnotationsContext | null {
        return this.getRuleContext(0, OptAnnotationsContext);
    }
    public optCONST(): OptCONSTContext | null {
        return this.getRuleContext(0, OptCONSTContext);
    }
    public ENTRIES(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ENTRIES, 0);
    }
    public entriesList(): EntriesListContext | null {
        return this.getRuleContext(0, EntriesListContext);
    }
    public nonTableKwName(): NonTableKwNameContext | null {
        return this.getRuleContext(0, NonTableKwNameContext);
    }
    public initializer(): InitializerContext | null {
        return this.getRuleContext(0, InitializerContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_tableProperty;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterTableProperty) {
             listener.enterTableProperty(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitTableProperty) {
             listener.exitTableProperty(this);
        }
    }
}


export class KeyElementListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyElementList(): KeyElementListContext | null {
        return this.getRuleContext(0, KeyElementListContext);
    }
    public keyElement(): KeyElementContext | null {
        return this.getRuleContext(0, KeyElementContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_keyElementList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterKeyElementList) {
             listener.enterKeyElementList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitKeyElementList) {
             listener.exitKeyElementList(this);
        }
    }
}


export class KeyElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.COLON, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_keyElement;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterKeyElement) {
             listener.enterKeyElement(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitKeyElement) {
             listener.exitKeyElement(this);
        }
    }
}


export class ActionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public actionList(): ActionListContext | null {
        return this.getRuleContext(0, ActionListContext);
    }
    public optAnnotations(): OptAnnotationsContext | null {
        return this.getRuleContext(0, OptAnnotationsContext);
    }
    public actionRef(): ActionRefContext | null {
        return this.getRuleContext(0, ActionRefContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_actionList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterActionList) {
             listener.enterActionList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitActionList) {
             listener.exitActionList(this);
        }
    }
}


export class ActionRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public prefixedNonTypeName(): PrefixedNonTypeNameContext {
        return this.getRuleContext(0, PrefixedNonTypeNameContext)!;
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_actionRef;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterActionRef) {
             listener.enterActionRef(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitActionRef) {
             listener.exitActionRef(this);
        }
    }
}


export class EntryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optCONST(): OptCONSTContext {
        return this.getRuleContext(0, OptCONSTContext)!;
    }
    public entryPriority(): EntryPriorityContext | null {
        return this.getRuleContext(0, EntryPriorityContext);
    }
    public keysetExpression(): KeysetExpressionContext {
        return this.getRuleContext(0, KeysetExpressionContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.COLON, 0)!;
    }
    public actionRef(): ActionRefContext {
        return this.getRuleContext(0, ActionRefContext)!;
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_entry;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterEntry) {
             listener.enterEntry(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitEntry) {
             listener.exitEntry(this);
        }
    }
}


export class EntryPriorityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIORITY(): antlr.TerminalNode {
        return this.getToken(P4Parser.PRIORITY, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(P4Parser.ASSIGN, 0)!;
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INTEGER, 0);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.COLON, 0)!;
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_entryPriority;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterEntryPriority) {
             listener.enterEntryPriority(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitEntryPriority) {
             listener.exitEntryPriority(this);
        }
    }
}


export class EntriesListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public entriesList(): EntriesListContext | null {
        return this.getRuleContext(0, EntriesListContext);
    }
    public entry(): EntryContext | null {
        return this.getRuleContext(0, EntryContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_entriesList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterEntriesList) {
             listener.enterEntriesList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitEntriesList) {
             listener.exitEntriesList(this);
        }
    }
}


export class ActionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public ACTION(): antlr.TerminalNode {
        return this.getToken(P4Parser.ACTION, 0)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public L_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.L_PAREN, 0)!;
    }
    public parameterList(): ParameterListContext {
        return this.getRuleContext(0, ParameterListContext)!;
    }
    public R_PAREN(): antlr.TerminalNode {
        return this.getToken(P4Parser.R_PAREN, 0)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_actionDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterActionDeclaration) {
             listener.enterActionDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitActionDeclaration) {
             listener.exitActionDeclaration(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotations(): AnnotationsContext | null {
        return this.getRuleContext(0, AnnotationsContext);
    }
    public typeRef(): TypeRefContext {
        return this.getRuleContext(0, TypeRefContext)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public optInitializer(): OptInitializerContext {
        return this.getRuleContext(0, OptInitializerContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_variableDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
}


export class ConstantDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public optAnnotations(): OptAnnotationsContext {
        return this.getRuleContext(0, OptAnnotationsContext)!;
    }
    public CONST(): antlr.TerminalNode {
        return this.getToken(P4Parser.CONST, 0)!;
    }
    public typeRef(): TypeRefContext {
        return this.getRuleContext(0, TypeRefContext)!;
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(P4Parser.ASSIGN, 0)!;
    }
    public initializer(): InitializerContext {
        return this.getRuleContext(0, InitializerContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(P4Parser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_constantDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterConstantDeclaration) {
             listener.enterConstantDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitConstantDeclaration) {
             listener.exitConstantDeclaration(this);
        }
    }
}


export class OptInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ASSIGN, 0);
    }
    public initializer(): InitializerContext | null {
        return this.getRuleContext(0, InitializerContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_optInitializer;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterOptInitializer) {
             listener.enterOptInitializer(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitOptInitializer) {
             listener.exitOptInitializer(this);
        }
    }
}


export class InitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_initializer;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterInitializer) {
             listener.enterInitializer(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitInitializer) {
             listener.exitInitializer(this);
        }
    }
}


export class FunctionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotations(): AnnotationsContext | null {
        return this.getRuleContext(0, AnnotationsContext);
    }
    public functionPrototype(): FunctionPrototypeContext {
        return this.getRuleContext(0, FunctionPrototypeContext)!;
    }
    public blockStatement(): BlockStatementContext {
        return this.getRuleContext(0, BlockStatementContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_functionDeclaration;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterFunctionDeclaration) {
             listener.enterFunctionDeclaration(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitFunctionDeclaration) {
             listener.exitFunctionDeclaration(this);
        }
    }
}


export class ArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonEmptyArgList(): NonEmptyArgListContext | null {
        return this.getRuleContext(0, NonEmptyArgListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_argumentList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterArgumentList) {
             listener.enterArgumentList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitArgumentList) {
             listener.exitArgumentList(this);
        }
    }
}


export class NonEmptyArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argument(): ArgumentContext {
        return this.getRuleContext(0, ArgumentContext)!;
    }
    public nonEmptyArgList(): NonEmptyArgListContext | null {
        return this.getRuleContext(0, NonEmptyArgListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_nonEmptyArgList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterNonEmptyArgList) {
             listener.enterNonEmptyArgList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitNonEmptyArgList) {
             listener.exitNonEmptyArgList(this);
        }
    }
}


export class ArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ASSIGN, 0);
    }
    public DONTCARE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DONTCARE, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_argument;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterArgument) {
             listener.enterArgument(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitArgument) {
             listener.exitArgument(this);
        }
    }
}


export class ExpressionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_expressionList;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterExpressionList) {
             listener.enterExpressionList(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitExpressionList) {
             listener.exitExpressionList(this);
        }
    }
}


export class StructuredAnnotationBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public optTrailingComma(): OptTrailingCommaContext {
        return this.getRuleContext(0, OptTrailingCommaContext)!;
    }
    public kvList(): KvListContext | null {
        return this.getRuleContext(0, KvListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_structuredAnnotationBody;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterStructuredAnnotationBody) {
             listener.enterStructuredAnnotationBody(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitStructuredAnnotationBody) {
             listener.exitStructuredAnnotationBody(this);
        }
    }
}


export class MemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_member;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterMember) {
             listener.enterMember(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitMember) {
             listener.exitMember(this);
        }
    }
}


export class PrefixedNonTypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonTypeName(): NonTypeNameContext {
        return this.getRuleContext(0, NonTypeNameContext)!;
    }
    public dotPrefix(): DotPrefixContext | null {
        return this.getRuleContext(0, DotPrefixContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_prefixedNonTypeName;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterPrefixedNonTypeName) {
             listener.enterPrefixedNonTypeName(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitPrefixedNonTypeName) {
             listener.exitPrefixedNonTypeName(this);
        }
    }
}


export class LvalueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public prefixedNonTypeName(): PrefixedNonTypeNameContext | null {
        return this.getRuleContext(0, PrefixedNonTypeNameContext);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.THIS, 0);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public lvalue(): LvalueContext | null {
        return this.getRuleContext(0, LvalueContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DOT, 0);
    }
    public member(): MemberContext | null {
        return this.getRuleContext(0, MemberContext);
    }
    public L_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACKET, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public R_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACKET, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COLON, 0);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_lvalue;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterLvalue) {
             listener.enterLvalue(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitLvalue) {
             listener.exitLvalue(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INTEGER, 0);
    }
    public DOTS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DOTS, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STRING_LITERAL, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.FALSE, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.THIS, 0);
    }
    public nonTypeName(): NonTypeNameContext | null {
        return this.getRuleContext(0, NonTypeNameContext);
    }
    public dotPrefix(): DotPrefixContext | null {
        return this.getRuleContext(0, DotPrefixContext);
    }
    public L_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACE, 0);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public optTrailingComma(): OptTrailingCommaContext | null {
        return this.getRuleContext(0, OptTrailingCommaContext);
    }
    public R_BRACE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACE, 0);
    }
    public INVALID_HEADER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INVALID_HEADER, 0);
    }
    public kvList(): KvListContext | null {
        return this.getRuleContext(0, KvListContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMMA, 0);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.NOT, 0);
    }
    public COMPLEMENT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMPLEMENT, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PLUS, 0);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DOT, 0);
    }
    public member(): MemberContext | null {
        return this.getRuleContext(0, MemberContext);
    }
    public ERROR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ERROR, 0);
    }
    public namedType(): NamedTypeContext | null {
        return this.getRuleContext(0, NamedTypeContext);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MUL, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MOD, 0);
    }
    public PLUS_SAT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PLUS_SAT, 0);
    }
    public MINUS_SAT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MINUS_SAT, 0);
    }
    public SHL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SHL, 0);
    }
    public R_ANGLE(): antlr.TerminalNode[];
    public R_ANGLE(i: number): antlr.TerminalNode | null;
    public R_ANGLE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(P4Parser.R_ANGLE);
    	} else {
    		return this.getToken(P4Parser.R_ANGLE, i);
    	}
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.GE, 0);
    }
    public L_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_ANGLE, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.NE, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.EQ, 0);
    }
    public BIT_AND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_AND, 0);
    }
    public BIT_XOR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_XOR, 0);
    }
    public BIT_OR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_OR, 0);
    }
    public PP(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PP, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.OR, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.QUESTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COLON, 0);
    }
    public L_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACKET, 0);
    }
    public R_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACKET, 0);
    }
    public realTypeArgumentList(): RealTypeArgumentListContext | null {
        return this.getRuleContext(0, RealTypeArgumentListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_expression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
}


export class NonBraceExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.INTEGER, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.STRING_LITERAL, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.FALSE, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.THIS, 0);
    }
    public nonTypeName(): NonTypeNameContext | null {
        return this.getRuleContext(0, NonTypeNameContext);
    }
    public dotPrefix(): DotPrefixContext | null {
        return this.getRuleContext(0, DotPrefixContext);
    }
    public L_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_PAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public R_PAREN(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_PAREN, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.NOT, 0);
    }
    public COMPLEMENT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COMPLEMENT, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PLUS, 0);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DOT, 0);
    }
    public member(): MemberContext | null {
        return this.getRuleContext(0, MemberContext);
    }
    public ERROR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.ERROR, 0);
    }
    public namedType(): NamedTypeContext | null {
        return this.getRuleContext(0, NamedTypeContext);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public typeRef(): TypeRefContext | null {
        return this.getRuleContext(0, TypeRefContext);
    }
    public nonBraceExpression(): NonBraceExpressionContext | null {
        return this.getRuleContext(0, NonBraceExpressionContext);
    }
    public L_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_BRACKET, 0);
    }
    public R_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.R_BRACKET, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.COLON, 0);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MUL, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MOD, 0);
    }
    public PLUS_SAT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PLUS_SAT, 0);
    }
    public MINUS_SAT(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.MINUS_SAT, 0);
    }
    public SHL(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.SHL, 0);
    }
    public R_ANGLE(): antlr.TerminalNode[];
    public R_ANGLE(i: number): antlr.TerminalNode | null;
    public R_ANGLE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(P4Parser.R_ANGLE);
    	} else {
    		return this.getToken(P4Parser.R_ANGLE, i);
    	}
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.GE, 0);
    }
    public L_ANGLE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.L_ANGLE, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.NE, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.EQ, 0);
    }
    public BIT_AND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_AND, 0);
    }
    public BIT_XOR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_XOR, 0);
    }
    public BIT_OR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.BIT_OR, 0);
    }
    public PP(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.PP, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.OR, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(P4Parser.QUESTION, 0);
    }
    public realTypeArgumentList(): RealTypeArgumentListContext | null {
        return this.getRuleContext(0, RealTypeArgumentListContext);
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_nonBraceExpression;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterNonBraceExpression) {
             listener.enterNonBraceExpression(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitNonBraceExpression) {
             listener.exitNonBraceExpression(this);
        }
    }
}


export class Type_or_idContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(P4Parser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return P4Parser.RULE_type_or_id;
    }
    public override enterRule(listener: P4Listener): void {
        if(listener.enterType_or_id) {
             listener.enterType_or_id(this);
        }
    }
    public override exitRule(listener: P4Listener): void {
        if(listener.exitType_or_id) {
             listener.exitType_or_id(this);
        }
    }
}
