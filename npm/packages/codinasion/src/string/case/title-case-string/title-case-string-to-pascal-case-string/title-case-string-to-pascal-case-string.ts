export function TitleCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\s+/g, "")
    .replace(/^(?<temp1>.)/, (match) => match.toUpperCase());
}
