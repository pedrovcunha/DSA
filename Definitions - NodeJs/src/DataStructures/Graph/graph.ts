// Edge List
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent Matrix
//...

// Direct - nodes have direction point to another vs undirect graph (nodes are linked withouth any direction)
// Weighted(information in the link betwween nodes) vs unweighted graphs
// cyclic (all connected, e.g. triangle), common with weighted graphs vs Acyclic not all connected (e.g. 3 nodes on L shape)

// PROS          vs   CONS
// Relationships      Hard to scale
// e.g. neoj database

/**
 * https://visualgo.net/en/graphds
 * Adjacent List using a hashmap
 * 0:	1	2      // Node 0 is connected to nodes 1 and 2
 * 1:	0	2	3
 * 2:	0	1	4
 * 3:	1	4
 * 4:	2	3	5
 * 5:	4	6
 * 6:	5
 */
class Graph {
    numberOfNodes: number;
    // using a hashmap here alow us to be more efficient,
    // if using an array we will possibly have to shif/unshift all the items
    adjacentList: { [key: string]: string[]};

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    /**
     * Adds a new node to the graph
     * @param node new node
     */
    addVertex(node: string) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    /**
     * Adds a connection between nodes
     * @param node1 Node to be connected
     * @param node2 Node to be connected
     */
    addEdge(node1: string, node2: string) {
        // undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    /**
     * Print all connections
     */
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }

            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');

myGraph.showConnections()