class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }

  removeVertex (vertex) {
    if (this.adjacencyList[vertex].length === 0) {
      delete this.adjacencyList[vertex];
    } else {
      for (let i = 0; i < this.adjacencyList[vertex].length; i += 1) {
        this.removeEdge(vertex, this.adjacencyList[vertex][i]);
      }
      delete this.adjacencyList[vertex];
    }
  }
}

const graph = new Graph();
graph.addVertex('San Francisco')
graph.addVertex('Los Angeles')
graph.addVertex('Fresno')
graph.addVertex('Tokyo')
graph.addEdge('San Francisco', 'Tokyo')
graph.addEdge('San Francisco', 'Fresno')
graph.removeVertex('Tokyo')
