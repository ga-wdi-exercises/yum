var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

Restaurant.create({
  name: "Food Central",
  address: {
    street: "123 X Street NW",
    zipcode: 22222
  },
  yelp: "http://www.yelp.com/food_central"
})

function findByName(restaurant){
  console.log(Restaurant.findOne({name: restaurant}));
}

function findByZip(zip){
  console.log(Restaurant.find({zipcode: zip}));
}

function update(restaurant, newName){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update});
}

function destroy(restaurant){
  Restaurant.findOneAndRemove({name: restaurant});
}

function addMenuItem(restaurant, item){

}
