// matchController.js
const db = require('../db');

// Add Match
exports.addMatch = (req, res) => {
    const {
        id, tim1, tim2, event_id, i_v_c1, i_v_c2, i_v_c3, i_v_c4,
        i_m_c1, i_m_c2, i_m_c3, i_m_c4, i_v_gc1, i_v_gc2, i_v_gc3, i_v_gc4,
        i_m_gc1, i_m_gc2, i_m_gc3, i_m_gc4
    } = req.body;

    const query = `INSERT INTO matches (id, tim1, tim2, event_id, i_v_c1, i_v_c2, i_v_c3, i_v_c4, 
                                        i_m_c1, i_m_c2, i_m_c3, i_m_c4, i_v_gc1, i_v_gc2, i_v_gc3, 
                                        i_v_gc4, i_m_gc1, i_m_gc2, i_m_gc3, i_m_gc4) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [
        id, tim1, tim2, event_id, i_v_c1, i_v_c2, i_v_c3, i_v_c4,
        i_m_c1, i_m_c2, i_m_c3, i_m_c4, i_v_gc1, i_v_gc2, i_v_gc3, i_v_gc4,
        i_m_gc1, i_m_gc2, i_m_gc3, i_m_gc4
    ], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Match added');
    });
};

// Get All Matches
exports.getAllMatches = (req, res) => {
    const query = `SELECT * FROM matches`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(rows);
    });
};

// Remove Match
exports.removeMatch = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM matches WHERE id = ?`;
    db.run(query, [id], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Match removed');
    });
};

// Update Match
exports.updateMatches = (req, res) => {
    const { id } = req.params;
    const { i_v_c1, i_v_c2, i_v_c3, i_v_c4, i_m_c1, i_m_c2, i_m_c3, i_m_c4, i_v_gc1, i_v_gc2, i_v_gc3, i_v_gc4, i_m_gc1, i_m_gc2, i_m_gc3, i_m_gc4 } = req.body;

    const query = `UPDATE matches SET i_v_c1 = ?, i_v_c2 = ?, i_v_c3 = ?, i_v_c4 = ?, i_m_c1 = ?, 
                   i_m_c2 = ?, i_m_c3 = ?, i_m_c4 = ?, i_v_gc1 = ?, i_v_gc2 = ?, i_v_gc3 = ?, 
                   i_v_gc4 = ?, i_m_gc1 = ?, i_m_gc2 = ?, i_m_gc3 = ?, i_m_gc4 = ? WHERE id = ?`;

    db.run(query, [i_v_c1, i_v_c2, i_v_c3, i_v_c4, i_m_c1, i_m_c2, i_m_c3, i_m_c4, i_v_gc1, i_v_gc2, i_v_gc3, i_v_gc4, i_m_gc1, i_m_gc2, i_m_gc3, i_m_gc4, id], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Match updated');
    });
};