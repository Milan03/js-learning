class StackQueue {
    constructor() {
        this._items = new Array();
        this._tempStack = new Array();
        this._minStack = new Array();
    }
    
    get items() {
        return this._items;
    }

    get min() {
        return this._minStack[this._minStack.length - 1];
    }

    get tempStack() {
        return this._tempStack;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        if (this.min && this.min === this._items[this._items.length - 1]) { 
            this._minStack.pop();
        }
        if (this._tempStack.length > 0) {
            return this._tempStack.pop();
        }
        while (this._items.length > 1) {
            this._tempStack.push(this._items.pop());
        }
        return this._items.pop();
    }

    push(item) {
        if (this.min == null || item < this.min) {
            this._minStack.push(item);
        }
        while (this._tempStack.length != 0) {
            this._items.push(this._tempStack.pop());
        }
        this._items.push(item);
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        return (this._items.length > 0) ? this._items[this._items.length - 1] : 
            this._tempStack[this._tempStack.length - 1];
    }

    isEmpty() {
        return (this._items.length === 0 && this._tempStack.length === 0) ? true : false;
    }
}

module.exports = { StackQueue };
