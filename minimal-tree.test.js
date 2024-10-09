const { TreeNode, Tree } = require('./minimal-tree');

describe('Minimal Tree Tests', () => {
    it('should balance the array in a minimal height tree', () => {
        const tree = new Tree();
        const testArray = [1, 2, 3, 4, 5, 6, 7];
        
        tree.createMinimalBST(testArray);
         // Check that the root value is 4
        expect(tree.root.value).toEqual(4);

        // Check left and right children of the root
        expect(tree.root.left.value).toEqual(2);
        expect(tree.root.right.value).toEqual(6);

        // You can add further checks to verify the structure of the whole tree
        expect(tree.root.left.left.value).toEqual(1);
        expect(tree.root.left.right.value).toEqual(3);
        expect(tree.root.right.left.value).toEqual(5);
        expect(tree.root.right.right.value).toEqual(7);  
    });
});
