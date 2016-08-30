var Schema = require("../db/schema.js");
var mongoose = require('mongoose');

var Restaurant = Schema.Restaurant
var Item = Schema.Item

Restaurant.remove({}, function(err){
  console.log(err)
});

Item.remove({}, function(err){
  console.log(err)
});

var blueItem1 = new Item({title: "Burger"})
var blueItem2 = new Item({title: "Cheesesteak"})
var lupoItem1 = new Item({title: "Spaghetts"})
var lupoItem2 = new Item({title: "Meataballsza"})

var blue44 = new Restaurant({name: "Blue44", address: {street: "Connecticut Ave", zipcode: 20008}, yelpUrl: "www.yelp.com"})
var lupoVerde = new Restaurant({name: "Lupo Verde", address: {street: "Adams Morgan", zipcode: 20007}, yelpUrl: "www.yelp.com"})

var restaurants = [blue44, lupoVerde]
var items = [blueItem1, blueItem2, lupoItem1, lupoItem2]

for(var i=0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save(function(err, restaurant){
    if(err){
      console.log(err)
    } else {
      console.log(restaurant)
    }
  })
}
