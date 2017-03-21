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


var restaurant1 = new Restaurant({name: "Church Key", address: {street: "1337 14th St NW", zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/churchkey-washington"})
var restaurant2 = new Restaurant({name: "Barcelona", address: {street: "1622 14th St NW", zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/barcelona-wine-bar-washington"})
var restaurant3 = new Restaurant({name: "Slipstream", address: {street: "1333 14th St NW", zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/slipstream-washington?osq=bars"})

var item1 = new MenuItem({title: "pizza"})
var item2 = new MenuItem({title: "french fries"})
var item3 = new MenuItem({title: "cheese"})

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
