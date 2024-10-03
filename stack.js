class Stack {
    constructor() {
        this._items = new Array();
        this._minStack = new Array();
        this._tempStack = new Array();
    }
    
    get items() {
        return this._items;
    }

    get min() {
        return this._minStack[this._minStack.length - 1];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        if (this.min && this.min === this._items[this._items.length - 1]) { 
            this._minStack.pop();
        }
        return this._items.pop();
    }

    push(item) {
        if (this.min == null || item < this.min) {
            this._minStack.push(item);
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

    sort() {
        while (this._items.length > 0) {
            let currentItem = this._items.pop();
            if (this._tempStack.length === 0) {
                this._tempStack.push(currentItem);
            } else {
                let itemsPushedBackToOriginal = 0;
                while (this._tempStack.length > 0) {
                    let tempPopped = this._tempStack.pop();
                    if (tempPopped > currentItem) {
                        ++itemsPushedBackToOriginal;
                        this._items.push(tempPopped);
                    } else {
                        this._tempStack.push(tempPopped);
                        break;
                    }
                }
                this._tempStack.push(currentItem);
                for (let i = 0; i < itemsPushedBackToOriginal; ++i) {
                    this._tempStack.push(this._items.pop());
                }
            }
        }
        while (this._tempStack.length > 0) {
            this._items.push(this._tempStack.pop());
        }
    }
}

module.exports = { Stack };
