factorial <- function(n) {
  # Base case: factorial of 1 is 1
  if (n == 1) {
    return(1)
  } else {
    # Recursive step: n times factorial of (n-1)
    return(n * factorial(n - 1))
  }
}

# Example usage
n <- 5
cat("The factorial of", n, "is", factorial(n))
