let startButton = document.querySelector('.start-btn')
let gameBoard = document.querySelector('.game-board')
let submitButton = document.querySelector('.submit-answer')
let player1 = document.querySelector('.player1-input')
let player2 = document.querySelector('.player2-input')
let player3 = document.querySelector('.player3-input')
let game;

startButton.addEventListener('click', createGame)
gameBoard.addEventListener('click', openQuestionCard)

function createGame(e) {
  e.preventDefault();
  document.querySelector('.start-screen').classList.add('hide');
  game = new Game();
  let playerOne = new Player(player1.value)
  let playerTwo = new Player(player2.value)
  let playerThree = new Player(player3.value)
  game.generatePlayers(playerOne, playerTwo, playerThree);
  game.generateRandomCategories(data);
  game.generateQuestions();
  domUpdates.renderScoreboard(game.players);
  domUpdates.renderGameboard(game.categories, game.questions);
}


function openQuestionCard(e) {
  document.querySelector('.card').classList.remove('hidden')
  let cardText = document.querySelector('.current-question')
  let userAnswer = document.querySelector('.input-answer')
  let answerHandler = function() {
    currentQuestion.validateAnswer(userAnswer.value)
    submitButton.removeEventListener('click', answerHandler)
  }

  let currentQuestion = game.questions.find(clue => {
    return e.target.classList.contains(clue.pointValue) && 
      e.target.classList.contains(clue.categoryId);
  })
  cardText.innerHTML = currentQuestion.question;
  submitButton.addEventListener('click', answerHandler)


  return currentQuestion;
  //currently this returns the entire question instance that matches the 
  //space clicked
}
