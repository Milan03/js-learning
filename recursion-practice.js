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

function findGreatestCommonDivisor(a, b) {
    if (a === 0) {
        throw new Error("Values must be non-zero.");
    }
    if (b === 0) {
        return Math.abs(a);
    }
    
    if (a < 0) {
        a = Math.abs(a);
    }
    if (b < 0) {
        b = Math.abs(b);
    }

    return findGreatestCommonDivisor(b, a % b);
}

function climbStairs(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
}

module.exports = { sum, reverseWord, isPalindrome, findGreatestCommonDivisor, climbStairs };
