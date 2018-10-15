class Question {
  constructor (clue) {
    this.pointValue = clue.pointValue;
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
  }

  validateAnswer(answer) {
    if (this.answer.toLowerCase().includes(answer.toLowerCase())) {
      let playerTurn = game.players.find(player => {
        return player.turn === true;
      })
      domUpdates.returnAnswerStatus("Nice!")
      playerTurn.updateScore(this.pointValue)

    } else {
      domUpdates.returnAnswerStatus("Sorry that is incorrect.")
    }
  }
}

// class DailyDouble extends Question {
//   constructor(clue) {
//     super(clue);
//   }

//   validateWager(value, name) {
//     //Can player wager this amount
//     //is wager >= 5points and max of player's score or highest points on board
//   }

//   updatePointValue(value) {
//     //update point value of question
//   }
// }


if (typeof module !== 'undefined') {
  module.exports = Question;
}