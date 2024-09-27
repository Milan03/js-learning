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
    
    it('should pop an item from the top of the stack and return the item', () => {
        const stack = new Stack();
        expect(() => { stack.pop() }).toThrow('Stack is empty.');

        stack.push(1);
        stack.push(2);
        stack.push(3);
        const poppedItem = stack.pop();

        expect(stack.items).toHaveLength(2);
        expect(stack.peek()).toEqual(2);
        expect(poppedItem).toBeDefined();
        expect(poppedItem).toBe(3);
    });

    it('should return true if stack is empty and false if not', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toEqual(true);

        stack.push(1);

        expect(stack.isEmpty()).toEqual(false);
    });
    
    it('should get and keep track of min item', () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(3);
        stack.push(7);

        expect(stack.min).toBe(3);
        stack.push(2);
        expect(stack.min).toBe(2)
        stack.pop();
        expect(stack.min).toBe(3);
    });
    
    it('should work with letters', () => {
        const stack = new Stack();
        stack.push('d');
        stack.push('c');
        stack.push('z');
        stack.push('m');

        expect(stack.min).toBe('c');
        stack.push('b');
        expect(stack.min).toBe('b');
        stack.pop();
        expect(stack.min).toBe('c');
    });
});
