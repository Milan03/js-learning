const calc = function(expression) {
    expression = expression.replace(/\s/g, '');
    let operatorStack = [];
    let operandStack = [];
    let constructedNum = '';
    
    // do while loop check for brackets
    // evaluate inner bracket expression with
    // let result = new Function('return ' + innerExpression);
    expression = evaluateBracketExpressions(expression);
        
    // for (let i = 0; i < expression.length; ++i) {
    //     let char = expression[i];

    //     // maybe do a second loop after bracket evaluations
    //     if (isNumberOrDecimal(char)) {
    //         constructedNum += char;
    //         let next = expression[i + 1];
    //         if (!isNumberOrDecimal(next)) {
    //             operandStack.push(+constructedNum);
    //             constructedNum = '';
    //         }
    //     } else if (isOperator(char)) {
    //         operatorStack.push(char);
    //     }
    // }
}

const evaluateBracketExpressions = function(expression) {
    while (expression.includes('(')) {
        let start = expression.lastIndexOf('(');
        let end = expression.indexOf(')');
        let bracketExpression = expression.substring(start + 1, end);
        let result = new Function('return ' +bracketExpression);
        expression = expression.slice(0, start) + result + expression.slice(end + 1);
    }

    return expression;
}

const isNumberOrDecimal = function(char) {
    return /^[0-9.]$/.test(char);
}

const isOperator = function(char) {
    return /^[+\-*/]$/.test(char);
}

module.exports = { calc, isNumberOrDecimal, isOperator,
                    evaluateBracketExpressions };
