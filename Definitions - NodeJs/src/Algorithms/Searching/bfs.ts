/**
 * Breadth First Search
 *                  9
 *          4               34
 *      1       6       12      45
 * 
 * Start left to right, and go by levels
 * Level 1. -> go to 9
 * Level 2. -> go to 4 and 34
 * Level 3. -> go to 1, 6, 12, 45
 * 
 * uses additional memory because it is necessary to track 
 * the child nodes of all the nodes on a given level.
 * We nee to track all the nodes and its children in order
 */

class BFSBinarySearchTree extends BinaySearchTree {
    constructor() {
        super();
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];  // our answer
        let queue = []; //  track the level we are at
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift() ?? null;
            list.push(currentNode?.value);
            if(currentNode?.left) {
                queue.push(currentNode.left)
            }
            if(currentNode?.right) {
                queue.push(currentNode.right)
            }
        }

        return list;
    }

    breadthFirstSearchRecursive(queue: BTreeNode[], list: number[]): number[] {
        // base case
        if (!queue.length) return list;

        let currentNode = queue.shift();
        list.push(currentNode?.value!);
        if(currentNode?.left) {
            queue.push(currentNode.left)
        }
        if(currentNode?.right) {
            queue.push(currentNode.right)
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }
}

//           9
//      4        20
//    1   6   15   170
const bfstree = new BFSBinarySearchTree();
bfstree.insert(9);
bfstree.insert(4);
bfstree.insert(6);
bfstree.insert(20);
bfstree.insert(170);
bfstree.insert(15);
bfstree.insert(1);

bfstree.breadthFirstSearch();
bfstree.breadthFirstSearchRecursive([bfstree.root!], []);