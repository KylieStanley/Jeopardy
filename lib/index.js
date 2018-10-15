let startButton = document.querySelector('.start-btn')
let gameBoard = document.querySelector('.game-board')
let submitButton = document.querySelector('.submit-answer')
let player1 = document.querySelector('.player1-input')
let player2 = document.querySelector('.player2-input')
let player3 = document.querySelector('.player3-input')
let card = document.querySelector('.card');
let cardText = document.querySelector('.current-question')
let userAnswer = document.querySelector('.input-answer')
let game;

startButton.addEventListener('click', createGame)
gameBoard.addEventListener('click', openQuestionCard)

function createGame(e) {
  e.preventDefault();
  document.querySelector('.start-screen').classList.add('hide');
  game = new Game();
  game.setUpGame(player1.value, player2.value, player3.value)
}

function openQuestionCard(e) {
  domUpdates.showCardOptions();
  let answerHandler = () => {
    currentQuestion.validateAnswer(userAnswer.value);
    submitButton.removeEventListener('click', answerHandler);
  }

  let currentQuestion = game.questions.find(clue => {
    return e.target.classList.contains(clue.pointValue) && 
      e.target.classList.contains(clue.categoryId);
  })
  submitButton.addEventListener('click', answerHandler);
  
  cardText.innerHTML = currentQuestion.question;
  e.target.innerHTML = '';
  game.questions = game.questions.filter(item => item !== currentQuestion)

  return currentQuestion;
  //currently this returns the entire question instance that matches the 
  //space clicked
}
