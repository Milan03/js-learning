const displayMatrix = require('./display-matrix.js');

function zeroMatrix(matrix) {
    if (matrix.length === 0) {
        throw new Error('Invalid input.');
    }
    var rowSet = new Set();
    var colSet = new Set();
    for (let i = 0; i < matrix.length; ++i) {
        for (let x = 0; x < matrix[i].length; ++x) {
            if (matrix[i][x] === 0) {
                rowSet.add(i);
                colSet.add(x);
            }
        }
    }
    for (let i = 0; i < matrix.length; ++i) {
        for (let x = 0; x < matrix[i].length; ++x) {
            if (rowSet.has(i) || colSet.has(x)) {
                matrix[i][x] = 0;
            }
        }
    }
    return matrix;
}

module.exports = zeroMatrix;