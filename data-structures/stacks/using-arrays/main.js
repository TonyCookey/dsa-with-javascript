

class Stack {
    constructor() {
        this.data = []
    }
    peek() {
        if (this.data.length == 0) {
            return null
        }
        return this.data[this.data.length - 1]
    }
    push(value) {
        this.data.push(value)
    }
    pop() {
        this.data.pop()
    }
    isEmpty() {
        console.log(this.data.length == 0);
        return this.data.length == 0
    }

}

const myStack = new Stack();
myStack.push("Tony")
myStack.push("Cookey")
myStack.push("Starboy")
myStack.pop()
myStack.pop()
myStack.peek()
myStack.isEmpty()
myStack