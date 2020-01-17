const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'magnetycs.com',
  user: 'magnetyc_cliente',
  password: 'desarrolloweb',
  database: 'magnetycs_leads',
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
