const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
   
    expression = evaluateBracketExpressions(expression);
    expression = evaluateNegatives(expression);
    expression = evaluateToPostfix(expression);    

    return evaluatePostfixExpression(expression);
}

const evaluateBracketExpressions = function(expression) {
    while (expression.includes('(')) {
        let start = expression.lastIndexOf('(');
        let end = expression.indexOf(')', start);
        let bracketExpression = expression.slice(start + 1, end);
        let postfix = evaluateToPostfix(bracketExpression);
        let result = evaluatePostfixExpression(postfix);

        expression = expression.slice(0, start) + result + expression.slice(end + 1);
    }

    return expression;
}

const evaluateToPostfix = function(expression) {
    let operatorStack = [];
    let postfixString = '';
    let constructedNum = '';
    let isMinusOperator = false;
 
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];
        if (!isMinusOperator && isOperand(char)) {
            constructedNum += char;
            let next = expression[i + 1];
            if (next === '-' || !isOperand(next)) {
                postfixString += constructedNum + ' ';
                constructedNum = '';
                if (next === '-') {
                    isMinusOperator = true;
                }
            }
        } else if (isOperator(char)) {
            if (isMinusOperator) {
                isMinusOperator = false;
            }
            if (operatorStack.length === 0) {
                operatorStack.push(char);
            } else {
                while (operatorStack.length > 0) {
                    let peekValue = operatorStack[operatorStack.length - 1];
                    if (operatorPrecedence(peekValue) >= operatorPrecedence(char)) {
                        postfixString += operatorStack.pop() + ' ';
                    } else {
                        break;
                    }
                }
                operatorStack.push(char);
            }
        }
    }

    while (operatorStack.length > 0) {
        postfixString += operatorStack.pop() + ' ';
    }
    return postfixString.trimEnd();
}

const evaluatePostfixExpression = function(expression) {
    let operandStack = [];
    expression = expression.split(' ');
    for (let i = 0; i < expression.length; ++i) {
        let item = expression[i];
        if (!isOperator(item)) {
            operandStack.push(item);
        } else {
            let rightOperand = operandStack.pop();
            let leftOperand = operandStack.pop();
            let result;
            if (item === '+') {
                result = add(+leftOperand, +rightOperand);
            } else if (item === '-') {
                result = subtract(+leftOperand, +rightOperand);
            } else if (item === '*') {
                result = multiply(+leftOperand, +rightOperand);
            } else if (item === '/') {
                result = divide(+leftOperand, +rightOperand);
            }
            operandStack.push(result);
        }
    }
    return +operandStack[0];
}

const evaluateNegatives = function(expression) {
    if (expression.includes('+-')) {
        return expression.replace('+-', '-');
    } else if (expression.includes('--')) {
        let pos = expression.indexOf('--');
        let prevItem = expression[pos - 1];
        return (isOperator(prevItem)) ? expression.replace('--', '') : 
            expression.replace('--', '+');
    }
    return expression; // if neither are hit
}

const operatorPrecedence = function(operator) {
    return (operator === '+' || operator === '-') ? 1 : 2;
}

const isOperand = function(char) {
    return /^[0-9.-]$/.test(char);
}

const isOperator = function(char) {
    return /^[+\-*/]$/.test(char);
}

const add = function(operandOne, operandTwo) {
    let precision1 = getPrecision(+operandOne);
    let precision2 = getPrecision(+operandTwo);
    let precision = (precision1 >= precision2) ? precision1 : precision2;
    return Number((+operandOne + +operandTwo).toFixed(precision));
}

const subtract = function(operandOne, operandTwo) {
    let precision1 = getPrecision(+operandOne);
    let precision2 = getPrecision(+operandTwo);
    let precision = (precision1 >= precision2) ? precision1 : precision2;
    return Number((+operandOne - +operandTwo).toFixed(precision));
}

const multiply = function(operandOne, operandTwo) {
    let precision1 = getPrecision(+operandOne);
    let precision2 = getPrecision(+operandTwo);
    let precision = precision1 + precision2;
    return Number((+operandOne * +operandTwo).toFixed(precision));
}

const divide = function(operandOne, operandTwo) {
    if (+operandTwo === 0) {
        throw new Error('Cannot divide by 0');
    }
    let precision1 = getPrecision(+operandOne);
    let precision2 = getPrecision(+operandTwo);
    let precision = (precision1 >= precision2) ? precision1 : precision2;
    return (precision != 0) ? Number((+operandOne / +operandTwo).toFixed(precision)) : 
        Number(+operandOne / +operandTwo);
}

const getPrecision = function(number) {
    if (!isFinite(number)) {
        return 0;
    }
    var e = 1, p = 0;
    while (Math.round(number * e) / e !== number) {
        e *= 10;
        ++p;
    }
    return p;
}

module.exports = { calc, isOperand, isOperator,
                    evaluateBracketExpressions, operatorPrecedence, evaluateNegatives,
                    evaluateToPostfix, evaluatePostfixExpression, add,
                    subtract, multiply, divide, getPrecision };

calc('1+1');
