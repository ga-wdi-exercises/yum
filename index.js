var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


app.get("/restaurants", function(req, res){
  Restaurant.find({}).then((restaurants) => {
    res.render("candidates-index", {
      restaurants: restaurants
    })
  })
});

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then((Restaurant) => {
    res.render("Restaurant-show", {
      restaurant: restaurant
    })
  })
});

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then((rrestaurant) => {
    res.redirect("/restaurants/" + restaurant.name);
  })
});
