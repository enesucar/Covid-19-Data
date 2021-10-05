var express = require('express');
var app = express();
var fs = express('fs');
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen('3000');
