var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})

var ricebowl = new Restaurant({name: "Rice Bowl", address: {street:"15th", zipcode: 12345}, yelpUrl:"www.yelp.com"});

var ricebowl2 = new Restaurant({name: "Rice Bowl 2", address: {street:"15th", zipcode: 12345}, yelpUrl:"www.yelp.com"});

var ricebowl3 = new Restaurant({name: "Rice Bowl 3", address: {street:"15th", zipcode: 12345}, yelpUrl:"www.yelp.com"});

var item1 = new MenuItem({title: "Bulgogi"})
var item2 = new MenuItem({title: "Kim Chee Fried Rice"})
var item3 = new MenuItem({title: "Bibambap"})
var item4 = new MenuItem({title: "Soup"})
var item5 = new MenuItem({title: "Rice Bowl"})
var item6 = new MenuItem({title: "Other stuff"})
var item7 = new MenuItem({title: "More stuff"})

var restaurants = [ricebowl, ricebowl2, ricebowl3]
var menuItems = [item1, item2, item3, item4, item5, item6, item7]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(menuItems[i], menuItems[i+1])
  restaurants[i].save(function(err, restaurant){
    if(err){
      console.log(err)
    } else {
      console.log(restaurant)
    }
  })
};
