const LinkedList = require('./linked-list'); 

describe('Linked List Tests', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    test('it should add one', () => {
        linkedList.add(1);
        expect(linkedList.print()).toContain(1);
    });

    test('constructor should add mulitple', () => {
        linkedList = new LinkedList(10);
        expect(linkedList.size()).toBe(10);
    });

    test('checks the length after adding elements', () => {
        linkedList = new LinkedList(2);
        expect(linkedList.size()).toBe(2);
    });

    test('checks the length after removing elements', () => {
        linkedList = new LinkedList(2);
        linkedList.remove(1);
        expect(linkedList.size()).toBe(1);
    });

    test('remove not present data', () => {
        linkedList = new LinkedList(2);
        expect(linkedList.remove(3)).toBe(false);
    });

    test('remove duplicates', () => {
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.removeDups();
        expect(linkedList.print()).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(linkedList.size()).toBe(3);
    });

    test('remove duplicates at start', () => {
        linkedList.add(1);
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.removeDups();
        expect(linkedList.print()).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(linkedList.size()).toBe(3);
    });

    test('nth from last', () => {
        linkedList = new LinkedList(6);
        expect(linkedList.nthFromLast(3)).toBe(2);
    });

    test('nth from last zero case', () => {
        linkedList = new LinkedList(6);
        expect(linkedList.nthFromLast(0)).toBe(5);
    });

    test('nth from last error case', () => {
        linkedList = new LinkedList(3);
        expect(() => { linkedList.nthFromLast(4) }).toThrow('n out of bounds');
    });
});