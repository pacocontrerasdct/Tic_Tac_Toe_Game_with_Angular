angular.module('tictactoeApp')
  .controller('TicTacToeController', TicTacToeController);

function TicTacToeController() {
  this.allWiningPositions = [
    "WWW------",
    "---WWW---",
    "------WWW",
    "W--W--W--",
    "-W--W--W-",
    "--W--W--W",
    "W---W---W",
    "--W-W-W--"
  ]
  var wining = this.allWiningPositions;

  this.moves = [];

  //move = this.exampleMove = "x---x---x";

  //this.equals = angular.equals(this.allWiningPositions[1], this.exampleMove);
  this.newMove = { move: '' };

  this.add = addMove;

  function addMove() {
    este = this.moves.push(this.newMove.move);
    esto = this.newMove.move;
    console.log(este);
    console.log(esto);
  }

  // this.check = checkForWinner(move, wining);

  // function checkForWinner(move, wining) {    
  //   for (var i = 0; i < wining.length; i++) {   
  //     equals = angular.equals(wining[i], move);
  //     if(equals === true) {
  //       this.equals = equals;
  //       break;
  //     }
  //     else {
  //       this.equals = 'No match';
  //     }
  //   };
  //}

}