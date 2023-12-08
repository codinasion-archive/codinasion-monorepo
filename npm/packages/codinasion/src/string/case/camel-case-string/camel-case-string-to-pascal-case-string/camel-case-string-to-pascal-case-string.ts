export function CamelCaseStringToPascalCaseString(str: string): string {
  return str.replace(
    /(?<temp2>\w)(?<temp1>\w*)/g,
    (match: string, firstChar: string, rest: string) =>
      firstChar.toUpperCase() + rest,
  );
}
