class Graph{
  constructor(position){
    this.root = new myNode(position, null)
  }

  //Alright we're in the middle of implementing a graph so that I can have a tree thing to track which nodes belong to the path and how to get to the end.
  
}

class myNode{
  constructor(value, parent){
    this.value = value;
    this.children = [];
    this.parent = []
  }
}

export default [Graph, myNode];
