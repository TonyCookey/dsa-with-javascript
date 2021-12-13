

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // set the tail to the last value just added
        this.tail.next = {
            value,
            next: null
            prev: this.head
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

        if (index < 0 || index > this.length) {
            return 'invalid index'
        }

        // get the node leading/preceeding the node at the index you want to remove at
        const leader = this.traverseTill(index - 1)

        // get the toBeRemovedNode
        const toBeRemovedNode = leader.next

        // set the node follwing the toBeRemovedNode as the next node to the leader node 
        leader.next = toBeRemovedNode.next

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


let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
myLinkedList.append(19);
myLinkedList.prepend(1);
myLinkedList.insertAt(2, 14)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
console.log(myLinkedList);

