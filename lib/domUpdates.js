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


