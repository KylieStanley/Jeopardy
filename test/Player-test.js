const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;

global.Player = require('../lib/Player.js')
global.domUpdates = require('../lib/domUpdates.js')

chai.spy.on(global.domUpdates, ['updateScoreboard', 'returnAnswerStatus'], () => true);

describe('hooks', function() {
  let player;
  beforeEach(function() {
    player = new Player('player1');
  })

  describe('Player', function() {
    it('should instantiate a new player', function() {
      expect(player).to.exist;
    });

    it('should have score increased if answer is correct', function() {
      player.updateScore(100, true)
      expect(player.score).to.equal(100);
    });

    it('should have score decreased if answer is correct', function() {
      player.updateScore(100, false)
      expect(player.score).to.equal(-100);
    });

    it('should update the scoreboard when answered', function() {
      player.updateScore(100, true)
      expect(domUpdates.updateScoreboard).to.have.been.called(3)
    });
  });
});