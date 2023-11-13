cylindrical_rotate_90 <- function(matrix) {
    result <- matrix(nrow = ncol(matrix), ncol = nrow(matrix))  # Create an empty matrix to store the result

    # Rotate the matrix by 90 degrees
    for (i in 1:nrow(matrix)) {
        result[, i] <- rev(matrix[i, ])  # Reverse each row of the original matrix and assign it to the columns of the result matrix
    }

    return(result)
}

# Define the input matrix
input_matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)

# Print the original matrix
cat("Input Matrix:\n")
print(input_matrix)

# Perform cylindrical rotation
rotated_matrix <- cylindrical_rotate_90(input_matrix)

# Print the rotated matrix
cat("\nOutput Matrix:\n")
print(rotated_matrix)
