var Connect4 = require('../js/connect4.js');

describe('Connect 4 game', function() {

  var gridMock = [['.', '.'], ['.', '.']];

  beforeEach(function() {
    connect4 = new Connect4(2, 2);
  });

  describe('initialization', function() {
    it('game has a width', function() {
      expect(connect4.width).toEqual(2);
    });

    it('game has a height', function() {
      expect(connect4.height).toEqual(2);
    });
  });
});