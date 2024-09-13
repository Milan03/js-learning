class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(amtToCreate = 0) {
        this._head = null;
        this.amtToCreate = amtToCreate;

        if (this.amtToCreate > 0) {
            for (let i = 0; i < this.amtToCreate; ++i) {
                this.addToEnd(i);
            }
        }
    }

    get head() {
        return this._head;
    }

    set head(node) {
        this._head = node;
    }

    print() {
        let str = "";
        let returnArray = new Array();
        let current = this.head;
        while (current) {
            str += current.data + ' -> ';
            returnArray.push(current.data);
            current = current.next;
        }
        //console.log(`${str.slice(0,-4)}`);
        return returnArray;
    }

    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            ++count;
            current = current.next;
        }
        return count;
    }

    getNodeData(nodeIdx) {
        if (nodeIdx === 0) {
            return this.head.data;
        } else {
            let current = this.head;
            let counter = 0;
            while (current.next) {
                if (nodeIdx === counter) {
                    return current.data;
                }
                ++counter;
                current = current.next;
            }
            if (nodeIdx === counter) {
                return current.data;
            }
            throw new Error('Out of bounds.');
        }
    }

    addToEnd(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    addToBeginning(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.head = newNode;
        }
    }

    remove(data) {
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.data === data) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                return true; // Data found and removed
            }
            previous = current;
            current = current.next;
        }
        return false; // Data not found
    }

    removeDups() {
        let current = this.head;
        let previous = null;
        let map = new Map();

        while (current) {
            let isDup = map.get(current.data);
            if (isDup === undefined) {
                map.set(current.data, true);
                previous = current;
            } else {
                previous.next = current.next;
            }
            current = current.next;
        }
    }

    nthFromLast(n) {
        let length = 0;
        let current = this.head;
        let behind = this.head;

        while (length != n) {
            ++length;
            current = current.next;
            if (current === null) {
                throw new Error('n out of bounds');
            }
        }
        while (current) {
            current = current.next;
            if (current === null) {
                return behind.data;
            }
            behind = behind.next;
        }
    }

    deleteMiddleNode(node) {
        if (this.head !== null && this.head.next !== null && (this.head.data === node.data && this.head.next.data === node.next.data)) {
            throw new Error("Out of bounds.")
        }
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.next === null) {
                throw new Error("Out of bounds.")
            }
            if (current.data === node.data && current.next.data === node.next.data) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                return true; // Data found and removed
            }
            previous = current;
            current = current.next
        }
    }

    partition(node) {
        let current = this.head;
        let leftTail = new ListNode();
        let rightTail = new ListNode();
        let rightHead = rightTail;
        let leftHead = leftTail;
        while (current) {
            if (current.data < node.data) {
                leftTail.next = current;
                leftTail = current;
            } else { 
                rightTail.next = current;
                rightTail = current;
            }
            current = current.next
        }
        leftTail.next = rightHead.next
        rightTail.next = null
        this.head = leftHead.next;
    }
}

module.exports = { LinkedList, ListNode };