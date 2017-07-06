var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({})

Menu.remove({})


bonchon = new Restaurant({name: "BonChon", address: {street: "3242 Old Pickett Rd.", zipcode: 22031}, yelp: "https://www.yelp.com/biz/bonchon-chicken-fairfax-fairfax"})

hotnjuicy = new Restaurant({name: "Hot n Juicy", address: {street: "116 W Broad St.", zipcode: 22046}, yelp: "https://www.yelp.com/biz/hot-n-juicy-crawfish-falls-church"})

var friedchicken = new Menu({title: "fried chicken"})
var fries = new Menu({title: "fries"})
var onionRings = new Menu({title: "onion rings"})
var crawfish = new Menu({title: "crawfish"})
var shrimp = new Menu({title: "shrimp"})
var snowCrab = new Menu({title: "snow crabs"})

var food = [friedchicken, fries, onionRings, crawfish, shrimp, snowCrab]
var restaurants = [bonchon, hotnjuicy]

restaurants.forEach((restaurant, i)=>{
  restaurant.food.push(food[i], food[i+1])
  restaurant.save((err, restaurant)=>{
    if (err) {
      console.log(err);
    }else {
      console.log(restaurant);
    }
  })
})
