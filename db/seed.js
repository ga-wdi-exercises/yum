var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var Item = Schema.Item

Restaurant.remove({}, err => {
  if(err){
    console.log(err);
  }
})

Item.remove({}, err => {
  if(err){
    console.log(err);
  }
})

var restaurant1 = new Restaurant({name: "McDonalds", address: {street: "178 Dumfries Dr", state: "VA", zipcode: 22026}, yelpUrl: "https://www.yelp.com/biz/mcdonalds-dumfries"})
var restaurant2 = new Restaurant({name: "Chik-Fil-A", address: {street: "3880 Fettler Park Dr", state: "VA", zipcode: 22556}, yelpUrl: "https://www.yelp.com/biz/chick-fil-a-dumfries-2"})
var restaurant3 = new Restaurant({name: "Bob's Snak Attak", address: {street: "18200 Triangle Blvd ", state: "VA", zipcode: 22886}, yelpUrl: "https://www.yelp.com/biz/bobs-snak-attak"})

var item1 = new Item({title: "Hamburger"})
var item2 = new Item({title: "Chicken Sandwich"})
var item3 = new Item({title: "Shake"})
var item4 = new Item({title: "Salad"})
var item5 = new Item({title: "French Fries"})
var item6 = new Item({title: "Apple Pie"})
var item7 = new Item({title: "Chicken Nuggets"})

var restaurants = [restaurant1, restaurant2, restaurant3]
var items = [item1, item2, item3, item4, item5, item6, item7]

for(var i=0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save((err, restaurant) => {
    if (err) {
      console.log(err);
    } else {
      console.log(restaurant);
    }
  })
};
