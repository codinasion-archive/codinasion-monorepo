object APSumCalculator {
  def main(args: Array[String]): Unit = {
    // Input values
    val a1 = 2 // first term
    val n = 5  // number of terms
    val d = 3  // common difference
    
    // Calculate the sum
    val sum = n * (2 * a1 + (n - 1) * d) / 2
    
    // Print the result
    println(s"The sum of the arithmetic progression series is: $sum")
  }
}
