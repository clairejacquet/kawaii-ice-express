// 1. require le module
const pg = require('pg');

// 2. Créer un client
const client = new pg.Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD
});

// 3. Connecter le client
client.connect();

// 4. Exporter le client connecté
module.exports = client;
