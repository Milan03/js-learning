function sum(n) {
    if (n === 0) {
        return n;
    }

    return n + sum(n - 1);
}

function reverseWord(word) {
    if (word.length === 0 || word.length === 1) {
        return word;
    }

    return reverseWord(word.slice(1)) + word[0];
}

module.exports = { sum, reverseWord };
