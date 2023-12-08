export function CamelCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1-$2")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
