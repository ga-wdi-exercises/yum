let mongoose = require("mongoose")
let Schema = require('../db/schema.js')

let MenuItemModel = Schema.MenuItemModel
let RestaurantModel = Schema.RestaurantModel

let pizza = new MenuItemModel({name: "Pizza"})
let breadSticks = new MenuItemModel({name: "BreadSticks"})

let pizzaHut = new RestaurantModel({
	name: "Pizza Hut",
	address: {
		street: "2343 BlahBlah St.",
		zipcode: 43953
	},
	yelpUrl: "www.yelp.com",
	item: [pizza, breadSticks]
})

pizza.save()
breadSticks.save()
pizzaHut.save()