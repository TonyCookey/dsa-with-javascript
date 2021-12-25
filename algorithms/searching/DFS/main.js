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
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    DFSInorder(node, list) {
        if (node.left) {
            this.DFSInorder(node.left, list)
        }
        list.push(node.value)
        if (node.right) {
            this.DFSInorder(node.right, list)
        }
        return list
    }
    DFSPreorder(node, list) {
        list.push(node.value)
        if (node.left) {
            this.DFSInorder(node.left, list)
        }
        if (node.right) {
            this.DFSInorder(node.right, list)
        }
        return list
    }


}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
const result = tree.DFSPreorder(tree.root, [])
result

//     9
//  4     20
//1  6  15  170
