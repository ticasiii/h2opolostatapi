// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize the SQLite Database
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
    if (err) {
        console.error("Error connecting to SQLite database:", err);
    } else {
        console.log("Connected to SQLite database");
    }
});

// Set up the database schema if tables do not already exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS players (
        id TEXT PRIMARY KEY,
        name TEXT,
        gk BOOLEAN,
        birth TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS events (
        id TEXT PRIMARY KEY,
        name TEXT,
        date TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS matches (
        id TEXT PRIMARY KEY,
        tim1 TEXT,
        tim2 TEXT,
        event_id TEXT,
        i_v_c1 INTEGER,
        i_v_c2 INTEGER,
        i_v_c3 INTEGER,
        i_v_c4 INTEGER,
        i_m_c1 INTEGER,
        i_m_c2 INTEGER,
        i_m_c3 INTEGER,
        i_m_c4 INTEGER,
        i_v_gc1 INTEGER,
        i_v_gc2 INTEGER,
        i_v_gc3 INTEGER,
        i_v_gc4 INTEGER,
        i_m_gc1 INTEGER,
        i_m_gc2 INTEGER,
        i_m_gc3 INTEGER,
        i_m_gc4 INTEGER,
        FOREIGN KEY (event_id) REFERENCES events(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS statistics (
        id TEXT PRIMARY KEY,
        id_player TEXT,
        id_game TEXT,
        id_event TEXT,
        name TEXT,
        gk BOOLEAN,
        gol_n INTEGER,
        penal_n INTEGER,
        centar_n INTEGER,
        spolja_n INTEGER,
        izg_lopta_n INTEGER,
        pog_dodavanje_n INTEGER,
        kontrafaul_n INTEGER,
        sut_n INTEGER,
        spolja_centar_g_p INTEGER,
        i_vise_g_p INTEGER,
        penal_g_p INTEGER,
        centar_p INTEGER,
        spolja_p INTEGER,
        penal_p INTEGER,
        osvojena_asis_p INTEGER,
        coachBonus INTEGER,
        efikasnost INTEGER,
        sutevi INTEGER,
        odbrane INTEGER,
        prim_gol INTEGER,
        FOREIGN KEY (id_player) REFERENCES players(id),
        FOREIGN KEY (id_game) REFERENCES matches(id),
        FOREIGN KEY (id_event) REFERENCES events(id)
    )`);
});

// Export the database instance for use in other files
module.exports = db;