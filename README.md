# P4 VSCode Extension
This repo contains the Visual Studio P4_16 Extension. 

## Features
- Syntax checker,
- Syntax Highlighting,
- Autocompletion for headers and input parameters,
- Support of remote compiler for showing an extended list of errors (with user
 authentication for access control),
- Snippet for basic code structures, like tables.

## Open project used in this project
- [Antlr (ANother Tool for Language Recognition)](https://www.antlr.org) is a
 powerful parser generator for reading, processing, executing or translating
 structured text or binary files. To this end, the referenced lex/yacc P4
 grammars
 (links to:
 [lexer](https://github.com/p4lang/p4c/blob/master/frontends/parsers/p4/p4lexer.ll)
 and
 [parser](https://github.com/p4lang/p4c/blob/master/frontends/parsers/p4/p4parser.ypp))
 have been transferred to Antlr4 syntax in [grammar](grammar) folder. 

- [vscode-p4](https://bitbucket.org/shouxi/vscode-p4/src/master/) "the most basic
 syntax colorizer" and the same code is used in this project for syntax
 highlighting.

## License
 Copyright © 2019 Ali Fattaholmanan

 This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along with this program. If not, see {http://www.gnu.org/licenses/}.
