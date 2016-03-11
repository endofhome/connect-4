var Connect4 = require('../js/connect4.js');

describe('Connect 4 game', function() {

  var gridMock =         [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']];
  var firstGoInColOne =  [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['O', '.', '.', '.']];
  var secondGoInColOne = [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['X', '.', '.', '.'], ['O', '.', '.', '.']];
  var gridFullOfO =      [['O', 'O', 'O', 'O'], ['O', 'O', 'O', 'O'], ['O', 'O', 'O', 'O'], ['O', 'O', 'O', 'O']];

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

  describe('simple checking for a winner', function() {
    
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

  describe('deeper checking for a winner when last move in bottom-left corner', function() {

    beforeEach(function() {
      connect4.grid = gridFullOfO;
      connect4.lastTurnPosition = [3, 0];
    });

    it('can find a winner in the up direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up'])).toEqual(true);
    });

    it('can find a winner in the up-right direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-right'])).toEqual(true);
    });

    it('can find a winner in the right direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['right'])).toEqual(true);
    });

    it('cannot move down-right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-right'])).toEqual(false);
    });

    it('cannot move down so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down'])).toEqual(false);
    });
    
    it('cannot move down-left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-left'])).toEqual(false);
    });

    it('cannot move left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['left'])).toEqual(false);
    });

    it('cannot move up-left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-left'])).toEqual(false);
    });      
  });

  describe('deeper checking for a winner when last move in top-left corner', function() {

    beforeEach(function() {
      connect4.grid = gridFullOfO;
      connect4.lastTurnPosition = [0, 0];
    });

    it('cannot move up so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up'])).toEqual(false);
    });

    it('cannot move up-right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-right'])).toEqual(false);
    });

    it('can find a winner in the right direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['right'])).toEqual(true);
    });

    it('can find a winner in the down-right direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-right'])).toEqual(true);
    });

    it('can find a winner in the down direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down'])).toEqual(true);
    });
    
    it('cannot move down-left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-left'])).toEqual(false);
    });

    it('cannot move left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['left'])).toEqual(false);
    });

    it('cannot move up-left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-left'])).toEqual(false);
    });      
  });

  describe('deeper checking for a winner when last move in top-right corner', function() {

    beforeEach(function() {
      connect4.grid = gridFullOfO;
      connect4.lastTurnPosition = [0, 3];
    });

    it('cannot move up so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up'])).toEqual(false);
    });

    it('cannot move up-right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-right'])).toEqual(false);
    });

    it('cannot move right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['right'])).toEqual(false);
    });

    it('cannot move down-right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-right'])).toEqual(false);
    });

    it('can find a winner in the down direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down'])).toEqual(true);
    });
    
    it('can find a winner in the down-left direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-left'])).toEqual(true);
    });

    it('can find a winner in the left direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['left'])).toEqual(true);
    });

    it('cannot move up-left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-left'])).toEqual(false);
    });      
  });

  describe('deeper checking for a winner when last move in bottom-right corner', function() {

    beforeEach(function() {
      connect4.grid = gridFullOfO;
      connect4.lastTurnPosition = [3, 3];
    });

    it('can find a winner in the up direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up'])).toEqual(true);
    });

    it('cannot move up-right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-right'])).toEqual(false);
    });

    it('cannot move right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['right'])).toEqual(false);
    });

    it('cannot move down-right so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-right'])).toEqual(false);
    });

    it('cannot move down so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down'])).toEqual(false);
    });
    
    it('cannot move down-left so no winner is found', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['down-left'])).toEqual(false);
    });

    it('can find a winner in the left direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['left'])).toEqual(true);
    });

    it('can find a winner in the up-left direction', function() {    
      expect(connect4.checkOneDirectionForWinner(connect4.directions['up-left'])).toEqual(true);
    });      
  });
});