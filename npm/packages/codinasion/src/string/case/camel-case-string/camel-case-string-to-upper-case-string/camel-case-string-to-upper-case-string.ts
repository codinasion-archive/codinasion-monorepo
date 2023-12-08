export function CamelCaseStringToUpperCaseString(str: string): string {
  return str.replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1 $2").toUpperCase();
}
