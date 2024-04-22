const displayMatrix = require('./display-matrix.js');

describe('Display Matrix Tests', () => {
    let originalMatrix = [
        [1, 2, 3, 4],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15]
    ];

    it('should display matrix correctly', () => {
        expect(displayMatrix(originalMatrix)).toBe(
        '1, 2, 3, 4\n' +
        '4, 5, 6, 7\n' +
        '8, 9, 10, 11\n' +
        '12, 13, 14, 15\n');
    })
});