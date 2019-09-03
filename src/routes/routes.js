const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// OBTENER TODOS LOS NUMEROS
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM loteria_chaco WHERE id=27000', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//  OBTENER SORTEOS DE UNA FECHA
router.get('/:fecha', (req, res) => {
  const { fecha } = req.params;
  mysqlConnection.query('SELECT *  FROM loteria_chaco WHERE fecha_de_sorteo= ?', [fecha], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
