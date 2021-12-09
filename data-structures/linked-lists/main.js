

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
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insertAt(index, value) {
        if (index == 0) {
            return this.prepend(value)
        }
        if (index >= this.length) {
            return this.append(value)
        }
        // get the node leading/preceeding the node at the index you want to insert at
        const leader = this.traverseTill(index - 1)
        const nodeAtIndex = leader.next
        //insert the new node at next of the leader
        leader.next = {
            value,
            next: null
        }
        this.length++
        // add the follwing nodes athe back of the new node
        leader.next.next = nodeAtIndex


    }
    remove(index) {

        // get the node leading/preceeding the node at the index you want to insert at
        const leader = this.traverseTill(index - 1)
        leader.next = leader.next.next
        //insert the new node at next of the leader

        this.length--
    }
    traverseTill(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

}

// { head: { value: 1, next: { value: 10, next: [Object] } },
//   tail: { value: 19, next: null },
//   length: 6 }

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
myLinkedList.append(19);
myLinkedList.prepend(1);
console.log(myLinkedList.insertAt(2, 14))
myLinkedList.remove(2)
console.log(myLinkedList.printList())
console.log(myLinkedList);

