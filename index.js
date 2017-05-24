var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({name: "Bougie House", address: {street: "111 Golden Circle", zipcode: 99999}, yelpUrl: "www.yelp.money.com"}, (err, restaurant) => {
	if (err){
		console.log(err);
	}
	else{
		console.log(restaurant);
	}
});
//peaked at solution branch to see where and exactly how to set these up
function findByName(restaurant) {
	Restaurant.findOne({name: restaurant}, function(err, result){
		if(err){
			console.log(err);
		}
		else{
			console.log(result);
		}
	});
}

function findByZip(zipcode){
	zipResults = [];
	Restaurant.find({}, function(err, results){
		results.forEach(function(result) {
			if(result.address.zipcode === zipcode){
				zipResults.push(result);
			}
		})
		if(err){
			console.log(err);
		}
		else{
			console.log(result);
		}
	});
}

function update(restaurant, update){
	Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, (err, restaurant) => {
		if(err) {
			console.log(err)
		}
		else {
			console.log(restaurant);
		}
	});
}

function destroy(restaurant){
	Restaurant.findOneAndRemove({name: restaurant}, (err, restaurant) => {
		if(err){
			console.log(err);
		}
		else{
			console.log(restaurant);
		}
	})
}

function addItem(restaurant, item){
	Restaurant.findOne({name: restaurant}, function(err, restaurants){
		restaurants.items.push(new MenuItem({title: item}))
		restaurants.save(function(err, results){
			if(err){
				console.log(err)
			}
			else{
				console.log(results);
			}
		})
	});
}

function removeItem(restaurant, item){
	Restaurant.findOneAndUpdate({name: restaurant}, {
		$pull: {items: {title: item}}
	},
	{new: true}, function(err, restaurants){
		if(err){
			console.log(err);
		}
		else{
			console.log(restaurants);
		}
	});
}