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
            while (current) {
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
            newNode.next = this.head;  // Link the new node to the current head
            this.head = newNode;       // Set the new node as the new head
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

    removeAtIdx(idx) {
        if (idx > this.size() - 1) {
            throw new Error("Out of bounds.");
        }
        let current = this.head;
        let previous = null;
        let idxCount = 0;

        while (current) {
            if (idx === idxCount) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                return true; // Data found and removed
            }
            previous = current;
            current = current.next;
            ++idxCount;
        }
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
            throw new Error("Out of bounds.");
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

    padList(l2, reverse) {
        if (this.size() < l2.size()) {
            let zerosToAdd = l2.size() - this.size();
            for (let i = 0; i < zerosToAdd; ++i) {
                if (reverse) {
                    this.addToEnd(0);
                } else {
                    this.addToBeginning(0);
                }
            }
        } else if (this.size() > l2.size()) {
            let zerosToAdd = this.size() - l2.size();
            for (let i = 0; i < zerosToAdd; ++i) {
                if (reverse) {
                    l2.addToEnd(0);
                } else {
                    l2.addToBeginning(0);
                }
            }
        } else {
            throw new Error("Lists are of equal size.");
        }
    }

    sumLists(nodesToSum) {
        if (nodesToSum === null || this.head === null) {
            throw new Error("Source or incoming list cannot be null.");
        }
        if (this.size() !== nodesToSum.size()) {
            this.padList(nodesToSum, true);
        }
        let linkedListToReturn = new LinkedList();
        let current = this.head;
        let nodesToSummCurr = nodesToSum.head;
        let carry = 0;
        while (current || nodesToSummCurr) {
            let currentSum = 0;
            if (carry > 0) {
                currentSum = current.data + nodesToSummCurr.data + carry;
                carry = 0;
            } else {
                currentSum = current.data + nodesToSummCurr.data;
            }
            if (currentSum > 9) {
                carry = Math.floor(currentSum / 10);
                let onesValue = currentSum % 10;
                linkedListToReturn.addToEnd(onesValue);
            } else {
                linkedListToReturn.addToEnd(currentSum);
            }
            current = current.next;
            nodesToSummCurr = nodesToSummCurr.next;
        }
        if (carry > 0) {
            linkedListToReturn.addToEnd(carry);
        }
        return linkedListToReturn.print();
    }

    doNodeSum(l2, carry) {
        let sum = this.getNodeData(this.size() - 1) + l2.getNodeData(l2.size() - 1) + carry;
        this.removeAtIdx(this.size() - 1);
        l2.removeAtIdx(l2.size() - 1);
        if (sum > 9) {
            let carry = Math.floor(sum / 10);
            let onesValue = sum % 10;
            return { carry: carry, onesValue: onesValue };
        } else {
            return { carry: 0, onesValue: sum };
        }
    }

    sumListsForward(nodesToSum) {
        if (nodesToSum === null || this.head === null) {
            throw new Error("Source or incoming list cannot be null.");
        }
        if (this.size() !== nodesToSum.size()) {
            this.padList(nodesToSum, false);
        }
        let linkedListToReturn = new LinkedList();
        let carry = 0;
        while (this.size() > 0) {
            let result = this.doNodeSum(nodesToSum, carry);
            linkedListToReturn.addToBeginning(result.onesValue);
            carry = result.carry;
        }
        if (carry > 0) {
            linkedListToReturn.addToBeginning(carry);
        }
        return linkedListToReturn;
    }

    doNodeSumRecursive(l1, l2) {
        if (!l1 && !l2) {
            return { node: null, carry: 0 };
        }

        let result = this.doNodeSumRecursive(
            l1 ? l1.next : null, l2 ? l2.next : null);

        let sum = result.carry;
        if (l1) {
            sum += l1.data;
        }
        if (l2) {
            sum += l2.data;
        }

        let newNode = new ListNode();
        newNode.data = sum % 10;
        newNode.next = result.node;

        return { node: newNode, carry: Math.floor(sum / 10) };
    }

    sumListsForwardRecursive(nodesToSum) {
        if (nodesToSum === null || this.head === null) {
            throw new Error("Source or incoming list cannot be null.");
        }
        if (this.size() !== nodesToSum.size()) {
            this.padList(nodesToSum, false);
        }
        let llToReturn = new LinkedList();
        let result = this.doNodeSumRecursive(this.head, nodesToSum.head, 0);
        if (result.carry > 0) {
            llToReturn.head = new ListNode(result.carry);
            llToReturn.head.next = result.node;
        } else {
            llToReturn.head = result.node;
        }

        return llToReturn;
    }

    isPalindrome() {
        if (this.size() === 0 || this.size() === 1) {
            return true;
        }

        if (this.getNodeData(0) === this.getNodeData(this.size() - 1)) {
            this.removeAtIdx(0);
            this.removeAtIdx(this.size() - 1);
            return this.isPalindrome();
        } else {
            return false;
        }
    }

    checkNodeEqualityByRef(n1, n2) {
        if (!n1 || !n2) {
            return false;
        }

        return (n1 === n2) ? true : false;
    }

    getNodeAtIdx(n) {
        if (n == null) {
            throw new Error("Index cannot be null.");
        }

        let idxCount = 0;
        let current = this.head;
        while (current) {
            if (idxCount === n) {
                return current;
            }
            current = current.next;
            ++idxCount;
        }

        throw new Error("Node not found.");
    }

    intersection(l2) {
        if (!this.head || !l2.head) {
            throw new Error("One or both of the lists cannot be null.");
        }
        if (this.getNodeAtIdx(this.size() - 1) === l2.getNodeAtIdx(l2.size() - 1)) {
            let current;
            let l2Node;
            let sourceOffset = 0;
            let inputOffset = 0;
            if (this.size() !== l2.size()) {
                if (this.size() < l2.size()) {
                    sourceOffset = l2.size() - this.size();
                } else if (this.size() > l2.size()) {
                    inputOffset = this.size() - l2.size();
                }
            }
            if (sourceOffset === 0 && inputOffset === 0) {
                current = this.head;
                l2Node = l2.head;
            } else if (sourceOffset > 0) {
                l2Node = l2.head;
            } else if (inputOffset > 0) {
                current = this.head;
            }
            let offsetCount = 0;
            while (current || l2Node) {
                if (this.checkNodeEqualityByRef(current, l2Node)) {
                    return current;
                }
                if (current && l2Node) {
                    current = current.next;
                    l2Node = l2Node.next;
                } else if (sourceOffset > 0 && offsetCount >= sourceOffset) {
                    if (!current) {
                        current = this.head;
                    } else {
                        current = current.next;
                    }
                    if (l2Node) {
                        l2Node = l2Node.next;
                    }
                } else if (inputOffset > 0 && offsetCount >= inputOffset) {
                    if (!l2Node) {
                        l2Node = l2.head;
                    } else {
                        l2Node = l2Node.next;
                    }
                    if (current) {
                        current = current.next;
                    }
                }
                ++offsetCount;
            }
        }
        throw new Error("Lists do not intersect.");
    }
    
    loopDetection() {
        if (!this.head) {
            throw new Error("List cannot be null.");
        }
        let slow = this.head;
        let fast = this.head;
        let loopDetected = false;
        while ((!loopDetected && fast && fast.next) || (loopDetected && fast)) {
            slow = slow.next;
            if (!loopDetected) {
                fast = fast.next.next;
            } else {
                fast = fast.next;
            }
            if (slow === fast) {
                if (!loopDetected) {
                    loopDetected = true;
                    slow = this.head;
                } else {
                    return slow;
                }
            }
        }
        throw new Error("List does not have a loop.");
    }
}

module.exports = { LinkedList, ListNode };
