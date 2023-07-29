import knightImg from './../assets/knight.svg'
import Graph from './graph';

class Knight{
  constructor(startpos, endpos, grid){
    this.startpos = startpos;
    this.endpos = endpos;
    this.grid = grid;
    this.setup();
  }

  setup(){
    let gridHTML = document.getElementById("grid");
    let image = new Image();
    let cellSize = Math.floor((900 / this.grid.size) * 0.9) + "px";
    console.log(cellSize)
    image.src = knightImg;
    image.style.width = cellSize;
    image.style.height = cellSize;
    //place the knight visibly
    //0,0 is top left
    let row = this.startpos[0];
    let column = this.startpos[1]


    let cell = row * this.grid.size + column;
    let cellHTML = gridHTML.childNodes[cell];
    cellHTML.style.backgroundColor = "black";
    cellHTML.appendChild(image)

    //mark the endpos
    row = this.endpos[0];
    column = this.endpos[1]

    cell = row * this.grid.size + column;
    cellHTML = gridHTML.childNodes[cell];
    cellHTML.style.backgroundColor = "red";

  }

  knight_moves(){
    //Start a graph from our knight's startpos
    let graph = new Graph();
    graph.addVertex(this.startpos);
    let queue = [];
    let visited = [];

    //Find all possible moves of the knight from a start point
    //Push them into a data structure
    //Check them all to see if they are the endpoint
    //If none are the endpoint, take each node as a new start point
    //Repeat

    //Find all possible moves from a start point
    //Push them all into the graph
    let adjacents = this.all_possible_moves(this.startpos);
    let curpos = this.startpos;

    for(let i = 0; i < adjacents.length; i++){
      graph.addVertex(adjacents[i])
      graph.addEdge(adjacents[i],curpos)
      queue.push(adjacents[i]);
    }

    //Traverse the graph to see if any of the points are the endpoint
    //Push them into "visited"
    //shift them from the queue as we go
    var get_keys = graph.AdjList.keys();
    //iterate over the vertices
    for(let i of get_keys){
      let get_values = graph.AdjList.get(i);
      
      //iterate over the adjacency list of each vertice
      for(let j of get_values){
        console.log("Comparing point "+ j + " with endpos " + this.endpos)
        //If we find the endpoint here,
        //Draw the path from the start to the endpos
        //Arrays must be converted or iterated through to be compared
        if(j.toString() === this.endpos.toString()){
          console.log("Endpoint found!");
          visited.push(j);
          return graph.findPathToRoot(graph, this.startpos, this.endpos);
        }
      }
    }
    // for(let i = 0; i < visited.length; i++){
    //   if(graph[i] = this.endpos){
    //     return queue[i];
    //   }
    //   visited.push(queue.shift());
    // }

    //if we don't find it, then start again
    //curpos = graph
  }

  all_possible_moves(position){
    const KNIGHT_MOVES = [[-1,-2],[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[1,-2],[2,-1]];
    let possibleMoves = [];

    for(let i = 0; i < 8; i++){
      if(this.check_validity([position[0] + KNIGHT_MOVES[i][0], position[1] + KNIGHT_MOVES[i][1]])){
        console.log(this.check_validity([position[0] + KNIGHT_MOVES[i][0], position[1] + KNIGHT_MOVES[i][1]]))
        possibleMoves.push([position[0] + KNIGHT_MOVES[i][0], position[1] + KNIGHT_MOVES[i][1]]);
      }
    }

    console.log(possibleMoves);
    return possibleMoves;
  }
  
  check_validity(position){
    if (position[0] < 0 || position[0] > this.grid.size){
      return false;
    }
    if(position[1] < 0 || position[1] > this.grid.size){
      return false;
    }
    return true;
  }
}

export default Knight;