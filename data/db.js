const mysql = require('mysql2');
const config = require('../config'); // Assuming you have a db.js file for MySQL connection

/* let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',   // replace with your MySQL password    
    database: 'nodejs_db'   // replace with your MySQL database name
}); */

let connection = mysql.createConnection(config.db)

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
   

    console.log('Connected to database.');
});

module.exports = connection.promise(); // Exporting the connection as a promise for async/await usage