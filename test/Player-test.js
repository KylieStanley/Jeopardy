const chai = require('chai')
const expect = chai.expect;
const Player = require('../lib/Player.js')
const data = require('../lib/jeopardy-datasets.js')

describe('hooks', function() {
  let player;
  beforeEach(function() {
    player = new Player();
  })

  describe('Player', function() {
    it('should instantiate a new player', function() {
      expect(player).to.exist;
    });
  });
});