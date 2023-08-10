import Grid from './modules/grid';
import Knight from './modules/knight';
import './style.css';

const defaultStartPos = [3, 1];
const defaultEndPos = [4, 4];

const startpos = [3, 1];
const endpos = [4, 1];

const grid = new Grid(startpos, endpos);
const knight = new Knight([3, 1], [5, 0], grid);
knight.knight_moves();
console.log(grid);
