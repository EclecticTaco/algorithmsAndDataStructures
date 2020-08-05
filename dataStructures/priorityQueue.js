class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    this.bubbleUp();

  }
  bubbleUp() {
    let idx = this.values.length - 1; 
    const element = this.values[idx]; 
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2); 
        let parent = this.values[parentIdx]; 
        if (element.priority <= parent.priority) break; 
        this.values[parentIdx] = element; 
        this.values[idx] = parent; 
        idx = parentIdx; 
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;
        this.cascade(0);
    }
    return min;
  }
  cascade(index) {
    if (index >= this.values.length - 1) return;
    let parent = this.values[index];
    let leftChildIdx = (index * 2) + 1;
    let leftChild = this.values[leftChildIdx];
    let rightChildIdx = (index * 2) + 2;
    let rightChild = this.values[rightChildIdx]
    if (leftChild.priority) {
      if (leftChild.priority > parent.priority && leftChild.priority >= rightChild.priority) {
        this.values[index] = leftChild; 
        this.values[leftChildIdx] = parent; 
        return this.cascade(leftChildIdx);
      }
    } else if (rightChild.priority) {
      if (rightChild.priority > parent.priority && rightChild.priority >= leftChild.priority) {
        this.values[index] = rightChild;
        this.values[rightChildIdx] = parent;
        return this.cascade(rightChildIdx);
      }
    }
    return;
  }
}

// line 46 and 50 errors out. Cannot read priority of undefined 
//  solution: check if left/right children are truthy 
// in binaryHeap, no property is ready, skips if statements 

let ER = new priorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
console.log('dequeue: ', ER.dequeue()) 
console.log(ER)