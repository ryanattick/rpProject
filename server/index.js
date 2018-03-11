var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


app.use(express.static(__dirname + '/../builds'));
app.use(bodyParser.urlencoded({ extended: true }));






var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
