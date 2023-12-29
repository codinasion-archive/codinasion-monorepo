<?php

// Load the Composer autoloader
require 'vendor/autoload.php';

use Matrix\Matrix;

function findEigenvalues($matrix)
{
    // Create a Matrix object from the input array
    $matrixObj = new Matrix($matrix);

    // Get the eigenvalues
    $eigenvalues = $matrixObj->eigenvalues();

    // Output the eigenvalues
    foreach ($eigenvalues as $eigenvalue) {
        echo $eigenvalue . PHP_EOL;
    }
}

// Example input matrix
$inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Find and display the eigenvalues
findEigenvalues($inputMatrix);
