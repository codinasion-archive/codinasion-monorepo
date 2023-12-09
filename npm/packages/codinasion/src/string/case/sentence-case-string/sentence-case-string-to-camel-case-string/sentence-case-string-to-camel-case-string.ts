export function SentenceCaseStringToCamelCaseString(str: string): string {
  const result = str.replace(/\s+(?<temp1>[a-zA-Z])/g, (_, char) =>
    (char as string).toUpperCase(),
  );
  return result.charAt(0).toLowerCase() + result.slice(1);
}
