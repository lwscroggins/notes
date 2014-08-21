//Backbone merlin model

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Merlin = Backbone.Model.extend({
  url: '/api/v0.0.1/merlin',
  defaults: {
    name: '_name',
    markings: '_markings',
    eyes: '_eyeColor',
    whiskers: '_whiskerLength'
  }
});

module.exports = Merlin;
