const chai = require('chai')
const expect = chai.expect;
const Player = require('../lib/Player.js')
const data = require('../lib/jeopardy-datasets.js')

describe('hooks', function() {
  let player;
  beforeEach(function() {
    player = new Player('player1');
  })

  describe('Player', function() {
    it('should instantiate a new player', function() {
      expect(player).to.exist;
    });
  });

  describe('Player', function() {
    it('should be able to submit an answer', function() {
      // expect method to exist;
    });
  });

  describe('Player', function() {
    it('should submit answer as a string', function() {
      //expect answer value to be a string
      // typeOf === String
      expect;
    });
  });

  describe('Player', function() {
    it('should be able to submit an wager', function() {
      
    });
  });


  describe('Player', function() {
    it('should have score updated if answer is correct', function() {
      //player.score = 0
      //updateScore()
      //player.score > 0 
    });
  });

});