var Connect4 = require('../js/connect4.js');

describe('Connect 4 game', function() {

  var gridMock = [['.', '.'], ['.', '.']];

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
  });
});