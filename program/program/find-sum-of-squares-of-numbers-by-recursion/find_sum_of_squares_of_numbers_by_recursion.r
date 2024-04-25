# Define the recursive function
sum_of_squares <- function(n) {
  if (n == 1) {
    # Base case: if n is 1, the sum of squares is also 1
    return(1)
  } else {
    # Recursive case: sum of squares of n is n^2 + sum of squares of (n-1)
    return(n^2 + sum_of_squares(n-1))
  }
}

# Example usage
n <- 5
cat("The sum of squares from 1 to", n, "is", sum_of_squares(n))
