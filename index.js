var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
// find restaurant
function findRestaurant(name) {
  Restaurant.findOne({name: name}).then(res) => {
    return res
  })
}
// find restaurant by zip
function findZips(zip) {
  Restaurant.find({zipcode: zip}).then(res) => {
    return res
  }
}
// update restaurant
function update(current, updated) {
  Restaurant.findOneAndUpdate(current, updated).then(res) => {
    return res
  }
}
// delete restaurant
function delete(restaurant) {
  Restaurant.findOneAndRemove(restaurant).then() => {
    return {success: true}
  }
}
// add item to restaurant
function addItem(restaurant, item) {
  let restaurant = findRestaurant(restaurant)
  restaurant.items.push(item)
  return restaurant
}
// remove item from restaurant
function removeItem(restaurant, item) {
  let restaurant = findRestaurant(restaurant)
  let index = restaurant.items.indexOf(item)
  restaurant.items.splice(index, 1)
  return restaurant
}
