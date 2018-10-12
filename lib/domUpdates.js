const domUpdates = {

  renderScoreboard (players) {
    players.forEach(player => {
      let ul = document.querySelector('.scoreboard');
      let div = document.createElement('div');
      ul.appendChild(div)
      div.innerHTML = `<li>Player: ${player.name}</li>
                      <li>Score: ${player.score}</li>`;
    })
  },

  convertCategoryNames(camelCaseNames) {
    return camelCaseNames.map(name => {
      let result = name.replace( /([A-Z])/g, " $1" );
      let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
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


