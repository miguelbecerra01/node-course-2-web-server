//console.log('Staring app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe:'Title of note',
    demand:true,
    alias:'t'
};

const bodyOptions = {
    describe:'Body of note',
    demand:true,
    alias:'b'
};

const argv = yargs
            .command('add','Add a new Note',{
                title:titleOptions,
                body:bodyOptions
            })
            .command('list','List all Note')
            .command('read','Read a Note',{
                title:titleOptions
            })
            .command('remove','Remove a Note',{
                title:titleOptions
            })
            .help()
            .argv;

var command = argv._[0];
//console.log('Commnad: ', command);
//console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title,argv.body);
     
    if(note){
        console.log('Note saved'); 
        notes.logNote(note);
    }else{
        console.log('Note repeated');
    }

} else if (command === 'list') {
    var noteList = notes.getAll();
    console.log(`Printing ${noteList.length} note(s)`);

    noteList.forEach(note => notes.logNote(note));

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
     
    if(note){
        console.log('Note Found');
        notes.logNote(note);       
    }else{
        console.log('Note Not Found');
    }

} else if (command === 'remove') {
    var notesRemoved = notes.removeNote(argv.title);
    console.log(notesRemoved);

    var message = notesRemoved ? `Note Removed ${argv.title}` : 'Note Not Found' ;
    console.log(message);

} else {
    console.log('Command not recognized');

}
