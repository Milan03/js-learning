function palindromePermutation(str) {
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

console.log(`Odd Positive Case: 'amamd', should equal true. Result: ${palindromePermutation('amamd')}`);
console.log(`Even Positive Case: 'onon', should equal true. Result: ${palindromePermutation('onon')}`);
console.log(`Odd Negative Case: 'abc', should equal false. Result: ${palindromePermutation('abc')}`);
console.log(`Even Negative Case: 'abcd', should equal false. Result: ${palindromePermutation('abcd')}`);
console.log(`One Character Case: 'a', should equal true. Result: ${palindromePermutation('a')}`);
console.log(`Odd More Than 3 Letter Count: 'anccc', should equal false. Result: ${palindromePermutation('abcd')}`);