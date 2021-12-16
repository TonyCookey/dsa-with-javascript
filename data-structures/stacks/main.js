class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value) {
        let newNode = new Node()
        newNode.value = value
        newNode.next = this.top
        this.top = newNode
        this.length++

    }
    pop() {
        this.top = this.top.next
        this.length--
    }
    isEmpty() {
        return this.length == 0
    }

}

const myStack = new Stack();