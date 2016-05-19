var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var parser = require("body-parser")
var express = require('express');
var hbs = require('express-handlebars')

var app = express();

var Restaurant = mongoose.model("Restaurant");
var MenuItem = mongoose.model("Menu");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}));

app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurant){
      res.render("index", {
      restaurants: restaurant
    });
  });
});

app.listen(app.get("port"), function(){
  console.log("🦄 Magical");
});
