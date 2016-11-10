var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant
var Item = Schema.Item

// Find
var findRestaurantByName = function(name) {
  Restaurant.findOne({name: name}, function(err, res) {
    if (err) { console.log(err) }
    else {
      console.log("Restaurants matching name: " + name)
      console.log(res)
    }
  })
}

findRestaurantByName("Chipotle")

var findRestaurantsByZipcode = function(zipcode) {
  Restaurant.find({}, function(err, res) {
    if (err) { console.log(err) }
    else {
      res.forEach(restaurant => {
        if (restaurant.address.zipcode == zipcode) {
          console.log("Restaurants with zipcode: " + zipcode)
          console.log(restaurant)
        }
      })
    }
  })
}

findRestaurantsByZipcode(20071)
