const NotesModel = require("../src/notesModel");

describe("testing the notesModel class", () => {
  it('using .getNotes returns empty array', () => {
    const model = new NotesModel;
    expect(model.getNotes()).toEqual([]);
  })

  it('adding new notes and returning what was added', () => {
    const model = new NotesModel;
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('.rest method resets the .getNotes method', () => {
    const model = new NotesModel;
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    model.reset()
    expect(model.getNotes()).toEqual([]);
  })
})

