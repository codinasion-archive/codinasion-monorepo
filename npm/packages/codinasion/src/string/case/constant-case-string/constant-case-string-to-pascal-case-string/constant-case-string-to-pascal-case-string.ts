export function ConstantCaseStringToPascalCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  }
  return str;
}
