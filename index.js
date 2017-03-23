var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.create({name: "Vapiano", address: {street: "21100 Dulles Town Cir", zipcode: "20166"}, yelpUrl: "https://www.yelp.com/search?find_desc=vapiano&find_loc=Leesburg%2C+VA%2C+US&ns=1"})

//find by name function
function findByName(name) {
  Restaurant.findOne({name: name}, (restaurant) => {
    console.log(restaurant)
  })
}

//find by zipcode function
function findByZip(zipcode) {
  Restaurant.find({zipcode: zipcode}, (restaurants) => {
    console.log(restaurants)
  })
}

//update the function
//had to Refer to solution branch
function update(resturant, update){
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(restaurant){
    console.log(restaurants)
  });
}

//delete the function
function destroy(restaurant){
  Restaurant.findOneAndRemove({name: name}, (restaurant) => {
    console.log(restaurant + "deleted")
  })
}
