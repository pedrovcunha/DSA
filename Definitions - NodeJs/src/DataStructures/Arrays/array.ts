
/**
 * ARRAYS Constraints
 * Slow search O(n)
 * FAST Lookups O(1)
 * FAST push/pop O(1)
 * Ordered
 * SLOW inserts O(n)
 * SLOW deletes O(n)
 * Fixed size when using static arrays
 */

const strings = ['a', 'b', 'c', 'd'];
// 4x4 = 16 bytes of storage

strings.push('e'); // O(1)
strings.pop(); // O(1)
strings.unshift('x'); // O(n)
strings.splice(2, 0, 'alien'); // O(n/2) ~ O(n)

class MyArray {
    length: number;
    data: { [key: number]: any };

    constructor() {
        this.length = 1;
        this.data = {};
    }

    /**
     * Get the element located in the index
     * @param index 
     * @returns element
     */
    get(index: number) {
        return this.data[index];
    }

    /**
     * Insert an element at the end of the array
     * @param item 
     * @returns new size of the array
     */
    push(item: any) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    /**
     * 
     * @returns deleted item
     */
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    /**
     * Shift all items to the left, starting of the deleted index and remove the last item
     * @param index 
     */
    shiftItems(index: number) {
        // shift all items to the left, apart from the last one that will be repeated
        // e.g. [0, 1, 2, 3, 4, 5], we choose to remove index 2
        // After the for we have: [0, 1, 3, 4, 5, 5], we shifted all elements to the left and now we can delete the last element
        for (let i = index; i < this.length - 1; ++i) {
            this.data[i] = this.data[i+1];
        }
        // Delete the last item
        delete this.data[this.length - 1];
        this.length--;
    }
}

function twoSum(nums: number[], target: number): number[] {
    // key = nums element value; value = index
    let complements: {[key: number]: number} = {};

    for (let i = 0; i < nums.length; i++)
    {
        const complement = target - complements[nums[i]];
        if (complements[complement]) {
            let complementIndex = complements[complement];
            return [complementIndex, i];
        }
        if (!complements[nums[i]]) {
            complements[nums[i]] = i;
        }
    }

    return [];
};

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
const deletedItem = newArray.delete(1);
console.log(`Deleted item: ${deletedItem}`);
console.log(newArray);

// console.log(twoSum([2,7,11,15], 9))