type ParsedCompilerOutput = {
  line: number;
  error: string;
}[];

export function extractErrorMessage(errSection: string): string {
  const first_layer: RegExpExecArray = /(\(\d+\))?(error.*)/.exec(errSection);
  if (first_layer == null) return null;
  if (first_layer.length == 0) return null;

  try {
    let second_layer = /(\].*(?!.*error.*)|error:.*)/.exec(first_layer[0])[0];
    const error_index: number = second_layer.indexOf("error:");
    if (error_index > 0) {
      second_layer = second_layer.substring(
        error_index + 6,
        second_layer.length
      );
    }
    return second_layer;
  } catch (e) {
    return first_layer[0];
  }
}

export function parseBmv2CompilerOutputErr(
  input: string
): ParsedCompilerOutput {
  const result = [];
  const errorSectionPattern = /.*\/(?=[^\/]+\.p4\(\d+\))/g;
  const lineNumberPattern = /\(\d+\)/;
  const arrayOfErrors = input.split(errorSectionPattern);

  // remove the first non-important error in the console!
  for (let i = 1; i < arrayOfErrors.length; i++) {
    const errSection: string = arrayOfErrors[i];
    const lineNumber = parseInt(
      /\d+/.exec(lineNumberPattern.exec(errSection)[0])[0]
    );
    const errorMessage: string = extractErrorMessage(errSection);
    if (errorMessage == null) continue;
    const errorP4Code = errSection.split(/[\r\n]+/g)[1].trim();
    result.push({ line: lineNumber, error: errorMessage });
  }
  return result;
}
