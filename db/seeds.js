// requires mongoose dependencies
//connection to our database
var mongoose = require('mongoose')
// var seedData = require("./seeds")
// connects us to the reminders database in mongo
var conn = mongoose.connect('mongodb://localhost/restaurants')
// require model definitions
var Restaurant = require("../models/restaurant")
var Menu = require("../models/menu")
//remove any existing restaurants and menus
Restaurant.remove({}, function(err){
})
Menu.remove({}, function(err){
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

var restaurant1 = new Restaurant({ name: "Bertucci's", address: { street: "2000 Pennsylvania Ave", zipCode: 20006 }, yelp: "yelp.com/Bertuccis" })

var menu1 = new Menu({title: "Shrimp Alfredo"})
var menu2 = new Menu({title: "chicken"})

var restaurants = [restaurant1]
var menus = [menu1, menu2]

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
