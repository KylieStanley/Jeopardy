let game = new Game()
let startButton = document.querySelector('.start-btn')

game.generatePlayers()

let scoreBoardRender = domUpdates.renderScoreboard(game.players);

startButton.addEventListener('click', scoreBoardRender)
