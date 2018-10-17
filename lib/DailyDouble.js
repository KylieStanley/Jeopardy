
class DailyDouble extends Question {
  constructor(clue) {
    super(clue);
    this.dailyDouble = true;
  }

  validateWager(value) {
    let wagered = parseInt(value);
    let pointValues = game.questions.map(question => question.pointValue);
    let highestValue =  Math.max.apply(null, pointValues)

    if (wagered <= game.players[game.playerTurn].score 
      || wagered <= highestValue) {
      this.pointValue = parseInt(value);
      openQuestionCard(this);
      domUpdates.hideCardOptions(wagerParent, wager)
      wager.style.display = 'none';
    } else {
      wagerText.innerHTML = "Enter a valid wager";
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}