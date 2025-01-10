// add a method remove() to the linked list that deletes a node to the specified index.
class DLlNode {
    value: number;
    next: DLlNode | null;
    prev: DLlNode | null;

    constructor(
        value: number, 
        next: DLlNode | null = null,
        prev: DLlNode | null = null
    ) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

}

class DoublyLinkedList {
    head: DLlNode;
    tail: DLlNode;
    length: number;

    constructor(value: number) {
        this.head = new DLlNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number) {
        const newNode = new DLlNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value: number) {
        const newNode = new DLlNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this; 
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next as DLlNode; 
        }
        return array;
    }

    insert(index: number, value: number){
        //Check for proper parameters;
        if(index >= this.length) {
            console.log('yes')
            return this.append(value);
        }
        
        const newNode = new DLlNode(value);
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next as DLlNode;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index: number) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
        currentNode = currentNode.next as DLlNode;
        counter++;
        }
        return currentNode;
    }

    remove(index: number) {
        // Check Parameters      
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next as DLlNode;
        const follower = unwantedNode.next as DLlNode;
        follower.prev = leader;
        leader.next = follower;
        this.length--;
        return this.printList();
    }
}
  
  let myDLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.remove(2);
  
  
  
  