class Stack {
    constructor() {
        this._items = new Array();
    }
    
    get items() {
        return this._items;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        this._items.pop();
    }

    push(item) {
        this._items.push(item);
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length === 0
    }
}

module.exports = { Stack };
