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

    it('should be able to submit an answer', function() {
      // expect method to exist;
    });

    it('should submit answer as a string', function() {
      //expect answer value to be a string
      // typeOf === String
    });

    it('should be able to submit an wager', function() {
      
    });

    it('should have score updated if answer is correct', function() {
      //player.score = 0
      //updateScore()
      //player.score > 0 
    });

    it('should update the scoreboard if answered correctly', function() {
      player.updateScore(100)
        expect(domUpdates.updateScoreboard).to.have.been.called(1)
    });
  });
});