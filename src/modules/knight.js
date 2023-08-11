/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-loop-func */
import knightImg from '../assets/knight.svg';
import Graph from './graph';

class Knight {
  constructor(grid) {
    this.grid = grid;
    this.setup();
  }

  setup() {
    if (this.grid.startpos[0] === -1) {
      return;
    }
    console.log('starting setup');
    console.log(this.grid);
    const gridHTML = this.grid.gridDiv;
    const image = new Image();
    const cellSize = `${Math.floor((600 / this.grid.size) * 0.9)}px`;
    console.log(cellSize);
    console.log(gridHTML);
    image.src = knightImg;
    image.style.width = cellSize;
    image.style.height = cellSize;
    // place the knight visibly
    // 0,0 is top left
    let [row, column] = this.grid.startpos;
    let cell = row * this.grid.size + column;
    let cellHTML = gridHTML.childNodes[cell];
    cellHTML.style.backgroundColor = 'black';
    cellHTML.appendChild(image);
    // Make the image itself transparent to being clicked on
    image.style.pointerEvents = 'none';

    // mark the endpos
    [row, column] = this.grid.endpos;
    cell = row * this.grid.size + column;
    cellHTML = gridHTML.childNodes[cell];
  }

  knight_moves() {
    // Start a graph from our knight's startpos
    const graph = new Graph();
    graph.addVertex(this.grid.startpos);
    const queue = [];
    const visited = [];
    let curpos = this.grid.startpos;
    let adjacents = [];
    const gridHTML = document.getElementById('grid');
    let cellHTML;
    let cell;
    let column;
    let row;

    queue.push(curpos);
    // Search through the chess board loop start
    while (curpos != null) {
      console.log('################STARTING LOOP#####################');
      console.log(queue.length);
      console.log(`Curpos is ${curpos}`);
      // Check if it's the endpoint
      //  If it is, find the path to that point from the graph and return
      if (curpos.toString() === this.grid.endpos.toString()) {
        console.log('!!!!!!!!!!!!!!!Endpoint found!!!!!!!!!!!!!!!!!!!!!!!!');
        const path = graph.findPathToRoot(graph, this.grid.startpos, this.grid.endpos);
        console.log(`Path to the endpoint is: ${path}`);
        this.grid.color_path(path);
        return path;
      }
      // Else remove the first element of the queue
      // Push all the adjacents of the next point into the queue and visited
      // Find all moves possible given a start point
      adjacents = this.all_possible_moves(curpos);
      // Push them into the graph and queue if they're a new space
      // WRITE THING TO COMPARE THE ITEMS AFTER
      console.log(`Confirming possible moves ${adjacents}`);
      for (let i = 0; i < adjacents.length; i += 1) {
        console.log(`The list of visited nodes is now: ${visited}`);
        console.log(visited);
        console.log(`Is ${adjacents[i].toString()} in the visited`);
        if (visited.find((element) => this.arraycompare(element, adjacents[i]))) {
          console.log(true);
        } else {
          console.log(false);
        }
        if (!visited.find((element) => this.arraycompare(element, adjacents[i]))) {
          console.log(`Adding ${adjacents[i]} to the queue`);
          graph.addVertex(adjacents[i]);
          graph.addEdge(adjacents[i], curpos);
          queue.push(adjacents[i]);
          visited.push(adjacents[i]);

          // shade the visited squares for fun
          [row, column] = adjacents[i];
          cell = row * this.grid.size + column;
          cellHTML = gridHTML.childNodes[cell];
          this.grid.darken(cellHTML);
        }
      }
      console.log(`Removing ${queue[0]} from the queue`);
      curpos = queue.shift();
      console.log(`The queue is now ${queue}`);
      console.log(`The list of visited nodes is now ${visited}`);
      console.log('/////////////////////END LOOP////////////////////////');
    }
    return null;
  }

  arraycompare(element, subject) {
    if (element[0] === subject[0] && element[1] === subject[1]) {
      return true;
    }
    return false;
  }

  all_possible_moves(position) {
    const KNIGHT_MOVES = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [1, -2], [2, -1]];
    const possibleMoves = [];

    for (let i = 0; i < KNIGHT_MOVES.length; i += 1) {
      if (this.check_validity([position[0] + KNIGHT_MOVES[i][0],
                              position[1] + KNIGHT_MOVES[i][1]])) {
        console.log(this.check_validity([position[0] + KNIGHT_MOVES[i][0],
                                         position[1] + KNIGHT_MOVES[i][1]]));
        possibleMoves.push([position[0] + KNIGHT_MOVES[i][0], position[1] + KNIGHT_MOVES[i][1]]);
      }
    }

    console.log(`Possible hops are: ${possibleMoves}`);
    return possibleMoves;
  }

  check_validity(position) {
    console.log(position[0]);
    console.log(position[1]);
    if (position[0] < 0 || position[0] > this.grid.size - 1) {
      return false;
    }
    if (position[1] < 0 || position[1] > this.grid.size - 1) {
      return false;
    }
    return true;
  }
}

export default Knight;
