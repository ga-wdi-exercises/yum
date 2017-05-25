var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, err => {
	if(err){
		console.log(err)
	}
});

MenuItem.remove({}, err => {
	if(err){
		console.log(err)
	}
});

var chocolateFactory = new Restaurant({name: "Chocolate Factory", address: {street: "123 Charlie Street", zipcode: 45678}, yelpUrl: "www.yelp.choco.com"})
var potatoHouse = new Restaurant({name: "Potato House", address: {street: "321 Spud Lane", zipcode: 23456}, yelpUrl: "www.yelp.tato.com"})
var cheeseville = new Restaurant({name: "Cheeseville", address: {street: "777 Nacho Road", zipcode: 32123}, yelpUrl: "www.yelp.cheese.com"})

var cake = new MenuItem({title: "seven layer cake"})
var mousse = new MenuItem({title: "dark chocolate mousse"})
var fries = new MenuItem({title: "curly fries with cheese"})
var bakedpotato = new MenuItem({title: "baked potato with chives"})
var cheesesticks = new MenuItem({title: "cheesesticks"})
var fondue = new MenuItem({title: "liquid cheese"})

var restaurants = [chocolateFactory, potatoHouse, cheeseville]
var menuItems = [cake, mousse, fries, bakedpotato, cheesesticks, fondue]

for (var i=0; i<restaurants.length; i++){
	restaurants[i].items.push(menuItems[i], menuItems[i+1])
	restaurants[i].save((err, restaurant) =>{
		if (err){
			console.log(err)
		} else {
			console.log(restaurant);
		}
	})
};