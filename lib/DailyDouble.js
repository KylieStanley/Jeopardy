global.Question = require('../lib/Question.js')


class DailyDouble extends Question {
  constructor(pointValue, categoryId, answer, question) {
    super(pointValue, categoryId, answer, question);
  }

  validateWager(value) {

  }

  updatePointValue(value) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}