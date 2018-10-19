function BinaryTree(arr) {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.init = function() {
        this.root = new Node(arr.shift());
        this.currNode = this.root;

        arr.forEach(function(item) {
            this.insertNode(this.currNode, new Node(item));
        }, this);

        return this;
    }

    this.insertNode = function(currNode, newNode) {
        if (newNode.key > currNode.key) {
            if (!this.currNode.right) {
                this.currNode.right = newNode;
                this.currNode = this.root;
            } else {
                this.currNode = this.currNode.right;
                this.insertNode(this.currNode, newNode);
            }
        } else {
            if (!this.currNode.left) {
                this.currNode.left = newNode;
                this.currNode = this.root;
            } else {
                this.currNode = this.currNode.left;
                this.insertNode(this.currNode, newNode);
            }
        }
    }

    // 递归实现 中序遍历
    this.inOrderTraversalNode = function(node, callback) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.key);
            this.inOrderTraversalNode(node.right, callback);
        }
    }
    this.inOrderTraversal = function(callback) {
        this.inOrderTraversalNode(this.root, callback);
    }

    // 先序遍历
    this.preOrderTraversalNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            this.preOrderTraversalNode(node.left, callback);
            this.preOrderTraversalNode(node.right, callback);
        }
    }
    this.preOrderTraversal = function(callback) {
        this.preOrderTraversalNode(this.root, callback);
    }

    // 后序遍历
    this.postOrderTraversalNode = function(node, callback) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, callback);
            this.postOrderTraversalNode(node.right, callback);
            callback(node.key);
        }
    }
    this.postOrderTraversal = function(callback) {
        this.postOrderTraversalNode(this.root, callback);
    }

    this.reverseNode = function(node) {
        if (node !== null) {
            if (node.left || node.right) {
                let middle = node.left;
                node.left = node.right;
                node.right = middle;
            }
            if (node.left) {
                this.reverseNode(node.left);
            }
            if (node.right) {
                this.reverseNode(node.right);
            }
        }
    }
    this.reverse = function() {
        this.reverseNode(this.root);
    }
}


const arr = [8, 3, 10, 1, 6, 14, 4, 7, 13];

const bTree = new BinaryTree(arr).init();

function print(key) {
    console.log(key);
}

bTree.inOrderTraversal(print);

bTree.reverse();

console.log('after reverse');
bTree.inOrderTraversal(print);
