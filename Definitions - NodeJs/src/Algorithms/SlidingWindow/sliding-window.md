# Sliding Window Algorithm

## What is the Sliding Window Algorithm?

The **sliding window algorithm** is a technique for solving problems that involve **subarrays** or **substrings** in a linear data structure (like arrays or strings). Instead of recomputing results for overlapping subarrays or substrings, this technique **slides a window** across the data to efficiently maintain the desired result.

The window can be **fixed** or **dynamic**, depending on the problem requirements.

---

## Types of Sliding Window

1. **Fixed-Size Window**:  
   The size of the window remains constant throughout the traversal.  
   Example: Find the maximum sum of a subarray of size `k`.

2. **Dynamic-Size Window**:  
   The size of the window changes dynamically based on certain conditions.  
   Example: Find the smallest subarray with a sum greater than or equal to a target.

---

## When to Use the Sliding Window Algorithm?

The sliding window technique is particularly useful in scenarios where:

1. **Subarray Problems**:  
   Problems that involve finding sums, maximums, or averages of subarrays.

2. **Substring Problems**:  
   Problems involving searching for specific patterns, longest substrings, or unique characters in strings.

3. **Efficiency**:  
   Problems where recalculating values for overlapping sections can be avoided using a running calculation.

---

## How Does It Work?

The sliding window algorithm involves maintaining a "window" (defined by two pointers, `start` and `end`) over the data structure and adjusting it as you traverse the input. The exact movement of the pointers depends on the problem.

### Fixed-Size Sliding Window

For problems requiring a fixed-size window:

1. Start with both pointers at the beginning.
2. Expand the window by moving the `end` pointer until the desired size is reached.
3. Perform the required computation within the window.
4. Slide the window by moving both `start` and `end`.

Example Problem: Find the maximum sum of a subarray of size `k`.

```typescript
function maxSubarraySum(arr: number[], k: number): number {
    let maxSum = 0, currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]; // Add the next element to the window

        if (i >= k - 1) { // Once the window reaches size k
            maxSum = Math.max(maxSum, currentSum); // Update the max sum
            currentSum -= arr[i - (k - 1)]; // Slide the window by removing the leftmost element
        }
    }

    return maxSum;
}
```

### Dynamic-Size Sliding Window

For problems requiring a dynamic-size window:

1. Use both start and end pointers to define the window.
2. Expand the window by moving the end pointer until the condition is met.
3. Shrink the window by moving the start pointer while the condition remains satisfied.

Example Problem: Find the smallest subarray with a sum greater than or equal to a target.

```typescript
function minSubarrayLen(target: number, arr: number[]): number {
    let minLength = Infinity, currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Expand the window by adding the current element

        while (currentSum >= target) { // Shrink the window while the condition is met
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start]; // Remove the leftmost element
            start++; // Slide the start of the window
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
```

## Advantages of the Sliding Window Algorithm

- __Efficiency:__
    Reduces time complexity from O(n²) (using nested loops) to O(n) by avoiding redundant calculations.

- __Flexibility:__
    Works for both fixed-size and dynamic-size subarray or substring problems.

- __Simplicity:__
    Easy to implement and understand for most scenarios.

## Examples of Problems Solved with Sliding Window

__1. Fixed-Size Problems:__

- Maximum or minimum sum of a subarray of size k.
- Maximum number of vowels in a substring of size k.

__2. Dynamic-Size Problems:__

 - Longest substring without repeating characters.
 - Smallest subarray with a sum greater than or equal to a target.

__3. String Problems:__

- Find the longest substring with at most k distinct characters.
- Anagram detection in a string.

## Key Considerations

__1. Window Initialization:__
Carefully set up the window based on the problem's requirements.

__2. Boundary Conditions:__
Handle edge cases like empty arrays, single-element arrays, or invalid inputs.

__3. Dynamic Adjustments:__
For dynamic-size windows, ensure the shrinking and expanding logic is correctly implemented.

## Visualization

Below is a visualization of the sliding window technique for finding the maximum sum of a subarray of size k:

Array: ```[1, 2, 3, 4, 5]```
k: ```3```

| Step | Current Window | Current Sum | Max Sum | Action
| ---- | -------------- | ----------- | ------- | ------
|  1   | ```[1, 2, 3]```|   ```6```  | ```6``` | Initialise
|  1   | ```[2, 3, 4]```|   ```9```  | ```9``` | Slide Window
|  1   | ```[3, 4, 5]```|   ```12```  | ```12``` | Slide Window