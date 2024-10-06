class Node {
    constructor(data) {
        this.data = data;
        this.neighbors = new Array();
    }
    
    addNeighbor(node) {
        this.neighbors.push(node);
    }
}

class TreesGraphs {
    constructor() {
        this._graph = {};  // Object to store nodes and their connections    
    }

    addNode(node) {
        if (!this._graph[node.data]) {
            this._graph[node.data] = node;
        }
    }

    addEdge(nodeA, nodeB) {
        if (this._graph[nodeA.data] && this._graph[nodeB.data]) {
            this._graph[nodeA.data].addNeighbor(nodeB);
        } 
    }

    routeBetweenNodes(start, target) {
        
    }
}

module.exportsuuuuu = { TreesGraphs };
