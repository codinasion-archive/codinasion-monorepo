package main

import (
	"fmt"
	"github.com/gonum/matrix/mat64"
	"github.com/gonum/floats"
)

func main() {

	matrixData := [][]float64{
		{3.0, 1.0},
		{1.0, 2.0},
	}


	matrix := mat64.NewDense(len(matrixData), len(matrixData[0]), nil)
	for i := 0; i < len(matrixData); i++ {
		matrix.SetRow(i, matrixData[i])
	}


	eigenvalues := make([]float64, len(matrixData))
	ok := mat64.Eigenvalues(eigenvalues, matrix, nil)
	if !ok {
		fmt.Println("Eigenvalue computation failed.")
		return
	}


	fmt.Println("Eigenvalues:")
	for _, val := range eigenvalues {
		fmt.Printf("%f\n", val)
	}
}
