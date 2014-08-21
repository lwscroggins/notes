var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var MerlinView = Backbone.View.extend({
  tagName: 'div',
  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/merlin-template.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
  }
});

module.exports = MerlinView;
