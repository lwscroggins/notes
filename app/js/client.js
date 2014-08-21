var $ = require('jquery');
var Note = require('./notes/models/note');
var BasicNoteView = require('./notes/views/note-view');
var NotesCollection = require('./notes/collections/notes-collection');
var NotesCollectionView = require('./notes/views/notes-collection-view');

var note = new Note();
note.set('noteBody', 'wow such note, so words');
note.set('awesomeFactor', '10,000,000');
note.save();

var note2 = new Note();
note.set('noteBody', 'b-flat');
note2.save();

var notesCollection = new NotesCollection();
var NotesCollectionView = new NotesCollectionView({collection: notesCollection});
notesCollection.fetch();
$('#notes').html(NotesCollectionView.$el);


var Merlin = require('./merlin/models/merlin');
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
