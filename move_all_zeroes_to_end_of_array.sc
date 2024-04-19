object MoveZeroes {

  def moveZeroes(arr: Array[Int]): Unit = {
    var j = 0
    for (i <- arr.indices) {
      if (arr(i) != 0) {
        arr(j) = arr(i)
        j += 1
      }
    }
    while (j < arr.length) {
      arr(j) = 0
      j += 1
    }
  }

  def main(args: Array[String]): Unit = {
    val arr1 = Array(1, 2, 0, 4, 3, 0, 5, 0)
    val arr2 = Array(1, 2, 0, 0, 0, 3, 6)

    println("Input 1: " + arr1.mkString(", "))
    moveZeroes(arr1)
    println("Output 1: " + arr1.mkString(", "))

    println("Input 2: " + arr2.mkString(", "))
    moveZeroes(arr2)
    println("Output 2: " + arr2.mkString(", "))
  }
}

