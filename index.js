var express = require("express");
var hbs     = require("express-handlebars");
var mongoose= require("./db/connection");
var parser = require("body-parser");

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
app.use(parser.urlencoded({extended: true}));


app.get("/", function(req, res){
  Restaurant.find().then(function(restaurantsFromDB){
    res.render("restaurants-index", {
      restaurants: restaurantsFromDB
    });
  });
});

app.post("/", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(newRestaurant){
    res.redirect("/" + newRestaurant.name);
  });
});

app.get("/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurantFromDB){
    res.render("restaurants-show", {
      restaurant: restaurantFromDB
    });
  });
});

app.post("/:name", function(req, res){
  Restaurant.findOneAndUpdate(req.params, req.body.restaurant, {new: true}).then(function(updatedRestaurant){
    res.redirect("/" + updatedRestaurant.name);
  });
});

app.post("/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/");
});

});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
