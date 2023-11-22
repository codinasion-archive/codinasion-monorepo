fun alternatingCase(input: String): String {
    return input.mapIndexed { index, char ->
        if (char.isLowerCase()) {
            if (index % 2 == 0) char.toUpperCase() else char
        } else {
            if (index % 2 == 0) char.toLowerCase() else char
        }
    }.joinToString("")
}

fun main() {
    println("Enter a string: ")
    val inputString = readLine() ?: ""
    val convertedString = alternatingCase(inputString)
    println("Alternating Case String: $convertedString")
}
