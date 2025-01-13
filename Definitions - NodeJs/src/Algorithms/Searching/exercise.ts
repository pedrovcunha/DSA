// [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

class BSTTreeNode {
    val: number
    left: BSTTreeNode | null
    right: BSTTreeNode | null
    constructor(val?: number, left?: BSTTreeNode | null, right?: BSTTreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isValidBST1(root: BSTTreeNode | null): boolean {
    if (root?.left && root.left.val >= root?.val) return false;
    if (root?.right && root.right.val <= root?.val) return false;

    if (root?.left) return isValidBST1(root?.left);
    if (root?.right) return isValidBST1(root?.right);

    return true;
};

// The above isValidBST1 fails this use case.
// root =[5,4,6,null,null,3,7]
//        5
//    4       6
// null null 3  7

/**
 * 1ms runtime
 * @param root 
 * @returns 
 */
function isValidBST2(root: BSTTreeNode | null): boolean {
    let prev = -Infinity;
    let isValid = true;

    const dfsInOrder = (node: BSTTreeNode | null) => {
        if (!isValid || !node) return;

        dfsInOrder(node.left);
        if (prev >= node.val) {
            isValid = false;
            return;
        }
        prev = node.val;

        dfsInOrder(node.right);
    }

    dfsInOrder(root);
    return isValid;
};

/**
 * Better performance
 * 0 ms runtime
 */
function isValidBST3(root: BSTTreeNode | null): boolean {

    function dfs(root: BSTTreeNode | null, min: number, max: number): boolean {
        if (!root) return true
        if (root.val <= min || root.val >= max) {
            return false
        }

        const leftValid = dfs(root.left, min, root.val)
        const rightValid = dfs(root.right, root.val, max)
        return leftValid && rightValid
    }
    return dfs(root, -Infinity, Infinity)
};