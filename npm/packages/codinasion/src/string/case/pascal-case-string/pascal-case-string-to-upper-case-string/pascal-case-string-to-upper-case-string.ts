export function PascalCaseStringToUpperCaseString(str: string): string {
  return str === str.toUpperCase()
    ? str
    : str
        .replace(/(?<temp1>[A-Z])/g, " $1")
        .toUpperCase()
        .trim();
}
