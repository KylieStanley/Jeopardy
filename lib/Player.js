class Player {
  constructor(name) {
    this.score = 0;
    this.name = name;
    this.turn = false;
  }

  updateScore(points, isRight) {
    if (isRight) {
      this.score += points; 
      domUpdates.returnAnswerStatus("Great Job!")
    } else {
      this.score -= points;
      domUpdates.returnAnswerStatus("Sorry, that is incorrect.");
    }
    domUpdates.updateScoreboard(points)
    game.checkRemainingQuestions();
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;  
}