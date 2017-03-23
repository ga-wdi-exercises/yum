var mongoose  = require('mongoose');
var Schema    = require("./db/schema.js");

var express   = require("express");
var parser    = require("body-parser");
var hbs       = require("express-handlebars");

var app = express();

//schema
var Item = mongoose.model("Item")
var Restaurant = mongoose.model("Restaurant")

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}))

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  Restaurant.find({}).then((restaurants) => {
      res.render("index", {restaurants});
  })
})

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("index", {
      restaurants
    })
  })
})

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("show", {
      restaurant
    })
  })
})

app.listen(app.get("port"), () => {
  console.log("app listening on port 3001");
});
