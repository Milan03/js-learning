const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let operandStack = [];
    let constructedNum = '';
    
    let inBracketSeq = false;
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];
        if (inBracketSeq || char === '(') {
            let startingIdx = i;
            inBracketSeq = true;
            if (isNumberOrDecimal(char)) {
                constructedNum += char;
                let next = expression[i + 1];
                if (!isNumberOrDecimal(next)) {
                    operandStack.push(+constructedNum);
                    constructedNum = '';
                }
            } else if (isOperator(char)) {
                operatorStack.push(char);
            } else if (char === ')') {
                let operandOne = operandStack.pop();
                let operandTwo = operandStack.pop();
                let operator = operatorStack.pop();
            }
        }

        // maybe do a second loop after bracket evaluations
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

const add = function(operandOne, operandTwo) {
    return Number(+operandOne + +operandTwo);
}

const subtract = function(operandOne, operadTwo) {
    return Number(+operandOne - +operadTwo);
}

const multiply = function(operandOne, operadTwo) {
    return Number((+operandOne * +operadTwo).toFixed(2));
}

const divide = function(operandOne, operadTwo) {
    if (+operadTwo === 0) {
        throw new Error('Cannot divide by 0');
    }
    return Number((+operandOne / +operadTwo).toFixed(2));
}

module.exports = { calc, isNumberOrDecimal, isOperator,
                    add, subtract, multiply, divide };
