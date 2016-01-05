//var body_Parser = require('body-parser'); //Load Modules for bodyparser
var path = require('path'); //Load 'path' the File base module 
var express = require('express'); //Load express module
//var http = require('http'); //Load Http module for Http operation

var app = express(); //The Express object

//app.use(body_Parser.json());
//app.use(body_Parser.urlencoded({ extended: false }));

var restOP = require('./ResOperation.js');

var communicationPort = 8888;

//app.use('/', routers);
app.use('/restaurants/:RestID', restOP.get);

//app.get('/restaurants/:RestID', restOP.get);

//app.listen(communicationPort);

/*
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(communicationPort);
*/

var server = app.listen(communicationPort, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://localhost:%s', port);
});