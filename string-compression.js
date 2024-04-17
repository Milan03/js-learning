function stringCompression(str) {
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

console.log(`Compressed String Shorter. 'aaabbbcccddd', should return 'a3b3c3d3'. Result: ${stringCompression('aaabbbcccddd')}`);
console.log(`Compressed String Longer. 'abcd', should return 'abcd'. Result: ${stringCompression('abcd')}`);
console.log(`Compressed and Original Same Length. 'aabbcc', should return 'aabbcc'. Result: ${stringCompression('aabbcc')}`);