class Game {
  constructor () {
    this.round = 1;
    this.winner = null;
    this.players = [];
    this.categories = [];
    this.playerTurn = 0;
    this.questions = []
  }


//refactor and pass players in as param

  setUpGame(player1, player2, player3) {
    let playerOne = new Player(player1)
    let playerTwo = new Player(player2)
    let playerThree = new Player(player3)
    this.generatePlayers(playerOne, playerTwo, playerThree);
    this.generateRandomCategories(data);
    this.generateQuestions();
    domUpdates.renderScoreboard(this.players);
    domUpdates.renderGameboard(this.categories, this.questions);
  }

  generatePlayers(player1, player2, player3) {
    this.players.push(player1, player2, player3)
    player1.turn = true;
  }

  generateRandomCategories(data) {
    let keys = Object.keys(data.categories);
    while (this.categories.length < 4) {
      let randomNumber = Math.floor(Math.random() * keys.length)
      this.categories.push(keys[randomNumber])
      keys.splice(randomNumber, 1)
    }
  }

  generateQuestions() {
    this.questions = this.categories.reduce((arr,cat) => {
      let filteredQuestions = data.clues.filter((clue)=> {
        return clue.categoryId === data.categories[cat];   
      })
      return arr.concat(filteredQuestions.slice(0,5))
    }, []).map(clue => {
      return new Question(clue);
    })
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