const express = require('express');
var cors = require('cors');
const app = express();
const https = require('https')
const fs = require('fs');
var path = require('path');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/routes'));

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
//Starting the server
//   app.listen(app.get('port'), () => {
//   console.log(`Server on port ${app.get('port')}`);
// });

//SSL

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(app.get('port'));

//  https.createServer({
//    key: fs.readFileSync(path.resolve('./src/key.pem')),
//    cert: fs.readFileSync(path.resolve('./src/cert.pem')),
//    passphrase: 'sancorseguros'
//  }, app)
//  .listen(app.get('port'));
