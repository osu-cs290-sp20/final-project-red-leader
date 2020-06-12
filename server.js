var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var posts = require('./posts');
var pixels = require('./pixel');
var digis = require('./digital');
//var analogs = require('./physicals');
//var signups = require('./emails');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views/art')));

//important bizz goes here

app.get('/', function(req, res) {
  res.status(200).render('home');
});

app.get('/artblog', function(req, res) {
  res.status(200).render('artblog', {
    entries: posts
  });
});

app.get('/comission', function(req, res) {
  res.status(200).render('comission', {
    vgs : pixels,
    digiarts : digis
  });
});

app.get('/newsletter', function(req, res) {
  res.status(200).render('newsletter')
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});