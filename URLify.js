function URLify(str) {
    return str.trim().replace(/\s+/g, ' ').split(' ').join('%20');
}

console.log(`Trailing spaces: 'Mr John Smith    ' : ${URLify('Mr John Smith    ')}`);
console.log(`More than one space in between: 'Mr  John    Smith' : ${URLify('Mr  John    Smith')}`);
console.log(`Leading spaces: '  Mr     John    Smith' : ${URLify('  Mr     John    Smith')}`);