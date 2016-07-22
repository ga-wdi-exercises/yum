var express   = require('express');
var hbs       = require('express-handlebars');
var mongoose  = require('mongoose');
var Schema    = require('./db/schema.js');
var parser    = require('body-parser');

var Restaurant = mongoose.model("Restaurant");
var Restaurant = Schema.Restaurant;

var app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurants);
  });
});

app.listen(app.get("port"), function(){
  console.log(app.get("port") + "hello world");
});
