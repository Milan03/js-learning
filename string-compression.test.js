const stringCompression = require('./string-compression');

describe('String Compression Tests', () => {
    it('should return the compressed string when input is longer', () => {
        expect(stringCompression('aaabbbcccddd')).toBe('a3b3c3d3');
    });

    it('should return itself if the provided string is shorter than compressed', () => {
        expect(stringCompression('abcd')).toBe('abcd');
    });

    it('should return itself when the compressed and original are equal in length', () => {
        expect(stringCompression('aabbcc')).toBe('aabbcc');
    });

    it('should throw an error if string of length 0 is provided', () => {
        expect(() => { stringCompression('') }).toThrow('Invalid input.');
    });

    it('should throw an error if input is other than string', () => {
        expect(() => { stringCompression(1) }).toThrow('Invalid input.');
    });
});