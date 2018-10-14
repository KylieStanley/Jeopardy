let startButton = document.querySelector('.start-btn')
let player1 = document.querySelector('.player1-input')
let player2 = document.querySelector('.player2-input')
let player3 = document.querySelector('.player3-input')
let game;
let gameboard;

startButton.addEventListener('click', createGame)


function createGame(e) {
  e.preventDefault();
  document.querySelector('.start-screen').style.display = 'none';
  game = new Game();
  let playerOne = new Player(player1.value)
  let playerTwo = new Player(player2.value)
  let playerThree = new Player(player3.value)
  game.generatePlayers(playerOne, playerTwo, playerThree);
  game.generateRandomCategories();
  game.generateQuestions()
  domUpdates.renderScoreboard(game.players);
  domUpdates.renderGameboard(game.categories, game.questions);
}
