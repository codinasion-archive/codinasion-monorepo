print_numbers_reverse <- function(n) {
  if (n >= 1) {
    print(n)
    print_numbers_reverse(n - 1)
  }
}

input_numbers <- c(1, 2, 3, 4, 5)
print_numbers_reverse(max(input_numbers))
