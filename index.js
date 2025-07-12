function DashBoard() {            
  this.board = [0, 1, 2, 
                3, 4, 5,
                6, 7, 8];
                
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
  
  this.resetBoard = function(){
    this.board = [0, 1, 2, 
                  3, 4, 5,
                  6, 7, 8];

    //fazer reset no html tbm
    //SUPER PODRE mas Funciona
    const myDiv0 = document.querySelector('#div0');
    const myDiv1 = document.querySelector('#div1');
    const myDiv2 = document.querySelector('#div2');
    const myDiv3 = document.querySelector('#div3');
    const myDiv4 = document.querySelector('#div4');
    const myDiv5 = document.querySelector('#div5');
    const myDiv6 = document.querySelector('#div6');
    const myDiv7 = document.querySelector('#div7');
    const myDiv8 = document.querySelector('#div8');

    myDiv0.innerHTML = "0";
    myDiv1.innerHTML = "1";
    myDiv2.innerHTML = "2";
    myDiv3.innerHTML = "3";
    myDiv4.innerHTML = "4";
    myDiv5.innerHTML = "5";
    myDiv6.innerHTML = "6";
    myDiv7.innerHTML = "7";
    myDiv8.innerHTML = "8";
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

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
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

/*ALTERNATE UNIVERSE - OLD TEST
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
*/

const myDiv0 = document.querySelector('#div0');
const myDiv1 = document.querySelector('#div1');
const myDiv2 = document.querySelector('#div2');
const myDiv3 = document.querySelector('#div3');
const myDiv4 = document.querySelector('#div4');
const myDiv5 = document.querySelector('#div5');
const myDiv6 = document.querySelector('#div6');
const myDiv7 = document.querySelector('#div7');
const myDiv8 = document.querySelector('#div8');

// add a click event listener to the div
myDiv0.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 0 was clicked!');

  if(flowController.player1Turn == true){
    myDiv0.innerHTML = "1";
  }else{
    myDiv0.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(0, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv1.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 1 was clicked!');

  if(flowController.player1Turn == true){
    myDiv1.innerHTML = "1";
  }else{
    myDiv1.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(1, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv2.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 2 was clicked!');

  if(flowController.player1Turn == true){
    myDiv2.innerHTML = "1";
  }else{
    myDiv2.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(2, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv3.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 3 was clicked!');

   if(flowController.player1Turn == true){
    myDiv3.innerHTML = "1";
  }else{
    myDiv3.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(3, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv4.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 4 was clicked!');

   if(flowController.player1Turn == true){
    myDiv4.innerHTML = "1";
  }else{
    myDiv4.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(4, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv5.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 5 was clicked!');

   if(flowController.player1Turn == true){
    myDiv5.innerHTML = "1";
  }else{
    myDiv5.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(5, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv6.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 6 was clicked!');

   if(flowController.player1Turn == true){
    myDiv6.innerHTML = "1";
  }else{
    myDiv6.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(6, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv7.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 7 was clicked!');

   if(flowController.player1Turn == true){
    myDiv7.innerHTML = "1";
  }else{
    myDiv7.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(7, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});

// add a click event listener to the div
myDiv8.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('Div 8 was clicked!');

   if(flowController.player1Turn == true){
    myDiv8.innerHTML = "1";
  }else{
    myDiv8.innerHTML = "2";
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(8, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});