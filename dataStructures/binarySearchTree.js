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
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }  
          current = current.left;
        } else if (val > current.val) {
            if (current.right === null) {
              current.right = newNode;
              return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(2)
tree.insert(5)
tree.insert(20)
console.log(tree)