// visualise linked lists: https://visualgo.net/en/list


// Linked List Node item
class LlNode {
    value: number;
    next: LlNode | null;

    constructor(value: number, next: LlNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: LlNode;    // First item
    tail: LlNode;    // Last item
    length: number;

    constructor(value: number) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    // Insert at the beginning of the linked list
    // O(1)
    public prepend (value: number) {
        const newNode = new LlNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Insert at the end of the linked list
    // O(1)
    public append (value: number): void {
        const newNode = new LlNode(value);        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return;
    }

    public printList() {
        const array = [];
        let currentNode: LlNode | null = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    // O(n), index 
    public insert(index: number, value: number): void {
        if (index === 0) {
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new LlNode(value);
        const leader = this.tranverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

    }

    tranverseToIndex(index: number) {
        let counter = 0;
        let currentNode: LlNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next as LlNode;
            counter++;
        }
        return currentNode;
    }

    // O(n)
    remove(index: number) {
        // header
        if (index === 0) {
            this.head = this.head.next as LlNode;
            this.length--;
            return;
        }

        const leader = this.tranverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode?.next ? unwantedNode.next : null;
        this.length--;
        if(index >= this.length) this.tail = leader;

        return;
    }

    /** IMPORTANT */
    reverse() {
        if (!this.head.next) return this.head;

        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp as LlNode;
        }
        this.head.next = null; // same as this.tail.next = null;
        this.head = first;
        return this;
    }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList()
myLinkedList.insert(2, 99);
myLinkedList.printList()
myLinkedList.insert(20, 88);
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
