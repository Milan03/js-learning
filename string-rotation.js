function stringRotation(word1, word2) {
    if (word1 === word2) {
        return false;
    }
    
    if (word1.length !== word2.length) {
        return false;
    }

    var word1Doubled = word1 + word1;
    return (word1Doubled.includes(word2)) ? true : false;
}

module.exports = stringRotation;

/*
console.log(`Is Rotation. 
	'larratt' 'arrattl' should return true. Result ${stringRotation('larratt', 'arrattl')}`);
console.log(`Is Rotation, but More Than One Starting Letter.
	'larratt' 'attlarr' should return true. Result ${stringRotation('larratt', 'attlarr')}`);
console.log(`Not Rotation.
	'larratt' 'taalarr' should return false. Result ${stringRotation('larratt', 'taalarr')}`);
console.log(`Different Lengths.
	'larratt' 'larrattt' should return false. Result ${stringRotation('larratt', 'larrattt')}`);
console.log(`Same Word.
	'larratt' 'larrattt' should return false. Result ${stringRotation('larratt', 'larratt')}`);*/