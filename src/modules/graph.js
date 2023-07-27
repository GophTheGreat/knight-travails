class Graph{
  constructor(noOfVertices){
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v){
    //initialize the adjacency list with a
    //null array
    this.AdjList.set(v, []);
    this.noOfVertices++;
  }

  addEdge(v, w){
    //get the list for vertex v and put the 
    //vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    //since the graph is undirected,
    //add an edge from w to v also
    this.AdjList.get(w).push(v);
  }
  
  printGraph(){
    //get all the vertices
    var get_keys = this.AdjList.keys();

    //iterate over the vertices
    for(let i of get_keys){
      //get the corresponding adjacency list
      //for the vertex
      let get_values = this.AdjList.get(i);
      let conc = "";

      //iterate over the adjacency list
      //concatenate the values into a string
      for(let j of get_values){
        conc += j + " ";
      }

      console.log(i + " -> " + conc);
    }
  }
  
}


export default Graph;
