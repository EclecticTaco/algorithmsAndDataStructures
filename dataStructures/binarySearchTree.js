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
    traverse(this.root)
  }
}
/* 
create new node
  start at root (pass in val and node)

  if no root, set node to root 

  if root 
    check if val is greater than or less than
    if greater 
      if there is no node to the right
        set new node to right
      if there is node to right
        pass in that node into function recursively
    if less
      if no node to left
        set new node to left
      if node to left
        pass in that node into func recursively
*/
