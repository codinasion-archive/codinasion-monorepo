package main

import (
	"fmt"
	"strings"
)

var (
	unitsMap = map[int]string{
		0: "",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
	}

	tenToNineteenMap = map[int]string{
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
	}

	tensMap = map[int]string{
		2: "twenty",
		3: "thirty",
		4: "forty",
		5: "fifty",
		6: "sixty",
		7: "seventy",
		8: "eighty",
		9: "ninety",
	}

	scaleMap = map[int]string{
		2: "thousand",
		3: "lakh",
		5: "crore",
		7: "crore",
	}
)

func convertDigitToWord(digit int) string {
	return unitsMap[digit]
}

func convertTensToWord(number int) string {
	if number < 10 {
		return convertDigitToWord(number)
	} else if number < 20 {
		return tenToNineteenMap[number]
	} else {
		tens := number / 10
		digit := number % 10
		if digit == 0 {
			return tensMap[tens]
		}
		return tensMap[tens] + " " + convertDigitToWord(digit)
	}
}

func convertNumberToWords(number int) string {
	if number == 0 {
		return "zero"
	}

	words := make([]string, 0)

	for scale, scaleWord := range scaleMap {
		if number < scale {
			break
		}
		remaining := number % (scale * 10)
		if remaining > 0 {
			words = append(words, convertNumberToWords(remaining))
		}
		number /= scale * 10
		if number > 0 {
			words = append(words, scaleWord)
		}
	}

	if number > 0 {
		words = append(words, convertTensToWord(number))
	}

	return strings.Join(words, " ")
}

func main() {
	number := 1234567890
	words := convertNumberToWords(number)
	fmt.Printf("Number in words: %s\n", words)
}
