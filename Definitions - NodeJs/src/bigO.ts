// What is the Big O of the below function? (Hint, you may want to go line by line)
// Time complexity of O(n)
function funChallenge(input: number[]) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
    const anotherFunction = (i: number) => console.log(`index ${i}`);

    for (let i = 0; i < input.length; i++) { 
        anotherFunction(i); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

// BIG O(3 + 3n) ~ O(n)

// Exemple 1: Google interview 
// https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle

// Exemple 2: Find if array 1 and 2 have any elements in common
const array1 = ['a', 'b', 'c', 'z'];
const array2 = ['z', 'y', 'w'];
// Implementation 1 - Time Complexity O(a*b) ~ O(n^2)
// O(1) Space complexity 
function containsCommonItem1(arr1: number[], arr2: number[]) {
    // loop through array one, then for each element loop through and verify inside arr2
    for (let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) return true
        }      
    }
    return false;
}

// Implementation 1 - Time Complexity O(a+b)
// O(a) space complexity
// Common practice to effecience
function containsCommonItem2(arr1: number[], arr2: number[]) {
    // loop through array one, then transform into an object (hashmap/ key value),
    // this way we can verify if the index exist.
    let map: { [key: string]: boolean } = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true
        }
    };
    // arr1 to map will look like: 
    /**
     * {
     * a: true,
     * b: true,
     * c: true,
     * z: true
     * }
     */

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) return true;
    }
    return false;
} 

function containsCommonItem3(arr1: number[], arr2: number[]) {
    return arr1.some(item => arr2.includes(item))
}