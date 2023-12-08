export function PascalCaseStringToSnakeCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
}
