import Grid from './grid';
import Knight from './knight';

// Constants for dom manipulation
const resetButton = document.querySelector('button');
const sliderText = document.getElementById('sliderText');
const slider = document.getElementById('slider');
const gridDiv = document.getElementById('grid');

// Constants for default state
const defaultStartPos = [3, 1];
const defaultEndPos = [4, 4];
const defaultGridSize = 8;

// Variables for dynamic state
let startPos = defaultStartPos;
let endPos = defaultEndPos;
let gridSize = defaultGridSize;
let posState = 'placeKnight';

sliderText.textContent = `${slider.value} x ${slider.value} Grid`;

function updateValues() {
  gridSize = slider.value;
  sliderText.textContent = `${slider.value} x ${slider.value} Grid`;
  startPos = [5, 1];
  endPos = [6, 0];
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function reset() {
  updateValues();
  removeAllChildren(gridDiv);
  posState = 'placeKnight'
  const grid = new Grid(startPos, endPos, gridSize, gridDiv);
  const knight = new Knight(grid);
  knight.knight_moves();
}

// Listen for clickables
// By default you want to place the knight
// Once the knight is placed, you want to place the endpoint
// Once that is placed, switch back to placing the knight
function setPos(position) {
  if (posState === 'placeKnight') {
    // code for handling placeKnight state
  } else {
    // code for handling placeEnd state
  }
  return true;
}

slider.addEventListener('input', updateValues);
resetButton.addEventListener('click', reset);

export { reset, setPos };
