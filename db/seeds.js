// requires mongoose dependencies
var mongoose = require('mongoose')
// connects us to the reminders database in mongo
var conn = mongoose.connect('mongodb://localhost/yums')
// require model definitions
var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

//setting models in mongoose using schemas defined above
var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");

//remove any existing restaurants and menus
RestaurantModel.remove({}, function(err){
  console.log(err);
})
MenuModel.remove({}, function(err){
  console.log(err);
})

var restaurant1 = new RestaurantModel({
  name: "Bertucci's",
  address: {
    street: "2000 Pennsylvania Ave",
    zipCode:  20006
  },
  yelpUrl: "yelp.com/Bertuccis"
})

var item1 = new MenuModel({title: "Shrimp Alfredo"})

var restaurants = [restaurant1]
var menus = [item1]

for(var i = 0; restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+1])
  restaurants[i].save(function(err){
    if (err){
      console.log(err);
    } else {
      console.log("restaurant was saved");
    }
  })
}
