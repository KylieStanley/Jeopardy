const chai = require('chai')
const expect = chai.expect;
const Gameboard = require('../lib/Gameboard.js')

describe('Gameboard', function() {
  it('should instantiate a new Gameboard', function() {
    let gameboard = new Gameboard();
    expect(gameboard).to.exist;
  });
});
