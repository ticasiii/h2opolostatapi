const express = require('express');
const { addEvent, getAllEvents, removeEvent } = require('../Controllers/eventController');
const router = express.Router();

router.post('/addEvent', addEvent);
router.get('/getAllEvents', getAllEvents);
router.delete('/removeEvent/:id', removeEvent);

module.exports = router;
