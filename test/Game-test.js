const chai = require('chai')
const expect = chai.expect;
const Game = require('../lib/Game.js')

describe('Game', function() {
  it('should instantiate a new Game', function() {
    let game = new Game();
    expect(game).to.exist;
  });
});