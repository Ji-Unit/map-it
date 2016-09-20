var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Connected at PORT: ' + port);
})

module.exports = app;
