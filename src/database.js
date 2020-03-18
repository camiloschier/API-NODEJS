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
    console.log("\n\t *** Cannot establish a connection with the database. ***");

    mysqlConnection = reconnect(mysqlConnection);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
