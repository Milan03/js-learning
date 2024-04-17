const displayMatrix = require('./display-matrix.js');

function rotateMatrix(matrix) {
    if (matrix.length === 0 || matrix.length != matrix[0].length) {
        throw new Error('Can only rotate an NxN matrix.');
    }
    if (matrix.length === 1) {
        return matrix;
    }
    for (let i = 0; i < matrix.length; ++i) {
        for (let x = i + 1; x < matrix[i].length; ++x) {
            console.log(`matrix.length = ${matrix.length}`);
            let ixTemp = matrix[i][x];
            matrix[i][x] = matrix[x][i];
            matrix[x][i] = ixTemp;
        }
        matrix[i] = matrix[i].reverse();
    }
    return matrix;
}

module.exports = rotateMatrix;