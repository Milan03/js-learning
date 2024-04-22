const palindromePermutation = require('./palindrome-permutation.js');

describe('Palimdrome Permutation Tests', () => {
    it('should return true when it is an odd positive case', () => {
        expect(palindromePermutation('amamd')).toBe(true);
    });

    it('should return true when it is an even positive case', () => {
        expect(palindromePermutation('onon')).toBe(true);
    });

    it('should return false when it is an odd negative case', () => {
        expect(palindromePermutation('abc')).toBe(false);
    });

    it('should return false when it is an even negative case', () => {
        expect(palindromePermutation('abcd')).toBe(false);
    });

    it('should return true when it is one character', () => {
        expect(palindromePermutation('a')).toBe(true);
    });

    it('should return true when it is an odd more than 3 letter case', () => {
        expect(palindromePermutation('anccc')).toBe(false);
    });

    it('should throw an error on invalid input', () => {
        expect(() => { palindromePermutation(1) }).toThrow('Invalid input.');
    });
});