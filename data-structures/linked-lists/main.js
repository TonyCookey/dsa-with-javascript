

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // set the tail to the last value just added
        this.tail.next = {
            value,
            next: null
        }
        // increase the length property
        this.length++

        this.tail = this.tail.next
    }
    prepend(value) {
        this.head = {
            value,
            next: this.head
        }
        this.length++
    }
}


let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
myLinkedList.append(19);
myLinkedList.prepend(1);
console.log(myLinkedList);

