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

let number6 = Restaurant.findOneAndUpdate({name: "Chuckie Cheeze"}, {name: "Chuckie CHEEZ"}, {new: true}, (err, docs) => {
	if (err) {
		console.log(err)
	} else {
		console.log(docs)
	}
})


let number7 = Restaurant.findOneAndRemove({name: "Chuckie Cheeze"}, (err, docs) => {
	if (err) {
		console.log(err)
	} else {
		console.log(docs)
	}
})

let number8 = Restaurant.find({name: "Pizza Hut"}, (err, restaurant) => {
	if (err) {
		console.log(err)
	} else {
		restaurant.menuitems.id(5924e905).remove()
		restaurant.save()
	}
})