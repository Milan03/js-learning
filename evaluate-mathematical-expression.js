const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let operandStack = [];
    let constructedNum = '';
    
    expression = evaluateBracketExpressions(expression);
        
    for (let i = 0; i < expression.length; ++i) {
        let char = expression[i];
        if (isOperand(char)) {
            constructedNum += char;
            let next = expression[i + 1];
            if (!isOperand(next)) {
                operandStack.push(+constructedNum);
                constructedNum = '';
            }
        } else if (isOperator(char)) {
            operatorStack.push(char);
        }
    }

    console.log(`operandStack: ${operandStack}`);
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

const isOperand = function(char) {
    return /^[0-9.-]$/.test(char);
}

const isOperator = function(char) {
    return /^[+\-*/]$/.test(char);
}

module.exports = { calc, isOperand, isOperator,
                    evaluateBracketExpressions };
