'use strict';

var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = http.createServer(app);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
require('./routes')(app);
app.use(express.static(path.join(__dirname, '/../client')));


// Start server
server.listen(8000, '0.0.0.0', function () {
    console.log('current dir ' + __dirname);
    console.log('Server listening on local port 8000');
});

// Expose the app
exports = module.exports = app;