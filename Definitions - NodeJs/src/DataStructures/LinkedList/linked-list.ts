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
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

    }

    traverseToIndex(index: number) {
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

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode?.next ? unwantedNode.next : null;
        this.length--;
        if(index >= this.length) this.tail = leader;

        return;
    }

    /** IMPORTANT */
    reverse() {
        if (!this.head.next) return this.head;

        // Set the new tail before going through the whole list
        this.tail = this.head;

        let first = this.head;        
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
// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.printList()
// myLinkedList.insert(2, 99);
// myLinkedList.printList()
// myLinkedList.insert(20, 88);
// console.log(myLinkedList);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.printList();
// myLinkedList.reverse();

function reverseBetween(
    head: LlNode | null,
    left: number,
    right: number
): LlNode | null {
    if (!head || !head.next) return head;
  
    let leader = traverseToNode(head, left - 1);
    let tail = traverseToNode(head, right);

    // if we start from head, first will be the head itself as there is no previous node.
    let first = left === 1 ? leader : leader.next;
    // let tail = first; // will become the new temporary tail so we can point to the last element / right element
    let second: LlNode | null = first?.next ?? null;
    let reverseCount = 0;
    let max = right - left;

    while (reverseCount < max) {      
        let temp: LlNode | null = second?.next ?? null;
        second!.next = first;
        first = second;
        second = temp;
        
        console.log("first val: ", first?.value);
        console.log("second val: ", second?.value);
        reverseCount++;
    }
  
    // If left > 1, it means we should preserve the leader at the beginning so we can point the leader to the new sequence.
    // e.g. 1 - 2 - 3 - 4 - 5, where left is 2 and right is 4
    // result 1 -> 4 - 3 - 2 -> 5, "1" will be the preserved leader, so we can point 1 to the inverted sequence
    if (left > 1) leader.next = first; 
    
    // Note first will be the last of the original sequence and first of the new sequence.
    // Considering the original sequence, if the right index is greater than our last element in "first",
    // it means we need to point our last element to the raimaining part of the sequence.
    // e.g. 1 - 2 - 3 - 4 - 5, where left is 2 and right is 4
    // result 1 -> 4 - 3 - 2 -> 5, we need to point "2" to "5".
    // Otherwise it means the last element on the right is the last element of our reversing process and we can return the head as usual
    if (first?.value && right > first?.value) {
        first.next = tail;
    } else { // else the last element is the tail itself
        first!.next = null;
    }
   
    return leader;
}
  
function traverseToNode(head: LlNode, index: number): LlNode {
    let currentNode = head;
    let count = 0;
  
    while (count != index) {
      currentNode = currentNode.next as LlNode;
      count++;
    }
  
    return currentNode;
}

// console.log(reverseBetween(new LlNode(3, new LlNode(5)), 1, 2));
console.log(reverseBetween(new LlNode(1, new LlNode(2, new LlNode(3, new LlNode(4, new LlNode(5))))), 2, 4));
