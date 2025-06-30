function DashBoard() {
  this.board = [00, 01, 02, 
                10, 11, 12,
                20, 21, 22];
                
  this.changeBoard = function(index){ 
    console.log(this.board[index]);
  }                
}

function FlowController() {
  this.stillGoing = true;
  this.player1Turn = true;

  this.gameFlow = function(){
    if(this.stillGoing && this.player1Turn){
      //game still going and its Player 1 turn

      //DO STUFF!!!

      //change Player Turn before exiting
      this.player1Turn = false; 
    }else if(this.stillGoing && this.player1Turn != true){
      //game still going and its Player 2 turn to play

      //DO STUFF!!!

      //change Player Turn before exiting
      this.player1Turn = true;
    }else if(this.stillGoing != true){
      //GAME IS OVER!!!
    }
  }
}


dashBoard = new DashBoard();

console.log(dashBoard.board);

dashBoard.changeBoard(2);
dashBoard.changeBoard(3);