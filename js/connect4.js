'use strict';

var Connect4 = function(width, height) {
  this.width = width;
  this.height = height;
  this.grid = this.initGrid();
};

Connect4.prototype.initGrid = function() {
  var grid = [];
  var row = [];
  for(var i=0; i<this.width; i++) {
    row = [];
    for(var j=0; j<this.height; j++) {
      row.push('.');
    };
    grid.push(row);
  };
  return grid;
};

module.exports = Connect4;