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

    get graph() {
        return this._graph;
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
        let queue = new Array();
        let visited = new Set();

        queue.push(start);
        visited.push(start);

        while (queue.length > 0) {
            let dequeue = queue.shift();
            if (dequeue === target) {
                return true;
            }
            for (let i = 0; i < dequeue.neighbors.length; ++i) {
                let current = dequeue.neighbors[i];
                let isVisited = visited.find((x) => x === current);
                if (!isVisited) {
                    visited.push(current);
                    queue.push(current);
                }
            }    
        }
        return false;
    }
}

module.exports = { TreesGraphs, Node };
