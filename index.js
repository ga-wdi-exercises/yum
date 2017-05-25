
var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurants);
  })
});

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}, function(err, restaurant){
    console.log(restaurant);
  });
})

// 1. Create schemas and corresponding models for a restaurant and for menu items.
// 4. Write a function or method that finds a restaurant by `name`.

// Restaurant.findOne({name: "Greek Diner"}, (err, restaurant)=>{
//   console.log(restaurant);
// })
//
// //
// // 5. Write a function or method that finds all restaurants by `zipCode`.
//
// // Restaurant.find()
//
// //
// // 6. Create a function that updates a restaurant.
//
// function updateRestaurant(restaurant, update){
//   Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, restaurant){
//     if (err){
//       console.log(err)
//     }
//   })
// }
// Restaurant.findOneAndUpdate({name: "Greek Diner"}, {name: "The Greek Spot"}, {new: true}, (err, restaurant)=>{
//   console.log(restaurant)
// })
//
// // 7. Write a function or method that deletes a restaurant.
//
// function deleteRestaurant(restaurant){
//   Restaurant.findOneAndRemove({name: restaurant}, function(err, restaurant){
//     if (err) {
//       console.log(err)
//     }
//   })
// }
//
// Restaurant.findOneAndRemove({name: "Carmine's Pizza Palace"}, function(err, restaurant){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("this has been deleted")
//   }
// })
// // 8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
//
// Restaurant.findOne({name: "Cindy's Place"}, function(err, docs){
//   docs.menus.push(new Menu({title: "Hamburger"}))
//   docs.save(function(err, results) {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log(results)
//       }
//     })
//   })

var app = express();
