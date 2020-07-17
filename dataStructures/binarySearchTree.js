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

      if (val > node.val) traverse(node.right);
      if (val < node.val) traverse(node.left);
    }
    traverse(this.root);
  }
}
/* 
if there is no root
  return undefined

pass root into find func
  if node val and val match
    return node
  if node does not have left or right
    return undefined

  if val is greater than node val
    pass right node into find func
  if val is less than node val
    pass left node into find func

    
*/

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.find(2))