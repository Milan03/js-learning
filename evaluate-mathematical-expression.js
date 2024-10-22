const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let postfixString = '';
    let constructedNum = '';
    
    expression = evaluateBracketExpressions(expression);
    expression = evaluateNegatives(expression);
        
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];
        if (isOperand(char)) {
            constructedNum += char;
            let next = expression[i + 1];
            if (!isOperand(next)) {
                postfixString += constructedNum + ' ';
                constructedNum = '';
            }
        } else if (isOperator(char)) {
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
    postfixString = postfixString.trimEnd();

    console.log(`postfixString: ${postfixString}`);
    console.log(`operatorStack: ${operatorStack}`);
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

module.exports = { calc, isOperand, isOperator,
                    evaluateBracketExpressions, operatorPrecedence, evaluateNegatives };

calc('2 - -6');
