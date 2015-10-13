angular.module('tictactoeApp')
  .controller('TicTacToeController', TicTacToeController);

function TicTacToeController() {
  this.allWinningPositions = [
    "WWW------",
    "---WWW---",
    "------WWW",
    "W--W--W--",
    "-W--W--W-",
    "--W--W--W",
    "W---W---W",
    "--W-W-W--"
  ];
  var winning = this.allWinningPositions;
  // For building squares using 'ng-repeat'
  this.squares = [0,1,2,3,4,5,6,7,8]; 
  // Reseting every game 
  playerMoves = ["-","-","-","-","-","-","-","-","-"];
  // Setting first player in move
  this.playerPlaying = "O";
  this.newMove = { move: '' };
  this.add = addMove;

  // Add move to playerMoves array
  function addMove() {
    playerMoves[this.newMove.move] = 'W';
    squares = this.newMove.move;
    console.log("squareId is: ", squares);

    // Switching player turn
    if(this.playerPlaying === 'O'){
      this.playerPlaying = 'X';
    } else {
      this.playerPlaying = 'O';
    }
    console.log("player turn: ", this.playerPlaying);
    
    // Joining playerMoves to compare with winning possibilities
    play = playerMoves.join('');
    console.log("player move: ", play);
    // Check for a winner
    this.equals = checkForWinner();
    console.log(equals);
  }

  function checkForWinner() {    
    for (var i = 0; i < winning.length; i++) { 
      // If equal to one winning result then return 'true'
      equals = angular.equals(winning[i], playerMoves.join(''));
      console.log('inside check');
      if(equals === true) {
        this.equals = equals;
        break;
      }
      else {
        this.equals = 'No match';
      }
    };
  }

}