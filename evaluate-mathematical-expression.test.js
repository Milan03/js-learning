const { calc, isNumberOrDecimal, isOperator,
        add, subtract, multiply, divide } = require('./evaluate-mathematical-expression');

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

describe('Operator Tests', () => {
    it('should add operands and return the result', () => {
        expect(add(5, 2)).toEqual(7);
        expect(add(5.5, 2.2)).toEqual(7.7);
        expect(add(-5, -4)).toEqual(-9);
    });
    
    it('should subtract operands and return the result', () => {
        expect(subtract(5, 2)).toEqual(3);
        expect(subtract(5.5, 2.2)).toEqual(3.3);
        expect(subtract(-3, 2)).toEqual(-5);
    });
    
    it('should multiply operands and return the result', () => {
        expect(multiply(5, 2)).toEqual(10);
        expect(multiply(2.2, 5.5)).toEqual(12.1);
        expect(multiply(-3, 2.2)).toEqual(-6.6);
    });

    it('should divide operands and return the result', () => {
        expect(() => { divide(5, 0) }).toThrow('Cannot divide by 0');
        expect(divide(4, 2)).toEqual(2);
        expect(divide(4.2, 2.2)).toEqual(1.91);
        expect(divide(-4, 2.2)).toEqual(-1.82);
    });
});
