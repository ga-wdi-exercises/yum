var express = require("express")
var mongoose = require('./db/connection');
var Restaurant = mongoose.model("Restaurant");

var bodyParser = require("body-parser");
var app = express();

app.set("port", process.env.PORT || 8000);

app.get("/", function(req, res){
  res.json()
});
