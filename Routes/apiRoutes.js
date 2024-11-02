
const express = require('express');
const playerRoutes = require('./playerRoutes');
const eventRoutes = require('./eventRoutes');
const matchRoutes = require('./matchRoutes');
const statisticsRoutes = require('./statisticsRoutes');

const router = express.Router();

router.use('/players', playerRoutes);
router.use('/events', eventRoutes);
router.use('/matches', matchRoutes);
router.use('/statistics', statisticsRoutes);

module.exports = router;