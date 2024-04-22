const rotateMatrix = require('./rotate-matrix.js');

describe('Rotate Matrix Tests', () => {
    it('should rotate a 3x3 matrix', () => {
        let testMatrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        let rotatedMatrix = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]
        expect(rotateMatrix(testMatrix)).toEqual(expect.arrayContaining(rotatedMatrix));
    });

    it('should rotate a 2x2 matrix', () => {
        let testMatrix = [
            [1, 2],
            [4, 5]
        ];
        let rotatedMatrix = [
            [4, 1],
            [5, 2]
        ]
        expect(rotateMatrix(testMatrix)).toEqual(expect.arrayContaining(rotatedMatrix));
    });

    it('should not rotate a 1x1 matrix', () => {
        let testMatrix = [
            [1]
        ];
        expect(rotateMatrix(testMatrix)).toEqual(expect.arrayContaining(testMatrix));
    });

    it('should not rotate an NxM matrix', () => {
        let testMatrix = [
            [1, 2]
        ];
        expect(() => { rotateMatrix(testMatrix) }).toThrow('Can only rotate an NxN matrix.');
    });

    it('should not rotate a 0 length matrix', () => {
        let testMatrix = [];
        expect(() => { rotateMatrix(testMatrix) }).toThrow('Can only rotate an NxN matrix.');
    });
});