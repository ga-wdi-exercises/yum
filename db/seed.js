const mongoose = require('./connection')

const MenuItem = mongoose.model('MenuItem')
const Restaurant = mongoose.model('Restaurant')

MenuItem.remove({}).then(()=>{
  MenuItem.collection.insert().then(()=>{
    process.exit()
})
})

Restaurant.remove({}).then(()=>{
  Restaurant.collection.insert().then(()=>{
    process.exit()
})
})


var Schema = require("../db/schema.js");

var MenuItem = Schema.MenuItem
var Restaurant = Schema.Restaurant


var restaurant1 = new Restaurant({name: "District Taco", address: {street: "1309 F St NW", zipcode: 20004}, yelpUrl: "https://www.yelp.com/biz/district-taco-washington-6"})
var restaurant2 = new Restaurant({name: "KFC", address: {street: "220 Riggs Rd NE", zipcode: 20011}, yelpUrl: "https://www.yelp.com/biz/kfc-washington-6"})
var restaurant3 = new Restaurant({name: "Federalist Pig", address: {street: "1654 Columbia Rd NW", zipcode: 20009}, yelpUrl: "https://www.yelp.com/biz/federalist-pig-washington-3?osq=Food"})

var item1 = new MenuItem({title: "Taco"})
var item2 = new MenuItem({title: "Chicken"})
var item3 = new MenuItem({title: "Burger"})

var restaurants = [restaurant1, restaurant2, restaurant3]
var menuItems = [item1, item2, item3]

restaurants.forEach((restaurant, i) => {
  restaurant.items.push(menuItems[i], menuItems[i + 1])
  restaurant.save((err, restaurant) => {
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant)
    }
  })
})
