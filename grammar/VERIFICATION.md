# P4.g4 Grammar Verification

This document records how [grammar/P4.g4](P4.g4) relates to the reference
[grammar/p4.y](p4.y) (ported from [p4lang/p4c](https://github.com/p4lang/p4c))
and how correctness is validated.

## Intentional deviations

| Topic | p4.y (p4c) | P4.g4 (this extension) | Rationale |
|-------|------------|--------------------------|-----------|
| Preprocessor | Not in yacc grammar | Handled by `server/src/preprocessor/` before parsing | `#include`, `#define`, `#if` … are resolved by a C-style preprocessor; the ANTLR grammar only sees flattened P4 source. |
| `TYPE_IDENTIFIER` vs `IDENTIFIER` | Bison lexer hack distinguishes them | Merged into `type_or_id` | ANTLR has no symbol-table lexer hack; the grammar is slightly more permissive but accepts all valid P4 programs. |
| Right shift `>>` | Single `>>` token | Matched as `'>' '>'` | Avoids ambiguity with nested generics (`bit<bit<8>>`). |
| Entry point | `p4program` | `program` with `EOF` | Equivalent; empty programs and stray `;` declarations are accepted. |
| `@pragma` in annotations | Not in p4.y rules | Kept from earlier port | Harmless extension for pragmas inside annotation bodies. |

## Rule correspondence

All major p4.y nonterminals are present in P4.g4, including modern constructs:

- `list<T>` (`p4listType`), structured annotations `@name[...]`, entry `priority`
- `{#}` (`INVALID_HEADER`), `...` (`DOTS`), `nonBraceExpression`
- Optional type parameters on header/struct/union declarations
- `optTrailingComma`, `specializedType` in `directApplication` and header stacks
- `string` and `match_kind` base types; `PRIORITY`, `LIST`, `STRING`, `DOTS` tokens

Removed from the **lexer** (handled by preprocessor instead): `#include`, `#define`,
`#if`, `#ifdef`, `#ifndef`, `#elif`, `#else`, `#endif`, `#line`, `#undef`.

## Validation corpus

Run:

```bash
npx tsx scripts/smoke-parse.mts \
  p4include/core.p4 \
  p4include/v1model.p4 \
  p4src_example/bmv2_simple_switch.p4 \
  server/src/test/fixtures/modern_features.p4
```

Expected: **0 errors** for these files.

| File | Status | Notes |
|------|--------|-------|
| `p4include/core.p4` | Pass | Bundled standard library (from p4c) |
| `p4include/v1model.p4` | Pass | Resolves `#if V1MODEL_VERSION` via preprocessor |
| `p4src_example/bmv2_simple_switch.p4` | Pass | `#include <core.p4>` / `<v1model.p4>` resolved from `p4include/` |
| `server/src/test/fixtures/modern_features.p4` | Pass | Exercises modern syntax constructs |
| `p4src_example/smallcode.p4` | Skipped | Requires `extern_lib/declaration.p4`, not bundled in this repo |

## Regenerating the parser

```bash
npm run gen:parser
```

Uses [antlr-ng](https://github.com/mike-lischke/antlr-ng) (Node-native) with the
[antlr4ng](https://github.com/mike-lischke/antlr4ng) runtime. No Java install is
required on the local machine.
