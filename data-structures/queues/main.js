class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        let newNode = new Node()
        newNode.value = value
        if (this.length == 0) {
            this.first = newNode
            this.last = newNode
            this.length++
            return
        }
        this.last.next = newNode
        this.last = newNode
        this.length++

    }
    dequeue() {
        this.first = this.first.next
        if (this.length == 1) {
            this.last = null
        }
        this.length--
    }
    isEmpty() {
        console.log(this.length == 0);
        return this.length == 0
    }

}

const myQueue = new Queue();
myQueue.enqueue("Tony")
myQueue.enqueue("Badmus")
myQueue.enqueue("Gloria")
myQueue.dequeue()
myQueue.dequeue()
myQueue