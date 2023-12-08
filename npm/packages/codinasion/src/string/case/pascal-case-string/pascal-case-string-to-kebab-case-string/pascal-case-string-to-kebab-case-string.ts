export function PascalCaseStringToKebabCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}
