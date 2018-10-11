class Game {
  constructor () {
    this.round = 1;
    this.winner = null;
    this.players = []
    this.unansweredQuestions = []
    this.answeredQuestions = []
    this.categories = data.categories;
  }

  generatePlayers() {
    let player1 = new Player('name1')
    let player2 = new Player('name2')
    let player3 = new Player('name3')
    this.players.push(player1, player2, player3)
  }

  startResetGame() {

  }

  updateRound() {

  }

  displayWinner() {

  }

  determinePlayerTurn() {

  }
}