var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

let Restaurant = Schema.RestaurantModel
let MenuItem = Schema.MenuItemModel

let number4 = Restaurant.findOne({name: "Pizza Hut"}, (err, restaurant) => {
	console.log("number 4: " + restaurant)
})

let number5 = Restaurant.find( {"address.zipcode": 43953  }, (err, restaurants) => {
	console.log("number 5: " + restaurants)
})