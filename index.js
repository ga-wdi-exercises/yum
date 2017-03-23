var mongoose = require('./db/seeds.js');
// var Schema = require("./db/schema.js");
var express  = require("express");
var hbs      = require("express-handlebars");
var parser = require("body-parser");
var app     = express();

var Restaurant = mongoose.model("Restaurant")
var Menu = mongoose.model("Menu")

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
  res.render("restaurants");
});

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then((restaurants) =>{
    res.render("restaurants", {
      restaurants: restaurants
    });
  })

});

app.post("/restaurants", function(req, res){
    Restaurant.create(req.body.restaurant).then((restaurant) =>{
      res.redirect("/restaurants/" + restaurant.name )
    })
})

app.get("/restaurants/:name", function(req, res){
Restaurant.findOne({name: req.params.name}).then((restaurant) => {
      res.render("restaurants-show", {
        restaurant: restaurant
      });
    })
});

app.post("/restaurants/:name" , function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then((restaurant) => {
    res.redirect("/restaurants/" + restaurant.name )

})
})

app.post("/restaurants/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(() => {
    res.redirect("/restaurants")
  })
})

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
