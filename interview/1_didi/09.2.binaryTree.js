

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

    // 广度优先遍历
    this.levelOrderTraversal = function (callback) {
        if (this.root !== null) {
            const queue = [];
            queue.push(this.root);
            while (queue.length !== 0) {
                let currNode = queue.shift();
                callback(currNode.key);
                if (currNode.left) {
                    queue.push(currNode.left);
                }
                if (currNode.right) {
                    queue.push(currNode.right);
                }
            }
        }
    }

    // 查找最小值
    this.findMinNode = function(node) {
        if (node) {
            if (node.left) {
                return this.findMinNode(node.left);
            } else {
                return node.key;
            }
        }
    }
    this.findMin = function() {
        this.findMinNode(this.root);
    }

    this.findMaxNode = function(node) {
        if (node) {
            if (node.right) {
                this.findMaxNode(node.right);
            } else {
                console.log(node.key);
            }
        }
    }
    // 查找最大值
    this.findMax = function() {
        this.findMaxNode(this.root);
    }

    // 查找指定值

    // 注意：
    // 1. 将 node === null 的情况单独拆成一个if，作为递归的出口！！！
    // 2. 为了能够将递归的结果返回，所以要在每一个递归的方法之前增加 return ！！！
    this.searchNode = function(node, key) {
        if (node === null) {
            return false;
        }

        if (node.key > key) {
            return this.search(node.left, key);
        } else if (node.key < key) {
            return this.search(node.right, key);
        } else {
            return true;
        }
    }
    this.search = function(key) {
        return this.searchNode(this.root, key);
    }

    // 删除节点：
    this.deleteNode = function(node, key) {
        if (node === null) {
            return null;
        }

        if (node.key > key) {
            node.left = this.deleteNode(node.left, key);
            return node;
        } else if (node.key < key) {
            node.right = this.deleteNode(node.right, key);
            return node;
        } else {
            // 叶子节点
            if (node.left === null && node.right === null) {
                return null;
            // 单支子节点
            } else if (node.left === null || node.right === null) {
                if (node.left) {
                    return node.left;
                }
                return node.right;
            // 双支子节点
            } else {
                const rightChildMin = this.findMinNode(node.right);
                this.deleteNode(node.right, rightChildMin);
                node.key = rightChildMin;
                return node;
            }
        }
    }
    this.delete = function(key) {
        this.deleteNode(this.root, key);
    }
}


const arr = [8, 3, 10, 1, 6, 14, 4, 7, 13];

const bTree = new BinaryTree(arr).init();

function print(key) {
    console.log(key);
}

// 中序遍历，所有节点从小到大一次输出；
// bTree.inOrderTraversal(print);

// 前序遍历，是为了最快的复制一颗二叉树；
// bTree.preOrderTraversal(print);

// 后序遍历。操作系统、文件系统的遍历之中；
// bTree.postOrderTraversal(print);

// 广度优先遍历：
// bTree.levelOrderTraversal(print);

// 查找最小值：
// bTree.findMin();

// 查找最大值：
// bTree.findMax();

// 查找指定值：
// console.log(bTree.search(2));

// 删除指定值之后遍历：
// 1. 删除叶子节点：
// bTree.delete(1);
// bTree.inOrderTraversal(print);

// 2. 删除单支子节点:
// bTree.delete(10);
// bTree.inOrderTraversal(print);

// 3. 删除双支子节点：
bTree.delete(3);
bTree.inOrderTraversal(print);
