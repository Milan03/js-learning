var recoverSecret = function (triplets) {
    var letterMap = new Map();
    var returnStr = "";
    for (let i = 0; i < triplets.length; ++i) {
        let individualTriplet = triplets[i];
        for (let x = 0; x < individualTriplet.length; ++x) {
            let indiLetter = individualTriplet[x];
            if (!letterMap.get(indiLetter)) {
                letterMap.set(indiLetter, new Set());
            }
            if (x < individualTriplet.length - 1) {
                let nextLetter = individualTriplet[x + 1];
                let successors = letterMap.get(indiLetter);
                successors.add(nextLetter);
                letterMap.set(indiLetter, successors);
            }
        }
    }
    var Q = [];
    var predecessorMap = new Map();
    for (const [key, value] of letterMap.entries()) {
        //console.log(key, value);
        if (!predecessorMap.get(key)) {
            predecessorMap.set(key, new Set());
        }
    }
    for (const [key, value] of letterMap.entries()) {
        //console.log(key, value);
        value.forEach((successor) => {
            let predecessors = predecessorMap.get(successor);
            predecessors.add(key);
            predecessorMap.set(successor, predecessors);
        });
    }
    for (const [key, value] of predecessorMap.entries()) {
        if (value.size === 0) {
            Q.push(key);
        }
    }
    while (Q.length !== 0) {
        let letter = Q.pop();
        returnStr += letter;
        let successors = letterMap.get(letter);
        successors.forEach((key) => {
            let predecessors = predecessorMap.get(key);
            predecessors.forEach((pred) => {
                if (pred === letter)
                    predecessors.delete(pred);
            });
            if (predecessors.size === 0) {
                Q.push(key);
            }
        });

    }
    console.log(`letterMap: \n`);
    console.log(letterMap);;
    console.log(`predMap: \n`);
    console.log(predecessorMap);
    return returnStr;
}