const chai = require('chai')
const expect = chai.expect;
global.Question = require('../lib/Question.js')
const DailyDouble = require('../lib/DailyDouble.js')
const data = require('../lib/jeopardy-datasets.js')

describe('hooks', function() {
  let dailyDouble;
  beforeEach(function() {
    dailyDouble = new DailyDouble(data.clues[0]);
  })


  describe('DailyDouble', function() {
    it('should instantiate a new DailyDouble', function() {
      expect(dailyDouble).to.exist;
    });
  });
});


