class Graph{
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex){
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1,vertex2){
         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v)=> v !== vertex2 );
         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v)=> v !== vertex1 );
    }
    removeVertex(vertex){
        while (this.adjacencyList[vertex].length){
            const adjacentVertix = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertix);
        }
        delete this.adjacencyList[vertex]
    }
    DFS(vertex){
        //variable to track the result
        const result = [],
            visited = {};
        let adjacencyList = this.adjacencyList;

        (function traverse(start) {
            if (!vertex) return null;
            result.push(vertex);
            visited[vertex] = true;
          adjacencyList[vertex].forEach(neighbour =>{
              if (!visited[neighbour]) {
                  return DFS(neighbour)
              }
          });
        })(start)

    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

graph.DFS("A");
