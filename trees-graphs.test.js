const { TreesGraphs, Node } = require('./trees-graphs');

describe('Tress and Graphs Tests', () => {
    it('should add a graph node', () => {
        const treesGraphs = new TreesGraphs();
        let newNode = new Node('A');
        treesGraphs.addNode(newNode);

        expect(treesGraphs.graph).toHaveProperty('A', newNode);
    });

    it('should add an edge to the graph', () => {
        const treesGraphs = new TreesGraphs();
        let newNode = new Node('A');
        let newNode2 = new Node('B');
        treesGraphs.addNode(newNode);
        treesGraphs.addNode(newNode2);
        treesGraphs.addEdge(newNode, newNode2);

        expect(treesGraphs.graph).toHaveProperty('A', newNode);
        expect(treesGraphs.graph).toHaveProperty('B', newNode2);
        expect(treesGraphs.graph['A'].neighbors).toHaveLength(1);
        expect(treesGraphs.graph['A'].neighbors[0].data).toEqual('B');
    });
});
