const mysql = require('mysql2');
const dbConfig = require('./dbConfig.json');

const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: dbConfig.db.db_host,
  user: dbConfig.db.db_user,
  password: dbConfig.db.db_password,
  database: dbConfig.db.db_name
});

module.exports = { connectionPool };