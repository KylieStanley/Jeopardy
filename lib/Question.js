class Question {
  constructor (clue) {
    this.question = clue.question;
    this.pointValue = clue.pointValue;
    this.answer = clue.answer;
    this.categoryId = clue.categoryId;
  }

  validateAnswer(answer) {
    if (this.answer.toLowerCase().includes(answer.toLowerCase()) 
        && answer !== '') {
      let playerTurn = game.players.find(player => {
        return player.turn === true;
      })
      playerTurn.updateScore(this.pointValue);
      domUpdates.returnAnswerStatus("Nice!")

    } else {
      domUpdates.returnAnswerStatus("Sorry that is incorrect.");
    }

    game.changeTurn()
  }
}


if (typeof module !== 'undefined') {
  module.exports = Question;
}