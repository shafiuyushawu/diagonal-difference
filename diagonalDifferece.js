function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < arr.length; i += 1) {
        firstDiagonal += arr[i][i];
        secondDiagonal += arr[i][arr.length - 1 - i]
    }
    return Math.abs(firstDiagonal - secondDiagonal);

}

const matrix = [[1, 2, 3], [4, 8, 6], [7, 8, 9]];
const result = diagonalDifference(matrix);
console.log(result); 
