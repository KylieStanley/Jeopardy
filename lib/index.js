
let startButton = document.querySelector('.start-btn')
let player1 = document.querySelector('.player1-input')
let player2 = document.querySelector('.player2-input')
let player3 = document.querySelector('.player3-input')


startButton.addEventListener('click', function(e) { 
  e.preventDefault();
  document.querySelector('.start-screen').style.display = 'none';
  let game = new Game();
  game.generatePlayers();
  domUpdates.renderScoreboard(game.players);

})

