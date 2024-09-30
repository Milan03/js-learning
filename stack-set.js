class StackSet {
    constructor() {
        this._items = new Array();
        this._stackSet = new Set();
        //this._minStack = new Array();

        this._stackThreshold = 5;
        this._stackThresholdCount = 0;
    }
    
    get items() {
        return this._items;
    }

    get stackSet() {
        return this._stackSet;
    }

    //get min() {
    //    return this._minStack[this._minStack.length - 1];
    //}

    pop() {
        // if (this.isEmpty()) {
        //     throw new Error("Stack is empty.");
        // }
        //if (this.min && this.min === this._items[this._items.length - 1]) { 
        //    this._minStack.pop();
        //}
        let poppedItem;
        let targetStack;
        for (let stack of this._stackSet) {
            targetStack = stack; // get last stack
        }
        if (targetStack) {
            this._stackSet.delete(targetStack);
            poppedItem = targetStack.pop();
            if (targetStack.length > 0) {
                this._stackSet.add(targetStack);
                this._stackThresholdCount = targetStack.length;
            } else {
                this._stackThresholdCount = this._stackThreshold;
            }
            return poppedItem;
        }
        throw new Error("Stack is empty.");
    }

    push(item) {
        //if (this.min == null || item < this.min) {
        //    this._minStack.push(item);
        //}
        if (this._stackThresholdCount === 0) {
            this._items.push(item);
            this._stackSet.add(this._items);
            ++this._stackThresholdCount;
        } else if (this._stackThresholdCount < this._stackThreshold) {
            let targetStack;
            for (let stack of this._stackSet) {
                if (stack.length < this._stackThreshold) {
                    targetStack = stack;
                    break;
                }
            }
            if (targetStack) {
                this._stackSet.delete(targetStack);
                targetStack.push(item);
                this._stackSet.add(targetStack);
            }
            ++this._stackThresholdCount;
        } else {
            this._items = new Array();
            this._items.push(item);
            this._stackSet.add(this._items);
            this._stackThresholdCount = 1;
        }
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

module.exports = { StackSet };
