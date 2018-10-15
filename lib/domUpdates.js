const domUpdates = {

  renderScoreboard (players) {
    players.forEach((player, i) => {
      let aside = document.querySelector('.scoreboard');
      let div = document.createElement('div');
      div.className = `player-container ${i}`
      aside.appendChild(div)
      div.innerHTML = `<h2>Player: ${player.name}</h2>
                      <h3>Score: ${player.score}</h3>`;
    })
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
        let div = document.querySelector(`.player-container`);
        // div.innerHTML += points;
      }
    })
  }
}


