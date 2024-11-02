// eventController.js
const db = require('../db');

// Add Event
exports.addEvent = (req, res) => {
    const { id, name, date } = req.body;
    const query = `INSERT INTO events (id, name, date) VALUES (?, ?, ?)`;
    db.run(query, [id, name, date], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Event added');
    });
};

// Get All Events
exports.getAllEvents = (req, res) => {
    const query = `SELECT * FROM events`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(rows);
    });
};

// Remove Event
exports.removeEvent = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM events WHERE id = ?`;
    db.run(query, [id], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Event removed');
    });
};