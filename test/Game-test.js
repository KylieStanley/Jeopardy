const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;

const Game = require('../lib/Game.js')
global.Player = require('../lib/Player.js')
global.data = require('../lib/jeopardy-datasets.js')
global.domUpdates = require('../lib/domUpdates.js')

chai.spy.on(global.domUpdates, ['renderScoreboard', 'renderGameboard'], () => true);

describe('hooks', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  })

  describe('Game', function() {
    it('should instantiate a new Game', function() {
      expect(game).to.exist;
    });
 
    it('should have three players', function() {
      let player = new Player('1')
      game.generatePlayers(player, player, player)
      expect(game.players).to.eql([player, player, player]);
    });

    it('should have 4 categories', function() {
      game.generateRandomCategories(data);
      expect(game.categories.length).to.equal(4);
    });

    it('should do proper setup', function() {
      game.init()
        expect(domUpdates.renderScoreboard).to.have.been.called(1)
        expect(domUpdates.renderGameboard).to.have.been.called(1)
    })
  })

});