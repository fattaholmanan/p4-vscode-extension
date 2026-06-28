# P4 VSCode Extension

Visual Studio Code language support for **P4_16**: syntax checking, syntax
highlighting, scoped autocompletion, and table snippets.

## Features

- C-style preprocessor (`#include`, `#define`, `#if` / `#ifdef` / `#ifndef`, …)
- ANTLR-based syntax validation with diagnostics mapped back to original files
- Autocompletion for variables, parameters, header/struct fields, and table members
- Snippets for common constructs (e.g. tables)

Standard library headers from [p4lang/p4c](https://github.com/p4lang/p4c) live in
[`p4include/`](p4include/) (`core.p4`, `v1model.p4`, …) and are searched
automatically for `#include <core.p4>`-style directives.

## Development

Requirements: **Node.js 18+** (npm workspaces; no Java required locally).

```bash
npm install
npm run build          # bundle client + server with esbuild
npm run check-types    # TypeScript type-check
npm run lint
npm run test:unit      # preprocessor + parser tests
npm run gen:parser     # regenerate server/src/parser/ from grammar/P4.g4
```

Press **F5** in VS Code to launch an Extension Development Host.

### Settings

| Setting | Description |
|---------|-------------|
| `p4.maxNumberOfProblems` | Max diagnostics per file (default: 100) |
| `p4.includePaths` | Extra directories for `#include` resolution |
| `p4.trace.server` | LSP trace verbosity |

## Grammar

The ANTLR grammar is in [`grammar/P4.g4`](grammar/P4.g4), aligned with the
reference [`grammar/p4.y`](grammar/p4.y). See
[`grammar/VERIFICATION.md`](grammar/VERIFICATION.md) for intentional deviations
and the validation corpus.

Parser generation uses [antlr-ng](https://github.com/mike-lischke/antlr-ng) with
the [antlr4ng](https://github.com/mike-lischke/antlr4ng) runtime.

## License

Apache-2.0
