const { sum, reverseWord } = require('./recursion-practice');

describe('Recursion Practice Tests', () => {
    it('should sum numbers 1 to n', () => {
        expect(sum(3)).toBe(6);
        expect(sum(42)).toBe(903);
        expect(sum(5567)).toBe(15498528);
    });
    
    it('should reverse the word', () => {
        expect(reverseWord("Hello")).toBe("olleH");
    });
});
