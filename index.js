var mongoose = require('mongoose')
var schema = require('./db/schema.js')

var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection.js");
var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");
const app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
// app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/", (req, res) => {
  res.render("restaurants-index");
})

app.get("/:name", function(req, res) {
  Restaurant.find({}).then(function(restaurants){
    res.render("show", {
      restaurants
    });
  });
});

app.listen(app.get("port"), function(){
  console.log("you are on port 3001")
})
