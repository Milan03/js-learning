const stringRotation = require('./string-rotation'); 

describe('String Rotation Tests', () => {
    it('should return true when it is an actual rotation', () => {
        expect(stringRotation('larratt', 'arrattl')).toBe(true);
    });

    it('should return true when it is an actual rotation and more than one char over', () => {
        expect(stringRotation('larratt', 'attlarr')).toBe(true);
    });

    it('should return false when lengths are equal but not rotation', () => {
        expect(stringRotation('larratt', 'taalarr')).toBe(false);
    });

    it('should return false when strings are not the same length', () => {
        expect(stringRotation('larratt', 'larrattt')).toBe(false);
    });

    it('should return false if same word is detected', () => {
        expect(stringRotation('larratt', 'larratt')).toBe(false);
    });
});