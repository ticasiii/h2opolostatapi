const express = require('express');
const { createStatistics, getStatistics, removeStatistics, updateStatistics } = require('../Controllers/statisticsController');
const router = express.Router();

router.post('/createStatistics', createStatistics);
router.get('/getStatistics', getStatistics);
router.delete('/removeStatistics/:id', removeStatistics);
router.put('/updateStatistics/:id', updateStatistics);

module.exports = router;
