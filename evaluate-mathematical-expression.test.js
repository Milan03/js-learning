const { calc, isNumberOrDecimal, isOperator } = require('./evaluate-mathematical-expression');

describe('Evaluate Mathematical Expression Tests', () => {

});

describe('Is Number or Decimal Tests', () => {
    it('should identify a number', () => {
        expect(isNumberOrDecimal('1')).toBe(true);
    });
    
    it('should identify a decimal', () => {
        expect(isNumberOrDecimal('.')).toBe(true);
    });

    it('should identify when it is not a number or decimal', () => {
        expect(isNumberOrDecimal('a')).toBe(false);
        expect(isNumberOrDecimal('*')).toBe(false);
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
