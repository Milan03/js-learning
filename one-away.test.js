const oneAway = require('./one-away.js');

describe('One Away Tests', () => {
    test('One letter removed, should return true', () => {
        expect(oneAway('pale', 'ple')).toBe(true);
    });

    test('One letter replaced, should return true', () => {
        expect(oneAway('pale', 'bale')).toBe(true);
    });

    test('Two letter replaced, should return false', () => {
        expect(oneAway('pale', 'bake')).toBe(false);
    });

    test('One letter replaced one removed, should return false', () => {
        expect(oneAway('pale', 'pke')).toBe(false);
    });

    test('One letter replaced one added, should return false', () => {
        expect(oneAway('pale', 'sales')).toBe(false);
    });

    test('Same word, should return false', () => {
        expect(oneAway('pale', 'pale')).toBe(false);
    });

    test('Length difference greater than 1, should return false', () => {
        expect(oneAway('pale', 'paless')).toBe(false);
    });

    test('Length difference less than -1, should return false', () => {
        expect(oneAway('p', 'pale')).toBe(false);
    });

    test('First parameter not of type string should throw error', () => {
        expect(() => { oneAway(1, 'test') }).toThrow('Invalid input.');
    });

    test('Second parameter not of type string should throw error', () => {
        expect(() => { oneAway('test', 1) }).toThrow('Invalid input.');
    });
});