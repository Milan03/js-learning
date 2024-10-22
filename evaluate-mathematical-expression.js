const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let postfixString = '';
    let constructedNum = '';
    
    expression = evaluateBracketExpressions(expression);
        
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];
        if (isOperand(char)) {
            constructedNum += char;
            let next = expression[i + 1];
            if (next === '-') {
                postfixString += constructedNum;
                constructedNum = '';
                operatorStack.push(char);
            } else if (!isOperand(next)) {
                postfixString += constructedNum;
                constructedNum = '';
            }
        } else if (isOperator(char)) {
            operatorStack.push(char);
        }
    }

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

calc('2 /2+3 * 4.75- -6');
