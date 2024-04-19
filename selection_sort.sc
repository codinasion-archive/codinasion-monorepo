object SelectionSort {

  def selectionSort(data: Array[Int]): Unit = {
    for (i <- 0 until data.length - 1) {
      var minIndex = i
      for (j <- i + 1 until data.length) {
        if (data(j) < data(minIndex)) {
          minIndex = j
        }
      }
      if (i != minIndex) {
        val temp = data(i)
        data(i) = data(minIndex)
        data(minIndex) = temp
      }
    }
  }

  def main(args: Array[String]): Unit = {
    val numbers = Array(5, 2, 8, 1, 3)
    println("Unsorted array: " + numbers.mkString(", "))
    selectionSort(numbers)
    println("Sorted array: " + numbers.mkString(", "))
  }
}
