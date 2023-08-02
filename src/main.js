import Grid from "./modules/grid";
import Knight from "./modules/knight";
import Graph from "./modules/graph";
import './style.css'

const startpos = [3,1];
const endpos = [4,1];

//Graph test
// let g = new Graph(6);
// let vertices = [ 'A', 'B', 'C', '1', '2', '3', '4', '5', '6' ];

// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//   g.addVertex(vertices[i]);
// }

// g.addEdge('A', '1');
// g.addEdge('A', '2');
// g.addEdge('A', '3');
// g.addEdge('A', '4');
// g.addEdge('A', '5');
// g.addEdge('A', '6');
// g.addEdge('B', '2');
// g.addEdge('B', '3');
// g.addEdge('B', '4');
// g.addEdge('B', '5');
// g.addEdge('C', '6');

// g.printGraph();
//End graph test

let grid = new Grid(startpos, endpos);
let knight = new Knight([3,1], [2,2], grid);
knight.knight_moves();
console.log(grid);