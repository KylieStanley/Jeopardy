class Game {
  constructor () {
    this.round = 1;
    this.winner = null;
    this.players = [];
    this.categories = [];
    this.playerTurn = null;
  }

  generatePlayers(player1, player2, player3) {
    this.players.push(player1, player2, player3)
    this.playerTurn = this.players[0];
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
    //When round 3 is over iterate over player score
    //Sort player scores and pull index[0]
    //update this.winnner to player with hightest score
  }

  changeTurn() {
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}