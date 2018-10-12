let startButton = document.querySelector('.start-btn')
let player1 = document.querySelector('.player1-input')
let player2 = document.querySelector('.player2-input')
let player3 = document.querySelector('.player3-input')
let game;
let gameboard;



startButton.addEventListener('click', function(e) { 
  e.preventDefault();
  document.querySelector('.start-screen').style.display = 'none';
  game = new Game();
  gameboard = new Gameboard(generateRandomNumbers());
  game.generatePlayers();
  domUpdates.renderScoreboard(game.players);
  domUpdates.renderGameboard(gameboard.categories);
})


const generateRandomNumbers = () => {
let randomCategories = [];
let keys = Object.keys(data.categories);
  keys.forEach((category) => {
    while (randomCategories.length < 4) {
      let randomNumber = Math.floor(Math.random()*keys.length)
      randomCategories.push(keys[randomNumber])
      keys.splice(randomNumber, 1)
    }
  })
  return randomCategories;
}