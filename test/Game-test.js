const chai = require('chai')
const expect = chai.expect;
const Game = require('../lib/Game.js')
const Player = require('../lib/Player.js')
const data = require('../lib/jeopardy-datasets.js')


describe('hooks', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  })

  describe('Game', function() {
    it('should instantiate a new Game', function() {
      expect(game).to.exist;
    });
  });

  describe('Game', function() {
    it('should have three players', function() {
      game.generatePlayers('1', '2', '3')
      expect(game.players).to.eql(['1', '2', '3']);
    });
  });

 describe('Game', function() {
    it('should have 4 categories', function() {
      game.generateRandomCategories(data);
      expect(game.categories.length).to.equal(4);
    });
  });


});