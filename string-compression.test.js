const stringCompression = require('./string-compression');

describe('String Compression Tests', () => {
    test('Longer string should return shorter', () => {
        expect(stringCompression('aaabbbcccddd')).toBe('a3b3c3d3');
    });

    test('Shorter string should return itself', () => {
        expect(stringCompression('abcd')).toBe('abcd');
    });

    test('Compressed/original same length, should return original', () => {
        expect(stringCompression('aabbcc')).toBe('aabbcc');
    });

    test('String of length 0 should throw error', () => {
        expect(() => { stringCompression('') }).toThrow('Invalid input.');
    });

    test('Input of other than string should throw error', () => {
        expect(() => { stringCompression(1) }).toThrow('Invalid input.');
    });
});