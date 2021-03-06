const domUpdates = {

  renderScoreboard (players) {
    let aside = document.querySelector('.scoreboard');
    players.forEach(player => {
      let div = document.createElement('div');
      div.className = `player-container ${player.name}`;
      aside.appendChild(div)
      div.innerHTML = `<h2 class=>Player: ${player.name}</h2>
                      <h3>Score: ${player.score}</h3>`;
    })
    aside.children[0].classList.add('highlight');
  },

  convertCategoryNames(camelCaseNames) {
    return camelCaseNames.map(name => {
      let separatedWords = name.replace( /([A-Z])/g, " $1" );
      let convertedName = separatedWords.charAt(0).toUpperCase() 
      + separatedWords.slice(1);
      return convertedName;
    })
  },

  renderGameboard (categories, questions) {
    let convertedNames = this.convertCategoryNames(categories);
    let gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';
    convertedNames.forEach((currentName, i)=> {
      let ul = document.createElement('ul');
      ul.innerHTML = `<li class="${categories[i]}">${currentName}</li>`
      gameBoard.appendChild(ul);  

      questions.forEach(question => {
        if (question.categoryId === data.categories[categories[i]]) {
          let li = document.createElement('li')
          li.className = `points ${question.pointValue} ${question.categoryId}`;
          li.innerHTML = `$${question.pointValue}`;
          ul.appendChild(li)
        }
      })
    });
  },

  updateScoreboard(points) {
    game.players.forEach((player, i) => {
      if (player.turn === true) {
        let div = document.querySelectorAll('.player-container');
        (div[i]).children[1].innerHTML = `Score: ${player.score}`;
      }
    })
  }, 

  returnAnswerStatus(status) {
    questionText.innerHTML = status;
    this.hideCardOptions(cardParent, card);
    userAnswer.style.display = 'none'
    submitButton.style.display = "none"
  },

  showCardOptions(parent, card, input, button) {
    parent.classList.remove('hidden')
    parent.style.zIndex = "1";
    card.style.zIndex = "1";
    input.style.display = 'inline-block';
    button.style.display = 'inline-block';
  },

  hideCardOptions(parent, card) {
    parent.classList.add('hidden')
    userAnswer.value = '';
  },

  changeRoundDisplay(round) {
    roundScreen.classList.add('new-round');
    gameRound.innerHTML = `Round ${round}`;
  },

  highlightPlayer(current, next) {
    document.querySelector(`.${current.name}`).classList.remove('highlight');
    document.querySelector(`.${next.name}`).classList.add('highlight');
  }
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}