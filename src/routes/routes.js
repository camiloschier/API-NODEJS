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
router.get('/', function (req, res) {
  res.send('Wiki home page');
})
//  OBTENER SORTEOS DE UNA FECHA, UNA QUINIELA Y UNA LOTERIA
router.get('/:fecha/:quiniela/:loteria', (req, res) => {
  // const { fecha, quiniela, loteria } = req.body;

  const fecha = req.params.fecha;
  const quiniela = req.params.quiniela;
  const loteria = req.params.loteria;
  console.log("BODY",fecha,"QUINIELA",quiniela, "Loteria", loteria);
  mysqlConnection.query('SELECT *  FROM loteria_chaco WHERE fecha_de_sorteo= ? AND den_de_quin= ? AND den_de_lot= ?' , [fecha, quiniela, loteria], (err, rows, fields) => {
    console.log()
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
  // mysqlConnection.end();
});

router.post

module.exports = router;
