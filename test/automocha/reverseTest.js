'use strict'

var reverse = require('../../app/reverse_string');
var expect = require('chai').expect;

describe('reverse_string', function() {
  it('reverses a string', function() {
    expect(reverse('boy')).to.equal('yob');
  });
});