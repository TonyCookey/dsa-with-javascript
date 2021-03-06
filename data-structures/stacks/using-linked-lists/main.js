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
        if (this.length == 0) {
            this.bottom = newNode
        }
        newNode.next = this.top
        this.top = newNode
        this.length++

    }
    pop() {
        this.top = this.top.next
        if (this.top === this.bottom) {
            this.bottom = null
        }
        this.length--
    }
    isEmpty() {
        console.log(this.length == 0);
        return this.length == 0
    }

}

const myStack = new Stack();
myStack.push("Tony")
myStack.push("Cookey")
myStack.push("Starboy")
myStack.pop()
myStack.pop()
myStack.pop()
myStack.peek()
myStack.isEmpty()
myStack