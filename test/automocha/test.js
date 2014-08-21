//this needs to be moved into the sea-b20-notes project

/* global describe, it */
'use strict';

var assert = require("assert");
var expect = require('chai').expect;
describe('Array', function() {
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1); 
    });
  });
});