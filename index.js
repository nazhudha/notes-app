const NotesModel = require('./src/notesModel');
const working = require('./src/test');
working();

const model = new NotesModel

console.log(model.getNotes())