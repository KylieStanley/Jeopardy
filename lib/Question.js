class Question {
  constructor (clue) {
    this.question = clue.question;
    this.pointValue = clue.pointValue;
    this.answer = clue.answer;
    this.categoryId = clue.categoryId;
    //Object.assign(this,clue)
  }

  validateAnswer(answer) {
    let playerTurn = game.players[game.playerTurn];
    let isRight = this.answer.toLowerCase().includes(answer.toLowerCase()) 
      && answer !== '';

    playerTurn.updateScore(this.pointValue, isRight);
    game.changeTurn();
  }
}

//move openquestion method here


if (typeof module !== 'undefined') {
  module.exports = Question;
}