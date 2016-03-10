'use strict';

var Connect4 = function(width, height) {
  this.width = width;
  this.height = height;
  this.grid = this.initGrid();
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
      this.grid[i][column] = 'O'
      break
    };
  };
};

module.exports = Connect4;