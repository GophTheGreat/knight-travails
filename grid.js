//Sets up the grid

class Grid{
  constructor(){
    this.size = 16
    this.grid = [];
  }

  makeGrid(gridSize){
    for (let i = 0; i < gridSize * gridSize; i++){
      this.grid[i] = document.createElement('div');
      this.grid.classList.add('cell');
      this.grid.style.border = '2px solid darkgrey';
      //this.grid[i].addEventListener('click', darken);
      //grid.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
      //grid.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;
      //grid.append(etchGrid[i]);
    }
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



function darken(e){
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
