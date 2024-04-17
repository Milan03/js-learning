function isUnique(word) {
    var letterMap = new Map();
    for (let i = 0; i < word.length; ++i) {
        var letter = letterMap.get(word[i]);
        if (letter) {
            return false;
        }
        letterMap.set(word[i], 1);
    }
    return true;
}

console.log(`Is Unique. 
    'abc' should return true. Result: ${isUnique('abc')}`);
console.log(`Is  Not Unique. 
    'aabbcc' should return false. Result: ${isUnique('aabbcc')}`);
console.log(`One Characters. 
    'a' should return true. Result: ${isUnique('a')}`);
console.log(`Is Unique With Space. 
    'abc d' should return true. Result: ${isUnique('abc d')}`);
console.log(`Is Not Unique With Space. 
    'abc dd' should return false. Result: ${isUnique('abc dd')}`);