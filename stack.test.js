const { Stack } = require('./stack');
const { StackPartition } = require('./stack-partition');

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

describe('Stack Partition Tests', () => {
    function addItemsToStack(stack, amt) {
        for (let i = 0; i < amt; ++i) {
            stack.push(i);
        }
    }

    it('should initiate the initial indicies and tops', () => {
        const stack = new StackPartition();
        stack.push(1);

        expect(stack.stackOneStart).toBe(0);
        expect(stack.stackTwoStart).toBe(5);
        expect(stack.stackThreeStart).toBe(10);
        expect(stack.stackOneEnd).toBe(4);
        expect(stack.stackTwoEnd).toBe(9);
        expect(stack.stackThreeEnd).toBe(14);
        expect(stack.stackOneTop).toBe(0);
        expect(stack.stackTwoTop).toBe(4);
        expect(stack.stackThreeTop).toBe(9);
    });

    it('should push to partitions correctly', () => {
        const stack = new StackPartition();
        stack.push(1);
        stack.push(2);

        expect(stack.stackOneTop).toBe(1);
        stack.push(3);
        expect(stack.stackOneTop).toBe(2);
        addItemsToStack(stack, 5);
        expect(stack.stackOneTop).toBe(4);
        expect(stack.stackTwoTop).toBe(7);
        addItemsToStack(stack, 5);
        expect(stack.stackTwoTop).toBe(9);
        expect(stack.stackThreeTop).toBe(12);
        addItemsToStack(stack, 5);
        expect(stack.stackOneTop).toBe(5);
        expect(stack.stackTwoTop).toBe(10);
        expect(stack.stackThreeTop).toBe(15);
    });

    it('should pop correctly', () => {
        const stack = new StackPartition();       
        addItemsToStack(stack, 18);

        expect(stack.stackOneTop).toBe(5);
        expect(stack.stackTwoTop).toBe(10);
        expect(stack.stackThreeTop).toBe(15);
    });
});
