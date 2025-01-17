# Binary Heap

## What is a Binary Heap?

A binary heap is a special type of binary tree that satisfies the following properties:

### Complete Binary Tree

A binary heap is a complete binary tree, meaning all levels are completely filled except possibly the last level, which must be filled from left to right. The Heap must have:
1. No children
2. just left child
3. or both left and right child

And it obeys an invariant. A property that will always be true.

### Heap Property

- Max-Heap: The value of each node is greater than or equal to the values of its children.
- Min-Heap: The value of each node is less than or equal to the values of its children.

Example of Max-Heap and Min-Heap:

#### Max-Heap:

``` typescript
          50
        /  \
      30    20
     / \   / \
   15  10  8  16
```

#### Min-Heap:
``` typescript
          5
         / \
       10   20
      / \   / \
    15  30 25  40
```

## Properties of Binary Heap

**1. Representation:**

A binary heap is often implemented as an array because of its structural properties:

- The root element is at index 0.
- For any node at index i:
    - Left child is at index 2i + 1.
    - Right child is at index 2i + 2.
    - Parent is at index (i - 1) // 2.

**2. Insertion:**

- Add the new element to the end of the heap (maintain the complete binary tree structure).
- Restore the heap property by "bubbling up" or "heapifying up" the inserted element.

**3. Deletion (usually the root):**

- Replace the root with the last element.
- Remove the last element.
- Restore the heap property by "bubbling down" or "heapifying down" the root element.

**4. Heapify Operation:**

A process to restore the heap property when an element violates it.

## Applications of Binary Heap

**1. Priority Queue:**
Binary heaps are commonly used to implement priority queues where elements with the highest/lowest priority are retrieved efficiently.
- Min Heap to find the K largest
- Max Heap to find the K smallest

**2. Heapsort Algorithm:**
A sorting algorithm based on binary heaps that achieves O(n log n) time complexity.

**3. Graph Algorithms:**

- Dijkstra's shortest path algorithm.
- Prim's minimum spanning tree algorithm.


## Visualization of Binary Heap Operations

### Insert Operation

1. Add the element to the next available position in the array (maintain completeness).

2. "Bubble up" the element if it violates the heap property:
    - Compare with the parent and swap if necessary.
    - Continue until the heap property is restored.

**Example: Insert 45 into a Max-Heap**
```typecript
Initial Heap:          After Insert:          After Bubble Up:
      50                   50                     50
     /  \                 /  \                   /  \
   30    20             30    20               45    20
  / \   / \            / \   / \              / \   / \
15  10  8  16        15  10  8  16         30  10  8  16
                        \                    \
                        45                   15
```

### Delete Operation

1. Replace the root with the last element in the array.
2. Remove the last element.
3. "Bubble down" the root element if it violates the heap property:
    - Compare with the larger/smaller child (depending on Max-Heap or Min-Heap) and swap if necessary.
    - Continue until the heap property is restored.

**Example: Delete 50 from a Max-Heap**
``` typecript
Initial Heap:          After Replace:          After Bubble Down:
      50                    16                      45
     /  \                  /  \                    /  \
   30    20              30    20                30    20
  / \   / \             / \   / \               / \   / \
15  10  8  16         15  10  8               15  10  8

```

## Time Complexities:

| Function  | Time Complexity  |
|---|---|
| Insert  | O(logN) |
| Heapify  | O(logN) |
| getMin  | O(1) |
| ExtractMin  | O(logN) |
| Decreasekey  | O(logN) |
| Delete  | O(logN) |
