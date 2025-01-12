/**
 * Stack overflow problem.
 * Add this function to this browser and look at the Call Stack on sources tab
 * no function call gets popped, and eventually we run out of memory
 * @returns NA
 */
function inseption() {
    debugger;
    return inseption();
}

/**
 * Base case: stop calling the function when this happen
 * Recursive case: keep calling the function while this happen
 */
let counter = 0;
function inseption2() {
    console.log(counter);
    if (counter > 3) return 'done';

    counter++;
    return inseption2();
}

/**
 * Write two functions that finds the factorial of any number. 
 * One should use recursive, the other should just use a for loop
 * O(n)
 */
function factorialRecursive(n: number): number {
    if (n <= 1) return 1;

    return n * factorialRecursive(n - 1);
}

// O(n)
function factorialIterative(n: number): number {
    let result = n;

    while (n > 1) {
        result *= n-1;
        n--;
    }

    return result;
}
  

/**
 * Get the nth number of the fibonacci sequence
 * fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 * where nth = n -1 + n - 2
 * O (2^N) Exponential - recursive algorithms that solve a problem of size N.
 * @param n 
 * @returns 
 */
function fibonacci(n: number): number
{
    if (n <= 1) return n;

    return fibonacci(n-1) + fibonacci(n-2)
}

// O(n)
function fibonacciIteractive(n: number): number {
    if (n <= 1) return n;

    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        const value = sequence[n-1] + sequence[n-2];
        sequence.push(value);
    }

    // Returns last item of array;
    return sequence.at(-1)!; // sequence[n]
}

// Nodes
// Every tiem you are using a tree or converting something into a tree, 
// consider recursion.
// 1. Divided into a number of subproblems that are smaller instances of the same problem.
// 2. Each instance of the subproblem is identical in nature.
// 3. The solutions of each subproblem can be conbined to solve the problem at hand.
// Divide and coquer using recursion

function reverseString(str: string): string {
    if (str.length === 0) return '';

    return str.substring(1) + str.charAt(0)
}