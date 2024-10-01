const { Stack } = require('./stack');
const { StackPartition } = require('./stack-partition');
const { StackSet } = require('./stack-set');
const { StackQueue } = require('./stack-queue');

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

    function popItemsFromStack(stack, amt) {
        for (let i = 0; i < amt; ++i) {
            stack.pop();
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
        stack.pop();
        expect(stack.stackThreeTop).toBe(14);
        popItemsFromStack(stack, 5);
        expect(stack.stackThreeTop).toBe(stack.stackThreeStart);
        expect(stack.stackTwoTop).toBe(8);
        popItemsFromStack(stack, 5);
        expect(stack.stackTwoTop).toBe(stack.stackTwoStart);
        expect(stack.stackOneTop).toBe(2);
        popItemsFromStack(stack, 2);
        expect(stack.stackOneTop).toBe(0);
        expect(() => { stack.pop() }).toThrow('At bottom of stacks.');
    });
});

describe('Stack Set Tests', () => {
    function addItemsToStack(stack, amt) {
        for (let i = 0; i < amt; ++i) {
            stack.push(i);
        }
    }

    function popItemsFromStack(stack, amt) {
        for (let i = 0; i < amt; ++i) {
            stack.pop();
        }
    }
    
    function retrieveStack(stacks, idx) {
        let count = 0;
        for (let stack of stacks) {
            if (count === idx) {
                return stack;
            }
            ++count;
        }
    }

    it('should push up to 5 items per stack', () => {
        const stack = new StackSet();
        addItemsToStack(stack, 5);

        let firstStack = retrieveStack(stack.stackSet, 0);
        expect(firstStack).toHaveLength(5);
        expect(stack.stackSet.size).toBe(1);
        addItemsToStack(stack, 5);
        let secondStack = retrieveStack(stack.stackSet, 1);
        expect(secondStack).toHaveLength(5);
        expect(stack.stackSet.size).toBe(2);
        addItemsToStack(stack, 10);
        let thirdStack = retrieveStack(stack.stackSet, 2);
        expect(thirdStack).toHaveLength(5);
        let fourthStack = retrieveStack(stack.stackSet, 3);
        expect(fourthStack).toHaveLength(5);
        expect(stack.stackSet.size).toBe(4);
        addItemsToStack(stack, 2);
        expect(stack.stackSet.size).toBe(5);
        let fifthStack = retrieveStack(stack.stackSet, 4);
        expect(fifthStack).toHaveLength(2);
    });

    it('should pop correctly', () => {
        let stack = new StackSet();
        addItemsToStack(stack, 5);
        
        // one pop
        let firstStack = retrieveStack(stack.stackSet, 0);
        expect(firstStack).toHaveLength(5);
        let poppedItem = stack.pop();
        expect(firstStack).toHaveLength(4);
        expect(poppedItem).toBe(4);
        // multiple pops
        stack = new StackSet();
        addItemsToStack(stack, 15);
        popItemsFromStack(stack, 7);
        firstStack = retrieveStack(stack.stackSet, 0);
        let secondStack = retrieveStack(stack.stackSet, 1);
        expect(stack.stackSet.size).toBe(2);
        expect(firstStack).toHaveLength(5);
        expect(secondStack).toHaveLength(3);
    });

    it('should pop and push correctly', () => {
        const stack = new StackSet();
        addItemsToStack(stack, 5);

        let firstStack = retrieveStack(stack.stackSet, 0);
        expect(firstStack).toHaveLength(5);
        let poppedItem = stack.pop();
        expect(firstStack).toHaveLength(4);
        expect(poppedItem).toBe(4);
        addItemsToStack(stack, 2);
        let secondStack = retrieveStack(stack.stackSet, 1);
        expect(firstStack).toHaveLength(5);
        expect(secondStack).toHaveLength(1);
        expect(stack.stackSet.size).toBe(2);
    });

    it('should throw an error if trying to pop from an empty stack', () => {
        const stack = new StackSet();
        expect(() => { stack.pop() }).toThrow('Stack is empty.');
    });

    it('should pop at specified index', () => {
        const stack = new StackSet();
        addItemsToStack(stack, 15);

        let poppedItem = stack.popAtIdx(3);
        let firstStack = retrieveStack(stack.stackSet, 0);
        expect(firstStack).toHaveLength(4);
        expect(poppedItem).toBe(3);
        stack.push(3);
        firstStack = retrieveStack(stack.stackSet, 2);
        expect(firstStack).toHaveLength(5);
        expect(firstStack[firstStack.length - 1]).toBe(3);
    });
    
    it('should throw an error if trying to pop at index that is out of bounds', () => {
        const stack = new StackSet();
        addItemsToStack(7);
        expect(() => { stack.popAtIdx(10) }).toThrow('Index out of bounds.');
    });
});

describe('Stack Queue Tests', () => {
    it('should pop and return the oldest item in the stack', () => {
        const stack = new StackQueue();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        let poppedItem = stack.pop();
        expect(poppedItem).toBe(1);
        expect(stack.tempStack).toHaveLength(2);
        expect(stack.tempStack[0]).toBe(3);
        expect(stack.tempStack[1]).toBe(2);
        poppedItem = stack.pop();
        expect(stack.tempStack).toHaveLength(1);
        expect(poppedItem).toBe(2);
        expect(stack.tempStack[0]).toBe(3);
    });
    
    it('should push correctly to items after a pop', () => {
        const stack = new StackQueue();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.push(4);

        expect(stack.items).toHaveLength(3);
        expect(stack.items[stack.items.length - 1]).toBe(4);
    });
});
