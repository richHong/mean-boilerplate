var express = require('express');
var db = require('./db/db.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(8080, function(){
  console.log('listening on localhost:8080');
});