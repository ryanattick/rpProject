var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var flickrAuth = require('../flickr.config.js');
var Flickr = require("node-flickr");
var keys = {"api_key": flickrAuth.api_key}
flickr = new Flickr(keys);

app.use(express.static(__dirname + '/../builds'));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/test', function (req, res) {
  flickr.get("photos.search", {"tags":req.query.search}, function(err, result){
    if (err) return console.error(err);
    res.send(result.photos.photo);
    console.log(req.query, 'yeah??')
  });
})





app.listen(3000, function() {
  console.log('listening on port 3000!');
});
