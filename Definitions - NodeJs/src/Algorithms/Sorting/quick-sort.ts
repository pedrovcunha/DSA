// O(n log n) - divide and conquer
// fast on average
// if the pivot is the lowest or biggest value
// it becomes the worse use case of O(n2)
function quickSort(array: number[], left: number, right: number) {
    let pivot;
    let partitionIndex;
  
    if (left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
  
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
}
  
function partition(array: number[], pivot: number, left: number, right: number) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(array, right, partitionIndex);
    return partitionIndex;
}
  
function swap(array: number[], firstIndex: number, secondIndex: number) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
  
// Select first and last index as 2nd and 3rd parameters
const numbersi = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
quickSort(numbersi, 0, numbers.length - 1);
console.log(numbers);