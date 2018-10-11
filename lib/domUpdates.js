const domUpdates = {

  renderScoreboard(players) {
    players.forEach((player) => {
      let ul = document.querySelector('.scoreboard');
      let li = document.createElement('li');
      ul.appendChild(li)
      li.innerHTML = `Player: ${player.name}`;

    })
  }


}


