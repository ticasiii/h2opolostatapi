const express = require('express');
const { addPlayer, getAllPlayers, removePlayer, removePlayers } = require('../Controllers/playerController');
const router = express.Router();

router.post('/addPlayer', addPlayer);
router.get('/getAllPlayers', getAllPlayers);
router.delete('/removePlayer/:id', removePlayer);
router.delete('/removePlayers', removePlayers);

module.exports = router;
