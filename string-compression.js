function stringCompression(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error('Invalid input.');
    }
    var compressedStr = '';
    var letterCount = 1;

    for (let i = 0; i < str.length; ++i) {
        if (str[i] === str[i + 1]) {
            ++letterCount;
        } else {
            compressedStr += str[i] + letterCount;
            letterCount = 1;
        }
    }
    return (compressedStr.length < str.length) ? compressedStr : str;
}

module.exports = stringCompression;