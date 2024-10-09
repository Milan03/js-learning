class TreeNode {
    constructor(data) {
        this._value = data;
        this._left = [];
        this._right = [];
    }
}

class Tree {
    constructor() {
        this._root = null;
    }

    get root() {
        return this._root;
    }

    createMinimalBST(array) {
        this._root = this.createMinimalBSTHelper(array, 0, array.length - 1);
    }

    createMinimalBSTHelper(array, start, end) {
        if (start > end) {
            return null;
        }

        let midpoint = Math.floor((start + end) / 2);
        let newNode = new TreeNode(array[midpoint]);

        newNode._left = this.createMinimalBSTHelper(array, start, midpoint - 1);
        newNode._right = this.createMinimalBSTHelper(array, midpoint + 1, end);

        return newNode;
    }
}

module.exports = { TreeNode, Tree };
