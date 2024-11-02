// statisticsController.js
const db = require('../db');

// Create Statistics
exports.createStatistics = (req, res) => {
    const {
        id, id_player, id_game, id_event, name, gk, gol_n, penal_n, centar_n, spolja_n,
        izg_lopta_n, pog_dodavanje_n, kontrafaul_n, sut_n, spolja_centar_g_p, i_vise_g_p,
        penal_g_p, centar_p, spolja_p, penal_p, osvojena_asis_p, coachBonus, efikasnost,
        sutevi, odbrane, prim_gol
    } = req.body;

    const query = `INSERT INTO statistics 
                   (id, id_player, id_game, id_event, name, gk, gol_n, penal_n, centar_n, spolja_n,
                    izg_lopta_n, pog_dodavanje_n, kontrafaul_n, sut_n, spolja_centar_g_p, i_vise_g_p,
                    penal_g_p, centar_p, spolja_p, penal_p, osvojena_asis_p, coachBonus, efikasnost,
                    sutevi, odbrane, prim_gol) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.run(query, [
        id, id_player, id_game, id_event, name, gk, gol_n, penal_n, centar_n, spolja_n,
        izg_lopta_n, pog_dodavanje_n, kontrafaul_n, sut_n, spolja_centar_g_p, i_vise_g_p,
        penal_g_p, centar_p, spolja_p, penal_p, osvojena_asis_p, coachBonus, efikasnost,
        sutevi, odbrane, prim_gol
    ], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Statistics created');
    });
};

// Get Statistics
exports.getStatistics = (req, res) => {
    const query = `SELECT * FROM statistics`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(rows);
    });
};

// Remove Statistics
exports.removeStatistics = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM statistics WHERE id = ?`;
    db.run(query, [id], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Statistics removed');
    });
};

// Update Statistics
exports.updateStatistics = (req, res) => {
    const { id } = req.params;
    const { id_player, id_game, id_event, name, gk, gol_n, penal_n, centar_n, spolja_n,
            izg_lopta_n, pog_dodavanje_n, kontrafaul_n, sut_n, spolja_centar_g_p, i_vise_g_p,
            penal_g_p, centar_p, spolja_p, penal_p, osvojena_asis_p, coachBonus, efikasnost,
            sutevi, odbrane, prim_gol } = req.body;

    const query = `UPDATE statistics 
                   SET id_player = ?, id_game = ?, id_event = ?, name = ?, gk = ?, gol_n = ?, penal_n = ?, 
                       centar_n = ?, spolja_n = ?, izg_lopta_n = ?, pog_dodavanje_n = ?, kontrafaul_n = ?, 
                       sut_n = ?, spolja_centar_g_p = ?, i_vise_g_p = ?, penal_g_p = ?, centar_p = ?, 
                       spolja_p = ?, penal_p = ?, osvojena_asis_p = ?, coachBonus = ?, efikasnost = ?, 
                       sutevi = ?, odbrane = ?, prim_gol = ? 
                   WHERE id = ?`;

    db.run(query, [
        id_player, id_game, id_event, name, gk, gol_n, penal_n, centar_n, spolja_n,
        izg_lopta_n, pog_dodavanje_n, kontrafaul_n, sut_n, spolja_centar_g_p, i_vise_g_p,
        penal_g_p, centar_p, spolja_p, penal_p, osvojena_asis_p, coachBonus, efikasnost,
        sutevi, odbrane, prim_gol, id
    ], function (err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('Statistics updated');
    });
};