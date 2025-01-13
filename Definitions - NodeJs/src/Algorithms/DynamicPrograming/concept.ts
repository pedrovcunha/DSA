/**
 * 1. Can be divided into subproblem?
 * recursive solution
 * are there repetitive subproblems?
 * memoize subproblems
 * 
 * It is an optimization technique using cache.
 * 
 * Memoization ~~~~ Caching
 * form of caching that return a cached result from a function based 
 * on its parameters considering the function is idepontent (always generates the same results)
 */

function addTo80(n: number) {
    console.log('long time');
    return n + 80;
}


function memoizedAddTo80() {
    let cache: { [key: number]: number } = {};

    return function(n: number) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = addTo80(n);
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();
console.log('1', memoized(5));
console.log('2', memoized(5));

/**
 * Fibonacci using recursion. O(2^n)
 * @param n 
 * @returns 
 */
let calculations = 0;
function fiboRecursive(n: number): number {
    calculations++;
    if (n <= 1) return n;

    return fiboRecursive(n-1) + fiboRecursive(n-2);
}

console.log('Slow fibonacci. 10th number:', fiboRecursive(10));
console.log(`Slow fibonacci took ${calculations} operations`);

// O(n)
function memoizedFibonacciRecursive() {
    let cache: {[key: number]: number} = {};

    const fib = (n: number) => {
        calculations++;

        if (cache[n]) return cache[n];
        else {
            if (n <= 1) return n;
            else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
      }
      return fib;
}

calculations = 0;
const fiboMemoized = memoizedFibonacciRecursive();
console.log('Fast fibonacci. 10th number:', fiboMemoized(10));
console.log(`Fast fibonacci took ${calculations} operations`);

// O(n) , bottom up solution
function fiboIteractive(n: number): number {
    if (n <= 1) return n;

    let sequence: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
        calculations++;
        const value = sequence[i-2] + sequence[i-1];
        sequence.push(value);
    }
    // Returns last item of array;
    return sequence[n]; // sequence.pop()
}

calculations = 0;
console.log('Iteractive fibonacci. 10th number:', fiboIteractive(10));
console.log(`Iteractive fibonacci took ${calculations} operations`);