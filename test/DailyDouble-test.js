const chai = require('chai')
const expect = chai.expect;
const DailyDouble = require('../lib/DailyDouble.js')
global.Question = require('../lib/Question.js')
const data = require('../lib/jeopardy-datasets.js')

describe('hooks', function() {
  // let question
  let dailyDouble;
  beforeEach(function() {
    // question = new Question();
    dailyDouble = new DailyDouble(data.clues[0]);
  })


  describe('DailyDouble', function() {
    it('should instantiate a new DailyDouble', function() {
      expect(dailyDouble).to.exist;
    });
  });
});


