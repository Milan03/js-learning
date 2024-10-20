const { calc, isOperand, isOperator,
        evaluateBracketExpressions, operatorPrecedence } = require('./evaluate-mathematical-expression');

describe('Evaluate Mathematical Expression Tests', () => {
    it('should do something', () => {
        expect(calc('2 /2+3 * 4.75- -6')).toBe(null);
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
