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
        let newNode = new Node(value)

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

}

function isValidBST(node) {
    function validateBST(node, min, max) {
        if (!node) {
            return true
        }
        if (!(node.value > min && node.value < max)) {
            return false
        }
        return (validateBST(node.left, min, node.value) && validateBST(node.right, node.value, max))
    }
    return validateBST(node, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(3)
bst.insert(13)
bst.insert(1)
console.log(isValidBST(bst.root))

