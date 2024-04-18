function URLify(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error('Invalid input.');
    }
    return str.trim().replace(/\s+/g, ' ').split(' ').join('%20');
}

module.exports = URLify;