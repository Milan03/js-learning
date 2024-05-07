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

    it('should not delete middle node when node entered is last', () => {
        linkedList = new LinkedList(5);
        let nodeToTest = new ListNode();
        nodeToTest.data = 5;
        nodeToTest.next = null;
        expect(() => { linkedList.deleteMiddleNode(nodeToTest)} ).toThrow("Out of bounds.");
    });
});