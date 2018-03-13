var express = require('express');
var app = express();
var PORT = 4002;

app.get('/', function(req, res) {
    res.send(JSON.stringify({ test: "Asta e un test!!" }));
});

app.listen(PORT);
console.log("Server Listening on port: " + PORT);