const isUnique = require('./is-unique.js');

describe('Is Unique Tests', () => {
    it('should return true when unique', () => {
        expect(isUnique('abc')).toBe(true);
    });

    it('should return false when not unique', () => {
        expect(isUnique('aabbcc')).toBe(false);
    });

    it('should return true if one character is provided', () => {
        expect(isUnique('a')).toBe(true);
    });

    it('should return true when unique with space', () => {
        expect(isUnique('abc d')).toBe(true);
    });

    it('should return false when Is not unique with space', () => {
        expect(isUnique('abc dd')).toBe(false);
    });

    it('should throw an error on invalid input', () => {
        expect(() => { isUnique(1) }).toThrow('Invalid input.');
        expect(() => { isUnique('') }).toThrow('Invalid input.');
    });
});