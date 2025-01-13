/**
 * LINEAR SEARCH - Not the fastest
 *  - O(1) best case, O(n) worst case. [1, 2, 3, 4, 5], 
 *  - if we are looking for 1 and 1 is the first element, O(1). But normally O(n)
 * 
 * BINARY SEARCH - O(log n)
 *  - If the list is sorted. we can apply a binary search.
 *  - [1, 4, 6, 9, 12, 34, 45], if we want to find 34? 
 *  - Get the element in the middle, 9 in this case. if 9 higher or lower than 34? 
 *  - lower, so discard everything on 9's left. now we have [9, 12, 34, 45], repeat.
 *  - what is the middle? 12, is 12 higher or lower? lower, remove evrything on the lelft again.
 *  - [12, 34, 45], what is the middle, 34!
 *  - It took us 3 operations, instead 6 (in a linear search)
 * 
 *  - Note we are building a tree
 *  -               9
 *          4               34
 *      1       6       12      45
 * 
 *  - Sometimes we nee to do traversal. It means we need to go and check (or do something) node by node. O(n)
 * 
 * 
 * Depth First Search VS Breadth First Search
 * Less memory               More memory
 * Does Path exist?          Shortest Path (e.g.closest connections on social media)
 * Can get slow              Closer nodes
 * 
 * If we have information on the target node, and we know that the node is 
 * likely on the upper level of the tree or graph, than BFS is better
 * 
 * (https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)
 * What is the time and space complexity of a breadth first and depth first tree traversal?
 * BFS:
 * Time complexity is O(|V|), where |V| is the number of nodes. You need to traverse all nodes.
 * Space complexity is O(|V|) as well - since at worst case you need to hold all vertices in the queue.
 * 
 * DFS:
 * 
 * Time complexity is again O(|V|), you need to traverse all nodes.
 * Space complexity - depends on the implementation, a recursive implementation can have a O(h) space complexity [worst case], where h is the maximal depth of your tree.
 * Using an iterative solution with a stack is actually the same as BFS, just using a stack instead of a queue - so you get both O(|V|) time and space complexity.
 * 
 * (*) Note that the space complexity and time complexity is a bit different for a tree than for a general graphs becase you do not need to maintain a visited set for a tree, and |E| = O(|V|), so the |E| factor is actually redundant.
 * 
 */