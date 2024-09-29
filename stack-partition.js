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

        this._stackOneTops = [];
        this._stackTwoTops = [];
        this._stackThreeTops = [];
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
        return this._stackOneTops[this._stackOneTops.length - 1];
    }

    get stackTwoTop() {
        return this._stackTwoTops[this._stackTwoTops.length - 1];
    }

    get stackThreeTop() {
        return this._stackThreeTops[this._stackThreeTops.length - 1];
    }

    set stackOneTop(val) {
        this._stackOneTops[this._stackOneTops.length - 1] = val;
    }

    set stackTwoTop(val) {
        this._stackTwoTops[this._stackTwoTops.length - 1] = val;
    }

    set stackThreeTop(val) {
        this._stackThreeTops[this._stackThreeTops.length - 1] = val;
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
        if (this.isEmpty()) {
            this._stackOneStart = 0;
            this._stackOneEnd = 4;
            this._stackTwoStart = 5;
            this._stackTwoEnd = 9;
            this._stackThreeStart = 10;
            this._stackThreeEnd = 14;

            this._stackOneTops.push(0);
            this._stackTwoTops.push(4);
            this._stackThreeTops.push(9);
        } else {
            if (this.stackOneTop < this._stackOneEnd) {
                this._stackOneTops.push(++this.stackOneTop);
            } else if (this.stackTwoTop < this._stackTwoEnd) {
                this._stackTwoTops.push(++this.stackTwoTop);
            } else if (this.stackThreeTop < this._stackThreeEnd) {
                this._stackThreeTops.push(++this.stackThreeTop);
            } else { // max fixed length reached, expand partitions
                ++this._stackOneEnd;
                ++this._stackTwoStart;
                ++this._stackTwoEnd;
                ++this._stackThreeStart;
                ++this._stackThreeEnd;

                // After expanding, only increment the relevant top pointer
                if (this.stackOneTop === this._stackOneEnd - 1) {
                    console.log(`${this.stackOneTop} === ${this._stackOneEnd - 1}`);
                    this._stackOneTops.push(++this.stackOneTop);
                } else if (this.stackTwoTop === this._stackTwoEnd - 1) {
                    console.log(`${this.stackTwoTop} === ${this._stackTwoEnd - 1}`);
                    this._stackTwoTops.push(++this.stackTwoTop);
                } else if (this.stackThreeTop === this._stackThreeEnd - 1) {
                    console.log(`${this.stackThreeTop} === ${this._stackThreeEnd - 1}`);
                    this._stackThreeTops.push(++this.stackThreeTop);
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
