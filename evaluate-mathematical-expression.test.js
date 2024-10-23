const { calc, isOperand, isOperator,
        evaluateBracketExpressions, operatorPrecedence, 
        evaluateNegatives, evaluateToPostfix, evaluatePostfixExpression,
        add, subtract, multiply, divide, getPrecision } 
    = require('./evaluate-mathematical-expression');

describe('Evaluate Mathematical Expression Tests', () => {
    it('should evaluate basic arithmetic', () => {
        expect(calc('1 + 1')).toEqual(2);
        expect(calc('1 - 1')).toEqual(0);
        expect(calc('1* 1')).toEqual(1);
        expect(calc('1 /1')).toEqual(1);
    });

    it('should handle single operands', () => {
        expect(calc('-123')).toEqual(-123);
        expect(calc('123')).toEqual(123);
    });

    it('should evaluate more complex expressions', () => {
        expect(calc('2 /2+3 * 4.75- -6')).toEqual(21.25);
        expect(calc('12* 123')).toEqual(1476);
        expect(calc('2 / (2 + 3) * 4.33 - -6')).toEqual(7.732);
        expect(calc('12* 123/-(-5 + 2)')).toEqual(492);
    });
});

describe('Is Number or Decimal Tests', () => {
    it('should identify a number', () => {
        expect(isOperand('1')).toBe(true);
    });
    
    it('should identify a decimal', () => {
        expect(isOperand('.')).toBe(true);
    });

    it('should identify a hyphen for start of negative number', () => {
        expect(isOperand('-')).toBe(true);
    });

    it('should identify when it is not a number or decimal', () => {
        expect(isOperand('a')).toBe(false);
        expect(isOperand('*')).toBe(false);
    });
});

describe('Is Operator Tests', () => {
    it('should identify when it is addition', () => {
        expect(isOperator('+')).toBe(true);
    });
    
    it('should identify when it is subtraction', () => {
        expect(isOperator('-')).toBe(true);
    });

    it('should idenitfy when it is multiplication', () => {
        expect(isOperator('*')).toBe(true);
    });

    it('should identify when it is division', () => {
        expect(isOperator('/')).toBe(true);
    });

    it('should idenitfy when it is not one of the acceptable operators', () => {
        expect(isOperator('a')).toBe(false);
        expect(isOperator('$')).toBe(false);
        expect(isOperator('4')).toBe(false);
    });
});

describe('Evaluate Bracket Expression Tests', () => {
    it('should evaluate a single bracket expression', () => {
        expect(evaluateBracketExpressions('(2*3)')).toEqual('6'); 
    });

    it('should evaluate a multiple bracket expression', () => {
        expect(evaluateBracketExpressions('2+(3*(2+1))')).toEqual('2+9');
    });
});

describe('Operator Precedence Tests', () => {
    it('should return plus and minus as lower precedence', () => {
        const addPrecedence = operatorPrecedence('+');
        const multiplyPrecedence = operatorPrecedence('*');
        const subPrecedence = operatorPrecedence('-');
        const dividePrecedence = operatorPrecedence('/');
        expect(addPrecedence < multiplyPrecedence).toBe(true);
        expect(subPrecedence < multiplyPrecedence).toBe(true)
        expect(subPrecedence < dividePrecedence).toBe(true);
        expect(subPrecedence < dividePrecedence).toBe(true);
    });
});

describe('Evaluate Negatives Tests', () => {
    it('should transform double negatives into an addition', () => {
        expect(evaluateNegatives('2/2+3*4.75--6')).toEqual('2/2+3*4.75+6');
    });

    it('should remove double negatives if prev item is operator', () => {
        expect(evaluateNegatives('12*123/--3')).toEqual('12*123/3');
    });

    it('should transform plus minus to minus', () => {
        expect(evaluateNegatives('2/2+3*4.75+-6')).toEqual('2/2+3*4.75-6');
    });
});

describe('Evaluate to Postfix Notation Tests', () => {
    it('should evaluate the expression to postfix notation', () => {
        expect(evaluateToPostfix('2/2+3*4.75+6')).toEqual('2 2 / 3 4.75 * + 6 +');
        expect(evaluateToPostfix('3+5*2')).toEqual('3 5 2 * +');
        expect(evaluateToPostfix('10+2*6')).toEqual('10 2 6 * +');
        expect(evaluateToPostfix('100*2+12')).toEqual('100 2 * 12 +');
        expect(evaluateToPostfix('5*3+8/4-7+2*5')).toEqual('5 3 * 8 4 / + 7 - 2 5 * +');
        expect(evaluateToPostfix('-5*3+8/4-7+2*5')).toEqual('-5 3 * 8 4 / + 7 - 2 5 * +');
        expect(evaluateToPostfix('-5*3+8/-4-7+2*5')).toEqual('-5 3 * 8 -4 / + 7 - 2 5 * +');
        expect(evaluateToPostfix('15*2-8/4+20*3-5')).toEqual('15 2 * 8 4 / - 20 3 * + 5 -');
    });
});

describe('Evaluate Postfix Expression Tests', () => {
    it('should evaluate the postfix expression into a single result', () => {
        expect(evaluatePostfixExpression('2 2 / 3 4.75 * + 6 +')).toEqual(21.25);
        expect(evaluatePostfixExpression('7 3 4 * + 2 1 / - 6 5 * +')).toEqual(47);
        expect(evaluatePostfixExpression('25 5 4 * - 8 2 * + 10 2 / -')).toEqual(16);
        expect(evaluatePostfixExpression('9 5 1 - / 8 2 * +')).toEqual(18.25);
        expect(evaluatePostfixExpression('50 5 / 2 * 100 4 / + 20 3 * -')).toEqual(-15);
    });
});

describe('Operator Tests', () => {
    it('should add operands and return the result', () => {
        expect(add(5, 2)).toEqual(7);
        expect(add(5.5, 2.2)).toEqual(7.7);
        expect(add(-5, -4)).toEqual(-9);
        expect(add(5, 2.22)).toEqual(7.22);
    });
    
    it('should subtract operands and return the result', () => {
        expect(subtract(5, 2)).toEqual(3);
        expect(subtract(5.5, 2.2)).toEqual(3.3);
        expect(subtract(-3, 2)).toEqual(-5);
        expect(subtract(10, 2.222)).toEqual(7.778);
    });
    
    it('should multiply operands and return the result', () => {
        expect(multiply(5, 2)).toEqual(10);
        expect(multiply(2.2, 5.5)).toEqual(12.1);
        expect(multiply(-3, 2.2)).toEqual(-6.6);
        expect(multiply(3.14, 2.1)).toEqual(6.594);
    });

    it('should divide operands and return the result', () => {
        expect(() => { divide(5, 0) }).toThrow('Cannot divide by 0');
        expect(divide(4, 2)).toEqual(2);
        expect(divide(4.2, 2.2)).toEqual(1.9);
        expect(divide(-4, 2.2)).toEqual(-1.8);
        expect(divide(18.2, 2.333)).toEqual(7.801);
    });
});

describe('Get Precision Tests', () => {
    it('should return the amount of places after the decimal', () => {
        expect(getPrecision(13.25)).toEqual(2);
        expect(getPrecision(123)).toEqual(0);
        expect(getPrecision(1.123456789)).toEqual(9);
    });
});
