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
    let playerOne = new Player(player1.value)
    let playerTwo = new Player(player2.value)
    let playerThree = new Player(player3.value)
    this.players.push(playerOne, playerTwo, playerThree)
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