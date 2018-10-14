const chai = require('chai')
const expect = chai.expect;
global.Question = require('../lib/Question.js')
const data = require('../lib/jeopardy-datasets.js')

describe('hooks', function() {
  let question;
  beforeEach(function() {
    question = new Question();
  })

  describe('Question', function() {
    it('should instantiate a new question', function() {
      expect(question).to.exist;
    });
  });

});