class Animal {
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }
}

class StackAnimalShelter {
    constructor() {
        this._dogQueue = new Array();
        this._catQueue = new Array();
        this._order = 0;
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

        if (this.isDogQueueEmpty()) {
            return this._catQueue.shift();
        }

        if (this.isCatQueueEmpty()) {
            return this._dogQueue.shift();
        }

        let oldestDog = this._dogQueue[0];
        let oldestCat = this._catQueue[0];
        if (oldestCat.order < oldestDog.order) {
            return this._catQueue.shift();
        } else {
            return this._dogQueue.shift();
        }
    }

    dequeueDog() {
        if (this.isDogQueueEmpty()) {
            throw new Error("There are currently no dogs up for adoption.");
        }
        return this._dogQueue.shift();
    }

    dequeueCat() {
        if (this.isCatQueueEmpty()) {
            throw new Error("There are currently no cats up for adoption.");
        }
        return this._catQueue.shift();
    }

    enqueue(animalType, name) {
        const animal = new Animal(name, ++this._order);
        if (animalType === "d") {
            this._dogQueue.push(animal);
        } else if (animalType === 'c') {
            this._catQueue.push(animal);
        } else {
            throw new Error("Animal type not supported.");
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
