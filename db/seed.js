var mongoose = require("../db/schema.js")
var Schema = require("./schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}).then(_=>{
  Restaurant.collection.insert(seedData)
  .then(_ => process.exit())
}).catch(err => console.log(err))

var seedData = [
  {
    "name": "Mcdonalds",
    "address": {"street": "1270 millerwood Dr", "zipcode": "20037"},
    "yelpurl": "yelp.com/mcdonalds",
    "items": [
      {"title": "Big Mac"},
      {"title": "Quarter Pounder"},
      {"title": "Mcflurry"},
      {"title": "McChicken"}
    ]
  },

  {
    "name": "Burger King",
    "address": {"street": "5432 Freedom Dr", "zipcode": "14121"},
    "yelpurl": "yelp.com/burgerking",
    "items": [
      {"title": "whopper"},
      {"title": "chicken fries"},
      {"title": "choco pie"}
    ]
  }

]
