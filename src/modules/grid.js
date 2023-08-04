//Sets up the grid

class Grid{
  constructor(startpos, endpos){
    this.size = 8
    this.grid = this.makeGrid(this.size);
    if(startpos)this.startpos = startpos;
    this.endpos = endpos;
  }

  makeGrid(gridSize){
    let grid = [];
    let gridHTML = document.querySelector(".grid");
    let cellSize = 900 / gridSize;
    for (let i = 0; i < gridSize; i++){
      grid[i] = [];
      for(let j = 0; j < gridSize; j++){
        grid[i][j] = document.createElement('div');
        grid[i][j].classList.add('cell');
        grid[i][j].style.border = '2px solid darkgrey';
        gridHTML.appendChild(grid[i][j]);
      }
    }
    gridHTML.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridHTML.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridHTML.style.width = `${gridSize * (cellSize + 2 * 2)}px`;
    gridHTML.style.height = `${gridSize * (cellSize + 2 * 2)}px`;
    console.log(grid);
    return grid;
  }

  darken(e){
    console.log("Darkening")
    console.log(e)
    let color = e.style.backgroundColor;
    color = this.rgbToHex(color);
    //console.log(color);
    if(color == '' || color == undefined){
      color = '0xFFFFFF'
    }
    else{
      color = color.slice(1);
      color = String.prototype.concat('0x', color);
    }
    let num = color - 0x222222;
    e.style.backgroundColor = String.prototype.concat('#', num.toString(16));
  }
  
  //Makes the path progressively greener!
  color_path(pathArray){
    console.log(pathArray.length)
    let gridHTML = document.getElementById("grid");
    let cellHTML;
    let cell;
    let row;
    let column;
    //This will store a progressively greener green
    let colors = this.lerpColor(0x99AA99, 0x225522, pathArray.length);
    let i = 0;
    //For each step the knight took
    pathArray.forEach((element) => {
      //Locate the cell to paint
      row = element[0];
      column = element[1];
      cell = row * this.size + column;
      cellHTML = gridHTML.childNodes[cell];
      //Paint it progressively greener green
      cellHTML.style.backgroundColor = String.prototype.concat('#', colors[i].toString(16));
      i++;
    })
  }

  lerpColor(startColor, endColor, steps){
    const startR = (startColor >> 15) & 0xFF
    const startG = (startColor >> 8) & 0xFF;
    const startB = startColor & 0xFF;

    const endR = (endColor >> 16) & 0xFF;
    const endG = (endColor >> 8) & 0xFF;
    const endB = endColor & 0xFF;

    const stepSize = 1 / (steps - 1);

    const colors = [];
    for (let i = 0; i < steps; i++) {
      const r = Math.round(startR + (endR - startR) * (i * stepSize));
      const g = Math.round(startG + (endG - startG) * (i * stepSize));
      const b = Math.round(startB + (endB - startB) * (i * stepSize));
  
      const color = (r << 16) | (g << 8) | b;
      colors.push(color);
    } 
    return colors;
  }

  rgbToHex(col){
    if(col.charAt(0)=='r')
    {
      col=col.replace('rgb(','').replace(')','').split(',');
      var r=parseInt(col[0], 10).toString(16);
      var g=parseInt(col[1], 10).toString(16);
      var b=parseInt(col[2], 10).toString(16);
      r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
      var colHex='#'+r+g+b;
      return colHex;
    }
  }
}

export default Grid;
