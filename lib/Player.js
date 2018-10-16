class Player {
  constructor(name) {
    this.score = 0;
    this.name = name;
    this.turn = false;
  }

  submitAnswer(points) {

  }

  submitWager() {
    //Check if wager is number
    // return this.name and wager amount
  }

  updateScore(points) {
    this.score += points;
    domUpdates.updateScoreboard(points)
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;  
}