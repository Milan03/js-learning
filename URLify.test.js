const URLify = require('./URLify');

describe('URLify Tests', () => {
    test('Trailing spaces case', () => {
        expect(URLify('Mr John Smith    ')).toBe('Mr%20John%20Smith');
    });

    test('More than one space in between case', () => {
        expect(URLify('Mr  John    Smith')).toBe('Mr%20John%20Smith');
    });

    test('Leading spaces case', () => {
        expect(URLify('  Mr     John    Smith')).toBe('Mr%20John%20Smith');
    });

    test('Invalid input case, should throw error', () => {
        expect(() => { URLify(1) }).toThrow('Invalid input.');
    });
});