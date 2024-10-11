const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let operandStack = [];
    let constructedNum = '';
    
    let inBracketSeq = false;
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];
        if (inBracketSeq || char === '(') {
            inBracketSeq = true;
            if (isNumberOrDecimal(char)) {
                constructedNum += char;
                let next = expression[i + 1];
                if (!isNumberOrDecimal(next)) {
                    operandStack.push(+constructedNum);
                    constructedNum = '';
                }
            } // TODO: continue if operator etc.
        }

        if (isNumberOrDecimal(char)) {
            constructedNum += char;
            let next = expression[i + 1];
            if (!isNumberOrDecimal(next)) {
                operandStack.push(+constructedNum);
                constructedNum = '';
            }
        } else if (isOperator(char)) {
            operatorStack.push(char);
        }
    }
}

const isNumberOrDecimal = function(char) {
    return /^[0-9.]$/.test(char);
}

const isOperator = function(char) {
    return /^[+\-*/]$/.test(char);
}

module.exports = { calc, isNumberOrDecimal, isOperator };
