const checkPermutation = require('./check-permutation.js');

describe('Check Permutation Tests', () => {
    test('Is permutation, should return true', () => {
        expect(checkPermutation('abcd', 'cbda')).toBe(true);
    });

    test('Same word, should return true', () => {
        expect(checkPermutation('abcd', 'abcd')).toBe(true);
    });

    test('Is not permutation, should return false', () => {
        expect(checkPermutation('abcd', 'abce')).toBe(false);
    });

    test('Difference length strings, should return true', () => {
        expect(checkPermutation('abcd', 'abcde')).toBe(false);
    });

    test('Invalid input, input not strings, should throw error', () => {
        expect(() => { checkPermutation(1, 'abcd')}).toThrow('Invalid input.');
        expect(() => { checkPermutation('abcd', 1)}).toThrow('Invalid input.');
    });

    test('Invalid input, string lengths of 0, should throw error', () => {
        expect(() => { checkPermutation('', 'abcd')}).toThrow('Invalid input.');
        expect(() => { checkPermutation('abcd', '')}).toThrow('Invalid input.');
    });
});