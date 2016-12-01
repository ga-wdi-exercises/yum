var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Schema = require("./db/schema.js");

app.listen(3001, function(){
  console.log("Listening on 3001.");
});
