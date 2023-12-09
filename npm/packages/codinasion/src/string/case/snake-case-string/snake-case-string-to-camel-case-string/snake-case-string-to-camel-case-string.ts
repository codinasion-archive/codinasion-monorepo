export function SnakeCaseStringToCamelCaseString(str: string): string {
  return str.replace(/_(?<temp1>[a-z])/g, (match: string, letter: string) =>
    letter.toUpperCase(),
  );
}
