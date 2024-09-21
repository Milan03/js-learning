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

function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    return (str[0] === str[str.length - 1]) ? 
        isPalindrome(str.substring(1, str.length - 1)) : false;
}

module.exports = { sum, reverseWord, isPalindrome };
