import Grid from "./modules/grid";
import Knight from "./modules/knight";
import './style.css'

let grid = new Grid();
let knight = new Knight([3,1], [4,1], grid);
knight.knight_moves();
console.log(grid);