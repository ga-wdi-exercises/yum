var express  = require("express")
var parser   = require("body-parser");
var hbs      = require("express-handlebars");
var mongoose = require("./db/schema");
var Restaurant = require("./db/schema").Restaurant;
var MenuItem = require("./db/schema").MenuItem;
var Address = require("./db/schema").Address;

var app    = express();

// var Restaurant = mongoose.model("Restaurant")

app.set("port",process.env.PORT || 3001);
app.set("view engine","hbs");
app.engine(".hbs", hbs({
  extname:       ".hbs",
  partialsDir:   "views",
  layoutsDIr:    "views",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("app-welcome");
});
//index
app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index",{
      restaurants: restaurants
    });
  });
});
//show
app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("restaurants-show",{
      restaurant: restaurant
    });
  });
});
//create new
app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/restaurants/"+restaurant.name);
  });
});
//delete restaurant
app.post("/restaurants/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/restaurants")
  });
});
//update
app.post("/restaurants/:name/update", function(req, res){
  console.log(req.body.restaurant)
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  });
});
//update address
app.post("/restaurants/:name/:address/update", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function (restaurant) {
    restaurant.address = req.body.address
    restaurant.save().then(function () {
      res.redirect("/restaurants")
    })
  })


  //   Restaurant.findOneAndUpdate({name: req.params.name}, {$pull: { address: req.body.address } }, {new: true}).then(function( restaurant){
  //     console.log("restaurant",restaurant)
  //   res.redirect("/restaurants");
  // });
});
//delete menu item
app.post("/restaurants/:name/:title/delete", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name},
    {$pull: { items: {title: req.params.title} } }, {new: true})
    .then(function(){
       res.redirect("/restaurants")
  });
});
//add a menu item
app.post("/restaurants/:name/newitem", function(req, res) {
  console.log("newItem",req.body.restaurant.items)
  console.log(req.params.name)
  Restaurant.findOneAndUpdate({name: req.params.name},
    {$push:  {items: {title: req.body.restaurant.items} } }, {new: true})
    .then(function(){
       res.redirect("/restaurants")

 });
 res.redirect("/restaurants")
});


app.listen(app.get("port"), function(){
  console.log("Port Alive");
})
