const mysql = require('mysql');


// const mysqlConnection = mysql.createConnection({
//   host: 'magnetycs.com',
//   user: 'magnetyc_cliente',
//   password: 'desarrolloweb',
//   database: 'magnetyc_leads',
//   multipleStatements: true
// });

const mysqlConnection = mysql.createConnection({
  host: 'https://apimagnetycs.ddns.net/',
  user: 'admin',
  password: 'desarrolloweb',
  database: 'leads',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error("Error de conexión",err);
    return;
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
