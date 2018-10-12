const domUpdates = {

  renderScoreboard (players) {
    players.forEach(player => {
      let ul = document.querySelector('.scoreboard');
      let li = document.createElement('li');
      ul.appendChild(li)
      li.innerHTML = `Player: ${player.name}
                      <span>Score: ${player.score}</span>`;
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

  renderGameboard (categories) {
    let convertedNames = this.convertCategoryNames(categories);
    let gameBoard = document.querySelector('.game-board');
    convertedNames.forEach(currentName => {

      let ul = document.createElement('ul');
      ul.innerHTML = `<li class="category">${currentName}</li>`
      gameBoard.appendChild(ul);  
    });
  },
}


