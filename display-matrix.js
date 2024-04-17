function displayMatrix(matrix) {
    var matrixOutput = '';
    for (let i = 0; i < matrix.length; ++i) {
        for (let x = 0; x < matrix[i].length; ++x) {
            if (x === matrix[i].length - 1) {
                matrixOutput = matrixOutput += `${matrix[i][x]}\n`;
            } else {
                matrixOutput = matrixOutput += `${matrix[i][x]}, `;
            }
        }
    }
    return matrixOutput
}

module.exports = displayMatrix;