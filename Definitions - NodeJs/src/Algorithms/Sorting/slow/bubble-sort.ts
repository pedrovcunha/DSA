const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// O(n2)
function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // swap numbers
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }    
}

bubbleSort(numbers);
console.log(numbers);