void main() {
  // Define the first matrix
  var matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // Define the second matrix
  var matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // Call the function to add the matrices
  var result = addMatrices(matrix1, matrix2);

  // Print the result
  for (var row in result) {
    print(row);
  }
}

// Function to add two matrices
List<List<int>> addMatrices(List<List<int>> matrix1, List<List<int>> matrix2) {
  var rows = matrix1.length;
  var cols = matrix1[0].length;
  var sumMatrix = List.generate(rows, (i) => List.filled(cols, 0, growable: false));

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return sumMatrix;
}
