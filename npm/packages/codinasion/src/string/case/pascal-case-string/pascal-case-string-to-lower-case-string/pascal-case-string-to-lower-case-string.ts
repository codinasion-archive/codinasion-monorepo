export function PascalCaseStringToLowerCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .toLowerCase();
}
