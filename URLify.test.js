const URLify = require('./URLify');

describe('URLify Tests', () => {
    it('should handle trailing spaces correctly', () => {
        expect(URLify('Mr John Smith    ')).toBe('Mr%20John%20Smith');
    });

    it('should handle more than one space in between the words', () => {
        expect(URLify('Mr  John    Smith')).toBe('Mr%20John%20Smith');
    });

    it('should handle leading spaces', () => {
        expect(URLify('  Mr     John    Smith')).toBe('Mr%20John%20Smith');
    });

    it('should throw an error on invalid input', () => {
        expect(() => { URLify(1) }).toThrow('Invalid input.');
    });
});