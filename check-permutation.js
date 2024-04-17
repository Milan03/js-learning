function getSorted(str) {
    return str.split('').sort().join('');
}

function checkPermutation(word1, word2) {
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

console.log(`Is Permutation. 
    Should be true,'abcd' vs. 'cbda'. Result: ${checkPermutation('abcd', 'cbda')}`);
console.log(`Same Word. 
    Should be true, as values are the same. Result: ${checkPermutation('abcd', 'abcd')}`);
console.log(`Is Not Permutation.
    Should be false, 'abcd' vs. 'abce': ${checkPermutation('abcd', 'abce')}`);
console.log(`Different Length Strings.
    Should be false, 'abcd' vs. 'abcde': ${checkPermutation('abcd', 'abcde')}`);