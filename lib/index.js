let startButton = document.querySelector('.start-btn');
let gameBoard = document.querySelector('.game-board');
let submitButton = document.querySelector('.submit-answer');
let player1 = document.querySelector('.player1-input');
let player2 = document.querySelector('.player2-input');
let player3 = document.querySelector('.player3-input');
let cardParent = document.querySelector('.transparent-container');
let wagerParent = document.querySelector('.transparent-container-wager');
let card = document.querySelector('.card');
let wager = document.querySelector('.wager');
let questionText = document.querySelector('.current-question');
let userAnswer = document.querySelector('.input-answer');
let userWager = document.querySelector('.input-wager');
let wagerText = document.querySelector('.wager-text')
let game;

startButton.addEventListener('click', createGame);
gameBoard.addEventListener('click', displayCard);

function createGame(e) {
  e.preventDefault();
  document.querySelector('.start-screen').classList.add('hide');
  game = new Game();
  game.setUpGame(player1.value, player2.value, player3.value);
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


