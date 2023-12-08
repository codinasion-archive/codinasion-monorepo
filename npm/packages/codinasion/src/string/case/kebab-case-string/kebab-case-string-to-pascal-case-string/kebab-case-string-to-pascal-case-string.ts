export function KebabCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/-(?<temp1>[a-z])/g, (match: string, group1: string) =>
      group1.toUpperCase(),
    )
    .replace(/^\w/, (match) => match.toUpperCase());
}
