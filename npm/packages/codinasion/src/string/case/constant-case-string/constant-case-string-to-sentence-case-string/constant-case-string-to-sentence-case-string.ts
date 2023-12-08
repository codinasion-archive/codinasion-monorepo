export function ConstantCaseStringToSentenceCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .toLowerCase()
      .split("_")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase(),
      )
      .join(" ");
  }
  return str;
}
