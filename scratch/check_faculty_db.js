
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '..', 'campuscode.db');
const db = new sqlite3.Database(dbPath);

console.log('--- Faculty List (role: faculty, hos, hod) ---');
db.all(`SELECT id, role, fullName, email, collegeName, department, status, isVerified, post, joiningDate FROM users WHERE role IN ('faculty', 'hos', 'hod') LIMIT 20`, (err, rows) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(JSON.stringify(rows, null, 2));
    db.close();
});
