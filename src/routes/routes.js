const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

const bodyParser = require('body-parser');
const app = express();


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
app.use(bodyParser.json())
router.post('/lead', function (req, res) {
  var persona = req.body.persona;
  console.log("Persona", persona);
  console.log("Nombre", persona.nombre);
  // res.send("Exito")
  mysqlConnection.query
  ("INSERT INTO sancor_salud(nombre,apellido,edad,email,telefono,plan,tipo,keyword) VALUES ('"+persona.nombre+"','"+persona.apellido+"','"+persona.edad+"','"+persona.email+"','"+persona.telefono+"','"+persona.plan+"','"+persona.tipo+"','"+persona.keyword+"')", (err, rows, fields) => {
    console.log()
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
         }
    });
})
//  OBTENER SORTEOS DE UNA FECHA, UNA QUINIELA Y UNA LOTERIA
// router.get('/:fecha/:quiniela/:loteria', (req, res) => {
//   // const { fecha, quiniela, loteria } = req.body;

//   const fecha = req.params.fecha;
//   const quiniela = req.params.quiniela;
//   const loteria = req.params.loteria;
//   console.log("BODY",fecha,"QUINIELA",quiniela, "Loteria", loteria);
//   mysqlConnection.query('SELECT *  FROM loteria_chaco WHERE fecha_de_sorteo= ? AND den_de_quin= ? AND den_de_lot= ?' , [fecha, quiniela, loteria], (err, rows, fields) => {
//     console.log()
//     if (!err) {
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//   });
//   // mysqlConnection.end();
// });


module.exports = router;
