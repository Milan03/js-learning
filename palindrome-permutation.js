function palindromePermutation(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error('Invalid input.');
    }
    var cleanedInput = str.replace(/[^a-zA-Z0-9]/g, '');
    if (cleanedInput.length === 1) {
        return true;
    }
    var letterMap = new Map();
    for (let i = 0; i < cleanedInput.length; ++i) {
        let letter = letterMap.get(cleanedInput[i]);
        if (letter === undefined) {
            letterMap.set(cleanedInput[i], 1);
        } else {
            letterMap.set(cleanedInput[i], ++letter);
        }
    }
    if (cleanedInput.length % 2 === 0) {
        for (let v of letterMap.values()) {
            if (v < 2 || v > 2) {
                return false;
            }
        }
        return true;
    } else {
        var oneCharCount = 0, twoCharCount = 0;
        for (let v of letterMap.values()) {
            if (v === 1) {
                ++oneCharCount;
            } else if (v === 2) {
                ++twoCharCount;
            } else {
                return false;
            }
        }
        return (oneCharCount === 1 && twoCharCount === Math.floor(cleanedInput.length / 2)) ? true : false;
    }
}

module.exports = palindromePermutation;