class Game {
  constructor () {
    this.round = 1;
    this.winner = null;
    this.players = [];
    this.categories = [];
    this.playerTurn = 0;
    this.questions = []
  }

  setUpGame(player1, player2, player3) {
    let playerOne = new Player(player1)
    let playerTwo = new Player(player2)
    let playerThree = new Player(player3)
    this.generatePlayers(playerOne, playerTwo, playerThree);
    this.generateRandomCategories();
    this.generateQuestions();
    domUpdates.renderScoreboard(this.players);
    domUpdates.renderGameboard(this.categories, this.questions);
  }

  generatePlayers(player1, player2, player3) {
    this.players.push(player1, player2, player3)
    player1.turn = true;
  }

  generateRandomCategories() {
    this.categories = [];
    let keys = Object.keys(data.categories);
    while (this.categories.length < 4) {
      let randomNumber = Math.floor(Math.random() * keys.length)
      this.categories.push(keys[randomNumber])
      keys.splice(randomNumber, 1)
    }
  }

  generateQuestions() {
    this.questions = [];
    let random = Math.floor((Math.random() * 20) - 1);

    this.questions = this.categories.reduce((arr, cat) => {
      let filteredQuestions = data.clues.filter((clue)=> {
        return clue.categoryId === data.categories[cat];   
      })
      return arr.concat(filteredQuestions.slice(0, 5))
    }, []).map(clue => {
      return new Question(clue);
    })

    let daily = new DailyDouble(this.questions[random]);
    this.questions.splice(random, 1, daily)
  }

  checkRemainingQuestions() {
    if (this.questions.length === 0) {
      this.updateRound();
    }
  }

  updateRound() {
    this.round++;
    domUpdates.changeRoundDisplay(this.round);
    setTimeout(function() {
      this.generateRandomCategories();
      this.generateQuestions();
      domUpdates.renderGameboard(this.categories, this.questions);
    }.bind(this), 1000)
  }


  changeTurn() {
    let currentPlayer = this.players[this.playerTurn];
    if (currentPlayer.turn === true && this.playerTurn !== 2) {
      this.players[this.playerTurn + 1].turn = true;
      currentPlayer.turn = false;
      domUpdates.highlightPlayer(currentPlayer, 
        (this.players[this.playerTurn + 1]))
      this.playerTurn++;

    } else {
      this.players[0].turn = true;
      currentPlayer.turn = false;
      this.playerTurn = 0;
      domUpdates.highlightPlayer(currentPlayer, this.players[0])
    }
  }

  restartGame() {
    game.generateRandomCategories();
    game.generateQuestions();
    domUpdates.renderGameboard(game.categories, game.questions);
    game.players.forEach((player, i)=> {
      player.score = 0
      let div = document.querySelectorAll('.player-container');
      (div[i]).children[1].innerHTML = `Score: ${player.score}`;
    });
  }

  displayWinner() {
    //When round 3 is over iterate over player score
    //Sort player scores and pull index[0]
    //update this.winnner to player with hightest score
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}