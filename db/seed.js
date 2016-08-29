var Schema = require("../db/schema.js");
var mongoose = require("mongoose");

var Item = Schema.Item
var Restaurant = Schema.Restaurant

Restaurant.remove({}, function(err){
  console.log(err)
});

Item.remove({}, function(err){
  console.log(err)
});

var item1 = new Item({title: "BLT"})
var item2 = new Item({title: "Pie"})
var item3 = new Item({title: "PBJ"})
var item4 = new Item({title: "WTF"})

var diner1 = new Restaurant({name: "Diner#1", address: {street: "123 Random St", zipcode: 12345}, yelpUrl: "www.yelp.com"})
var diner2 = new Restaurant({name: "Diner#2", address: {street: "876 Derp St", zipcode: 54321}, yelpUrl: "www.yelp.com"})

var restaurants = [diner1, diner2]
var items = [item1, item2, item3, item4]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save(function(err, restaurant){
    if(err){
      console.log(err);
    } else {
      console.log(restaurant);
    }
  })
};
