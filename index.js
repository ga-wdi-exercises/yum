var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var app = express();
var hbs = require("express-handlebars");

app.set('view engine', 'hbs');
app.engine('.hbs', hbs({
  extname:      '.hbs',
  partialsDir:  'views/',
  layoutsDir:   'views/',
  defaultLyout: 'layout-main.hbs'
}))

app.get("/", function(req, res){
  res.send("hey dude");
});

app.listen(4323, function(){     // makes the app listen to port 4444 from the browser
  console.log("it works");      // at the moment, it works: http://127.0.0.1:4323/ and
});                             // it shows "it works" in the terminal running nodemon.
