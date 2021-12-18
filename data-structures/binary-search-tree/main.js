class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node()
        newNode.value = value

        // check if the root node is empty
        if (this.root == null) {
            this.root = newNode
            return
        }
        let nodePointer = this.root
        while (nodePointer != null) {
            if (value < nodePointer.value) {
                if (nodePointer.left !== null) {
                    nodePointer = nodePointer.left
                }
                else {
                    nodePointer.left = newNode
                    return
                }
            } else {
                if (nodePointer.right !== null) {
                    nodePointer = nodePointer.right
                }
                else {
                    nodePointer.right = newNode
                    return
                }
            }

        }
    }
    lookup(value) {
        //Code here
    }
    // remove
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(3)
bst.insert(13)
bst.insert(1)
console.log(bst.root)