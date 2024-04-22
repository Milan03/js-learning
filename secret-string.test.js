const recoverSecret = require('./secret-string.js');

describe('Secret string tests', () => {
    it('should return the secret string', () => {
        let secret = "whatisup"
        let triplets = [
            ['t', 'u', 'p'],
            ['w', 'h', 'i'],
            ['t', 's', 'u'],
            ['a', 't', 's'],
            ['h', 'a', 'p'],
            ['t', 'i', 's'],
            ['w', 'h', 's']
        ];
        expect(recoverSecret(triplets)).toBe(secret);
    })

    it('should handle single triplet', () => {
        let secret = "bat";
        let triplets = [
            ['b', 'a', 't']
        ];
        expect(recoverSecret(triplets)).toBe(secret);
    });

    it('should handle triplets with characters in non-sequential order', () => {
        let secret = "abcdef";
        let triplets = [
            ['a', 'b', 'd'],
            ['b', 'c', 'e'],
            ['c', 'd', 'f'],
            ['a', 'e', 'f']
        ];
        expect(recoverSecret(triplets)).toBe(secret);
    });
});