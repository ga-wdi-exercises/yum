var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.create({
  name: "Matchbox",
  address: {
    street: "2911 District Ave",
    zipcode: "22031"
  },
  yelpUrl: "https://www.yelp.com/biz/matchbox-merrifield-fairfax-3"
})

function findByName(name) {
  Restaurant.findOne({name: name}, (restaurant) => {
    //a document will be returned
    console.log(restaurant)
  })
}

function findByZip(zipcode) {
  Restaurant.find({zipcode: zipcode}, (restaurants) => {
    //an array will be returned
    console.log(restaurants)
  })
}

//updates is an object containing parameters to be changed
function update(name, updates) {
  Restaurant.findOneAndUpdate({name: name}, {$set: updates}, {new: true}, (restaurant) => {
    console.log(restaurant)
  })
}

function delete(name) {
  Restaurant.findOneAndRemove({name: name}, (restaurant) => {
    console.log(restaurant + "deleted successfully")
  })
}
