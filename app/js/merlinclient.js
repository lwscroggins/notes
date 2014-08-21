var $ = require('jquery');
var Merlin = require('./merlin/models/merlin');
var BasicMerlinView = require('./merlin/views/merlin-view');
var MerlinCollection = require('./merlin/collections/merlin-collection');
var MerlinCollectionView = require('./merlin/views/merlin-collection-view');

var merlin = new Merlin();
merlin.set('name', 'Merlin');
merlin.set('markings', 'grey/brown tabby with classic "M" pattern on head');
merlin.set('eyes', 'green and always looking like he wants something');
merlin.set('whiskers', 'average length but prone to fire damage when curious about candles');
merlin.save();

var merlin2 = new Note();
merlin.set('name', 'Kenneth');
merlin.set('markings', 'orange and white tabby head with a lopsided orange mustache');
merlin.set('eyes', 'orange');
merlin.set('whiskers', 'long and into everything');
merlin.save();

var merlinCollection = new merlinCollection();
var MerlinCollectionView = new MerlinCollectionView({collection: merlinCollection});
merlinCollection.fetch();
$('#merlin-space').html(MerlinCollectionView.$el);
