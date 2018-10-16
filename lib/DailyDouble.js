
class DailyDouble extends Question {
  constructor(clue) {
    super(clue);
    this.dailyDouble = true;
  }

  validateWager(value) {

  }

  updatePointValue(value) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}