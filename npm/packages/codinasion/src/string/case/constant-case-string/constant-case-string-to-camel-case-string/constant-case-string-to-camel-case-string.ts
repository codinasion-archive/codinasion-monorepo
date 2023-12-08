export function ConstantCaseStringToCamelCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .toLowerCase()
      .replace(/_(?<temp1>[a-z])/g, (match: string, char: string) =>
        char.toUpperCase(),
      );
  }
  return str;
}
