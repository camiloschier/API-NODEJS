const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '200.69.212.65',
  user: 'loteChAco',
  password: 'ChAcoLote!',
  database: 'ivr',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
