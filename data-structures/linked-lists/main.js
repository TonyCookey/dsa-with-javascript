

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
}
mLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null,
            },
        }
    },
    tail: {
        value: 16,
        next: null,
    },
};

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
console.log(myLinkedList);

