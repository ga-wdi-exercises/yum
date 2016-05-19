var mongoose = require('mongoose');
var Schema = require("./db/schema");
var express = require("express");
var app = express();
var Pizza = Schema.pizza

app.get("/", function(req, res){
  Pizza.find({}).then(function(data){
    res.send(data)
  })
})

app.listen(3001, function(){
  console.log("Its aliiiive")
})
