
// Perfect Binary Tree - all nodes have exaclty 2 children (left and right)
// we always double the number of nodes from parent to the children level
// number of nodes on the last level = all nodes above + 1. Half of all nodes will be always on the bottom level

// Full Binary tree - incomplete nodes (each node has sero, one or 2 nodes).

// Lookup, Insert, Delete O(log n)
// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;
// # of nodes = 2^h -1;
// log nodes = height / steps / levels
// log 100 = 2
// 10^2 = 100

/**
 * Binary Search Tree
 * lookup O(log N)
 * insert O(log N)
 * delete O(log N)
 */

class BTreeNode {
    value: number;
    left: BTreeNode | null;
    right: BTreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaySearchTree {
    root: BTreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new BTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                // left
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value: number) {
        if (!this.root) {
            return false;
        }
        let currentNode: BTreeNode | null = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value: number) {
        if (!this.root) {
            return false;
        }
        let currentNode: BTreeNode | null = this.root;
        let parentNode: BTreeNode | null = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                // We have a match.
                // Option 1: No right child
                if (currentNode.right === null) {
                    if (!parentNode) { 
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                // Option 2: Right child which doesn't have a left child
                else if (currentNode.right.left === null) {
                    if (!parentNode) { 
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                // Option 3: Right child that has a left child
                else {
                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftMostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    // Parent's left subtree is now leftmost's right subtree
                    leftMostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
        return false;
    }
}

function traverse(node: BTreeNode) {
    const tree = new BTreeNode(node.value);
    tree.left = node.left === null 
        ? null 
        : traverse(node.left);
    tree.right = node.right === null 
        ? null 
        : traverse(node.right);
        
    return tree;
}


//           9
//      4        20
//    1   6   15   170
const tree = new BinaySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(JSON.stringify(traverse(tree.root!)));
var lookupResult = tree.lookup(171);
console.log(JSON.stringify(lookupResult));



