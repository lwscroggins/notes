//Backbone Note model
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var Note = Backbone.Model.extend({
  url: '/api/v_0_0_1/notes',
  defaults: {
    idAttribute: '_id',
    noteBody: ''
  }
});

module.exports = Note;