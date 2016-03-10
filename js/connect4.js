'use strict';

var Connect4 = function(width, height) {
  this.width = width || 6;
  this.height = height || 7;
  this.grid = this.initGrid();
  this.player1 = 'O';
  this.player2 = 'X';
  this.player = this.player1;
  this.lastTurnPosition = [0,0];
};

Connect4.prototype.initGrid = function() {
  var grid = [];
  var row = [];
  for(var i=0; i<this.height; i++) {
    row = [];
    for(var j=0; j<this.width; j++) {
      row.push('.');
    };
    grid.push(row);
  };
  return grid;
};

Connect4.prototype.takeTurn = function(columnNum) {
  var column = columnNum-1
  for(var i=(this.height-1); i>-1; i--) {
    if (this.grid[i][column] === '.') {
      this.grid[i][column] = this.player;
      this.storeLastTurn(i, column);
      this.switchPlayer(this.player);
      break;
    };
  };
};

Connect4.prototype.storeLastTurn = function(row, column) {
  this.lastTurnPosition[0] = row;
  this.lastTurnPosition[1] = column;
};

Connect4.prototype.switchPlayer = function(player) {
  this.player = this.theOtherPlayer(player);
};

Connect4.prototype.theOtherPlayer = function(player) {
  if (player === this.player1) {
    return this.player2;
  } else {
    return this.player1;
  };
};

Connect4.prototype.checkForWinner = function() {
};

Connect4.prototype.checkOneDirectionForWinner = function(directionArray) {
  var isThereWinner = false;
  var playerToCheck = this.theOtherPlayer(),
      positionToCheck = this.lastTurnPosition;
  for (var i=0; i<4; i++) {
    if (this.grid[positionToCheck[0]][positionToCheck[1]] === playerToCheck) {
      positionToCheck[0] += directionArray[1];
      positionToCheck[1] += directionArray[0];
    } else {
      break;
    };
    if (i===3) {
      isThereWinner = true;
    }    
  }
  return isThereWinner;
};

module.exports = Connect4;