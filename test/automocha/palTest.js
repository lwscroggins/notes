'use srict'

var palindrome = require('../../app/palindrome');
var expect = require('chai').expect;

describe('palindrome', function() {
  describe('it should be true if palindrome', function () {
    it('identifies a palindrome', function () {
      expect(palindrome('racecar')).to.be.true;
    });
  });
});