class TreeNode {
    constructor() {
        this._value = null;
        this._left = [];
        this._right = [];
    }
}

class Tree {
    constructor() {
        this._root = null;
    }

    createMinimalBST(array) {
        this.root = this.createMinimalBSTHelper(array, 0, array.length - 1);
    }

    createMinimalBSTHelper(array, start, end) {

    }
}

module.exports = { TreeNode, Tree };
