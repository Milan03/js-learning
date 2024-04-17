function oneAway(word1, word2) {
    var lengthDiff = word1.length - word2.length;
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
    } else { // length diff greater than 1
        return false;
    }
}

console.log(`One Letter Removed. 'pale' vs. 'ple', should be true. Result: ${oneAway('pale', 'ple')}`);
console.log(`One Letter Replaced. 'pale' vs. 'bale', should be true. Result: ${oneAway('pale', 'bale')}`);
console.log(`Two Letters Replaced. 'pale' vs. 'bake', should be false. Result: ${oneAway('pale', 'bake')}`);
console.log(`One Letter Removed, One Replaced. 'pale' vs. 'pke', should be false. Result: ${oneAway('pale', 'pke')}`);
console.log(`One Letter Added, One Replaced. 'pale' vs. 'sales', should be false. Result: ${oneAway('pale', 'sales')}`);
console.log(`Same Word. 'pale' vs. 'pale', should be true. Result: ${oneAway('pale', 'pale')}`);
console.log(`More Than One Length Difference. 'pale' vs. 'pales', should be false. Result: ${oneAway('pale', 'palest')}`);