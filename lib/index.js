const startButton = document.querySelector('.start-btn');
const gameBoard = document.querySelector('.game-board');
const submitButton = document.querySelector('.submit-answer');
const player1 = document.querySelector('.player1-input');
const player2 = document.querySelector('.player2-input');
const player3 = document.querySelector('.player3-input');
const cardParent = document.querySelector('.transparent-container');
const wagerParent = document.querySelector('.transparent-container-wager');
const card = document.querySelector('.card');
const wager = document.querySelector('.wager');
const questionText = document.querySelector('.current-question');
const userAnswer = document.querySelector('.input-answer');
const userWager = document.querySelector('.input-wager');
const wagerText = document.querySelector('.wager-text');
const gameRound = document.querySelector('.round');
const roundScreen = document.querySelector('.round-screen')
const restartButton = document.querySelector('.restart-button')
let game;

startButton.addEventListener('click', createGame);
gameBoard.addEventListener('click', displayCard);

function createGame() {
  event.preventDefault();
  document.querySelector('.start-screen').classList.add('hide');
  game = new Game();
  game.setUpGame(player1.value, player2.value, player3.value);
  restartButton.addEventListener('click', game.restartGame);
}

function displayCard(e) {
  if (e.target.classList.contains('points')) {
    e.target.innerHTML = '';
  }
  
  let currentQuestion = game.questions.find(clue => {
    return e.target.classList.contains(clue.pointValue) && 
      e.target.classList.contains(clue.categoryId);
  })

  if (currentQuestion.dailyDouble) {
    openWagerCard(currentQuestion);
  } else {
    openQuestionCard(currentQuestion);
  }
  game.questions = game.questions.filter(item => item !== currentQuestion);
}

function openQuestionCard(question) {
  domUpdates.showCardOptions(cardParent, card, userAnswer, submitButton);
  submitButton.addEventListener('click', answerHandler);

  function answerHandler() {
    question.validateAnswer(userAnswer.value);
    submitButton.removeEventListener('click', answerHandler);
  }

  questionText.innerHTML = question.question;
}

function openWagerCard(question) {
  let wagerButton = document.querySelector('.submit-wager');
  domUpdates.showCardOptions(wagerParent, wager, userWager, wagerButton);
  wagerButton.addEventListener('click', function() {
    question.validateWager(userWager.value)
  });
}


