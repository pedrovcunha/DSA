/**
 * Depth First Search/Traversal
 *                  9
 *          4               34
 *      1       6       12      45
 * 
 * The search follows downs one branch on the tree as many levels as possible (until target node is found or the end is reached).
 * When it can't go on any longer, it continues at newest ancestor with the unexplored child.
 * 
 * 1. visit 9
 * 2. visit 4
 * 3. visit 1
 * 4. nowhere to go, go back to ancestor/parent 4.
 * 5. continue with unexplored child 6. visit 6.
 * 
 * 
 * lower memory performance than BFS.
 *           9
 *      4        20
 *    1   6   15   170
 * DFS[9, 4, 1, 6, 20, 15, 170]
 * BFS[9, 4, 20, 1, 6, 15, 170]
 */

/**
 *            9
 *      4        20
 *    1   6   15   170
 * 3 ways to implement
 * in-order: [1, 4, 6, 9, 15, 20, 170] gives everything in order
 * pre-order: [9, 4, 1, 6, 20, 15, 170], starts off with the parent node and grab left and right nodes in order (useful if we need to re-create the tree)
 * post-order: [1, 6, 4, 15, 170, 20, 9], left size first with children before parent
 * O (height of the tree)
 */
class DFSBinarySearchTree extends BinaySearchTree {
    constructor() {
        super();
    }

    dfsInOrder() {
        return this.traverseInOrder(this.root!, []);
    }

    dfsPostOrder() {
        return this.traversePostOrder(this.root!, []);
    }

    dfsPreOrder() {
        return this.traversePreOrder(this.root!, []);
    }

    traverseInOrder(node: BTreeNode, list: number[]): number[] {
        console.log(node.value);
        // Go all the way down to the left, so we can add the last node.
        if (node.left) {
            this.traverseInOrder(node.left, list)
        }

        list.push(node.value);

        // same to the right
        if (node.right) {
            this.traverseInOrder(node.right, list)
        }

        return list;
    }

    traversePreOrder(node: BTreeNode, list: number[]): number[] {
        console.log(node.value);
        list.push(node.value);

        if (node.left) {
            this.traversePreOrder(node.left, list)
        }
        if (node.right) {
            this.traversePreOrder(node.right, list)
        }

        return list;
    }

    traversePostOrder(node: BTreeNode, list: number[]): number[] {
        console.log(node.value);

        if (node.left) {
            this.traversePostOrder(node.left, list)
        }
        if (node.right) {
            this.traversePostOrder(node.right, list)
        }

        list.push(node.value);
        return list;
    }
}

//           9
//      4        20
//    1   6   15   170
const dfstree = new DFSBinarySearchTree();
bfstree.insert(9);
bfstree.insert(4);
bfstree.insert(6);
bfstree.insert(20);
bfstree.insert(170);
bfstree.insert(15);
bfstree.insert(1);

console.log(dfstree.dfsInOrder());
console.log(dfstree.dfsPreOrder());
console.log(dfstree.dfsPostOrder());