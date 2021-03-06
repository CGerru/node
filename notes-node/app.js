console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Potter', argv);

if (command === 'add') {
  notes.addNote(argv.title);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove') {
  notes.remove();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else {
  console.log('Not regonized');
}