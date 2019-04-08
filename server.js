"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(router);
var port = 3000;
app.set('port', port);
var server = http.createServer(app);
server.listen(port, function () {
    console.log('Listening on port %s', port);
});
