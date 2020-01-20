const express = require('express');
var cors = require('cors');
const app = express();
const https = require('https')
const fs = require('fs');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/routes'));

// Starting the server
//app.listen(app.get('port'), () => {
//  console.log(`Server on port ${app.get('port')}`);
//});

//SSL
https.createServer({
  key: fs.readFileSync('../key.pem'),
  cert: fs.readFileSync('../private.pem'),
  passphrase: 'sancorseguros'
}, app)
.listen(app.get('port'));
