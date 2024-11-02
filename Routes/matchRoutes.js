const express = require('express');
const { addMatch, getAllMatches, removeMatch } = require('../Controllers/matchController');
const router = express.Router();

router.post('/addMatch', addMatch);
router.get('/getAllMatches', getAllMatches);
router.delete('/removeMatch/:id', removeMatch);

module.exports = router;
