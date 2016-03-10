var Connect4 = require('../js/connect4.js');

describe('Connect 4 game', function() {

  var gridMock = [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']];
  var firstGoInColOne = [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['O', '.', '.', '.']];
  var secondGoInColOne = [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['X', '.', '.', '.'], ['O', '.', '.', '.']];

  beforeEach(function() {
    connect4 = new Connect4(4, 4);
  });

  describe('initialization', function() {
    it('game has a width', function() {
      expect(connect4.width).toEqual(4);
    });

    it('game has a height', function() {
      expect(connect4.height).toEqual(4);
    });

    it('has a grid of a specified size', function() {
      expect(connect4.grid).toEqual(gridMock);
    });

    it('the grid has a default width of 6', function() {
      var anotherConnect4 = new Connect4();
      expect(anotherConnect4.grid[0].length).toEqual(6);
    });

    it('the grid has a default height of 7', function() {
      var anotherConnect4 = new Connect4();
      expect(anotherConnect4.grid.length).toEqual(7);
    });
  });

  describe('taking turns', function() {
    
    it('player pieces can be dropped into the columns', function() {
      expect(connect4.takeTurn).toBeDefined();
    });

    it('pieces drop to the bottom of the column', function() {
      connect4.takeTurn(1);
      expect(connect4.grid).toEqual(firstGoInColOne);
      connect4.takeTurn(1);
      expect(connect4.grid).toEqual(secondGoInColOne);
    });

    it('player2 follows player1', function() {
      connect4.takeTurn(1);
      connect4.takeTurn(1);
      expect(connect4.grid[2][0]).toEqual('X');
    });

    it('game remembers the last turn', function() {
      connect4.takeTurn(1);
      expect(connect4.lastTurnPosition).toEqual([3,0]);
    });
  });

  describe('switching players', function() {
  
    it('player 2 follows player 1', function() {
      connect4.switchPlayer(connect4.player1);
      expect(connect4.player).toEqual(connect4.player2);
    });

    it('player 1 follows player 2', function() {
      connect4.switchPlayer(connect4.player2);
      expect(connect4.player).toEqual(connect4.player1);
    });
  });

  describe('checking for a winner', function() {
    
    it('a winner can be found', function() {
      expect(connect4.checkForWinner).toBeDefined();
    });

    it('can check in one direction', function() {
      connect4.takeTurn(1);
      connect4.takeTurn(1);
      connect4.takeTurn(2);
      connect4.takeTurn(1);
      connect4.takeTurn(3);
      expect(connect4.checkOneDirectionForWinner([-1, 0])).toEqual(false)
      connect4.takeTurn(1);
      connect4.takeTurn(4);
      expect(connect4.checkOneDirectionForWinner([-1, 0])).toEqual(true)
    });
  });
});