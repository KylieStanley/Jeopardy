class Player {
  constructor(name) {
    this.score = 0;
    this.name = name;
    this.turn = false;
  }

  updateScore(points) {
    this.score += points;
    domUpdates.updateScoreboard(points)
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;  
}