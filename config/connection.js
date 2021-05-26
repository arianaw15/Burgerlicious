var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);
var Sequelize = require('sequelize');

// let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'burgers_db',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});


// Export connection
module.exports = connection;