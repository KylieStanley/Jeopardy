const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;

const Player = require('../lib/Player.js')
const data = require('../lib/jeopardy-datasets.js')

chai.spy.on(global.domUpdates, ['updateScoreboard'], () => true);

describe('hooks', function() {
  let player;
  beforeEach(function() {
    player = new Player('player1');
  })

  describe('Player', function() {
    it('should instantiate a new player', function() {
      expect(player).to.exist;
    });

    it('should have score updated if answer is correct', function() {
      player.updateScore(100)
      expect(player.score).to.equal(100);
    });

    it('should update the scoreboard if answered correctly', function() {
      player.updateScore(100)
        expect(domUpdates.updateScoreboard).to.have.been.called(2)
    });
  });
});