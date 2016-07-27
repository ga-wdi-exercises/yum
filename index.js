var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var app = express();


app.get("/", function(req, res){
  res.send("Hello, world!");
});

app.listen(3001, function(){
  console.log("It's alive!!!");
});
