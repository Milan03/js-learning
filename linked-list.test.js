const { LinkedList, ListNode } = require('./linked-list');

describe('Linked List Tests', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('should add elements to the linked list when constructor is supplier a parameter', () => {
        linkedList = new LinkedList(10);

        expect(linkedList.size()).toBe(10);
    });

    it('should get the value of the node at index 0', () => {
        linkedList = new LinkedList(10);

        expect(linkedList.getNodeData(0)).toBe(0);
    });

    it('should get the value of the node at index greater than 0', () => {
        linkedList = new LinkedList(10);

        expect(linkedList.getNodeData(3)).toBe(3);
    });

    it('should get the value of the node at the last index possible', () => {
        linkedList = new LinkedList(10);

        expect(linkedList.getNodeData(9)).toBe(9);
    });

    it('should throw an error if out of bounds node is trying to be reached', () => {
        linkedList = new LinkedList(10);

        expect(() => { linkedList.getNodeData(11) }).toThrow('Out of bounds.');
    });

    it('should calculate the right size of the linked list', () => {
        linkedList = new LinkedList(2);

        expect(linkedList.size()).toBe(2);
    });

    it('should add one to the end of the linked list if no elements present', () => {
        linkedList.addToEnd(1);

        expect(linkedList.getNodeData(0)).toBe(1);
        expect(linkedList.size()).toBe(1);
    });

    it('should add one to the end of the linked list if elements are present', () => {
        linkedList = new LinkedList(5);

        linkedList.addToEnd(3);

        expect(linkedList.getNodeData(5)).toBe(3);
        expect(linkedList.size()).toBe(6);
    });

    it('should add value to beginning when more than 0 elements are present', () => {
        linkedList = new LinkedList(5);

        linkedList.addToBeginning(3);

        expect(linkedList.getNodeData(0)).toBe(3);
        expect(linkedList.size()).toBe(6);
    });

    it('should add value to beginning when 0 elements are present', () => {
        linkedList = new LinkedList();

        linkedList.addToBeginning(3);

        expect(linkedList.getNodeData(0)).toBe(3);
    });

    it('should removed the named element from the linked list', () => {
        linkedList = new LinkedList(2);

        linkedList.remove(1);

        expect(linkedList.size()).toBe(1);
    });

    it('should return false if trying to element that is not present', () => {
        linkedList = new LinkedList(2);

        expect(linkedList.remove(3)).toBe(false);
    });

    it('should remove duplicates', () => {
        linkedList.addToEnd(1);
        linkedList.addToEnd(2);
        linkedList.addToEnd(2);
        linkedList.addToEnd(3);
        linkedList.removeDups();

        expect(linkedList.print()).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(linkedList.size()).toBe(3);
    });

    it('should remove duplicates when they are at the start', () => {
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);
        linkedList.addToEnd(2);
        linkedList.addToEnd(3);
        linkedList.removeDups();

        expect(linkedList.print()).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(linkedList.size()).toBe(3);
    });

    it('should return the nth from last', () => {
        linkedList = new LinkedList(6);

        expect(linkedList.nthFromLast(3)).toBe(2);
    });

    it('should return the correct element when asking from 0th position', () => {
        linkedList = new LinkedList(6);

        expect(linkedList.nthFromLast(0)).toBe(5);
    });

    it('should throw error when nth from last is out of bounds', () => {
        linkedList = new LinkedList(3);

        expect(() => { linkedList.nthFromLast(4) }).toThrow('n out of bounds');
    });

    it('should delete a middle node', () => {
        linkedList = new LinkedList(5);
        let nodeToTest = new ListNode();
        nodeToTest.data = 2;
        nodeToTest.next = new ListNode();
        nodeToTest.next.data = 3;

        expect(linkedList.deleteMiddleNode(nodeToTest)).toBe(true);
    });

    it('should not delete middle node when node entered is head', () => {
        linkedList = new LinkedList(5);
        let nodeToTest = new ListNode();
        nodeToTest.data = 0;
        nodeToTest.next = new ListNode();
        nodeToTest.next.data = 1;

        expect(() => { linkedList.deleteMiddleNode(nodeToTest)} ).toThrow("Out of bounds.");
    });

    it('should not delete middle node when node entered is head and only node', () => {
        linkedList = new LinkedList(1);
        let nodeToTest = new ListNode();
        nodeToTest.data = 0;
        nodeToTest.next = null;

        expect(() => { linkedList.deleteMiddleNode(nodeToTest)} ).toThrow("Out of bounds.");
    })

    it('should not delete middle node when node entered is last', () => {
        linkedList = new LinkedList(5);
        let nodeToTest = new ListNode();
        nodeToTest.data = 5;
        nodeToTest.next = null;

        expect(() => { linkedList.deleteMiddleNode(nodeToTest)} ).toThrow("Out of bounds.");
    });

    it('should rearrange the linked list as in the example', () => {
        linkedList.addToEnd(3);
        linkedList.addToEnd(5);
        linkedList.addToEnd(8);
        linkedList.addToEnd(5);
        linkedList.addToEnd(10);
        linkedList.addToEnd(2);
        linkedList.addToEnd(1);

        let expectedList = new LinkedList();
        expectedList.addToEnd(3);
        expectedList.addToEnd(2);
        expectedList.addToEnd(1);
        expectedList.addToEnd(5);
        expectedList.addToEnd(8);
        expectedList.addToEnd(5);
        expectedList.addToEnd(10);

        let nodeToTest = new ListNode();
        nodeToTest.data = 5;
        nodeToTest.next = null;

        linkedList.partition(nodeToTest);

        for (let i = 0; i < linkedList.size(); ++i) {
            expect(linkedList.getNodeData(i)).toBe(expectedList.getNodeData(i));
        }
    });

    it('should get head', () => {
        linkedList = new LinkedList(1);
        let nodeToTest = new ListNode();
        nodeToTest.data = 0;
        nodeToTest.next = null;

        expect(linkedList.head.data).toBe(nodeToTest.data);
        expect(linkedList.head.next).toBe(nodeToTest.next);
    });

    it('should set head', () => {
        linkedList = new LinkedList(1);
        let node2 = new ListNode();
        node2.data = 6;
        node2.next = null;
        let nodeToTest = new ListNode();
        nodeToTest.data = 5;
        nodeToTest.next = node2;

        linkedList.head = nodeToTest;

        expect(linkedList.head.data).toBe(nodeToTest.data);
        expect(linkedList.head.next).toBe(nodeToTest.next);
    });

    it('should sum two lists in reverse order', () => {
        linkedList.addToEnd(7);
        linkedList.addToEnd(1);
        linkedList.addToEnd(6);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(9);
        secondList.addToEnd(2);

        let expectedList = new LinkedList();
        expectedList.addToEnd(2);
        expectedList.addToEnd(1);
        expectedList.addToEnd(9);

        let testList = linkedList.sumLists(secondList);
        for (let i = 0; i < expectedList.size(); ++i) {
            expect(testList[i]).toBe(expectedList.getNodeData(i));
        }
    });

    it('should sum two lists in reverse order when source is shorter than the other', () => {
        linkedList.addToEnd(7);
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(9);
        secondList.addToEnd(2);

        let expectedList = new LinkedList();
        expectedList.addToEnd(2);
        expectedList.addToEnd(1);
        expectedList.addToEnd(3);

        let testList = linkedList.sumLists(secondList);
        for (let i = 0; i < expectedList.size(); ++i) {
            expect(testList[i]).toBe(expectedList.getNodeData(i));
        }
    });

    it('should sum two lists in reverse order when other is shorter than the source', () => {
        linkedList.addToEnd(7);
        linkedList.addToEnd(1);
        linkedList.addToEnd(6);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(9);

        let expectedList = new LinkedList();
        expectedList.addToEnd(2);
        expectedList.addToEnd(1);
        expectedList.addToEnd(7);

        let testList = linkedList.sumLists(secondList);
        for (let i = 0; i < expectedList.size(); ++i) {
            expect(testList[i]).toBe(expectedList.getNodeData(i));
        }
    });

    it('should sum two lists in reverse order when more than one digit is missing from source', () => {
        linkedList.addToEnd(7);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(9);
        secondList.addToEnd(3);

        let expectedList = new LinkedList();
        expectedList.addToEnd(2);
        expectedList.addToEnd(0);
        expectedList.addToEnd(4);

        let testList = linkedList.sumLists(secondList);
        for (let i = 0; i < expectedList.size(); ++i) {
            expect(testList[i]).toBe(expectedList.getNodeData(i));
        }
    });

    it('should sum two lists in reverse order when more than one digit is missing from incoming list', () => {
        linkedList.addToEnd(7);
        linkedList.addToEnd(9);
        linkedList.addToEnd(3);

        let secondList = new LinkedList();
        secondList.addToEnd(5);

        let expectedList = new LinkedList();
        expectedList.addToEnd(2);
        expectedList.addToEnd(0);
        expectedList.addToEnd(4);

        let testList = linkedList.sumLists(secondList);
        for (let i = 0; i < expectedList.size(); ++i) {
            expect(testList[i]).toBe(expectedList.getNodeData(i));
        }
    });

    it('should sum two lists in reverse order when the last sum is greater than 9', () => {
        linkedList.addToEnd(8);
        linkedList.addToEnd(7);
        linkedList.addToEnd(9);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(8);
        secondList.addToEnd(6);

        let expectedList = new LinkedList();
        expectedList.addToEnd(3);
        expectedList.addToEnd(6);
        expectedList.addToEnd(6);
        expectedList.addToEnd(1);

        let testList = linkedList.sumLists(secondList);
        for (let i = 0; i < expectedList.size(); ++i) {
            expect(testList[i]).toBe(expectedList.getNodeData(i));
        }
    });

    it('should throw an error when the incoming list is null', () => {
        linkedList = new LinkedList(3);
        expect(() => { linkedList.sumLists(null) }).toThrow('Source or incoming list cannot be null.');
    });

    it('should throw an error when the source list is null', () => {
        let secondList = new LinkedList(1);
        expect(() => { linkedList.sumLists(secondList) }).toThrow('Source or incoming list cannot be null.');
    });

    it('should pad the list with 0s if l1 is shorter than l2', () => {
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(8);
        secondList.addToEnd(6);

        let expectedList = new LinkedList();
        expectedList.addToEnd(0);
        expectedList.addToEnd(0);
        expectedList.addToEnd(1);

        linkedList.padList(secondList, false);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.getNodeData(0)).toBe(0);
        expect(linkedList.getNodeData(1)).toBe(0);
        expect(linkedList.getNodeData(2)).toBe(1);
    });


    it('should pad the list with 0s if l1 is shorter than l2, when reverse', () => {
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(8);
        secondList.addToEnd(6);

        let expectedList = new LinkedList();
        expectedList.addToEnd(1);
        expectedList.addToEnd(0);
        expectedList.addToEnd(0);

        linkedList.padList(secondList, true);
        expect(linkedList.size()).toBe(3);
        expect(linkedList.getNodeData(0)).toBe(1);
        expect(linkedList.getNodeData(1)).toBe(0);
        expect(linkedList.getNodeData(2)).toBe(0);
    });
    
    it('should pad the list with 0s if l2 is shorter than l1', () => {
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(5);

        let expectedList = new LinkedList();
        expectedList.addToEnd(0);
        expectedList.addToEnd(0);
        expectedList.addToEnd(5);

        linkedList.padList(secondList, false);
        expect(secondList.size()).toBe(3);
        expect(secondList.getNodeData(0)).toBe(0);
        expect(secondList.getNodeData(1)).toBe(0);
        expect(secondList.getNodeData(2)).toBe(5);
    });

    it('should pad the list with 0s if l2 is shorter than l1, when reverse', () => {
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(5);

        let expectedList = new LinkedList();
        expectedList.addToEnd(5);
        expectedList.addToEnd(0);
        expectedList.addToEnd(0);
        linkedList.padList(secondList, true);
        expect(secondList.size()).toBe(3);
        expect(secondList.getNodeData(0)).toBe(5);
        expect(secondList.getNodeData(1)).toBe(0);
        expect(secondList.getNodeData(2)).toBe(0);
    });

    it('should throw an error if lists are equal and padList is called', () => {
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(5);

        expect(() => { linkedList.padList(secondList, false) }).toThrow('Lists are of equal size.');
    });

    it('should remove node at specified index',() => {
        linkedList = new LinkedList(5);

        linkedList.removeAtIdx(3);

        expect(linkedList.size()).toBe(4);
        expect(linkedList.getNodeData(0)).toBe(0);
        expect(linkedList.getNodeData(1)).toBe(1);
        expect(linkedList.getNodeData(2)).toBe(2);
        expect(linkedList.getNodeData(3)).toBe(4);
    });

 
    it('should remove node end of list',() => {
        linkedList = new LinkedList(5);

        linkedList.removeAtIdx(linkedList.size()  - 1);

        expect(linkedList.size()).toBe(4);
        expect(linkedList.getNodeData(0)).toBe(0);
        expect(linkedList.getNodeData(1)).toBe(1);
        expect(linkedList.getNodeData(2)).toBe(2);
        expect(linkedList.getNodeData(3)).toBe(3);
    });   

    it('should throw error if trying to remove index that is out of bounds', () => {
        linkedList = new LinkedList(5);

        expect(() => { linkedList.removeAtIdx(5); }).toThrow('Out of bounds');
    });

    it('should sum the nodes at the end of the list and remove summed nodes, if sum is greater than 9', () => {
        linkedList.addToEnd(8);
        linkedList.addToEnd(7);
        linkedList.addToEnd(9);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(8);
        secondList.addToEnd(6);

        let result = linkedList.doNodeSum(secondList, 0);
        expect(result.onesValue).toBe(5);
        expect(result.carry).toBe(1);
        expect(linkedList.size()).toBe(2);
        expect(secondList.size()).toBe(2);
    });


    it('should sum the nodes at the end of the list and remove summed nodes, if sum is less than 10', () => {
        linkedList.addToEnd(8);
        linkedList.addToEnd(7);
        linkedList.addToEnd(9);

        let secondList = new LinkedList();
        secondList.addToEnd(5);
        secondList.addToEnd(8);
        secondList.addToEnd(0);

        let result = linkedList.doNodeSum(secondList, 0);
        expect(result.onesValue).toBe(9);
        expect(result.carry).toBe(0);
        expect(linkedList.size()).toBe(2);
        expect(secondList.size()).toBe(2);
    });
    
    it('should sum lists in a forward manner', () => {
        linkedList.addToEnd(6);
        linkedList.addToEnd(1);
        linkedList.addToEnd(7);

        let secondList = new LinkedList();
        secondList.addToEnd(2);
        secondList.addToEnd(9);
        secondList.addToEnd(5);

        let resultList = linkedList.sumListsForward(secondList);
        expect(resultList.size()).toBe(3);
        expect(resultList.getNodeData(0)).toBe(9);
        expect(resultList.getNodeData(1)).toBe(1);
        expect(resultList.getNodeData(2)).toBe(2);
    });

    it('should sum lists in a forward manner if carry is left over', () => {
        linkedList.addToEnd(6);
        linkedList.addToEnd(1);
        linkedList.addToEnd(7);

        let secondList = new LinkedList();
        secondList.addToEnd(6);
        secondList.addToEnd(9);
        secondList.addToEnd(5);

        let resultList = linkedList.sumListsForward(secondList);
        expect(resultList.size()).toBe(4);
        expect(resultList.getNodeData(0)).toBe(1);
        expect(resultList.getNodeData(1)).toBe(3);
        expect(resultList.getNodeData(2)).toBe(1);
        expect(resultList.getNodeData(3)).toBe(2);
    });

    it('should sum lists in a forward manner, if source list is shorter than input list', () => {
        linkedList.addToEnd(6);
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(2);
        secondList.addToEnd(9);
        secondList.addToEnd(5);

        let resultList = linkedList.sumListsForward(secondList);
        expect(resultList.size()).toBe(3);
        expect(resultList.getNodeData(0)).toBe(3);
        expect(resultList.getNodeData(1)).toBe(5);
        expect(resultList.getNodeData(2)).toBe(6);
    });


    it('should sum lists in a forward manner, if input list is shorter than source list', () => {
        linkedList.addToEnd(6);
        linkedList.addToEnd(1);

        let secondList = new LinkedList();
        secondList.addToEnd(2);

        let resultList = linkedList.sumListsForward(secondList);
        expect(resultList.size()).toBe(2);
        expect(resultList.getNodeData(0)).toBe(6);
        expect(resultList.getNodeData(1)).toBe(3);
    });

    it('should determine of the linked list is a palindrome', () => {
        linkedList.addToEnd(2);
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);
        linkedList.addToEnd(2);

        expect(linkedList.isPalindrome()).toBe(true);
    });
    

    it('should determine of the linked list is not a palindrome', () => {
        linkedList.addToEnd(2);
        linkedList.addToEnd(1);
        linkedList.addToEnd(1);
        linkedList.addToEnd(2);
        linkedList.addToEnd(2);

        expect(linkedList.isPalindrome()).toBe(false);
    });

});
