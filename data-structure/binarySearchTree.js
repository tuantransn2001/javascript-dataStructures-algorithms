class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class MyBinarySearchTree {
  constructor() {
    this.root = null;
  }
git
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let newNode = new Node(value);
      // ? compare insert value with current node value
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // ? Less than => go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // ? Equal , greater => go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else if (value === currentNode.value) {
      return currentNode;
    }
  }
}

module.exports = MyBinarySearchTree;
