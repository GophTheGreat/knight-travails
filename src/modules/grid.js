/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-bitwise */
/* eslint-disable no-console */

import { setPos } from './page';

class Grid {
  constructor(startpos, endpos, size, gridDiv) {
    this.size = size;
    this.grid = this.makeGrid(size, gridDiv);
    if (startpos) { this.startpos = startpos; }
    this.endpos = endpos;
    this.gridDiv = gridDiv;
  }

  makeGrid(gridSize, gridDiv) {
    const grid = [];
    const gridHTML = gridDiv;
    const cellSize = 700 / gridSize;
    for (let i = 0; i < gridSize; i += 1) {
      grid[i] = [];
      for (let j = 0; j < gridSize; j += 1) {
        grid[i][j] = document.createElement('div');
        const cell = grid[i][j];
        cell.classList.add('cell');
        cell.style.border = '2px solid darkgrey';
        cell.style.fontSize = `${600 / gridSize}px`;
        cell.class = 'cell';
        gridHTML.appendChild(cell);
        // set up the cells to listen for input
        cell.addEventListener('click', setPos);
        cell.setAttribute('data-position', `[${i}, ${j}]`);
      }
    }
    gridHTML.style.gridColumnStart = '2';
    gridHTML.style.gridRowStart = '2';
    gridHTML.style.justifySelf = 'center';
    gridHTML.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridHTML.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridHTML.style.width = `${gridSize * (cellSize + 2 * 2)}px`;
    gridHTML.style.height = `${gridSize * (cellSize + 2 * 2)}px`;
    console.log(grid);
    return grid;
  }

  darken(e) {
    console.log('Darkening');
    console.log(e);
    let color = e.style.backgroundColor;
    color = this.rgbToHex(color);
    // console.log(color);
    if (color === '' || color === undefined) {
      color = '0xFFFFFF';
    } else {
      color = color.slice(1);
      color = String.prototype.concat('0x', color);
    }
    const num = color - 0x222222;
    e.style.backgroundColor = String.prototype.concat('#', num.toString(16));
  }

  // Makes the path progressively greener!
  color_path(pathArray) {
    console.log(pathArray.length);
    const gridHTML = document.getElementById('grid');
    let cellHTML;
    let cell;
    let row;
    let column;
    // This will store a progressively greener green
    const colors = this.lerpColor(0x99AA99, 0x225522, pathArray.length);
    let i = 0;
    // For each step the knight took
    pathArray.forEach((element) => {
      // Locate the cell to paint
      [row, column] = element;
      cell = row * this.size + column;
      cellHTML = gridHTML.childNodes[cell];
      // Paint it progressively from teal to green
      // And fill with colors and numbers
      cellHTML.style.backgroundColor = String.prototype.concat('#', colors[i].toString(16));
      if (i !== 0) { cellHTML.textContent = `${i}`; }
      if (i === 0) {
        cellHTML.style.borderColor = '#fbfc8d';
        cellHTML.style.borderWidth = '4px';
      }
      if (i === pathArray.length - 1) {
        cellHTML.style.borderColor = 'red';
        cellHTML.style.borderWidth = '4px';
      }
      i += 1;
    });
  }

  lerpColor(startColor, endColor, steps) {
    const startR = (startColor >> 15) & 0xFF;
    const startG = (startColor >> 8) & 0xFF;
    const startB = startColor & 0xFF;

    const endR = (endColor >> 16) & 0xFF;
    const endG = (endColor >> 8) & 0xFF;
    const endB = endColor & 0xFF;

    const stepSize = 1 / (steps - 1);

    const colors = [];
    for (let i = 0; i < steps; i += 1) {
      const r = Math.round(startR + (endR - startR) * (i * stepSize));
      const g = Math.round(startG + (endG - startG) * (i * stepSize));
      const b = Math.round(startB + (endB - startB) * (i * stepSize));
      const color = (r << 16) | (g << 8) | b;
      colors.push(color);
    }
    return colors;
  }

  rgbToHex(col) {
    if (col.charAt(0) === 'r') {
      // eslint-disable-next-line comma-spacing
      const colNew = col.replace('rgb(','').replace(')','').split(',');
      let r = parseInt(colNew[0], 10).toString(16);
      let g = parseInt(colNew[1], 10).toString(16);
      let b = parseInt(colNew[2], 10).toString(16);
      r = r.length === 1 ? `0${r}` : r; g = g.length === 1 ? `0${g}` : g; b = b.length === 1 ? `0${b}` : b;
      const colHex = `#${r}${g}${b}`;
      return colHex;
    }
    return '#000000';
  }
}

export default Grid;
