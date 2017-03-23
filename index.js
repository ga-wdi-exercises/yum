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
