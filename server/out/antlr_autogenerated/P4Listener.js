// Generated from ./grammar/P4.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by P4Parser.
function P4Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

P4Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
P4Listener.prototype.constructor = P4Listener;

// Enter a parse tree produced by P4Parser#start.
P4Listener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by P4Parser#start.
P4Listener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by P4Parser#program.
P4Listener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by P4Parser#program.
P4Listener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by P4Parser#input.
P4Listener.prototype.enterInput = function(ctx) {
};

// Exit a parse tree produced by P4Parser#input.
P4Listener.prototype.exitInput = function(ctx) {
};


// Enter a parse tree produced by P4Parser#declaration.
P4Listener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#declaration.
P4Listener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#includeLine.
P4Listener.prototype.enterIncludeLine = function(ctx) {
};

// Exit a parse tree produced by P4Parser#includeLine.
P4Listener.prototype.exitIncludeLine = function(ctx) {
};


// Enter a parse tree produced by P4Parser#nonTypeName.
P4Listener.prototype.enterNonTypeName = function(ctx) {
};

// Exit a parse tree produced by P4Parser#nonTypeName.
P4Listener.prototype.exitNonTypeName = function(ctx) {
};


// Enter a parse tree produced by P4Parser#name.
P4Listener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by P4Parser#name.
P4Listener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by P4Parser#nonTableKwName.
P4Listener.prototype.enterNonTableKwName = function(ctx) {
};

// Exit a parse tree produced by P4Parser#nonTableKwName.
P4Listener.prototype.exitNonTableKwName = function(ctx) {
};


// Enter a parse tree produced by P4Parser#optCONST.
P4Listener.prototype.enterOptCONST = function(ctx) {
};

// Exit a parse tree produced by P4Parser#optCONST.
P4Listener.prototype.exitOptCONST = function(ctx) {
};


// Enter a parse tree produced by P4Parser#optAnnotations.
P4Listener.prototype.enterOptAnnotations = function(ctx) {
};

// Exit a parse tree produced by P4Parser#optAnnotations.
P4Listener.prototype.exitOptAnnotations = function(ctx) {
};


// Enter a parse tree produced by P4Parser#annotations.
P4Listener.prototype.enterAnnotations = function(ctx) {
};

// Exit a parse tree produced by P4Parser#annotations.
P4Listener.prototype.exitAnnotations = function(ctx) {
};


// Enter a parse tree produced by P4Parser#annotation.
P4Listener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by P4Parser#annotation.
P4Listener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by P4Parser#annotationBody.
P4Listener.prototype.enterAnnotationBody = function(ctx) {
};

// Exit a parse tree produced by P4Parser#annotationBody.
P4Listener.prototype.exitAnnotationBody = function(ctx) {
};


// Enter a parse tree produced by P4Parser#annotationToken.
P4Listener.prototype.enterAnnotationToken = function(ctx) {
};

// Exit a parse tree produced by P4Parser#annotationToken.
P4Listener.prototype.exitAnnotationToken = function(ctx) {
};


// Enter a parse tree produced by P4Parser#kvList.
P4Listener.prototype.enterKvList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#kvList.
P4Listener.prototype.exitKvList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#kvPair.
P4Listener.prototype.enterKvPair = function(ctx) {
};

// Exit a parse tree produced by P4Parser#kvPair.
P4Listener.prototype.exitKvPair = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parameterList.
P4Listener.prototype.enterParameterList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parameterList.
P4Listener.prototype.exitParameterList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#nonEmptyParameterList.
P4Listener.prototype.enterNonEmptyParameterList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#nonEmptyParameterList.
P4Listener.prototype.exitNonEmptyParameterList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parameter.
P4Listener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parameter.
P4Listener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by P4Parser#direction.
P4Listener.prototype.enterDirection = function(ctx) {
};

// Exit a parse tree produced by P4Parser#direction.
P4Listener.prototype.exitDirection = function(ctx) {
};


// Enter a parse tree produced by P4Parser#packageTypeDeclaration.
P4Listener.prototype.enterPackageTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#packageTypeDeclaration.
P4Listener.prototype.exitPackageTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#instantiation.
P4Listener.prototype.enterInstantiation = function(ctx) {
};

// Exit a parse tree produced by P4Parser#instantiation.
P4Listener.prototype.exitInstantiation = function(ctx) {
};


// Enter a parse tree produced by P4Parser#objInitializer.
P4Listener.prototype.enterObjInitializer = function(ctx) {
};

// Exit a parse tree produced by P4Parser#objInitializer.
P4Listener.prototype.exitObjInitializer = function(ctx) {
};


// Enter a parse tree produced by P4Parser#objDeclarations.
P4Listener.prototype.enterObjDeclarations = function(ctx) {
};

// Exit a parse tree produced by P4Parser#objDeclarations.
P4Listener.prototype.exitObjDeclarations = function(ctx) {
};


// Enter a parse tree produced by P4Parser#objDeclaration.
P4Listener.prototype.enterObjDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#objDeclaration.
P4Listener.prototype.exitObjDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#optConstructorParameters.
P4Listener.prototype.enterOptConstructorParameters = function(ctx) {
};

// Exit a parse tree produced by P4Parser#optConstructorParameters.
P4Listener.prototype.exitOptConstructorParameters = function(ctx) {
};


// Enter a parse tree produced by P4Parser#dotPrefix.
P4Listener.prototype.enterDotPrefix = function(ctx) {
};

// Exit a parse tree produced by P4Parser#dotPrefix.
P4Listener.prototype.exitDotPrefix = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserDeclaration.
P4Listener.prototype.enterParserDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserDeclaration.
P4Listener.prototype.exitParserDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserLocalElements.
P4Listener.prototype.enterParserLocalElements = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserLocalElements.
P4Listener.prototype.exitParserLocalElements = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserLocalElement.
P4Listener.prototype.enterParserLocalElement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserLocalElement.
P4Listener.prototype.exitParserLocalElement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserTypeDeclaration.
P4Listener.prototype.enterParserTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserTypeDeclaration.
P4Listener.prototype.exitParserTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserStates.
P4Listener.prototype.enterParserStates = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserStates.
P4Listener.prototype.exitParserStates = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserState.
P4Listener.prototype.enterParserState = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserState.
P4Listener.prototype.exitParserState = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserStatements.
P4Listener.prototype.enterParserStatements = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserStatements.
P4Listener.prototype.exitParserStatements = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserStatement.
P4Listener.prototype.enterParserStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserStatement.
P4Listener.prototype.exitParserStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserBlockStatement.
P4Listener.prototype.enterParserBlockStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserBlockStatement.
P4Listener.prototype.exitParserBlockStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#transitionStatement.
P4Listener.prototype.enterTransitionStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#transitionStatement.
P4Listener.prototype.exitTransitionStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#stateExpression.
P4Listener.prototype.enterStateExpression = function(ctx) {
};

// Exit a parse tree produced by P4Parser#stateExpression.
P4Listener.prototype.exitStateExpression = function(ctx) {
};


// Enter a parse tree produced by P4Parser#selectExpression.
P4Listener.prototype.enterSelectExpression = function(ctx) {
};

// Exit a parse tree produced by P4Parser#selectExpression.
P4Listener.prototype.exitSelectExpression = function(ctx) {
};


// Enter a parse tree produced by P4Parser#selectCaseList.
P4Listener.prototype.enterSelectCaseList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#selectCaseList.
P4Listener.prototype.exitSelectCaseList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#selectCase.
P4Listener.prototype.enterSelectCase = function(ctx) {
};

// Exit a parse tree produced by P4Parser#selectCase.
P4Listener.prototype.exitSelectCase = function(ctx) {
};


// Enter a parse tree produced by P4Parser#keysetExpression.
P4Listener.prototype.enterKeysetExpression = function(ctx) {
};

// Exit a parse tree produced by P4Parser#keysetExpression.
P4Listener.prototype.exitKeysetExpression = function(ctx) {
};


// Enter a parse tree produced by P4Parser#tupleKeysetExpression.
P4Listener.prototype.enterTupleKeysetExpression = function(ctx) {
};

// Exit a parse tree produced by P4Parser#tupleKeysetExpression.
P4Listener.prototype.exitTupleKeysetExpression = function(ctx) {
};


// Enter a parse tree produced by P4Parser#simpleExpressionList.
P4Listener.prototype.enterSimpleExpressionList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#simpleExpressionList.
P4Listener.prototype.exitSimpleExpressionList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#simpleKeysetExpression.
P4Listener.prototype.enterSimpleKeysetExpression = function(ctx) {
};

// Exit a parse tree produced by P4Parser#simpleKeysetExpression.
P4Listener.prototype.exitSimpleKeysetExpression = function(ctx) {
};


// Enter a parse tree produced by P4Parser#valueSetDeclaration.
P4Listener.prototype.enterValueSetDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#valueSetDeclaration.
P4Listener.prototype.exitValueSetDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#controlDeclaration.
P4Listener.prototype.enterControlDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#controlDeclaration.
P4Listener.prototype.exitControlDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#controlTypeDeclaration.
P4Listener.prototype.enterControlTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#controlTypeDeclaration.
P4Listener.prototype.exitControlTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#controlLocalDeclarations.
P4Listener.prototype.enterControlLocalDeclarations = function(ctx) {
};

// Exit a parse tree produced by P4Parser#controlLocalDeclarations.
P4Listener.prototype.exitControlLocalDeclarations = function(ctx) {
};


// Enter a parse tree produced by P4Parser#controlLocalDeclaration.
P4Listener.prototype.enterControlLocalDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#controlLocalDeclaration.
P4Listener.prototype.exitControlLocalDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#controlBody.
P4Listener.prototype.enterControlBody = function(ctx) {
};

// Exit a parse tree produced by P4Parser#controlBody.
P4Listener.prototype.exitControlBody = function(ctx) {
};


// Enter a parse tree produced by P4Parser#externDeclaration.
P4Listener.prototype.enterExternDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#externDeclaration.
P4Listener.prototype.exitExternDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#methodPrototypes.
P4Listener.prototype.enterMethodPrototypes = function(ctx) {
};

// Exit a parse tree produced by P4Parser#methodPrototypes.
P4Listener.prototype.exitMethodPrototypes = function(ctx) {
};


// Enter a parse tree produced by P4Parser#functionPrototype.
P4Listener.prototype.enterFunctionPrototype = function(ctx) {
};

// Exit a parse tree produced by P4Parser#functionPrototype.
P4Listener.prototype.exitFunctionPrototype = function(ctx) {
};


// Enter a parse tree produced by P4Parser#methodPrototype.
P4Listener.prototype.enterMethodPrototype = function(ctx) {
};

// Exit a parse tree produced by P4Parser#methodPrototype.
P4Listener.prototype.exitMethodPrototype = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeRef.
P4Listener.prototype.enterTypeRef = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeRef.
P4Listener.prototype.exitTypeRef = function(ctx) {
};


// Enter a parse tree produced by P4Parser#namedType.
P4Listener.prototype.enterNamedType = function(ctx) {
};

// Exit a parse tree produced by P4Parser#namedType.
P4Listener.prototype.exitNamedType = function(ctx) {
};


// Enter a parse tree produced by P4Parser#prefixedType.
P4Listener.prototype.enterPrefixedType = function(ctx) {
};

// Exit a parse tree produced by P4Parser#prefixedType.
P4Listener.prototype.exitPrefixedType = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeName.
P4Listener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeName.
P4Listener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by P4Parser#tupleType.
P4Listener.prototype.enterTupleType = function(ctx) {
};

// Exit a parse tree produced by P4Parser#tupleType.
P4Listener.prototype.exitTupleType = function(ctx) {
};


// Enter a parse tree produced by P4Parser#headerStackType.
P4Listener.prototype.enterHeaderStackType = function(ctx) {
};

// Exit a parse tree produced by P4Parser#headerStackType.
P4Listener.prototype.exitHeaderStackType = function(ctx) {
};


// Enter a parse tree produced by P4Parser#specializedType.
P4Listener.prototype.enterSpecializedType = function(ctx) {
};

// Exit a parse tree produced by P4Parser#specializedType.
P4Listener.prototype.exitSpecializedType = function(ctx) {
};


// Enter a parse tree produced by P4Parser#baseType.
P4Listener.prototype.enterBaseType = function(ctx) {
};

// Exit a parse tree produced by P4Parser#baseType.
P4Listener.prototype.exitBaseType = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeOrVoid.
P4Listener.prototype.enterTypeOrVoid = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeOrVoid.
P4Listener.prototype.exitTypeOrVoid = function(ctx) {
};


// Enter a parse tree produced by P4Parser#optTypeParameters.
P4Listener.prototype.enterOptTypeParameters = function(ctx) {
};

// Exit a parse tree produced by P4Parser#optTypeParameters.
P4Listener.prototype.exitOptTypeParameters = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeParameterList.
P4Listener.prototype.enterTypeParameterList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeParameterList.
P4Listener.prototype.exitTypeParameterList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeArg.
P4Listener.prototype.enterTypeArg = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeArg.
P4Listener.prototype.exitTypeArg = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeArgumentList.
P4Listener.prototype.enterTypeArgumentList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeArgumentList.
P4Listener.prototype.exitTypeArgumentList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#realTypeArg.
P4Listener.prototype.enterRealTypeArg = function(ctx) {
};

// Exit a parse tree produced by P4Parser#realTypeArg.
P4Listener.prototype.exitRealTypeArg = function(ctx) {
};


// Enter a parse tree produced by P4Parser#realTypeArgumentList.
P4Listener.prototype.enterRealTypeArgumentList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#realTypeArgumentList.
P4Listener.prototype.exitRealTypeArgumentList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typeDeclaration.
P4Listener.prototype.enterTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typeDeclaration.
P4Listener.prototype.exitTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#derivedTypeDeclaration.
P4Listener.prototype.enterDerivedTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#derivedTypeDeclaration.
P4Listener.prototype.exitDerivedTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#headerTypeDeclaration.
P4Listener.prototype.enterHeaderTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#headerTypeDeclaration.
P4Listener.prototype.exitHeaderTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#structTypeDeclaration.
P4Listener.prototype.enterStructTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#structTypeDeclaration.
P4Listener.prototype.exitStructTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#headerUnionDeclaration.
P4Listener.prototype.enterHeaderUnionDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#headerUnionDeclaration.
P4Listener.prototype.exitHeaderUnionDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#structFieldList.
P4Listener.prototype.enterStructFieldList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#structFieldList.
P4Listener.prototype.exitStructFieldList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#structField.
P4Listener.prototype.enterStructField = function(ctx) {
};

// Exit a parse tree produced by P4Parser#structField.
P4Listener.prototype.exitStructField = function(ctx) {
};


// Enter a parse tree produced by P4Parser#enumDeclaration.
P4Listener.prototype.enterEnumDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#enumDeclaration.
P4Listener.prototype.exitEnumDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#specifiedIdentifierList.
P4Listener.prototype.enterSpecifiedIdentifierList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#specifiedIdentifierList.
P4Listener.prototype.exitSpecifiedIdentifierList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#specifiedIdentifier.
P4Listener.prototype.enterSpecifiedIdentifier = function(ctx) {
};

// Exit a parse tree produced by P4Parser#specifiedIdentifier.
P4Listener.prototype.exitSpecifiedIdentifier = function(ctx) {
};


// Enter a parse tree produced by P4Parser#errorDeclaration.
P4Listener.prototype.enterErrorDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#errorDeclaration.
P4Listener.prototype.exitErrorDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#matchKindDeclaration.
P4Listener.prototype.enterMatchKindDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#matchKindDeclaration.
P4Listener.prototype.exitMatchKindDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#identifierList.
P4Listener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#identifierList.
P4Listener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#typedefDeclaration.
P4Listener.prototype.enterTypedefDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#typedefDeclaration.
P4Listener.prototype.exitTypedefDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#assignmentOrMethodCallStatement.
P4Listener.prototype.enterAssignmentOrMethodCallStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#assignmentOrMethodCallStatement.
P4Listener.prototype.exitAssignmentOrMethodCallStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#emptyStatement.
P4Listener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#emptyStatement.
P4Listener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#exitStatement.
P4Listener.prototype.enterExitStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#exitStatement.
P4Listener.prototype.exitExitStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#returnStatement.
P4Listener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#returnStatement.
P4Listener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#conditionalStatement.
P4Listener.prototype.enterConditionalStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#conditionalStatement.
P4Listener.prototype.exitConditionalStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#directApplication.
P4Listener.prototype.enterDirectApplication = function(ctx) {
};

// Exit a parse tree produced by P4Parser#directApplication.
P4Listener.prototype.exitDirectApplication = function(ctx) {
};


// Enter a parse tree produced by P4Parser#statement.
P4Listener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#statement.
P4Listener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#blockStatement.
P4Listener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#blockStatement.
P4Listener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#statOrDeclList.
P4Listener.prototype.enterStatOrDeclList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#statOrDeclList.
P4Listener.prototype.exitStatOrDeclList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#switchStatement.
P4Listener.prototype.enterSwitchStatement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#switchStatement.
P4Listener.prototype.exitSwitchStatement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#switchCases.
P4Listener.prototype.enterSwitchCases = function(ctx) {
};

// Exit a parse tree produced by P4Parser#switchCases.
P4Listener.prototype.exitSwitchCases = function(ctx) {
};


// Enter a parse tree produced by P4Parser#switchCase.
P4Listener.prototype.enterSwitchCase = function(ctx) {
};

// Exit a parse tree produced by P4Parser#switchCase.
P4Listener.prototype.exitSwitchCase = function(ctx) {
};


// Enter a parse tree produced by P4Parser#switchLabel.
P4Listener.prototype.enterSwitchLabel = function(ctx) {
};

// Exit a parse tree produced by P4Parser#switchLabel.
P4Listener.prototype.exitSwitchLabel = function(ctx) {
};


// Enter a parse tree produced by P4Parser#statementOrDeclaration.
P4Listener.prototype.enterStatementOrDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#statementOrDeclaration.
P4Listener.prototype.exitStatementOrDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#tableDeclaration.
P4Listener.prototype.enterTableDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#tableDeclaration.
P4Listener.prototype.exitTableDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#tablePropertyList.
P4Listener.prototype.enterTablePropertyList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#tablePropertyList.
P4Listener.prototype.exitTablePropertyList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#tableProperty.
P4Listener.prototype.enterTableProperty = function(ctx) {
};

// Exit a parse tree produced by P4Parser#tableProperty.
P4Listener.prototype.exitTableProperty = function(ctx) {
};


// Enter a parse tree produced by P4Parser#keyElementList.
P4Listener.prototype.enterKeyElementList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#keyElementList.
P4Listener.prototype.exitKeyElementList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#keyElement.
P4Listener.prototype.enterKeyElement = function(ctx) {
};

// Exit a parse tree produced by P4Parser#keyElement.
P4Listener.prototype.exitKeyElement = function(ctx) {
};


// Enter a parse tree produced by P4Parser#actionList.
P4Listener.prototype.enterActionList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#actionList.
P4Listener.prototype.exitActionList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#actionRef.
P4Listener.prototype.enterActionRef = function(ctx) {
};

// Exit a parse tree produced by P4Parser#actionRef.
P4Listener.prototype.exitActionRef = function(ctx) {
};


// Enter a parse tree produced by P4Parser#entry.
P4Listener.prototype.enterEntry = function(ctx) {
};

// Exit a parse tree produced by P4Parser#entry.
P4Listener.prototype.exitEntry = function(ctx) {
};


// Enter a parse tree produced by P4Parser#actionBinding.
P4Listener.prototype.enterActionBinding = function(ctx) {
};

// Exit a parse tree produced by P4Parser#actionBinding.
P4Listener.prototype.exitActionBinding = function(ctx) {
};


// Enter a parse tree produced by P4Parser#entriesList.
P4Listener.prototype.enterEntriesList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#entriesList.
P4Listener.prototype.exitEntriesList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#actionDeclaration.
P4Listener.prototype.enterActionDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#actionDeclaration.
P4Listener.prototype.exitActionDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#variableDeclaration.
P4Listener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#variableDeclaration.
P4Listener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#constantDeclaration.
P4Listener.prototype.enterConstantDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#constantDeclaration.
P4Listener.prototype.exitConstantDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#optInitializer.
P4Listener.prototype.enterOptInitializer = function(ctx) {
};

// Exit a parse tree produced by P4Parser#optInitializer.
P4Listener.prototype.exitOptInitializer = function(ctx) {
};


// Enter a parse tree produced by P4Parser#initializer.
P4Listener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by P4Parser#initializer.
P4Listener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by P4Parser#functionDeclaration.
P4Listener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by P4Parser#functionDeclaration.
P4Listener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by P4Parser#argumentList.
P4Listener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#argumentList.
P4Listener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#nonEmptyArgList.
P4Listener.prototype.enterNonEmptyArgList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#nonEmptyArgList.
P4Listener.prototype.exitNonEmptyArgList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#argument.
P4Listener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by P4Parser#argument.
P4Listener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by P4Parser#expressionList.
P4Listener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by P4Parser#expressionList.
P4Listener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by P4Parser#prefixedNonTypeName.
P4Listener.prototype.enterPrefixedNonTypeName = function(ctx) {
};

// Exit a parse tree produced by P4Parser#prefixedNonTypeName.
P4Listener.prototype.exitPrefixedNonTypeName = function(ctx) {
};


// Enter a parse tree produced by P4Parser#lvalue.
P4Listener.prototype.enterLvalue = function(ctx) {
};

// Exit a parse tree produced by P4Parser#lvalue.
P4Listener.prototype.exitLvalue = function(ctx) {
};


// Enter a parse tree produced by P4Parser#expression.
P4Listener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by P4Parser#expression.
P4Listener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by P4Parser#type_or_id.
P4Listener.prototype.enterType_or_id = function(ctx) {
};

// Exit a parse tree produced by P4Parser#type_or_id.
P4Listener.prototype.exitType_or_id = function(ctx) {
};


// Enter a parse tree produced by P4Parser#parserStateCondition.
P4Listener.prototype.enterParserStateCondition = function(ctx) {
};

// Exit a parse tree produced by P4Parser#parserStateCondition.
P4Listener.prototype.exitParserStateCondition = function(ctx) {
};



exports.P4Listener = P4Listener;