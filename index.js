const NotesModel = require('./src/notesModel');
const working = require('./src/test');
working();

const model = new NotesModel;
model.addNote('test notes');

console.log(model.getNotes())