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
}

let graph = new Graph();

graph.addVertex('sagar');
graph.addVertex('sandy');
graph.addVertex('ghanshyam');

graph.addEdge('sagar','sandy');
graph.addEdge('sagar','ghanshyam');

graph.removeVertex('sagar');

console.log(graph);
