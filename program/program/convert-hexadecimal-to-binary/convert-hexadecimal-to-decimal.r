# Input hex number as a string
hex_number <- "1A3"

# Convert hex to decimal
decimal_number <- as.numeric(paste0("0x", hex_number))

# Print the result
cat("Hexadecimal:", hex_number, "\n")
cat("Decimal:", decimal_number, "\n")