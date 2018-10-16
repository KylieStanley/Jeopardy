let startButton = document.querySelector('.start-btn');
let gameBoard = document.querySelector('.game-board');
let submitButton = document.querySelector('.submit-answer');
let wagerButton = document.querySelector('.submit-wager');
let player1 = document.querySelector('.player1-input');
let player2 = document.querySelector('.player2-input');
let player3 = document.querySelector('.player3-input');
let cardParent = document.querySelector('.transparent-container');
let wagerParent = document.querySelector('.transparent-container-wager');
let card = document.querySelector('.card');
let wager = document.querySelector('.wager');
let cardText = document.querySelector('.current-question');
let userAnswer = document.querySelector('.input-answer');
let userWager = document.querySelector('.input-wager');
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
  submitButton.addEventListener('click', answerHandler);

  function answerHandler() {
    question.validateAnswer(userAnswer.value);
    submitButton.removeEventListener('click', answerHandler);
  }

  cardText.innerHTML = question.question;
  domUpdates.showCardOptions(cardParent, card, userAnswer, submitButton);
}

function openWagerCard(question) {
  domUpdates.showCardOptions(wagerParent, wager, userWager, wagerButton);

  wagerButton.addEventListener('click', function() {
    domUpdates.hideCardOptions(wagerParent, wager)
    question.validateWager(userWager.value)
    openQuestionCard(question);
    wager.style.display = 'none';
  });
}


