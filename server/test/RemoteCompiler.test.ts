import { parseBmv2CompilerOutputErr } from "../src/RemoteCompiler/RemoteCompiler";
const input = ` /aa/test.p4(5):syntax error, unexpected BIT
cons bit
     ^^^
 /aa/test.p4(67):syntax error, unexpected BIT
cons bit
     ^^^
error: 1 errors encountered, aborting compilation`;

it("parses the error message", () => {
  expect(parseBmv2CompilerOutputErr(input)).toMatchInlineSnapshot(`
    Array [
      Object {
        "error": "error, unexpected BIT",
        "line": 5,
      },
      Object {
        "error": "error, unexpected BIT",
        "line": 67,
      },
    ]
  `);
});
