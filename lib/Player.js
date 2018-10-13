class Player {
  constructor(name) {
    this.score = 0;
    this.name = name;
  }

  submitAnswer() {
    //Input appears and within form we need to grab the value validated if('string')
    //Convert string to lowercase, convert to consistent spacing(.trim())
    
    //Outside this class: //trigger submit button event listener
                            //run function to compare answer to input
  }

  submitWager() {
    //Check if wager is number
    // return this.name and wager amount



  }

  updateScore() {
    //increase player score by pointvalue from the question class
    // (clue.pointValue)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;  
}