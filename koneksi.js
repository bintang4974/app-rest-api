var mysql = require('mysql');

// Create koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest-server'
})

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected');
})

module.exports = conn;