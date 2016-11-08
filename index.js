var express = require("express");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection");
var parser = require ("body-parser")
var app     = express();
var Schema = require("./db/schema.js");

var Restaurant=Schema.Restaurant
var Menu=Schema.Menu


app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))




app.get("/", function(req, res){
  console.log("Root Dir")
  Restaurant.find({}).then(restaurants => {
    console.log(restaurants.length)
    for (i=0;i<restaurants.length;i++) {
      console.log(restaurants[i].name)
    }
    res.render("restaurant-index",{restaurants});
  })
});

app.post("/restaurants"),function (req,res){
  console.log("Post after form submitted")
  res.json(req.body)
}

app.get("/restaurants/new", function (req,res){
    console.log("New Restaurant")
    var restaurant = new Restaurant
    res.render("restaurant-new",{restaurant});
});

app.listen(app.get("port"), function(){
  console.log("Yum is Listening!");
});
