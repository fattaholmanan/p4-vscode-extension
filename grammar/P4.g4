/*
 * ANTLR4 grammar for P4_16, ported from the p4lang/p4c lex/yacc grammars
 * (grammar/p4.y is kept alongside as the reference).
 *
 * Intentional, documented deviations from the bison grammar (see
 * grammar/VERIFICATION.md):
 *   - C-preprocessor directives (#include/#define/...) are NOT handled here.
 *     They are resolved by the language server's preprocessor before parsing,
 *     so no '#' ever reaches this grammar.
 *   - IDENTIFIER and TYPE_IDENTIFIER cannot be distinguished lexically in ANTLR
 *     (bison uses a symbol-table "lexer hack"). They are merged into `type_or_id`,
 *     making the grammar intentionally more permissive.
 *   - Right shift is matched as two '>' tokens so it does not clash with nested
 *     generics like bit<bit<8>>.
 */
grammar P4;

program
    : ( declaration | ';' )* EOF
    ;

declaration
    : constantDeclaration
    | externDeclaration
    | actionDeclaration
    | parserDeclaration
    | typeDeclaration
    | controlDeclaration
    | instantiation
    | errorDeclaration
    | matchKindDeclaration
    | functionDeclaration
    ;

nonTypeName
    : type_or_id
    | APPLY
    | KEY
    | ACTIONS
    | STATE
    | ENTRIES
    | TYPE
    | PRIORITY
    ;

name
    : nonTypeName
    | LIST
    ;

nonTableKwName
    : type_or_id
    | APPLY
    | STATE
    | TYPE
    | PRIORITY
    ;

optCONST
    : /* empty */
    | CONST
    ;

optAnnotations
    : /* empty */
    | annotations
    ;

annotations
    : annotation
    | annotations annotation
    ;

annotation
    : '@' name
    | '@' name '(' annotationBody ')'
    | '@' name '[' structuredAnnotationBody ']'
    | PRAGMA name annotationBody
    ;

annotationBody
    : /* empty */
    | annotationBody '(' annotationBody ')'
    | annotationBody annotationToken
    ;

annotationToken
    : ABSTRACT
    | ACTION
    | ACTIONS
    | APPLY
    | BOOL
    | BIT
    | CONST
    | CONTROL
    | DEFAULT
    | ELSE
    | ENTRIES
    | ENUM
    | ERROR
    | EXIT
    | EXTERN
    | FALSE
    | HEADER
    | HEADER_UNION
    | IF
    | IN
    | INOUT
    | INT
    | KEY
    | MATCH_KIND
    | TYPE
    | OUT
    | PARSER
    | PACKAGE
    | PRAGMA
    | PRIORITY
    | RETURN
    | SELECT
    | STATE
    | STRING
    | STRUCT
    | SWITCH
    | TABLE
    | THIS
    | TRANSITION
    | TRUE
    | TUPLE
    | TYPEDEF
    | VARBIT
    | VALUESET
    | LIST
    | VOID
    | '_'
    | type_or_id
    | STRING_LITERAL
    | INTEGER
    | '&&&'
    | '..'
    | '...'
    | '<<'
    | '&&'
    | '||'
    | '=='
    | '!='
    | '>='
    | '<='
    | '++'
    | '+'
    | '|+|'
    | '-'
    | '|-|'
    | '*'
    | '/'
    | '%'
    | '|'
    | '&'
    | '^'
    | '~'
    | '['
    | ']'
    | '{'
    | '}'
    | '<'
    | '>'
    | '!'
    | ':'
    | ','
    | '?'
    | '.'
    | '='
    | ';'
    | '@'
    ;

kvList
    : kvPair
    | kvList ',' kvPair
    ;

kvPair
    : name '=' expression
    ;

parameterList
    : /* empty */
    | nonEmptyParameterList
    ;

nonEmptyParameterList
    : parameter
    | nonEmptyParameterList ',' parameter
    ;

parameter
    : optAnnotations direction typeRef name
    | optAnnotations direction typeRef name '=' expression
    ;

direction
    : IN
    | OUT
    | INOUT
    | /* empty */
    ;

packageTypeDeclaration
    : optAnnotations PACKAGE name optTypeParameters '(' parameterList ')'
    ;

instantiation
    : annotations typeRef '(' argumentList ')' name ';'
    | typeRef '(' argumentList ')' name ';'
    | annotations typeRef '(' argumentList ')' name '=' objInitializer ';'
    | typeRef '(' argumentList ')' name '=' objInitializer ';'
    ;

objInitializer
    : '{' objDeclarations '}'
    ;

objDeclarations
    : /* empty */
    | objDeclarations objDeclaration
    ;

objDeclaration
    : functionDeclaration
    | instantiation
    ;

optConstructorParameters
    : /* empty */
    | '(' parameterList ')'
    ;

dotPrefix
    : '.'
    ;

parserDeclaration
    : parserTypeDeclaration optConstructorParameters '{' parserLocalElements parserStates '}'
    ;

parserLocalElements
    : /* empty */
    | parserLocalElements parserLocalElement
    ;

parserLocalElement
    : constantDeclaration
    | instantiation
    | variableDeclaration
    | valueSetDeclaration
    ;

parserTypeDeclaration
    : optAnnotations PARSER name optTypeParameters '(' parameterList ')'
    ;

parserStates
    : parserState
    | parserStates parserState
    ;

parserState
    : optAnnotations STATE name '{' parserStatements transitionStatement '}'
    ;

parserStatements
    : /* empty */
    | parserStatements parserStatement
    ;

parserStatement
    : assignmentOrMethodCallStatement
    | directApplication
    | emptyStatement
    | variableDeclaration
    | constantDeclaration
    | parserBlockStatement
    | conditionalStatement
    ;

parserBlockStatement
    : optAnnotations '{' parserStatements '}'
    ;

transitionStatement
    : /* empty */
    | TRANSITION stateExpression
    ;

stateExpression
    : name ';'
    | selectExpression
    ;

selectExpression
    : SELECT '(' expressionList ')' '{' selectCaseList '}'
    ;

selectCaseList
    : /* empty */
    | selectCaseList selectCase
    ;

selectCase
    : keysetExpression ':' name ';'
    ;

keysetExpression
    : tupleKeysetExpression
    | simpleKeysetExpression
    ;

tupleKeysetExpression
    : '(' simpleKeysetExpression ',' simpleExpressionList ')'
    | '(' reducedSimpleKeysetExpression ')'
    ;

optTrailingComma
    : /* empty */
    | ','
    ;

simpleExpressionList
    : simpleKeysetExpression
    | simpleExpressionList ',' simpleKeysetExpression
    ;

reducedSimpleKeysetExpression
    : expression '&&&' expression
    | expression '..' expression
    | DEFAULT
    | '_'
    ;

simpleKeysetExpression
    : expression
    | expression '&&&' expression
    | expression '..' expression
    | DEFAULT
    | '_'
    ;

valueSetDeclaration
    : optAnnotations VALUESET '<' baseType '>' '(' expression ')' name ';'
    | optAnnotations VALUESET '<' tupleType '>' '(' expression ')' name ';'
    | optAnnotations VALUESET '<' typeName '>' '(' expression ')' name ';'
    ;

controlDeclaration
    : controlTypeDeclaration optConstructorParameters '{' controlLocalDeclarations APPLY controlBody '}'
    ;

controlTypeDeclaration
    : optAnnotations CONTROL name optTypeParameters '(' parameterList ')'
    ;

controlLocalDeclarations
    : /* empty */
    | controlLocalDeclarations controlLocalDeclaration
    ;

controlLocalDeclaration
    : constantDeclaration
    | actionDeclaration
    | tableDeclaration
    | instantiation
    | variableDeclaration
    ;

controlBody
    : blockStatement
    ;

externDeclaration
    : optAnnotations EXTERN nonTypeName optTypeParameters '{' methodPrototypes '}'
    | optAnnotations EXTERN functionPrototype ';'
    | optAnnotations EXTERN name ';'
    ;

methodPrototypes
    : /* empty */
    | methodPrototypes methodPrototype
    ;

functionPrototype
    : typeOrVoid name optTypeParameters '(' parameterList ')'
    ;

methodPrototype
    : optAnnotations functionPrototype ';'
    | optAnnotations ABSTRACT functionPrototype ';'
    | optAnnotations type_or_id '(' parameterList ')' ';'
    ;

typeRef
    : baseType
    | typeName
    | specializedType
    | headerStackType
    | p4listType
    | tupleType
    ;

namedType
    : typeName
    | specializedType
    ;

prefixedType
    : type_or_id
    | dotPrefix type_or_id
    ;

typeName
    : prefixedType
    ;

p4listType
    : LIST '<' typeArg '>'
    ;

tupleType
    : TUPLE '<' typeArgumentList '>'
    ;

headerStackType
    : typeName '[' expression ']'
    | specializedType '[' expression ']'
    ;

specializedType
    : typeName '<' typeArgumentList '>'
    ;

baseType
    : BOOL
    | MATCH_KIND
    | ERROR
    | BIT
    | STRING
    | INT
    | BIT '<' INTEGER '>'
    | INT '<' INTEGER '>'
    | VARBIT '<' INTEGER '>'
    | BIT '<' '(' expression ')' '>'
    | INT '<' '(' expression ')' '>'
    | VARBIT '<' '(' expression ')' '>'
    ;

typeOrVoid
    : typeRef
    | VOID
    | type_or_id
    ;

optTypeParameters
    : /* empty */
    | '<' typeParameterList '>'
    ;

typeParameterList
    : name
    | typeParameterList ',' name
    ;

typeArg
    : typeRef
    | nonTypeName
    | VOID
    | '_'
    ;

typeArgumentList
    : /* empty */
    | typeArg
    | typeArgumentList ',' typeArg
    ;

realTypeArg
    : typeRef
    | VOID
    | '_'
    ;

realTypeArgumentList
    : realTypeArg
    | realTypeArgumentList ',' typeArg
    ;

typeDeclaration
    : derivedTypeDeclaration
    | typedefDeclaration ';'
    | parserTypeDeclaration ';'
    | controlTypeDeclaration ';'
    | packageTypeDeclaration ';'
    ;

derivedTypeDeclaration
    : headerTypeDeclaration
    | headerUnionDeclaration
    | structTypeDeclaration
    | enumDeclaration
    ;

headerTypeDeclaration
    : optAnnotations HEADER name optTypeParameters '{' structFieldList '}'
    ;

structTypeDeclaration
    : optAnnotations STRUCT name optTypeParameters '{' structFieldList '}'
    ;

headerUnionDeclaration
    : optAnnotations HEADER_UNION name optTypeParameters '{' structFieldList '}'
    ;

structFieldList
    : /* empty */
    | structFieldList structField
    ;

structField
    : optAnnotations typeRef name ';'
    ;

enumDeclaration
    : optAnnotations ENUM name '{' identifierList optTrailingComma '}'
    | optAnnotations ENUM typeRef name '{' specifiedIdentifierList optTrailingComma '}'
    ;

specifiedIdentifierList
    : specifiedIdentifier
    | specifiedIdentifierList ',' specifiedIdentifier
    ;

specifiedIdentifier
    : name '=' initializer
    ;

errorDeclaration
    : ERROR '{' identifierList '}'
    ;

matchKindDeclaration
    : MATCH_KIND '{' identifierList optTrailingComma '}'
    ;

identifierList
    : name
    | identifierList ',' name
    ;

typedefDeclaration
    : optAnnotations TYPEDEF typeRef name
    | optAnnotations TYPEDEF derivedTypeDeclaration name
    | optAnnotations TYPE typeRef name
    ;

assignmentOrMethodCallStatement
    : lvalue '(' argumentList ')' ';'
    | lvalue '<' typeArgumentList '>' '(' argumentList ')' ';'
    | lvalue '=' expression ';'
    ;

emptyStatement
    : ';'
    ;

exitStatement
    : EXIT ';'
    ;

returnStatement
    : RETURN ';'
    | RETURN expression ';'
    ;

conditionalStatement
    : IF '(' expression ')' statement
    | IF '(' expression ')' statement ELSE statement
    ;

directApplication
    : typeName '.' APPLY '(' argumentList ')' ';'
    | specializedType '.' APPLY '(' argumentList ')' ';'
    ;

statement
    : assignmentOrMethodCallStatement
    | directApplication
    | conditionalStatement
    | emptyStatement
    | blockStatement
    | returnStatement
    | exitStatement
    | switchStatement
    ;

blockStatement
    : optAnnotations '{' statOrDeclList '}'
    ;

statOrDeclList
    : /* empty */
    | statOrDeclList statementOrDeclaration
    ;

switchStatement
    : SWITCH '(' expression ')' '{' switchCases '}'
    ;

switchCases
    : /* empty */
    | switchCases switchCase
    ;

switchCase
    : switchLabel ':' blockStatement
    | switchLabel ':'
    ;

switchLabel
    : DEFAULT
    | nonBraceExpression
    ;

statementOrDeclaration
    : variableDeclaration
    | constantDeclaration
    | statement
    | instantiation
    ;

tableDeclaration
    : optAnnotations TABLE name '{' tablePropertyList '}'
    ;

tablePropertyList
    : tableProperty
    | tablePropertyList tableProperty
    ;

tableProperty
    : KEY '=' '{' keyElementList '}'
    | ACTIONS '=' '{' actionList '}'
    | optAnnotations optCONST ENTRIES '=' '{' entriesList '}'
    | optAnnotations optCONST nonTableKwName '=' initializer ';'
    ;

keyElementList
    : /* empty */
    | keyElementList keyElement
    ;

keyElement
    : expression ':' name optAnnotations ';'
    ;

actionList
    : /* empty */
    | actionList optAnnotations actionRef ';'
    ;

actionRef
    : prefixedNonTypeName
    | prefixedNonTypeName '(' argumentList ')'
    ;

entry
    : optCONST entryPriority keysetExpression ':' actionRef optAnnotations ';'
    | optCONST keysetExpression ':' actionRef optAnnotations ';'
    ;

entryPriority
    : PRIORITY '=' INTEGER ':'
    | PRIORITY '=' '(' expression ')' ':'
    ;

entriesList
    : /* empty */
    | entriesList entry
    ;

actionDeclaration
    : optAnnotations ACTION name '(' parameterList ')' blockStatement
    ;

variableDeclaration
    : annotations typeRef name optInitializer ';'
    | typeRef name optInitializer ';'
    ;

constantDeclaration
    : optAnnotations CONST typeRef name '=' initializer ';'
    ;

optInitializer
    : /* empty */
    | '=' initializer
    ;

initializer
    : expression
    ;

functionDeclaration
    : annotations functionPrototype blockStatement
    | functionPrototype blockStatement
    ;

argumentList
    : /* empty */
    | nonEmptyArgList
    ;

nonEmptyArgList
    : argument
    | nonEmptyArgList ',' argument
    ;

argument
    : expression
    | name '=' expression
    | '_'
    | name '=' '_'
    ;

expressionList
    : /* empty */
    | expression
    | expressionList ',' expression
    ;

structuredAnnotationBody
    : expressionList optTrailingComma
    | kvList optTrailingComma
    ;

member
    : name
    ;

prefixedNonTypeName
    : nonTypeName
    | dotPrefix nonTypeName
    ;

lvalue
    : prefixedNonTypeName
    | THIS
    | lvalue '.' member
    | lvalue '[' expression ']'
    | lvalue '[' expression ':' expression ']'
    | '(' lvalue ')'
    ;

expression
    : INTEGER
    | DOTS
    | STRING_LITERAL
    | TRUE
    | FALSE
    | THIS
    | nonTypeName
    | dotPrefix nonTypeName
    | expression '[' expression ']'
    | expression '[' expression ':' expression ']'
    | '{' expressionList optTrailingComma '}'
    | INVALID_HEADER
    | '{' kvList optTrailingComma '}'
    | '{' kvList ',' DOTS optTrailingComma '}'
    | '(' expression ')'
    | '!' expression
    | '~' expression
    | '-' expression
    | '+' expression
    | typeName '.' member
    | ERROR '.' member
    | expression '.' member
    | expression '*' expression
    | expression '/' expression
    | expression '%' expression
    | expression '+' expression
    | expression '-' expression
    | expression '|+|' expression
    | expression '|-|' expression
    | expression '<<' expression
    | expression '>' '>' expression
    | expression '<=' expression
    | expression '>=' expression
    | expression '<' expression
    | expression '>' expression
    | expression '!=' expression
    | expression '==' expression
    | expression '&' expression
    | expression '^' expression
    | expression '|' expression
    | expression '++' expression
    | expression '&&' expression
    | expression '||' expression
    | expression '?' expression ':' expression
    | expression '<' realTypeArgumentList '>' '(' argumentList ')'
    | expression '(' argumentList ')'
    | namedType '(' argumentList ')'
    | '(' typeRef ')' expression
    ;

nonBraceExpression
    : INTEGER
    | STRING_LITERAL
    | TRUE
    | FALSE
    | THIS
    | nonTypeName
    | dotPrefix nonTypeName
    | nonBraceExpression '[' expression ']'
    | nonBraceExpression '[' expression ':' expression ']'
    | '(' expression ')'
    | '!' expression
    | '~' expression
    | '-' expression
    | '+' expression
    | typeName '.' member
    | ERROR '.' member
    | nonBraceExpression '.' member
    | nonBraceExpression '*' expression
    | nonBraceExpression '/' expression
    | nonBraceExpression '%' expression
    | nonBraceExpression '+' expression
    | nonBraceExpression '-' expression
    | nonBraceExpression '|+|' expression
    | nonBraceExpression '|-|' expression
    | nonBraceExpression '<<' expression
    | nonBraceExpression '>' '>' expression
    | nonBraceExpression '<=' expression
    | nonBraceExpression '>=' expression
    | nonBraceExpression '<' expression
    | nonBraceExpression '>' expression
    | nonBraceExpression '!=' expression
    | nonBraceExpression '==' expression
    | nonBraceExpression '&' expression
    | nonBraceExpression '^' expression
    | nonBraceExpression '|' expression
    | nonBraceExpression '++' expression
    | nonBraceExpression '&&' expression
    | nonBraceExpression '||' expression
    | nonBraceExpression '?' expression ':' expression
    | nonBraceExpression '<' realTypeArgumentList '>' '(' argumentList ')'
    | nonBraceExpression '(' argumentList ')'
    | namedType '(' argumentList ')'
    | '(' typeRef ')' expression
    ;

type_or_id
    : IDENTIFIER
    ;

/* ***** */
/* LEXER */
/* ***** */
PRAGMA          : '@pragma';

ABSTRACT        : 'abstract';
ACTION          : 'action';
ACTIONS         : 'actions';
APPLY           : 'apply';
BOOL            : 'bool';
BIT             : 'bit';
CONST           : 'const';
CONTROL         : 'control';
DEFAULT         : 'default';
ELSE            : 'else';
ENTRIES         : 'entries';
ENUM            : 'enum';
ERROR           : 'error';
EXIT            : 'exit';
EXTERN          : 'extern';
FALSE           : 'false';
HEADER          : 'header';
HEADER_UNION    : 'header_union';
IF              : 'if';
IN              : 'in';
INOUT           : 'inout';
INT             : 'int';
KEY             : 'key';
LIST            : 'list';
MATCH_KIND      : 'match_kind';
TYPE            : 'type';
OUT             : 'out';
PARSER          : 'parser';
PACKAGE         : 'package';
PRIORITY        : 'priority';
RETURN          : 'return';
SELECT          : 'select';
STATE           : 'state';
STRING          : 'string';
STRUCT          : 'struct';
SWITCH          : 'switch';
TABLE           : 'table';
THIS            : 'this';
TRANSITION      : 'transition';
TRUE            : 'true';
TUPLE           : 'tuple';
TYPEDEF         : 'typedef';
VARBIT          : 'varbit';
VALUESET        : 'value_set';
VOID            : 'void';
DONTCARE        : '_';

MASK            : '&&&';
DOTS            : '...';
RANGE           : '..';
SHL             : '<<';
AND             : '&&';
OR              : '||';
EQ              : '==';
NE              : '!=';
GE              : '>=';
LE              : '<=';
PP              : '++';
PLUS            : '+';
PLUS_SAT        : '|+|';
MINUS           : '-';
MINUS_SAT       : '|-|';
MUL             : '*';
DIV             : '/';
MOD             : '%';
BIT_OR          : '|';
BIT_AND         : '&';
BIT_XOR         : '^';
COMPLEMENT      : '~';
L_PAREN         : '(';
R_PAREN         : ')';
L_BRACKET       : '[';
R_BRACKET       : ']';
INVALID_HEADER  : '{#}';
L_BRACE         : '{';
R_BRACE         : '}';
L_ANGLE         : '<';
R_ANGLE         : '>';
NOT             : '!';
COLON           : ':';
COMMA           : ',';
QUESTION        : '?';
DOT             : '.';
ASSIGN          : '=';
SEMICOLON       : ';';
AT              : '@';

WS              : [ \t\r\n]+ -> channel(HIDDEN);
COMMENT         : '/*' .*? '*/' -> skip;
LINE_COMMENT    : '//' ~[\r\n]* -> skip;

fragment ESCAPED_QUOTE : '\\"';
STRING_LITERAL  : '"' ( ESCAPED_QUOTE | ~('\n' | '\r') )*? '"';

IDENTIFIER      : [A-Za-z_][A-Za-z0-9_]*;

INTEGER
    : HEX_INTEGER
    | DEC_INTEGER
    | OCT_INTEGER
    | BI_INTEGER
    | HEX_INTEGER_WITH
    | DEC_INTEGER_WITH
    | OCT_INTEGER_WITH
    | BI_INTEGER_WITH
    ;

fragment HEX_INTEGER        : '0' [xX] [0-9a-fA-F_]+;
fragment DEC_INTEGER        : '0' [dD] [0-9_]+ | [0-9] [0-9_]*;
fragment OCT_INTEGER        : '0' [oO] [0-7_]+;
fragment BI_INTEGER         : '0' [bB] [01_]+;
fragment HEX_INTEGER_WITH   : [0-9]+ [ws] '0' [xX] [0-9a-fA-F_]+;
fragment DEC_INTEGER_WITH   : [0-9]+ [ws] '0' [dD] [0-9_]+ | [0-9]+ [ws] [0-9_]+;
fragment OCT_INTEGER_WITH   : [0-9]+ [ws] '0' [oO] [0-7_]+;
fragment BI_INTEGER_WITH    : [0-9]+ [ws] '0' [bB] [01_]+;
