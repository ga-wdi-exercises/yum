// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/yum');
var express = require("express");
var parser  = require("body-parser");
var randomstring  = require("randomstring");
var exphbs     = require("express-handlebars");
// console.log(hbs);
var mongoose = require("./db/schema");

var app     = express();


var restaurant = mongoose.model("Restaurant");
var menu = mongoose.model("Menu");


// if(process.env.NODE_ENV !== "production"){
//   var env   = require("./env");
//   process.env.session_secret = env.session_secret;
//   process.env.t_callback_url = env.t_callback_url;
//   process.env.t_consumer_key = env.t_consumer_key;
//   process.env.t_consumer_secret = env.t_consumer_secret;
// }


app.set("port", process.env.PORT || 3001);
app.set("view engine", "exphbs");
app.set('views', __dirname + '/views');
app.engine(".hbs", exphbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "index"
}));

app.use("/public", express.static("public"));
app.use(parser.json({extended:true}))

app.get("/", function(req, res){
    res.redirect("restaurant");
});

app.get("/restaurant", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("abc", {
      restaurants: restaurants
    });
  });
});

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("restaurant-show", {
      restaurant: restaurant
    });
  });
});

app.post("/restaurants/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/restaurants")
  });
});

app.post("/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  });
});

// These next two are for menu items
// app.post("/restaurant/:name/positions", function(req, res){
//   Restaurant.findOne({name: req.params.name}).then(function(restaurant){
//     restaurant.positions.push(req.body.position);
//     restaurant.save().then(function(){
//       res.redirect("/restaurants/" + restaurant.name);
//     });
//   });
// });

// app.post("/restaurants/:name/positions/:index", function(req, res){
//   Restaurant.findOne({name: req.params.name}).then(function(restaurant){
//     restaurant.positions.splice(req.params.index, 1);
//     restaurant.save().then(function(){
//       res.redirect("/restaurants/" + restaurant.name);
//     });
//   });
// });

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
