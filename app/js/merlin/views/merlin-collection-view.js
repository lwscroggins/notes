var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Merlin = require('../models/merlin');
var MerlinCollection = require('../collections/merlin-collection');
var MerlinView = require('./merlin-view');

module.exports = Backbone.View.extend ({
  tagName: 'div',

  initalize: function() {
    this.collection.on('add', this.addCat, this);
    this.collection.on('reset', this.addAll, this);
    this.render();
  },

  addCat: function() {
    var MerlinView = new MerlinView({model: merlin});
    this.$el.children('#merlin-space').append(merlinView.$el)
  },

  addAll: function() {
    this.$el.children('#merlin-space').html('');
    this.collection.forEach(this.addMerlin);
  },

  render: function() {
    var template = require('../templates/merlin-collection.hbs');
    this.$el.html(template);
    this.addAll;
  }
});
