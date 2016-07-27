var mongoose = require("./connection.js");
var seedDataMenu = require("./seedsMenu.json");
var seedDataRestaurant = require("./seedsRestaurant.json");


//seed
var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");

Restaurant.remove().then(function(){
  Restaurant.collection.insert(seedDataRestaurant).then(function(){
  });
});

Menu.remove().then(function(){
  Menu.collection.insert(seedDataMenu).then(function(){
    console.log(process);
    process.exit();
  });
});
