const palindromePermutation = require('./palindrome-permutation.js');

describe('Palimdrome Permutation Tests', () => {
    test('Odd positive case, should return true', () => {
        expect(palindromePermutation('amamd')).toBe(true);
    });

    test('Even positive case, should return true', () => {
        expect(palindromePermutation('onon')).toBe(true);
    });

    test('Odd negative case, should return false', () => {
        expect(palindromePermutation('abc')).toBe(false);
    });

    test('Even negative case, should return true', () => {
        expect(palindromePermutation('abcd')).toBe(false);
    });

    test('One character case, should return true', () => {
        expect(palindromePermutation('a')).toBe(true);
    });

    test('Odd more than 3 letter case, should return true', () => {
        expect(palindromePermutation('anccc')).toBe(false);
    });

    test('Invalid input case, should throw error', () => {
        expect(() => { palindromePermutation(1) }).toThrow('Invalid input.');
    });
});