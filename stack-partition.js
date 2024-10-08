class StackPartition {
    constructor() {
        this._items = new Array();
        this._minStack = new Array();

        // stack partition indicies
        this._stackOneStart;
        this._stackOneEnd;
        this._stackTwoStart;
        this._stackTwoEnd;
        this._stackThreeStart;
        this._stackThreeEnd;

        this._stackOneTop;
        this._stackTwoTop;
        this._stackThreeTop;
    }
    
    get items() {
        return this._items;
    }

    get min() {
        return this._minStack[this._minStack.length - 1];
    }

    get stackOneStart() {
        return this._stackOneStart;
    }

    get stackOneEnd() {
        return this._stackOneEnd;
    }
    
    get stackTwoStart() {
        return this._stackTwoStart;
    }

    get stackTwoEnd() {
        return this._stackTwoEnd;
    }

    get stackThreeStart() {
        return this._stackThreeStart;
    }

    get stackThreeEnd() {
        return this._stackThreeEnd;
    }

    get stackOneTop() {
        return this._stackOneTop;
    }

    get stackTwoTop() {
        return this._stackTwoTop;
    }

    get stackThreeTop() {
        return this._stackThreeTop;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        if (this.min && this.min === this._items[this._items.length - 1]) { 
            this._minStack.pop();
        }
        if (this._stackThreeTop > this._stackThreeStart) {
            --this._stackThreeTop;
        } else if (this._stackTwoTop > this._stackTwoStart) {
            --this._stackTwoTop;
        } else if (this._stackOneTop > this._stackOneStart) {
            --this._stackOneTop;
        } else {
            throw new Error("At bottom of stacks.");
        }
        return this._items.pop();
    }

    push(item) {
        if (this.min == null || item < this.min) {
            this._minStack.push(item);
        }
        if (this.isEmpty()) {
            this._stackOneStart = 0;
            this._stackOneEnd = 4;
            this._stackTwoStart = 5;
            this._stackTwoEnd = 9;
            this._stackThreeStart = 10;
            this._stackThreeEnd = 14;

            this._stackOneTop = 0;
            this._stackTwoTop = 4;
            this._stackThreeTop = 9;
        } else {
            if (this._stackOneTop < this._stackOneEnd) {
                ++this._stackOneTop;
            } else if (this._stackTwoTop < this._stackTwoEnd) {
                ++this._stackTwoTop;
            } else if (this._stackThreeTop < this._stackThreeEnd) {
                ++this._stackThreeTop;
            } else { // max fixed length reached, expand partitions
                ++this._stackOneEnd;
                ++this._stackTwoStart;
                ++this._stackTwoEnd;
                ++this._stackThreeStart;
                ++this._stackThreeEnd;

                // After expanding, only increment the relevant top pointer
                if (this._stackOneTop === this._stackOneEnd - 1) {
                    console.log(`${this._stackOneTop} === ${this._stackOneEnd - 1}`);
                    ++this._stackOneTop;
                } else if (this._stackTwoTop === this._stackTwoEnd - 1) {
                    console.log(`${this._stackTwoTop} === ${this._stackTwoEnd - 1}`);
                    ++this._stackTwoTop;
                } else if (this._stackThreeTop === this._stackThreeEnd - 1) {
                    console.log(`${this._stackThreeTop} === ${this._stackThreeEnd - 1}`);
                    ++this._stackThreeTop;
                }
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

module.exports = { StackPartition };
