const router = require('express').Router();
const { createNewNote, setUniqueId } = require('../../lib/notes');
const notes = require('../../db/db.json');

// let uniqueId = 0;

router.get('/notes', (req, res) => {
  let results = notes;
  setUniqueId(results);
  res.json(results);
});

router.post('/notes', (req, res) => {
  // add note to json file and notes array
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;
