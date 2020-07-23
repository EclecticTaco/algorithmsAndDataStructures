class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();

  }
  bubbleUp() {
    let idx = this.values.length - 1; // find last in array
    const element = this.values[idx]; 
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2); 
        let parent = this.values[parentIdx]; // parent of current ele
        if (element <= parent) break; //  stop once element is sorted
        this.values[parentIdx] = element; // replace parent with current ele
        this.values[idx] = parent; // replace current ele with parent
        idx = parentIdx; 
    }
  }
  extractMax() {
    let root = this.values[0];
    let minIdx = this.values.length - 1;
    let min = this.values[minIdx]
    this.values[minIdx] = root;
    this.values[0] = min;
    this.values.pop()
    this.cascade(0)
    return root;
  }
  cascade(index) {
    if (index >= this.values.length - 1) return;
    let parent = this.values[index];
    let leftChildIdx = (index * 2) + 1;
    let leftChild = this.values[leftChildIdx];
    let rightChildIdx = (index * 2) + 2;
    let rightChild = this.values[rightChildIdx]
    if (leftChild > parent && rightChild > parent) {
      if (leftChild > rightChild) {
        this.values[index] = leftChild; // swap old parent with leftChild
        this.values[leftChildIdx] = parent; 
        this.cascade(leftChildIdx);
        return;
      } else {
        this.values[index] = rightChild;
        this.values[rightChildIdx] = parent;
        this.cascade(rightChildIdx);
        return;
      }
    }
    if (leftChild > parent) {
      this.values[index] = leftChild; // swap old parent with leftChild
      this.values[leftChildIdx] = parent; 
      this.cascade(leftChildIdx);
      return;
    } else if (rightChild > parent) {
      this.values[index] = rightChild;
      this.values[rightChildIdx] = parent;
      this.cascade(rightChildIdx);
      return;
    }
    return;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log('before extract ', heap.values)
console.log('max (old root) ', heap.extractMax())
console.log('after extract ', heap.values)

