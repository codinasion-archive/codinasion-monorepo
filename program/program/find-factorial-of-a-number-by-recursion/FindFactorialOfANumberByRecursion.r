power <- function(base, exponent) {
  # Base case: if exponent is 0, return 1
  if (exponent == 0) {
    return(1)
  }
  # Recursive case: compute power recursively
  else {
    return(base * power(base, exponent - 1))
  }
}