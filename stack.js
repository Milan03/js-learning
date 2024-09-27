class Stack {
    constructor() {
        this._items = new Array();
        this._minStack = new Array();
        this._min = null;
    }
    
    get items() {
        return this._items;
    }

    get min() {
        return this._min;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        if (this._min && this._min === this._items[this._items.length - 1] && 
            this._minStack.length > 0) {
            this._minStack.pop();
            this._min = this._minStack[this._minStack.length - 1];
        }
        return this._items.pop();
    }

    push(item) {
        if (this.isEmpty()) {
            if (typeof item === 'number' && !isNaN(item)) {
                this._minStack.push(item);
                this._min = item;
            }
        } else {
            if (typeof item === 'number' && !isNaN(item) && item < this._min) {
                this._minStack.push(item);
                this._min = item;
            }
        }
        this._items.push(item);
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length === 0;
    }
}

module.exports = { Stack };
