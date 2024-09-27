const { Stack } = require('./stack');

describe('Stack Tests', () => {
    it('should push an item onto the stack', () => {
        const stack = new Stack();
        stack.push(3);

        expect(stack.items).toBeDefined();
        expect(stack.items).toHaveLength(1);
    });
    
    it('should allow to peek item at top of stack', () => {
        const stack = new Stack();
        expect(() => { stack.peek() }).toThrow('Stack is empty.');

        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toEqual(2);
    });
    
    it('should pop an item from the top of the stack', () => {
        const stack = new Stack();
        expect(() => { stack.pop() }).toThrow('Stack is empty.');

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();

        expect(stack.items).toHaveLength(2);
        expect(stack.peek()).toEqual(2);
    });

    it('should return true if stack is empty and false if not', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toEqual(true);

        stack.push(1);

        expect(stack.isEmpty()).toEqual(false);
    });
});
