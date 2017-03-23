var mongoose  = require('mongoose');
var Schema    = require("./db/schema.js");

var express   = require("express");
var parser    = require("body-parser");
var hbs       = require("express-handlebars");

var app = express();

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
  res.render("app-welcome");
})

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index", {
      restaurants
    })
  })
})

app.listen(app.get("port"), () => {
  console.log("app listening on port 3001");
});
