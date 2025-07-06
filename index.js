function DashBoard() {
  this.board = [0, 1, 0, 
                2, 1, 2,
                1, 0, 3];
                
  this.changeBoard = function(index, flowController){ 
    //console.log(this.board[index]);
    if(flowController.player1Turn == true){
      this.board[index] = 1;
    }else{
      this.board[index] = 2;
    }

    flowController.player1Turn = !flowController.player1Turn;
    //let testTransfer = this.player1Turn;
    //this.player1Turn = !testTransfer;
  }                
}

function FlowController() {
  this.stillGoing = true;
  this.player1Turn = true;

  this.checkWinConditions = function(dashBoard) {    
    // Check Horizontal Lines And Set stillGoing To False 
    // AND Change Players Turn(SHOLD NOT BE HERE BUT KEEP IT FOR LATER)
    if(dashBoard.board[0] == dashBoard.board[1] && dashBoard.board[0] == dashBoard.board[2]){
      this.stillGoing = false;
      console.log(`FIRST HORIZONTAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }
    if(dashBoard.board[3] == dashBoard.board[4] && dashBoard.board[3] == dashBoard.board[5]){
      this.stillGoing = false;
      console.log(`2 HORIZONTAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }
    if(dashBoard.board[6] == dashBoard.board[7] && dashBoard.board[6] == dashBoard.board[8]){
      this.stillGoing = false;
      console.log(`3 HORIZONTAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }

    //Check Vertical Lines
    if(dashBoard.board[0] == dashBoard.board[3] && dashBoard.board[0] == dashBoard.board[6]){
      this.stillGoing = false;
      console.log(`FIRST VERTICAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }
    if(dashBoard.board[1] == dashBoard.board[4] && dashBoard.board[1] == dashBoard.board[7]){
      this.stillGoing = false;
      console.log(`2 VERTICAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }
    if(dashBoard.board[2] == dashBoard.board[5] && dashBoard.board[2] == dashBoard.board[8]){
      this.stillGoing = false;
      console.log(`3 VERTICAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }

    //Check Diagonal Lines
    if(dashBoard.board[0] == dashBoard.board[4] && dashBoard.board[0] == dashBoard.board[8]){
      this.stillGoing = false;
      console.log(`FIRST DIAGONAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
    }
    if(dashBoard.board[2] == dashBoard.board[4] && dashBoard.board[2] == dashBoard.board[6]){
      this.stillGoing = false;
      console.log(`2 DIAGONAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      
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

//dashBoard.changeBoard(2, flowController);
//dashBoard.changeBoard(3, flowController);

//ALTERNATE UNIVERSE
console.log(`Player 1 turn: ${flowController.player1Turn}`);
dashBoard.changeBoard(8, flowController);
flowController.checkWinConditions(dashBoard);
console.log(dashBoard.board);
console.log("-----------------------------------");

console.log(`Player 1 turn: ${flowController.player1Turn}`);
dashBoard.changeBoard(3, flowController);
flowController.checkWinConditions(dashBoard);
console.log(dashBoard.board);
console.log("-----------------------------------");

console.log(`Player 1 turn: ${flowController.player1Turn}`);
dashBoard.changeBoard(0, flowController);
flowController.checkWinConditions(dashBoard);
console.log(dashBoard.board);
console.log("-----------------------------------");

