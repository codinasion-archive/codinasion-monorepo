package main

import "fmt"

func moveZeroesToEnd(arr []int) []int {
	var nonZeroes []int
	for _, elem := range arr {
		if elem != 0 {
			nonZeroes = append(nonZeroes, elem)
		}
	}

	return append(nonZeroes, make([]int, len(arr)-len(nonZeroes))...)
}

func main() {
	var slice = []int{0, 1, 0, 0, 2, 3, 4, 0, 5, 6, 0, 7, 8, 0, 9, 0}
	slice = moveZeroesToEnd(slice)
	fmt.Println(slice)
}
