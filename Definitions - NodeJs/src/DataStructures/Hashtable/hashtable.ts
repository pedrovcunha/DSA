/**
 * Search O(1)
 * Lookups O(1)
 * Inserts O(1)
 * Deletes O(1)
 */

// Objects in JS are hashtables
// keys must be strings
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: () => console.log("ahhhhhh")
}
user.age // O(1)
user.scream // O(1)

// Hashtable animation tool
// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

// Hashtable collisions
// O(n/k) where k is the size of our hashtable
// linkedlist is a way to solve this issue.
// WIKI: https://en.wikipedia.org/wiki/Hash_table

// A hash functions in simply a function that generates a value of fixed length for each input that gets.
// Always one way. Nearly impossible to revert the output back to input
// e.g. md5 hash - idempontent (always produce the same results given an input): https://www.miraclesalad.com/webtools/md5.php

// Map - accept anything as key
const map = new Map();
// Set
const set = new Set();

class Hashtable {
    data: any[];

    /** Set the size limit in memory for the hashtable */
    constructor(size: number) {
        this.data = new Array(size);
    }

    _hash(key: string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            
        }
        return hash;
    }

    set(key: string, value: number) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        // console.log(this.data);
        return this.data;
    }

    get(key: string) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        // currentBucket = []; with array items => [[grapes, 1], [apples, 3], [oranges, 4]]
        // currentBucket[1][1] = 3
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // loop through potential hashtable collisions
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    keysArray.push(this.data[i][0]);
                }
            }
        }
        return keysArray;
    }
}
const myHashtable = new Hashtable(50);
myHashtable.set('grapes', 10000);
myHashtable.set('apples', 54);
myHashtable.set('oranges', 2);
const res = myHashtable.get('apples');
console.log(res);
console.log(myHashtable.keys());