class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    const traverse = (node) => {
      if (node.val > val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        traverse(node.left)
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        traverse(node.right)
      }
    }
    return traverse(this.root)
  }
  find(val) {
    if (!this.root) return undefined;

    const traverse = (node) => {
      if (node.val === val) return node;
      if (!node.left && !node.right) return undefined;

      if (val > node.val) return traverse(node.right);
      if (val < node.val) return traverse(node.left);
    }
    return traverse(this.root);
  }
  contains(val) {
    if (!this.root) return false;

    const traverse = (node) => {
      if (node.val === val) return true;
      if (!node.left && !node.right) return false;

      if (val > node.val) return traverse(node.right);
      if (val < node.val) return traverse(node.left);
    }
    return traverse(this.root);
  }
}
