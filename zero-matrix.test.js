const zeroMatrix = require('./zero-matrix.js');

describe('Zero Matrix Test', () => {
    it('should zero out a 3x4 matrix', () => {
        var testMatrix = [
            [1, 2, 0],
            [4, 5, 6],
            [7, 0, 9],
            [10, 11, 12]
        ];
        var zeroedMatrix = [
            [0, 0, 0],
            [4, 0, 0],
            [0, 0, 0],
            [10, 0, 0]
        ];
        expect(zeroMatrix(testMatrix)).toEqual(expect.arrayContaining(zeroedMatrix));
    });

    it('should zero out a 2x1 matrix', () => {
        var testMatrix = [
            [1],
            [0]
        ];
        var zeroedMatrix = [
            [0],
            [0]
        ];
        expect(zeroMatrix(testMatrix)).toEqual(expect.arrayContaining(zeroedMatrix));
    });

    it('should work with a 1x1 matrix with a value of 0', () => {
        var testMatrix = [
            [0]
        ];
        expect(zeroMatrix(testMatrix)).toEqual(expect.arrayContaining(testMatrix));
    });

    it('should work with a 1x1 matrix with a value of 1', () => {
        var testMatrix = [
            [1]
        ];
        expect(zeroMatrix(testMatrix)).toEqual(expect.arrayContaining(testMatrix));
    });

    it('should throw an error if a matrix of 0 length is provided', () => {
        var testMatrix = [];
        expect(() => { zeroMatrix(testMatrix) }).toThrow('Invalid input.');
    });
});