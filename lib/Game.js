class Game {
  constructor () {
    this.round = 1;
    this.winner = null;
    this.players = []
    this.categories = [];
  }

  generatePlayers(player1, player2, player3) {
    this.players.push(player1, player2, player3)
  }

  generateRandomCategories(data) {
    let keys = Object.keys(data.categories);
    while (this.categories.length < 4) {
      let randomNumber = Math.floor(Math.random() * keys.length)
      this.categories.push(keys[randomNumber])
      keys.splice(randomNumber, 1)
    }
  }

  ResetGame() {
    //set all player instances to empty string
    //bring back start screen
  }

  updateRound() {
    //increment this.round ++
    //run generateRandomCategories
  }

  displayWinner() {

  }

  determinePlayerTurn() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}