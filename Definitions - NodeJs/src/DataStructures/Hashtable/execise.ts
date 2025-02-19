/**
 * Google Questions
 * Given an array, give me the first recurring character 
 * [2, 5, 1, 2, 3, 5, 1, 2, 4]:
 * It should return 2
 * 
 * Given an array [2, 1, 1, 2, 3, 5, 1, 2, 4]
 * It should result 1
 * 
 * Given an array = [2, 3, 4, 5]
 * It should return undefined
 */

// First option. compare each element with the rest of the sequence. 
// O(n^2)
const firstRecurringCharacter = (arr: number[]) => {    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

// O(n)
const firstRecurringCharacter2 = (arr: number[]) => {
    let map: {[key: number]: number} = {};
    
    for (let i = 0; i <= arr.length; i++) {
        console.log(map);
        if (map[arr[i]] !== undefined) {
            return arr[i];
        }   
        map[arr[i]] = i;
    }
    return undefined;
}

let response = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log('res: ', response);