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
    depthFirstSearch(start){
        //variable to track the result
        const result = [],
            visited = {};
        let adjacencyList = this.adjacencyList;

        (function traverse(vertex) {
            if (!vertex) return null
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour =>{
              if (!visited[neighbour]) {
                  return traverse(neighbour);
              }
          });
        })(start);
        return result;
    }
    dfsItrative(start){
        let visited = {};
        let result = [];
        let stack = [start];
        visited[start] = true;
        let currentVertex;
        while (stack.length){
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }

        return result;
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



// graph.depthFirstSearch("A");

console.log(graph.dfsItrative("A"));

// console.log(graph.depthFirstSearch("A"));
