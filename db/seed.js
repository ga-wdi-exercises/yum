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

var mcdonalds = new Restaurant({name: "McDonalds"})

var mcdouble = new Item({title: "McDouble"})
var bigmac = new Item({title: "Big Mac"})
var mcflurry = new Item({title: "McFlurry"})
var qpcheese = new Item({title: "Quarter Pounder with Cheese"})
var fries = new Item({title: "French Fries"})
var applepie = new Item({title: "Apple Pie"})
var nuggets = new Item({title: "Chicken McNuggets"})

var restaurants = [mcdonalds]
var items = [mcdouble, bigmac, mcflurry, qpcheese, fries, applepie, nuggets]

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
