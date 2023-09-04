#include <iostream>
#include <Eigen/Dense>

using namespace std;
using namespace Eigen;

// Eigen library must be stored somewhere to be included using absolute path pointing to .../Eigen/Dense.
// Or use a package manager to install Eigen like "vcpkg".
// Source: https://eigen.tuxfamily.org/dox/classEigen_1_1EigenSolver.html#a66288022802172e3ee059283b26201d7

// Returning the eigenvectors as MatrixXd type
MatrixXd eigenvectors(MatrixXd matrix_egv)
{
    EigenSolver<MatrixXd> eigenSolv(matrix_egv);
    MatrixXd eigen_m = eigenSolv.eigenvectors().real();

    return eigen_m;
}

// Returning the eigenvectors as EigenSolver<MatrixXd> type
EigenSolver<MatrixXd> eigenvectors_solver(MatrixXd matrix_egv)
{
    EigenSolver<MatrixXd> eigenSolv(matrix_egv);

    return eigenSolv;
}

// eigenvectors help
void eigenvectors_help() 
{
    cout << "Eigenvectors: " << endl;
    cout << "The matrix given to the function must be square." << endl;
    cout << "The equation to solve is: AV = λV." << endl;
    cout << "Where:" << endl;
    cout << "A is the square given matrix." << endl;
    cout << "V is the eigenvectors to calculate and return as MatrixXd type." << endl;
    cout << "λ is the eigenvalues." << endl;
}

// example of use
void eigenvectors_example() 
{
    MatrixXd matrix_egv(3, 3);
    matrix_egv << 1, 2, 3, 4, 5, 6, 7, 8, 9;
    cout << "Here is the matrix m[3]x[3]:\n" << matrix_egv << endl;
    cout << "Created as follow:" << endl;
    cout << "MatrixXd matrix_egv(3, 3);" << endl;
    cout << "matrix_egv << 1, 2, 3, 4, 5, 6, 7, 8, 9;" << endl;
    cout << "Now, calling the function:" << endl;
    cout << "eigen_vectors(matrix_egv)" << endl;
    cout << "The matrix given to the function must be square." << endl;
    cout << "The eigenvectors are: " << endl << eigen_vectors(matrix_egv) << endl;
    cout << "It will return the eigenvectors as MatrixXd type." << endl;
}
