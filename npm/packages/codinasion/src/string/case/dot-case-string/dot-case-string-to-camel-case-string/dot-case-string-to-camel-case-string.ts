export function DotCaseStringToCamelCaseString(str: string): string {
  return str.replace(/\.(?<temp1>\w)/g, (match: string, char: string) =>
    char.toUpperCase(),
  );
}
