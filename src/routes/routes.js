const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// OBTENER TODOS LOS NUMEROS
// router.get('/', (req, res) => {
//   mysqlConnection.query('SELECT * FROM loteria_chaco WHERE id=27000', (err, rows, fields) => {
//     if(!err) {
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//   });
// });

//  OBTENER SORTEOS DE UNA FECHA, UNA QUINIELA Y UNA LOTERIA
router.get('/:fecha/:quiniela/:loteria', (req, res) => {
  // const { fecha, quiniela, loteria } = req.body;
  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('db is connected');
    }
  });
  const fecha = req.params.fecha;
  const quiniela = req.params.quiniela;
  const loteria = req.params.loteria;
  // console.log("BODY",fecha);
  mysqlConnection.query('SELECT *  FROM loteria_chaco WHERE fecha_de_sorteo= ? AND cod_de_quin= ? AND cod_de_lot= ?' , [fecha, quiniela, loteria], (err, rows, fields) => {
    console.log()
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
  // mysqlConnection.end();
});

module.exports = router;
