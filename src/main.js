import Grid from "./modules/grid";
import Knight from "./modules/knight";
import './style.css'

let grid = new Grid();
let knight = new Knight([4,3], [5,6], grid);
console.log(grid);