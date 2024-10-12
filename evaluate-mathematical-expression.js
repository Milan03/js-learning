const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let operandStack = [];
    let constructedNum = '';
    
    // do while loop check for brackets
    // evaluate inner bracket expression with
    // let result = new Function('return ' + innerExpression);
    
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];

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
