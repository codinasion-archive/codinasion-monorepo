export function PathCaseStringToCamelCaseString(str: string): string {
  if (!str.includes("/")) {
    return str;
  }
  return str
    .toLowerCase()
    .replace(/\/(?<temp1>.)/g, (_, char) => (char as string).toUpperCase());
}
