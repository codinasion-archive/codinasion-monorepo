String toSentenceCase(String str) {
  if (str.isEmpty) {
    return str;
  }
  return str[0].toUpperCase() + str.substring(1);
}

void main() {
  String input = "hello world";
  String output = toSentenceCase(input);

  print(output); // Output: "Hello world"
}
