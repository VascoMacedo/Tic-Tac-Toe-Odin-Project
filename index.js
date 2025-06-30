function DashBoard() {
  this.board = [1, 1, 1, 
                2, 1, 2,
                1, 1, 3];
                
  this.changeBoard = function(index){ 
    console.log(this.board[index]);
  }                
}

function FlowController() {
  this.stillGoing = true;
  this.player1Turn = true;

  this.checkWinConditions = function(dashBoard) {    
    //Check Horizontal Lines
    if(dashBoard.board[0] == dashBoard.board[1] && dashBoard.board[0] == dashBoard.board[2]){
      console.log("FIRST HORIZONTAL IF CASE TEST WORKED!!!");
    }
    if(dashBoard.board[3] == dashBoard.board[4] && dashBoard.board[3] == dashBoard.board[5]){
      console.log("2 HORIZONTAL IF CASE TEST WORKED!!!");
    }
    if(dashBoard.board[6] == dashBoard.board[7] && dashBoard.board[6] == dashBoard.board[8]){
      console.log("3 HORIZONTAL IF CASE TEST WORKED!!!");
    }

    //Check Vertical Lines
    if(dashBoard.board[0] == dashBoard.board[3] && dashBoard.board[0] == dashBoard.board[6]){
      console.log("FIRST VERTICAL IF CASE TEST WORKED!!!");
    }
    if(dashBoard.board[1] == dashBoard.board[4] && dashBoard.board[1] == dashBoard.board[7]){
      console.log("2 VERTICAL IF CASE TEST WORKED!!!");
    }
    if(dashBoard.board[2] == dashBoard.board[5] && dashBoard.board[2] == dashBoard.board[8]){
      console.log("3 VERTICAL IF CASE TEST WORKED!!!");
    }

    //Check Diagonal Lines
    if(dashBoard.board[0] == dashBoard.board[4] && dashBoard.board[0] == dashBoard.board[8]){
      console.log("FIRST DIAGONAL IF CASE TEST WORKED!!!");
    }
    if(dashBoard.board[2] == dashBoard.board[4] && dashBoard.board[2] == dashBoard.board[6]){
      console.log("2 DIAGONAL IF CASE TEST WORKED!!!");
    }
  }

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
flowController = new FlowController();


console.log(dashBoard.board);

dashBoard.changeBoard(2);
dashBoard.changeBoard(3);

flowController.checkWinConditions(dashBoard);