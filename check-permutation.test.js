const checkPermutation = require('./check-permutation.js');

describe('Check Permutation Tests', () => {
    it('should return true when is permutation', () => {
        expect(checkPermutation('abcd', 'cbda')).toBe(true);
    });

    test('should return true when it is the same word', () => {
        expect(checkPermutation('abcd', 'abcd')).toBe(true);
    });

    test('should return false when it is not permutation', () => {
        expect(checkPermutation('abcd', 'abce')).toBe(false);
    });

    test('it should return false when different length strings are provided', () => {
        expect(checkPermutation('abcd', 'abcde')).toBe(false);
    });

    test('should throw an error on invalid input', () => {
        expect(() => { checkPermutation(1, 'abcd')}).toThrow('Invalid input.');
        expect(() => { checkPermutation('abcd', 1)}).toThrow('Invalid input.');
        expect(() => { checkPermutation('', 'abcd')}).toThrow('Invalid input.');
        expect(() => { checkPermutation('abcd', '')}).toThrow('Invalid input.');
    });
});