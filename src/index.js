const express = require('express');
var cors = require('cors');
const app = express();
const https = require('https')
const fs = require('fs');
var path = require('path');

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
  key: fs.readFileSync(path.resolve('./src/key.pem')),
  cert: fs.readFileSync(path.resolve('./src/cert.pem')),
  passphrase: 'sancorseguros'
}, app)
.listen(app.get('port'));
