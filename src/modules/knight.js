import knightImg from './../assets/knight.svg'

class Knight{
  constructor(startpos, endpos, grid){
    this.startpos = startpos;
    this.endpos = endpos;
    this.grid = grid;
    this.setup();
  }

  setup(){
    let gridHTML = document.getElementById("grid");
    let image = new Image();
    let cellSize = Math.floor((900 / this.grid.size) * 0.9) + "px";
    console.log(cellSize)
    image.src = knightImg;
    image.style.width = cellSize;
    image.style.height = cellSize;
    //place the knight visibly
    //0,0 is top left
    let row = this.startpos[0];
    let column = this.startpos[1]


    let cell = row * this.grid.size + column;
    let cellHTML = gridHTML.childNodes[cell];
    cellHTML.style.backgroundColor = "black";
    cellHTML.appendChild(image)

    //mark the endpos
    row = this.endpos[0];
    column = this.endpos[1]

    cell = row * this.grid.size + column;
    cellHTML = gridHTML.childNodes[cell];
    cellHTML.style.backgroundColor = "red";

  }

  knight_moves(){
    //push all possible moves of the knight
    this.all_possible_moves(this.startpos);


  }

  all_possible_moves(position){
    //up left left
    this.check_validity([position[0] - 1, position[1] - 2])
    console.log(this.check_validity([position[0] - 1, position[1] - 2]))

    //up up left
    this.check_validity([position[0] - 2, position[1] - 1])
    console.log(this.check_validity([position[0] - 2, position[1] - 1]))

    //up up right
    this.check_validity([position[0] - 2, position[1] + 1])
    console.log(this.check_validity([position[0] - 2, position[1] + 1]))

    //up right right
    this.check_validity([position[0] - 1, position[1] + 2])
    console.log(this.check_validity([position[0] - 1, position[1] + 2]))

    //down right right
    this.check_validity([position[0] + 1, position[1] + 2])
    console.log(this.check_validity([position[0] + 1, position[1] + 2]))

    //down down right
    this.check_validity([position[0] + 2, position[1] + 1])
    console.log(this.check_validity([position[0] + 2, position[1] + 1]))

    //down down left
    this.check_validity([position[0] + 2, position[1] - 1])
    console.log(this.check_validity([position[0] + 2, position[1] - 1]))

    //down left left
    this.check_validity([position[0] + 1, position[1] - 2])
    console.log(this.check_validity([position[0] + 1, position[1] - 2]))
  }
  
  check_validity(position){
    if (position[0] < 0 || position[0] > this.grid.size){
      return false;
    }
    if(position[1] < 0 || position[1] > this.grid.size){
      return false;
    }
    return true;
  }
}

export default Knight;