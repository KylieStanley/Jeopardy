global.Question = require('../lib/Question.js')


class DailyDouble extends Question {
  constructor(clue) {
    super(clue);
  }

  validateWager(value) {

  }

  updatePointValue(value) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}