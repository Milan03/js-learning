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
        let result = new Function('return ' +bracketExpression)();
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
    expression = expression.replace('+-', '-');
    return expression.replace('--', '+');
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
    // TODO: get percision by getting # of places after decimal + 1
    return Number((+operandOne / +operadTwo).toFixed(2));
}

module.exports = { calc, isOperand, isOperator,
                    evaluateBracketExpressions, operatorPrecedence, evaluateNegatives,
                    evaluateToPostfix, evaluatePostfixExpression, add,
                    subtract, multiply, divide };

evaluateBracketExpressions('2+(3*(2+1))')
