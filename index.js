var express  = require("express");
var parser   = require("body-parser");
var hbs      = require("express-handlebars");
var mongoose = require("./db/connection");
var Schema   = require("./db/schema.js");

var app      = express();

var Restaurant = mongoose.model("Restaurant");

app.set("port", process.env.PORT || 3001 );
app.set("view engine", "hbs");
app.engine(".hbs",hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  layoutsDir:   "views/",
  defaultLayout: "layout-main"
}))
app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));
//index
app.get("/api/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurant)
  });
});
// show
app.get("/api/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restarant){
    res.json(restaurant)
  });
});
//Root
app.get("/*", function(req, res){
  res.render("restaurants");
});

app.listen(app.get("port"), function(){
  console.log("Listening");
});
