const fs = require('fs');
const path = require('path');

createNewNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
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
    console.log(element);
    uniqueId++;
  });
};

module.exports = {
  createNewNote,
  setUniqueId
};