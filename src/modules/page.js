/* eslint-disable import/no-cycle */
import Grid from './grid';
import Knight from './knight';

// Constants for dom manipulation
const sliderText = document.getElementById('sliderText');
const slider = document.getElementById('slider');
const gridDiv = document.getElementById('grid');
const startPosText = document.getElementById('startPos');
const endPosText = document.getElementById('endPos');

// Constants for default state
const defaultStartPos = [-1, 0];
const defaultEndPos = [0, 0];
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
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function reset() {
  updateValues();
  removeAllChildren(gridDiv);
  posState = 'placeKnight';
  const grid = new Grid(startPos, endPos, gridSize, gridDiv);
  const knight = new Knight(grid);
  if (startPos !== defaultStartPos) { knight.knight_moves(); }
}

// Listen for clickables
// By default you want to place the knight
// Once the knight is placed, you want to place the endpoint
// Once that is placed, switch back to placing the knight
function setPos(e) {
  const cell = e.target;
  const positionRaw = cell.dataset.position;
  const position = JSON.parse(positionRaw);
  console.log(position);
  console.log(posState);
  if (posState === 'placeKnight') {
    // code for handling placeKnight state
    startPos = position;
    cell.style.backgroundColor = '#e4e665';
    startPosText.textContent = `[${position[0]}, ${position[1]}]`;
    posState = 'placeEnd';
  } else {
    // code for handling placeEnd state
    endPos = position;
    endPosText.textContent = `[${position[0]}, ${position[1]}]`;
    posState = 'placeKnight';
    reset();
  }
  return true;
}

slider.addEventListener('input', updateValues);
slider.addEventListener('input', reset);
export { reset, setPos };
