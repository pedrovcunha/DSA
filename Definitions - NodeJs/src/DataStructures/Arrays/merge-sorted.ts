// Merge sorted arrays
// [0, 3, 4, 31], [4, 6, 30]
// returns [0, 3, 4, 4, 6, 30, 31]

const shouldPushFirstItem = (
    arr1: number[], 
    arr2: number[], 
    arr1Index: number,
    arr2Index: number
): Boolean => !arr2[arr2Index] || arr1[arr1Index] <= arr2[arr2Index];


function mergeSortedArrays(arr1: number[], arr2: number[]) {
    const mergedArray: number[] = [];

    let arr2Index: number = 0;    
    let arr1Index: number = 0;
    while (arr1Index < arr1.length 
        || arr2Index < arr2.length
    ) {
        if (shouldPushFirstItem(arr1, arr2, arr1Index, arr2Index)) {
            mergedArray.push(arr1[arr1Index]);
            arr1Index++;
        }        
        else {
            mergedArray.push(arr2[arr2Index]);
            arr2Index++;
        }
    }
    console.log(mergedArray);
    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);