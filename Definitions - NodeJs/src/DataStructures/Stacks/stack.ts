// Stacks - LIFO
/**
 * Lookup O(1)
 * Push O(1)
 * Pop O(1)
 * Peek O(1)
 */
// can build with arrays or linked lists
// Both are good
// E.g of stack is browser history

class StackNode {
    value: string;
    next: StackNode | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    top: StackNode | null;
    bottom: StackNode | null;
    length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // top item from stack
    public peek() {
        return this.top;
    }

    public push(value: string) {
        const newNode = new StackNode(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    public pop() {
        if (this.length === 0) { return null;}
        if (this.top === this.bottom) { 
            this.bottom = null;
        }
        this.top = this.top!.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
console.log(myStack.pop());
