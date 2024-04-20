function getSorted(str) {
    return str.split('').sort().join('');
}

function checkPermutation(word1, word2) {
    if (typeof word1 !== 'string' || typeof word2 !== 'string' ||
               word1.length === 0 || word2.length === 0) {
        throw new Error('Invalid input.');
    }
    if (word1 === word2) {
        return true;
    }
    if (word1.length !== word2.length) {
        return false;
    }
    var word1Sorted = getSorted(word1);
    var word2Sorted = getSorted(word2);
    return (word1Sorted === word2Sorted) ? true : false;
}

module.exports = checkPermutation;