const bowlingScore = require('./10-pin-bowling.js');

describe('10 Pin Bowling Score Terts', () => {
    test('It should calculate score when only digits are present', () => {
        let frames = "10 36 52 33 12 00 12 12 18 10"
        expect(bowlingScore(frames)).toBe(42);
    });

    test('It should calculate score when digits & spares are present', () => {
        let frames = "1/ 3/ 52 33 12 00 12 12 18 10"
        expect(bowlingScore(frames)).toBe(60);
    });

    test('It should calculate score when digits & strikes are present', () => {
        let frames = "18 33 X 33 12 00 12 12 18 10"
        expect(bowlingScore(frames)).toBe(56);
    });

    test('It should calculate score when digits, spares, & strikes are present', () => {
        let frames = "1/ 33 X 33 12 00 1/ 12 18 10"
        expect(bowlingScore(frames)).toBe(68);
    });

    test('It should calculate score when all strikes are present', () => {
        let frames = "X X X X X X X X X XXX"
        expect(bowlingScore(frames)).toBe(300);
    });

    test('It should calculate score when all spares are present', () => {
        let frames = "1/ 2/ 3/ 4/ 5/ 6/ 7/ 8/ 9/ 1/3"
        expect(bowlingScore(frames)).toBe(148);
    });

    test('It should calculate score when beginning with zero', () => {
        let frames = "0/ 01 00 X 5/ 6/ 7/ 8/ 9/ 1/3"
        expect(bowlingScore(frames)).toBe(125);
    });

    test('It should calculate score when ending with zero', () => {
        let frames = "30 2/ X 00 5/ 6/ 7/ 8/ 9/ 0/X"
        expect(bowlingScore(frames)).toBe(133);
    });

    test('It should calculate score when last cell is zeros', () => {
        let frames = "30 2/ X 00 5/ 6/ 7/ 8/ 9/ 00"
        expect(bowlingScore(frames)).toBe(113);
    });

    test('It should calculate score when last cell is ends with', () => {
        let frames = "30 2/ X 00 5/ 6/ 7/ 8/ 9/ 1/0"
        expect(bowlingScore(frames)).toBe(124);
    });

    it('Should throw an error if there are not 10 frames', () => {
        let nineFrames = "1/ 2/ 3/ 4/ 5/ 6/ 7/ 8/ 9/";
        let elevanFrames = "1/ 2/ 3/ 4/ 5/ 6/ 7/ 8/ 9/ XX 12";
        let invalidSpare = "// 2/ 3/ 4/ 5/ 6/ 7/ 8/ 9/ XXX";
        let invalidStrike = "/2 2/ XX 4/ 5/ 6/ 7/ 8/ 9/ XXX";
        let invalidPostStrike = "// 2/ X // 5/ 6/ 7/ 8/ 9/ XXX";
        let lastCellSpare = "13 2/ X 1/ 5/ 6/ 7/ 8/ 9/ XX/";
        let lastCellBeginSpare = "13 2/ X 13 5/ 6/ 7/ 8/ 9/ /31";
        expect(() => { bowlingScore(nineFrames) }).toThrow('Invalid input.');
        expect(() => { bowlingScore(elevanFrames) }).toThrow('Invalid input.');
        expect(() => { bowlingScore(invalidSpare) }).toThrow('Invalid input.');
        expect(() => { bowlingScore(invalidStrike) }).toThrow('Invalid input.');
        expect(() => { bowlingScore(invalidPostStrike) }).toThrow('Invalid input.');
        expect(() => { bowlingScore(lastCellSpare) }).toThrow('Invalid input.');
        expect(() => { bowlingScore(lastCellBeginSpare) }).toThrow('Invalid input.');
    });
});