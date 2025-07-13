function DashBoard() {            
  this.board = [0, 1, 2, 
                3, 4, 5,
                6, 7, 8];                                  

  this.changeBoard = function(index, flowController){ 
    //console.log(this.board[index]);
    let canContinue = true;
    //while(canContinue == true){
    if(flowController.player1Turn == true && this.board[index] != "X" && this.board[index] != "O"){
      this.board[index] = "X";      
    }else if(flowController.player1Turn == false && this.board[index] != "X" && this.board[index] != "O"){
      this.board[index] = "O";      
    }else{
      alert("TAKEN!!! Chose Another Box!");      
    }
    //}
    

    flowController.player1Turn = !flowController.player1Turn;    
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

    myDiv0.innerHTML = "";
    myDiv1.innerHTML = "";
    myDiv2.innerHTML = "";
    myDiv3.innerHTML = "";
    myDiv4.innerHTML = "";
    myDiv5.innerHTML = "";
    myDiv6.innerHTML = "";
    myDiv7.innerHTML = "";
    myDiv8.innerHTML = "";
  }
}



function FlowController() {
  this.stillGoing = true;
  this.player1Turn = true;

  this.player1Score = 0;
  this.player2Score = 0;

  this.checkWinConditions = function(dashBoard) {    
    // Check Horizontal Lines And Set stillGoing To False 
    // AND Change Players Turn(SHOLD NOT BE HERE BUT KEEP IT FOR LATER)
    if(dashBoard.board[0] == dashBoard.board[1] && dashBoard.board[0] == dashBoard.board[2]){
      this.stillGoing = false;
      console.log(`FIRST HORIZONTAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;            
         
      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }   

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }
    if(dashBoard.board[3] == dashBoard.board[4] && dashBoard.board[3] == dashBoard.board[5]){
      this.stillGoing = false;
      console.log(`2 HORIZONTAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;    
      
      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }      

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }
    if(dashBoard.board[6] == dashBoard.board[7] && dashBoard.board[6] == dashBoard.board[8]){
      this.stillGoing = false;
      console.log(`3 HORIZONTAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;     
      
      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }   

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }

    //Check Vertical Lines
    if(dashBoard.board[0] == dashBoard.board[3] && dashBoard.board[0] == dashBoard.board[6]){
      this.stillGoing = false;
      console.log(`FIRST VERTICAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      

      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }    

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }
    if(dashBoard.board[1] == dashBoard.board[4] && dashBoard.board[1] == dashBoard.board[7]){
      this.stillGoing = false;
      console.log(`2 VERTICAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      

      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }       

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }
    if(dashBoard.board[2] == dashBoard.board[5] && dashBoard.board[2] == dashBoard.board[8]){
      this.stillGoing = false;
      console.log(`3 VERTICAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      

      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }       

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }

    //Check Diagonal Lines
    if(dashBoard.board[0] == dashBoard.board[4] && dashBoard.board[0] == dashBoard.board[8]){
      this.stillGoing = false;
      console.log(`FIRST DIAGONAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      

      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }         

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }
    if(dashBoard.board[2] == dashBoard.board[4] && dashBoard.board[2] == dashBoard.board[6]){
      this.stillGoing = false;
      console.log(`2 DIAGONAL IF CASE TEST WORKED! Player1 won: ${!this.player1Turn}`);
      //this.player1Turn = !this.player1Turn;      

      //TESTAR SCORE DISPLAY
      if(this.player1Turn == true){        
        this.player2Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER O WON");        
      }else if(this.player1Turn == false){
        this.player1Score += 1;
        console.log(`Player 1: ${this.player1Score} VS. Player 2: ${this.player2Score} `);
        alert("GAME OVER!!! PLAYER X WON");        
      }       

      //TESTAR RESET - TESTE FUNCIONOU
      dashBoard.resetBoard();
    }

    //TESTAR DRAW -
    let anySpotsLeft = false; 
    dashBoard.board.map(function(spot) {      
      if(spot != "X" && spot != "O"){
        anySpotsLeft = true;
      }
    });

    if(anySpotsLeft == false){
      alert("DRAW!!!");
      dashBoard.resetBoard();
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv0.innerHTML != "X" && myDiv0.innerHTML != "O"){
    myDiv0.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv0.innerHTML != "X" && myDiv0.innerHTML != "O"){
    myDiv0.innerHTML = "O";    
  }else{         
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn;
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv1.innerHTML != "X" && myDiv1.innerHTML != "O"){
    myDiv1.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv1.innerHTML != "X" && myDiv1.innerHTML != "O"){
    myDiv1.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv2.innerHTML != "X" && myDiv2.innerHTML != "O"){
    myDiv2.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv2.innerHTML != "X" && myDiv2.innerHTML != "O"){
    myDiv2.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv3.innerHTML != "X" && myDiv3.innerHTML != "O"){
    myDiv3.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv3.innerHTML != "X" && myDiv3.innerHTML != "O"){
    myDiv3.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv4.innerHTML != "X" && myDiv4.innerHTML != "O"){
    myDiv4.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv4.innerHTML != "X" && myDiv4.innerHTML != "O"){
    myDiv4.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv5.innerHTML != "X" && myDiv5.innerHTML != "O"){
    myDiv5.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv5.innerHTML != "X" && myDiv5.innerHTML != "O"){
    myDiv5.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv6.innerHTML != "X" && myDiv6.innerHTML != "O"){
    myDiv6.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv6.innerHTML != "X" && myDiv6.innerHTML != "O"){
    myDiv6.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv7.innerHTML != "X" && myDiv7.innerHTML != "O"){
    myDiv7.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv7.innerHTML != "X" && myDiv7.innerHTML != "O"){
    myDiv7.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
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

  // COPIAR ISTO???
  if(flowController.player1Turn == true && myDiv8.innerHTML != "X" && myDiv8.innerHTML != "O"){
    myDiv8.innerHTML = "X";    
  }else if(flowController.player1Turn == false && myDiv8.innerHTML != "X" && myDiv8.innerHTML != "O"){
    myDiv8.innerHTML = "O";    
  }else{       
    //FIX NOJENTO - PQ Vai Mudar outra Vez
    flowController.player1Turn = !flowController.player1Turn; 
  }

  console.log(`Player 1 turn: ${flowController.player1Turn}`);
  dashBoard.changeBoard(8, flowController);
  flowController.checkWinConditions(dashBoard);
  console.log(dashBoard.board);
  console.log("-----------------------------------");
});