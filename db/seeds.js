// requires mongoose dependencies
//connection to our database
var mongoose = require('mongoose')
// var seedData = require("./seeds")
// connects us to the reminders database in mongo
var conn = mongoose.connect('mongodb://localhost/menus')
// require model definitions
var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

RestaurantModel.remove({}, function(err){
})
MenuModel.remove({}, function(err){
})

//remove any existing restaurants and menus
// Restaurant.remove({}).then(function(){
//   Restaurant.collection.insert(seedData).then(function(){
//     process.exit();
//   });
// });
// Menu.remove({}).then(function(){
//   Menu.collection.insert(seedData).then(function(){
//     process.exit();
//   });
// });

var restaurant1 = new RestaurantModel({
  name: "Bertucci's",
  address: {
    street: "2000 Pennsylvania Ave",
    zipCode:  20006
  },
  yelpUrl: "yelp.com/Bertuccis"
})

var menu1 = new MenuModel({title: "Shrimp Alfredo"})

var restaurants = [restaurant1]
var menus = [menu1]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+1])
  restaurants[i].save(function(err){
    if (err){
      console.log(err)
    } else {
      console.log("restaurant was saved")
    }
  })
}
