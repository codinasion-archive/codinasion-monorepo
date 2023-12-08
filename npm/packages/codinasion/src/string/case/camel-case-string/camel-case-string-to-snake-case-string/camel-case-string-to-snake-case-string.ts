export function CamelCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1_$2").toLowerCase();
}
