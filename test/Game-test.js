const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;

const Game = require('../lib/Game.js')
const Question = require('../lib/Question.js')
global.DailyDouble = require('../lib/DailyDouble.js')
const Player = require('../lib/Player.js')
global.domUpdates = require('../lib/domUpdates.js')

chai.spy.on(global.domUpdates, 
  ['renderScoreboard', 'renderGameboard', 'changeRoundDisplay'], () => true);

describe('hooks', function() {
  let game;
  let player;
  beforeEach(function() {
    game = new Game();
    player = new Player('1')
    game.generatePlayers(player, player, player)
  })

  describe('Game', function() {
    it('should instantiate a new Game', function() {
      expect(game).to.exist;
    });
 
    it('should have three players', function() {
      expect(game.players).to.eql([player, player, player]);
    });

    it('should set up players and board', function() {
      game.setUpGame()
      expect(domUpdates.renderScoreboard).to.have.been.called(1)
      expect(domUpdates.renderGameboard).to.have.been.called(1)
    });

    it('should have 4 categories', function() {
      game.generateRandomCategories();
      expect(game.categories.length).to.equal(4);
    });

    it('should generate 20 questions', function() {
      game.generateRandomCategories()
      game.generateQuestions();
      expect(game.questions.length).to.equal(20);
    });

    it('should know which player\'s turn it is', function() {
      expect(game.playerTurn).to.equal(0)
      game.changeTurn()
      expect(game.playerTurn).to.equal(1)
    });
  });
});