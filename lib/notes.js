const fs = require('fs');
const path = require('path');

createNewNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  setUniqueId(notesArray);
  if (!fs.existsSync('db')) {
    fs.mkdirSync('db')
  }
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
};

setUniqueId = (notesArray) => {
  let uniqueId = 0;
  notesArray.forEach(element => {
    element.id = JSON.stringify(uniqueId);
    uniqueId++;
  });
};

deleteSingleNote = (id, notesArray) => {
  const updatedNotes = notesArray.filter(note => id != note.id);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(updatedNotes, null, 2)
  );
  return updatedNotes;
};

module.exports = {
  createNewNote,
  setUniqueId,
  deleteSingleNote
};