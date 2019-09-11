const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '200.69.212.65',
  user: 'loteChAco',
  password: 'ChAcoLote!',
  database: 'ivr',
  multipleStatements: true
});



module.exports = mysqlConnection;
