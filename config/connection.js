const mysql = require('mysql');
const dotenv = require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

// Set up our connection information
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: process.env.PASSWORD,
//   database: 'burgers_db',
// });

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