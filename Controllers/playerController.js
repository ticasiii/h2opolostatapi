const db = require('../db');

// Add Player
exports.addPlayer = (req, res) => {
    const { id, name, gk, birth } = req.body;
    const query = `INSERT INTO players (id, name, gk, birth) VALUES (?,?,?,?)`;
    db.run(query, [id, name, gk, birth], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Player added');
    });
};

// Get All Players
exports.getAllPlayers = (req, res) => {
    const query = `SELECT * FROM players`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(rows);
    });
};

// Remove Player
exports.removePlayer = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM players WHERE id = ?`;
    db.run(query, [id], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Player removed');
    });
};

// Remove Multiple Players
exports.removePlayers = (req, res) => {
    const { ids } = req.body;
    const placeholders = ids.map(() => '?').join(',');
    const query = `DELETE FROM players WHERE id IN (${placeholders})`;
    db.run(query, ids, function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Players removed');
    });
};