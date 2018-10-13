//Daily double not defined, can't get tests to pass

const chai = require('chai')
const expect = chai.expect;
global.Question = require('../lib/Question.js')
const data = require('../lib/jeopardy-datasets.js')

describe('hooks', function() {
  let question;
  // let dailyDouble;
  beforeEach(function() {
    question = new Question();
    // dailyDouble = new DailyDouble();
  })

  describe('Question', function() {
    it('should instantiate a new question', function() {
      expect(question).to.exist;
    });
  });


describe('DailyDouble', function() {
    it('should instantiate a new DailyDouble', function() {
      let dailyDouble = new DailyDouble();
      expect(dailyDouble).to.exist;
    });
  });

});