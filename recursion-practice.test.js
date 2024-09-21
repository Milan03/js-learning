const { sum, reverseWord, isPalindrome } = require('./recursion-practice');

describe('Recursion Practice Tests', () => {
    it('should sum numbers 1 to n', () => {
        expect(sum(3)).toBe(6);
        expect(sum(42)).toBe(903);
        expect(sum(5567)).toBe(15498528);
    });
    
    it('should reverse the word', () => {
        expect(reverseWord("Hello")).toBe("olleH");
    });

    it('should determine if the word is a palindrome', () => {
        expect(isPalindrome("racecar")).toEqual(true);
        expect(isPalindrome("hello")).toEqual(false);
        expect(isPalindrome("A man, a plan, a canal, Panama!")).toEqual(true);
        expect(isPalindrome("This is not a palindrome phrase")).toEqual(false);
    });
});
