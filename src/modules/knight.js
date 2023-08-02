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
    let curpos = this.startpos;
    let adjacents = [];

    queue.push(curpos);
    //Search through the chess board loop start
    let j = 0;
    while(j < 6){
      console.log("Starting loop!")
      console.log(queue.length);
      //Go through each thing in the queue
      for(let i = 0; i < queue.length; i++){
        console.log("Current position check is on " + queue[i]);
        //Check if it's the endpoint
        //If it is, find the path to that point from the graph and return
        if(queue[i].toString() === this.endpos.toString()){
          console.log("Endpoint found!");
          let path = graph.findPathToRoot(graph, this.startpos, this.endpos)
          console.log("Path to the endpoint is: " + path);
          return path;
        }
        //Else remove the first element of the queue
        //Push all the adjacents of the next point into the queue and visited
        else{
          //Find all moves possible given a start point
          adjacents = this.all_possible_moves(curpos);
          //Push them into the graph and queue if they're a new space
          //WRITE THING TO COMPARE THE ITEMS AFTER 

          visited.find(((element) => (element[0] == adjacents[i][0]) && (element[1] == adjacents[i][1])))
          for(let i = 0; i < adjacents.length; i++){
            console.log("The list of visited nodes is now: ")
            console.log(visited);
            console.log("Is " + adjacents[i].toString() + " in the visited")
            console.log(visited.find((element) => this.arraycompare(element, adjacents[i])))
            if(!visited.find((element) => this.arraycompare(element, adjacents[i]))){
              graph.addVertex(adjacents[i])
              graph.addEdge(adjacents[i],curpos)
              queue.push(adjacents[i])
              visited.push(adjacents[i])
            }
          }
          queue.shift();
          console.log("The queue is now " + queue)
          console.log("The list of visited nodes is now " + visited)
        }
      }
      j++;
    }
  }

  arraycompare(element, subject){
    if(element[0] == subject[0] && element[1] == subject[1]){
      return true;
    }
    else{
      return false;
    }
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

    console.log("Possible hops are: " + possibleMoves);
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