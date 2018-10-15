class Question {
  constructor (clue) {
    this.pointValue = clue.pointValue;
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
  }

  validateAnswer(answer) {
    if (this.answer.toLowerCase().includes(answer.toLowerCase()) 
        && answer !== '') {
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


if (typeof module !== 'undefined') {
  module.exports = Question;
}