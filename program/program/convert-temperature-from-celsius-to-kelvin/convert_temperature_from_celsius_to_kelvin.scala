object CelsiusToKelvinConverter {
  def celsiusToKelvin(celsius: Double): Double = {
    val kelvin = celsius + 273.15
    kelvin
  }

  def main(args: Array[String]): Unit = {
    val celsius = -40.0
    val kelvin = celsiusToKelvin(celsius)
    println(s"Input (C): $celsius")
    println(s"Output (K): $kelvin")
  }
}

