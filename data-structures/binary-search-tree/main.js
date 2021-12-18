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
    lookup(value) {
        let nodePointer = this.root

        while (nodePointer != null) {
            if (nodePointer.value == value) {
                return nodePointer
            }
            if (value < nodePointer.value) {
                nodePointer = nodePointer.left
            }
            else {
                nodePointer = nodePointer.right
            }
        }
        return false
    }
    isLeaf(node) {
        if (node.left == true && node.right == true && node.value !== null) {
            return true
        }
        return false
    }
    hasOneChild(node) {
        if (node.left == true || node.right == true) {
            return true
        }
        return false
    }
    remove(value) {
        let nodePointer = this.root
        let predecessor = null
        let successor = null

        while (nodePointer != null) {
            if (nodePointer.value == value) {
                // if the node is a leaf node - at the very end
                if (this.isLeaf(nodePointer)) {
                    if (value > predecessor.value) {
                        predecessor.right = null
                    } else {
                        predecessor.left = null
                    }
                    return
                }
                if (this.hasOneChild(nodePointer)) {
                    if (value < predecessor.value) {
                        predecessor.left = nodePointer.left
                    } else {
                        predecessor.right = nodePointer.right
                    }
                    return
                }
                successor = nodePointer.right
                while (this.isLeaf(successor)) {
                    successor = successor.left
                }

                successor.left = nodePointer.left
                successor.right = nodePointer.right
                if (predecessor.value > successor.value) {
                    predecessor.left = successor
                } else {
                    predecessor.right = successor
                }
                return
            }
            predecessor = nodePointer
            if (value < nodePointer.value) {

                nodePointer = nodePointer.left
            }
            else {
                nodePointer = nodePointer.right
            }

        }
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(3)
bst.insert(13)
bst.insert(1)
console.log(bst.lookup(1))

