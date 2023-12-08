export function PascalCaseStringToPathCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "/$1")
    .toLowerCase()
    .replace(/^\//, "");
}
