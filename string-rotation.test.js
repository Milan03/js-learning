const stringRotation = require('./string-rotation'); 

describe('String Rotation Tests', () => {
    test('is rotation', () => {
        expect(stringRotation('larratt', 'arrattl')).toBe(true);
    });

    test('is rotation with more than one letter over', () => {
        expect(stringRotation('larratt', 'attlarr')).toBe(true);
    });

    test('not rotation and same length', () => {
        expect(stringRotation('larratt', 'taalarr')).toBe(false);
    });

    test('not rotation due to different length', () => {
        expect(stringRotation('larratt', 'larrattt')).toBe(false);
    });

    test('not rotation due to same word', () => {
        expect(stringRotation('larratt', 'larratt')).toBe(false);
    });
});