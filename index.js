 // Express CRUD
const express  = require("express");
const parser   = require("body-parser");
const hbs      = require("express-handlebars");
const mongoose = require("./db/connection");

const app = express();

var Restaurant = mongoose.model("Restaurant")
var MenuItem = mongoose.model("MenuItem")

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))

 // welcome page
app.get("/", function(req,res){
  res.render("welcome");
});
// show all restaurants
app.get("/restaurants", function(req,res) {
  Restaurant.find({}).then( (restaurants) => {
    res.render("restaurants-index", {
      restaurants: restaurants
    });
  })
});

// show each restaurant
app.get("/restaurants/:name", function(req,res) {
  Restaurant.findOne({name: req.params.name}).then( (restaurant) => {
    res.render("restaurants-show", {
      restaurant: restaurant
    });
  })
});
// create restaurant
app.post("/restaurants", function(req,res) {
  Restaurant.create(req.body.restaurant).then( (restaurant) => {
    res.redirect("/restaurants/" + restaurant.name)
  })
});
// create menu item
app.post("/restaurants/:name", function(req,res) {
  Restaurant.items.create(req.body.restaurant.items).then( (restaurant) => {
    res.redirect("/restaurants/" + restaurant.name)
  })
});
// delete restaurant
app.post("/restaurants/:name/delete", function(req,res) {
  Restaurant.findOneAndRemove({name: req.params.name}).then(() => {
    res.redirect("/restaurants")
  })
})
// update restaurant
app.post("/restaurants/:name", function(req,res) {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then( (restaurant) => {
    res.redirect("/restaurants/" + restaurant.name)
  })
});

app.listen(app.get("port"), function() {
  console.log("It's Aliiivee!!")
})
