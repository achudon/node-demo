/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

//var http = require('http');
//
//// gets passed a request and a response object
//var server = http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World!\n');
//});
//
//server.listen(8080, function() {
//    console.log('Server is listening at http://localhost:8080');
//});


// use express to create server

var express = require('express');

var app = express();

app.get('/', function() {
    res.send('Hello World!');
});

app.get('/foo', function(req, res) {
    res.send('You requested foo!')
});

app.post('/foo', function(req, res) {
    req.bo
})

app.listen(8080, function() {
    console.log('listening at http://localhost:8080')
})

