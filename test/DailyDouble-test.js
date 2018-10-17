const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;

global.Game = require('../lib/Game.js')
global.Question = require('../lib/Question.js')
const DailyDouble = require('../lib/DailyDouble.js')
const Player = require('../lib/Player.js')
global.domUpdates = require('../lib/domUpdates.js')
const data = require('../lib/jeopardy-datasets.js')

chai.spy.on(global.domUpdates, ['hideCardOptions'], () => true);

describe('hooks', function() {
  let game;
  let dailyDouble;
  beforeEach(function() {
    dailyDouble = new DailyDouble(data.clues[0]);
    game = new Game();
  })

  describe('DailyDouble', function() {
    it('should instantiate a new DailyDouble', function() {
      expect(dailyDouble).to.exist;
    });

    it('should be able to validate a wager', function() {
      player = new Player('1');
      game.players = ['1', '2', '3']
      dailyDouble.validateWager(100)
      expect(dailyDouble).to.exist;
    });

    it('should hide the card when answered', function() {
      expect(domUpdates.hideCardOptions).to.have.been.called(1)
    });
  });
});


