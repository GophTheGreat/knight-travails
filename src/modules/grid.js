//Sets up the grid

class Grid{
  constructor(){
    this.size = 8
    this.grid = this.makeGrid(this.size);
  }

  makeGrid(gridSize){
    let grid = [];
    for (let i = 0; i < gridSize; i++){
      grid[i] = [];
      for(let j = 0; j < gridSize; j++){
        grid[i][j] = document.createElement('div');
        grid[i][j].classList.add('cell');
        grid[i][j].style.border = '2px solid darkgrey';
      }
    }
    console.log(grid);
    return grid;
  }

  darken(e){
    let color = e.target.style.backgroundColor;
    color = rgbToHex(color);
    console.log(color);
    if(color == '' || color == undefined){
      color = '0xFFFFFF'
    }
    else{
      color = color.slice(1);
      color = String.prototype.concat('0x', color);
    }
    let num = color - 0x333333;
    console.log(num.toString(16));
    e.target.style.backgroundColor = String.prototype.concat('#', num.toString(16));
    //let final = String.prototype.concat('#', num);
    //console.log(final);
    //e.target.style.backgroundColor = rgb(233, 233, 233);
  }
}

export default Grid;
