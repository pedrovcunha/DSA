class MinHeap {
    private heap: number[]; // Array representation of the heap
  
    constructor() {
        this.heap = [];
    }
  
    // Helper function to get the parent index
    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }
  
    // Helper function to get the left child index
    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }
  
    // Helper function to get the right child index
    private rightChildIndex(index: number): number {
        return 2 * index + 2;
    }
  
    // Swap two elements in the heap
    private swap(index1: number, index2: number): void {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Insert a new value into the heap
    insert(value: number): void {
        this.heap.push(value); // Add the value to the end
        this.bubbleUp(this.heap.length - 1); // Restore the heap property
    }
  
    // Bubble up the element at the given index to restore heap property
    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIdx = this.parentIndex(index);
            if (this.heap[index] < this.heap[parentIdx]) {
                this.swap(index, parentIdx); // Swap with the parent
                index = parentIdx; // Move up
            } else {
                break; // Heap property is satisfied
            }
        }
    }
  
    // Restore the heap property starting from the given index (Heapify)
    private heapify(index: number): void {
        const left = this.leftChildIndex(index);
        const right = this.rightChildIndex(index);
        let smallest = index;
    
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
    
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
    
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapify(smallest); // Recursively heapify the affected subtree
        }
    }
  
    // Get the minimum value (root) of the heap without removing it
    getMin(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
  
    // Extract the minimum value (root) of the heap and restore the heap property
    extractMin(): number | null {
        if (this.heap.length === 0) {
            return null; // Heap is empty
        }

        if (this.heap.length === 1) {
            return this.heap.pop()!; // Only one element in the heap
        }

        const root = this.heap[0]; // Store the minimum value
        this.heap[0] = this.heap.pop()!; // Replace the root with the last element
        this.heapify(0); // Restore the heap property
        return root;
    }
  
    // Decrease the value of a key at a specific index
    decreaseKey(index: number, newValue: number): void {
        if (index < 0 || index >= this.heap.length) {
            throw new Error("Index out of bounds");
        }
    
        if (newValue > this.heap[index]) {
            throw new Error("New value must be smaller than the current value");
        }
    
        this.heap[index] = newValue; // Update the value
        this.bubbleUp(index); // Restore the heap property by bubbling up
    }
  
    // Delete a value at a specific index
    delete(index: number): void {
        if (index < 0 || index >= this.heap.length) {
            throw new Error("Index out of bounds");
        }
    
        // Set the value at index to negative infinity (or smallest possible value)
        this.decreaseKey(index, Number.MIN_SAFE_INTEGER);
        this.extractMin(); // Remove the root (now the target element)
    }
  
    // Utility function to print the heap (for debugging)
    printHeap(): void {
        console.log(this.heap);
    }
}
  
  // Example usage:
  const minHeap = new MinHeap();
  
  // Insert elements
  minHeap.insert(10);
  minHeap.insert(20);
  minHeap.insert(5);
  minHeap.insert(7);
  minHeap.insert(15);
  minHeap.insert(30);
  
  console.log("Heap after inserts:");
  minHeap.printHeap();
  
  // Get the minimum value
  console.log("Minimum value:", minHeap.getMin());
  
  // Extract the minimum value
  console.log("Extracted minimum:", minHeap.extractMin());
  console.log("Heap after extractMin:");
  minHeap.printHeap();
  
  // Decrease a key value
  minHeap.decreaseKey(2, 1); // Decrease value at index 2 to 1
  console.log("Heap after decreaseKey:");
  minHeap.printHeap();
  
  // Delete an element
  minHeap.delete(1); // Delete the element at index 1
  console.log("Heap after delete:");
  minHeap.printHeap();
  