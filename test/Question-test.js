const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies);
const expect = chai.expect;

global.Game = require('../lib/Game.js')
global.Question = require('../lib/Question.js')
global.domUpdates = require('../lib/domUpdates.js')
global.data = require('../lib/jeopardy-datasets.js')


describe('hooks', function() {
  let game;
  let question;
  beforeEach(function() {
    game = new Game();
    question = new Question(data.clues[0]);
  })

  describe('Question', function() {
    it('should instantiate a new question', function() {
      expect(question).to.exist;
    });

    it('should be able to validate an answer', function() {
      question.validateAnswer('golf')
      expect(isRight).to.equal(true);
    });
  });
});