var mongoose = require('./db/seeds.js');
// var Schema = require("./db/schema.js");
var express  = require("express");
var hbs      = require("express-handlebars");
var parser = require("body-parser");
var app     = express();
// var restaurantsController = require("./controllers/restaurantsController")

// var Restaurant = Schema.RestaurantModel
// var Menu = Schema.MenuModel



app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.send("welcome");
});




app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
