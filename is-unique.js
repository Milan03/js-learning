function isUnique(word) {
    if (typeof word !== 'string' || word.length === 0) {
        throw new Error('Invalid input.');
    }
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

module.exports = isUnique;