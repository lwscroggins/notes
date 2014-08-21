var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Merlin = require('../models/merlin');

module.exports = Backbone.Collection.extend({
  url: '/api/v0.0.1/merlin',
  model: Merlin
});
