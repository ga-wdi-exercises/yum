var express = require("express");
var hbs = require("express-handlebars");
var parser = require("body-parser");
var mongoose = require("./db/schema.js");

var app = express();

var Restaurant = mongoose.model("Restaurant");

app.set("port", process.env.PORT || 4010);
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
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index",{
      restaurants: restaurants
    });
  });
});

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  })
})

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
