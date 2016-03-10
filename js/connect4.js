'use strict';

var Connect4 = function(width, height) {
  this.width = width || 6;
  this.height = height || 7;
  this.grid = this.initGrid();
  this.player1 = 'O';
  this.player2 = 'X';
  this.player = this.player1;
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
  for(var i=(this.height-1); i>0; i--) {
    if (this.grid[i][column] === '.') {
      this.grid[i][column] = this.player;
      this.switchPlayer(this.player);
      break;
    };
  };
};

Connect4.prototype.switchPlayer = function(player) {
  if (player === this.player1) {
    this.player = this.player2;
  } else {
    this.player = this.player1;
  };
};

Connect4.prototype.checkForWinner = function() {
};

module.exports = Connect4;