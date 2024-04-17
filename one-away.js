function oneAway(word1, word2) {
    if(typeof word1 !== 'string' || typeof word2 !== 'string') {
        throw new Error('Invalid input.');
    }
    if (word1 === word2) {
        return false;
    }
    var lengthDiff = word1.length - word2.length;
    if (lengthDiff > 1 || lengthDiff < -1) {
        return false;
    }
    if (lengthDiff === 1) { // word1 longer
        for (let i = 0; i < word1.length; ++i) {
            if (word1[i] !== word2[i]) {
                word1 = word1.replace(word1.charAt(i), '');
                return (word1 === word2) ? true : false;
            }
        }
    } else if (lengthDiff === -1) {  // word2 longer
        for (let i = 0; i < word2.length; ++i) {
            if (word1[i] !== word2[i]) {
                word2 = word2.replace(word2.charAt(i), '');
                return (word1 === word2) ? true : false;
            }
        }
    } else if (lengthDiff === 0) {
        let diffCount = 0;
        for (let i = 0; i < word1.length; ++i) {
            if (word1[i] !== word2[i]) {
                ++diffCount;
                if (diffCount > 1) {
                    return false;
                }
            }
        }
        return true;
    }
}

module.exports = oneAway;