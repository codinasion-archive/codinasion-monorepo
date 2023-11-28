# Function to convert to consonant case
consonantCase <- function(a) {
  vowels <- c("a", "e", "i", "o", "u", "A", "E", "I", "O", "U")
  new_str <- ""
  for (i in seq_len(nchar(a))) {
    letter <- substr(a, i, i)
    new_str <- paste0(new_str, ifelse(letter %in% vowels, tolower(letter), toupper(letter)))
  }
  return(new_str)
}

# Input string

x <- "hello world"

# Apply consonant case conversion
result <- consonantCase(x)

# Output result
cat("Consonant Case of '", x, "' is '", result, "'\n")
