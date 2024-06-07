object MatrixCofactor {
  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(3, 0, 2),
      Array(2, 0, -2),
      Array(0, 1, 1)
    )

    val cofactorMatrix = getCofactorMatrix(matrix)
    println("Cofactor matrix:")
    cofactorMatrix.foreach(row => println(row.mkString(" ")))
  }

  def getCofactorMatrix(matrix: Array[Array[Int]]): Array[Array[Int]] = {
    val n = matrix.length
    val cofactorMatrix = Array.ofDim[Int](n, n)

    for (i <- 0 until n) {
      for (j <- 0 until n) {
        cofactorMatrix(i)(j) = getCofactor(matrix, i, j)
      }
    }

    cofactorMatrix
  }

  def getCofactor(matrix: Array[Array[Int]], p: Int, q: Int): Int = {
    val subMatrix = Array.ofDim[Int](matrix.length - 1, matrix.length - 1)
    var row = 0
    var col = 0

    for (i <- matrix.indices) {
      if (i != p) {
        col = 0
        for (j <- matrix.indices) {
          if (j != q) {
            subMatrix(row)(col) = matrix(i)(j)
            col += 1
          }
        }
        row += 1
      }
    }

    val sign = if ((p + q) % 2 == 0) 1 else -1
    sign * determinant(subMatrix)
  }

  def determinant(matrix: Array[Array[Int]]): Int = {
    if (matrix.length == 1) {
      return matrix(0)(0)
    }
    if (matrix.length == 2) {
      return matrix(0)(0) * matrix(1)(1) - matrix(0)(1) * matrix(1)(0)
    }

    var det = 0
    for (i <- matrix.indices) {
      val subMatrix = Array.ofDim[Int](matrix.length - 1, matrix.length - 1)
      for (j <- 1 until matrix.length) {
        var colIndex = 0
        for (k <- matrix.indices) {
          if (k != i) {
            subMatrix(j - 1)(colIndex) = matrix(j)(k)
            colIndex += 1
          }
        }
      }
      det += matrix(0)(i) * determinant(subMatrix) * (if (i % 2 == 0) 1 else -1)
    }

    det
  }
}
