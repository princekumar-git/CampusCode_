const dbClient = String(process.env.DB_CLIENT || 'sqlite').trim().toLowerCase();

if (dbClient === 'postgres' || dbClient === 'postgresql') {
    module.exports = require('./database.postgres');
} else {
    module.exports = require('./database');
}

