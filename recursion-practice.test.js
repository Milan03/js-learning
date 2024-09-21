const { sum, reverseWord, isPalindrome, 
    findGreatestCommonDivisor, climbStairs } = require('./recursion-practice');

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

    it('should find the greatest common divisor between two numbers', () => {
        expect(findGreatestCommonDivisor(48, 18)).toEqual(6);
        expect(findGreatestCommonDivisor(-48, -18)).toEqual(6);
        expect(findGreatestCommonDivisor(100, 25)).toEqual(25);
        expect(() => { findGreatestCommonDivisor(0, 0) }).toThrow("Values must be non-zero.");
    });

    it('should count the ways to climb stairs', () => {
        expect(climbStairs(3)).toEqual(3);
        expect(climbStairs(4)).toEqual(5);
    });
});
