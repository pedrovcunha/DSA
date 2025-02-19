// Queue - FIFO
/**
 * Lookup O(n)
 * Enqueue O(1)
 * Dequeue O(1)
 * Peek O(1)
 */
// can build with arrays or linked lists
// better with linked lists
// every time we add or remove anything from the array, we need to shift all the items inside the array
// leading to a O(n) operation while if we use a linked list it will be O(1)

class QueueNode {
    value: string;
    next: QueueNode | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: QueueNode | null;
    last: QueueNode | null;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value: string) {
        const newNode = new QueueNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last!.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        
        const holdingPointer = this.first;
        this.first = holdingPointer.next;
        this.length--;
        return this;
    }
}
const myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.enqueue('Joy'));
console.log(myQueue.enqueue('Matt'));
console.log(myQueue.enqueue('Pavel'));
console.log(myQueue.enqueue('Samir'));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());