const router = require('express').Router();
const { createNewNote, setUniqueId, deleteSingleNote } = require('../../lib/notes');
let notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // add note to json file and notes array
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const updatedNotesArray = deleteSingleNote(req.params.id, notes);
  notes = updatedNotesArray;
  res.json(updatedNotesArray);
});

module.exports = router;
