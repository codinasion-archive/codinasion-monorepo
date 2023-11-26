convertToVowelcase <- function(inputString) {
  # Define a function to check if a character is a vowel
  isVowel <- function(char) {
    vowels <- c("a", "e", "i", "o", "u", "A", "E", "I", "O", "U")
    return(char %in% vowels)
  }
  
  # Convert the string to a vector of characters
  charVector <- strsplit(inputString, NULL)[[1]]
  
  # Convert each character to vowelcase
  result <- sapply(charVector, function(char) {
    if (isVowel(char)) {
      return(toupper(char))  # Convert vowel to uppercase
    } else {
      return(tolower(char))  # Convert consonant to lowercase
    }
  })
  
  # Combine the characters back into a string
  resultString <- paste(result, collapse = "")
  
  return(resultString)
}

# Example usage
inputString <- "hello world"
outputString <- convertToVowelcase(inputString)
cat("Input  : ", inputString, "\n")
cat("Output : ", outputString, "\n")
