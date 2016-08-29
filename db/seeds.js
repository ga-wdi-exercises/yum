var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, function(err){
  console.log(err);
})

MenuItem.remove({}, function(err) {
  console.log(err);
});

var cookieByte = new Restaurant({name: "Cookie Byte", address: {street: "123 Bakers lane", zipcode: 31337}, yelpUrl: "www.yelp.com/cookieByte"})
var pooPalace = new Restaurant({name: "Poo Palace", address: {street: "123 Gastric Bypass", zipcode: 31337}, yelpUrl: "www.yelp.com/pooPalace"})

var item1 = new MenuItem({title: "The Zeroeth Cookie"})
var item2 = new MenuItem({title: "Hot Carl's Coffee"})
var item3 = new MenuItem({title: "Donuts, but whole"})

var restaurants = [cookieByte, pooPalace];
var items = [item1,item2, item3];

restaurants[0].items.push(items[0])
restaurants[1].items.push(items[1])
restaurants[1].items.push(items[2])

console.log(Restaurant);
console.log(restaurants[1]);
