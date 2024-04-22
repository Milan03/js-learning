const oneAway = require('./one-away.js');

describe('One Away Tests', () => {
    it('should return true if one letter is removed', () => {
        expect(oneAway('pale', 'ple')).toBe(true);
    });

    it('should return true when one letter is replaced', () => {
        expect(oneAway('pale', 'bale')).toBe(true);
    });

    it('should return false if more than one letter is replaced', () => {
        expect(oneAway('pale', 'bake')).toBe(false);
    });

    it('should return false if one letter is replaced and one removed', () => {
        expect(oneAway('pale', 'pke')).toBe(false);
    });

    it('should return false if one letter is replaced and one is added', () => {
        expect(oneAway('pale', 'sales')).toBe(false);
    });

    it('should return false on the same word', () => {
        expect(oneAway('pale', 'pale')).toBe(false);
    });

    it('should return false when length difference greater than 1', () => {
        expect(oneAway('pale', 'paless')).toBe(false);
    });

    it('should return false when length difference less than -1', () => {
        expect(oneAway('p', 'pale')).toBe(false);
    });

    it('should throw error if first param is not string', () => {
        expect(() => { oneAway(1, 'it') }).toThrow('Invalid input.');
    });

    it('should throw error if second param is not string', () => {
        expect(() => { oneAway('it', 1) }).toThrow('Invalid input.');
    });
});