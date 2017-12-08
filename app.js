'use strict'
let express = require('express');
let http = require('http');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

let port = process.env.PORT || '3001';
app.set('port', port);

let server = http.createServer(app);
server.listen(port, () => {
    console.log('running : localhost:3001');
});
