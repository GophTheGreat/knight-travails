/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    // initialize the adjacency list with a
    // null array
    this.AdjList.set(v, []);
    this.noOfVertices += 1;
  }

  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // since the graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    // get all the vertices
    const getKeys = this.AdjList.keys();

    // iterate over the vertices
    for (const i of getKeys) {
      // get the corresponding adjacency list
      // for the vertex
      const getValues = this.AdjList.get(i);
      let conc = '';

      // iterate over the adjacency list
      // concatenate the values into a string
      for (const j of getValues) {
        conc += `${j} `;
      }

      console.log(`${i} -> ${conc}`);
    }
  }

  findPathToRoot(graph, start, end) {
    console.log(`Searching for path to root from ${end} to ${start}`);
    const visited = new Set();
    const parentMap = new Map();

    function depthFirstSearch(node, parentNode) {
      console.log(`Searching for ${node} From parent ${parentNode}`);
      visited.add(node.toString());
      // Every time we search, add a node to the parentMap
      if (parentNode) {
        parentMap.set(node.toString(), parentNode.toString());
      } else {
        parentMap.set(node.toString(), parentNode);
      }
      console.log(node);
      console.log(end);
      console.log(node === end);

      if (node.toString() === end.toString()) {
        console.log(`${node} is the endpoint!`);
        return true; // Found the endpoint
      }

      console.log(`Adj list .get = ${graph.AdjList.get(node)}`);
      console.log(graph.AdjList.get(node));
      // For every neighbor to the start node
      for (const neighbor of graph.AdjList.get(node)) {
        console.log(`Checking neighbor ${neighbor}`);
        // If our "visited" set does not have this neighbor
        if (!visited.has(neighbor.toString())) {
          console.log(`Adding ${neighbor} to visitedpath`);
          // And traverse down this neighbor
          if (depthFirstSearch(neighbor, node)) {
            // At some point the "node" that we feed to depthFirstSearch
            // will be the endpoint
            console.log(`Found! We found ${neighbor}!`);
            return true; // Endpoint found in child subtree
          }
        }
      }
      return false; // Endpoint not found in this subtree
    }

    // Check is the endpoint is reachable from the start
    if (!depthFirstSearch(start, null)) {
      return null;
    }
    // Reconstruct the path from endpoint to root using parentMap
    const pathToRoot = [end];
    let currentNode = end;
    parentMap.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    console.log(`Current is ${currentNode}`);
    console.log(`Current is ${currentNode.toString()}`);

    console.log(currentNode !== start);
    while (currentNode !== start && currentNode !== null) {
      console.log(`This shouldn't read if currentNode is null ${currentNode}`);
      console.log(`Drawing path to root. Currently at ${pathToRoot}`);
      const currentNodeString = JSON.stringify(currentNode);
      console.log(currentNodeString);
      console.log(parentMap.get(currentNodeString));
      currentNode = parentMap.get(currentNode.toString());
      if (currentNode === null) { break; }
      console.log(currentNode);
      pathToRoot.unshift((JSON.parse(`[${currentNode}]`)));
      console.log(currentNode);
    }

    console.log(pathToRoot);
    return pathToRoot;
  }
}

export default Graph;
