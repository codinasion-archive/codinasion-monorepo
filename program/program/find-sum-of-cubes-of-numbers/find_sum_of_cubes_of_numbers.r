# Read input from the user
n <- as.numeric(readline("Enter Number: "))
i <- 1
sum <- 0

# While loop to calculate the sum of cubes
while (i <= n) {
  sum <- sum + i^3
  i <- i + 1
}

# Print the result
cat("Sum of cubes is: ", sum, "\n")

