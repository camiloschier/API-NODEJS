const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
  host: '201.220.156.241',
  user: 'magnetyc_cliente',
  password: 'desarrolloweb',
  database: 'magnetyc_leads',
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
