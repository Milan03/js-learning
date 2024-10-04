class StackAnimalShelter {
    constructor() {
        this._dogQueue = new Array();
        this._catQueue = new Array();
    }
    
    get dogQueue() {
        return this._dogQueue;
    }

    get catQueue() {
        return this._catQueue;
    }

    dequeueAny() {
        if (this.isDogQueueEmpty() && this.isCatQueueEmpty()) {
            throw new Error("Animal shelter is empty.");
        }
        let randN = Math.floor(Math.random() * 2);
        let selectedQueue = randN === 0 ? this._dogQueue : this._catQueue;
        return this._dogQueue.pop();
    }

    enqueue(animalType, animal) {
        if (animalType === "d") {
            this._dogQueue.push(animal);
        } else {
            this._catQueue.push(animal);
        }
    }

    isDogQueueEmpty() {
        return this._dogQueue.length === 0;
    }

    isCatQueueEmpty() {
        return this._catQueue.length === 0;
    }
}

module.exports = { StackAnimalShelter };
