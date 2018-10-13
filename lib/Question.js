class Question {
  constructor (clue) {
    this.pointValue = clue.pointValue;
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
  }
}



class DailyDouble extends Question {
  constructor(clue) {
    super(clue);
  }

  validateWager(value) {

  }

  updatePointValue(value) {

  }
}



module.exports = Question;
module.exports = DailyDouble;