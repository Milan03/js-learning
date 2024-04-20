const isUnique = require('./is-unique.js');

describe('Is Unique Tests', () => {
    test('Is unique, should return true', () => {
        expect(isUnique('abc')).toBe(true);
    });

    test('Is not unique, should return false', () => {
        expect(isUnique('aabbcc')).toBe(false);
    });

    test('One character, should return true', () => {
        expect(isUnique('a')).toBe(true);
    });

    test('Is unique with space, should return true', () => {
        expect(isUnique('abc d')).toBe(true);
    });

    test('Is not unique with space, should return false', () => {
        expect(isUnique('abc dd')).toBe(false);
    });

    test('Invalid input, should throw error', () => {
        expect(() => { isUnique(1) }).toThrow('Invalid input.');
        expect(() => { isUnique('') }).toThrow('Invalid input.');
    });
});