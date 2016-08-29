var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

// First, remove existing records from the database
Restaurant.remove({}, function (err) {
    console.log(err);
});
MenuItem.remove({}, function (err) {
    console.log(err);
});


// Create menu items
var bibimbap = new MenuItem({
    title: "Bibimbap"
});
var chicken = new MenuItem({
    title: "Korean Style Fried Chicken"
});
var kimchi = new MenuItem({
    title: "Kimchi"
});


// Create a new restaurant
var bonchon = new Restaurant({
    name: "BonChon Chicken",
    address: {
        street: "3419 Plumtree Drive #102",
        zipcode: "21042"
    },
    yelpUrl: "https://www.yelp.com/biz/bonchon-ellicott-city-3",
    items: [chicken, kimchi]
});
var ricebar = new Restaurant({
    name: "Rice Bar",
    address: {
        street: "1015 15th St NW",
        zipcode: "20005"
    },
    yelpUrl: "https://www.yelp.com/biz/rice-bar-washington-2",
    items: [bibimbap]
});

var restaurants = [bonchon, ricebar];

// Save the restaurants
for (var i = 0; i < restaurants.length; i++)
restaurants[i].save(function (err, restaurant) {
    if(err) {
        console.log(err);
    } else {
        console.log(restaurant);
    }
});