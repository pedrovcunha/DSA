# Two-Pointers Algorithm

## What is the Two-Pointers Algorithm?

The **two-pointers algorithm** is a technique that uses two indices (or "pointers") to traverse a data structure, typically an array or a string. These pointers move in a specific way (e.g., one forward and the other backward, or both forward) to solve problems efficiently. 

This approach is often used to reduce the time complexity of problems that involve searching, comparing, or iterating through multiple elements of a data structure.

---

## Types of Two-Pointers Techniques

1. **Opposite Direction**:  
   The two pointers start at opposite ends of the data structure and move toward each other.  
   Example: Finding if a pair of numbers adds up to a target sum in a sorted array.

2. **Same Direction**:  
   Both pointers start at the same point and move in the same direction.  
   Example: Sliding window problems, finding subarray sums, or removing duplicates from a sorted array.

---

## When to Use the Two-Pointers Algorithm?

You can use the two-pointers technique in the following scenarios:

1. **Sorted Arrays**:  
   When dealing with problems that involve searching or comparing elements in a sorted array.  
   Example: Finding pairs with a specific sum or merging two sorted arrays.

2. **Substring Problems**:  
   For strings, where you need to find the longest substring, check for palindromes, or compare characters.  
   Example: Sliding window problems.

3. **Efficient Searching**:  
   When the brute-force solution involves nested loops, the two-pointers approach can reduce complexity.  
   Example: Finding triplets with a specific sum in an array.

4. **Linked Lists**:  
   When traversing a linked list to find a middle node, detect a cycle, or compare nodes.

---

## How Does It Work?

The general idea involves two pointers (`i` and `j`) and the way they traverse the data structure. The movement of these pointers is tailored to the problem.

### Opposite Direction Example

- Start one pointer at the beginning (`i = 0`) and the other at the end (`j = n - 1`).
- Move the pointers closer together based on a condition.

Example Problem: Check if a sorted array contains two numbers that sum to a target.

```typescript
function twoSumSorted(arr: number[], target: number): boolean {
    let i = 0, j = arr.length - 1;

    while (i < j) {
        const sum = arr[i] + arr[j];
        if (sum === target) return true;
        else if (sum < target) i++;
        else j--;
    }

    return false;
}
```

### Same Direction Example

- Use one pointer to represent the start of a subarray and another to explore or expand the subarray.
- Adjust the pointers based on a condition.

Example Problem: Find the maximum sum of a subarray of size k.

``` typescript
function maxSubarraySum(arr: number[], k: number): number {
    let maxSum = 0, currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, currentSum);
            currentSum -= arr[i - (k - 1)];
        }
    }

    return maxSum;
}
```

## Advantages of the Two-Pointers Algorithm

- **Efficiency:**
Reduces the need for nested loops, making algorithms faster.
Time complexity often drops from O(n²) to O(n) or O(n log n) when combined with sorting.

- **Simplicity:**
Easy to implement and understand for most problems.

- **Memory-Efficient:**
No extra space is needed beyond the pointers themselves

## Examples of Problems Solved with Two-Pointers

**1. Array Problems:**

    - Finding pairs or triplets with a specific sum.
    - Removing duplicates from a sorted array.
    - Merging two sorted arrays.
   
**2. String Problems:**

    - Checking for palindromes.
    - Finding the longest substring without repeating characters.

**3. Linked List Problems:**

    - Detecting a cycle in a linked list (Floyd’s Tortoise and Hare algorithm).
    - Finding the middle node of a linked list.


## Key Considerations

__1. Sorted Data:__
 
 For the two-pointers algorithm to work efficiently, the input data often needs to be sorted. If the data isn't sorted, you may need to sort it first (O(n log n)).

__2. Boundary Conditions:__
Always account for edge cases, such as empty arrays, single-element arrays, or invalid inputs.

__3. Direction of Pointers:__
Tailor the movement of the pointers based on the problem requirements (opposite or same direction).

### Visualization
Below is a visualization of the two-pointers technique for finding pairs with a target sum in a sorted array:

Array: ```[1, 2, 3, 4, 6]```
Target: ```6```

| i (Pointer 1) | j (Pointer 2) | Sum    | Action |
| -----------   | -----------   | ------ | ----------- |
| O(1)          | 4(6)          | 7      | Move j left |
| O(1)          | 3(4)          | 5      | Move i right|
| 1(2)          | 3(4)          | 6      | Fount Pair  |