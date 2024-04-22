const LinkedList = require('./linked-list'); 

describe('Linked List Tests', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('should add one', () => {
        linkedList.add(1);
        expect(linkedList.print()).toContain(1);
    });

    it('should add elements to the linked list when constructor is supplier a parameter', () => {
        linkedList = new LinkedList(10);
        expect(linkedList.size()).toBe(10);
    });

    it('should calculate the right size of the linked list', () => {
        linkedList = new LinkedList(2);
        expect(linkedList.size()).toBe(2);
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
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.removeDups();
        expect(linkedList.print()).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(linkedList.size()).toBe(3);
    });

    it('should remove duplicates when they are at the start', () => {
        linkedList.add(1);
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
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
});