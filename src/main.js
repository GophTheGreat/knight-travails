import Grid from "./modules/grid";
import Knight from "./modules/knight";
import Graph from "./modules/graph";
import './style.css'

const startpos = [3,1];
const endpos = [4,1];

let grid = new Grid(startpos, endpos);
let knight = new Knight([3,1], [7,7], grid);
knight.knight_moves();
console.log(grid);