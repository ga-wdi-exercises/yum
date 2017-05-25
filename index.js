var Schema = require("./db/schema.js");
var mongoose = require('mongoose');
var express = require("express");
var parser  = require("body-parser");
var app     = express();

var Restaurant = mongoose.model("Restaurant");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.json());

app.get("/", function(req, res){
  res.render("restaurants");
});

app.get("/api/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurants);
  });
});

app.get("/api/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.json(restaurant)
  });
});

app.post("/api/restaurants", function(req, res){
  Restaurant.create(req.body.candidate).then(function(restaurant){
    res.json(restaurant);
  });
});

app.delete("/api/restaurants/:name", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({msg: 'success'})
  });
});

app.put("/api/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(restaurant){
    res.json(restaurant);
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
