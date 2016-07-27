var mongoose = require('mongoose');
var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, function(err){
  if (err) {
    console.log(err)
  }
})

MenuItem.remove({}, function(err){
  console.log(err)
})


var ledip = new Restaurant({name:"Le Diplomate", "address.zipcode": 20009})
var toki = new Restaurant({name:"Toki Underground"})


var steakfrites = new MenuItem({title: "Steak Frites"})
var ramen = new MenuItem({title: "Ramen"})

var menuitems = [steakfrites, ramen]
var restaurants = [ledip, toki]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(menuitems[0], menuitems[1])
  restaurant.save(function(err, docs){
    if (err){
      console.log(err)
    }else {
      console.log(docs);
    }
  })
});

//function to create a restaurant
Restaurant.create({name: "Cookies Corner", "address.zipcode": 20001}, function(err, restaurant){
  if (err)
  return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode)
})

//function that finds a restaurant by name.

//function that finds all restaurants by zipCode.

//function that updates a restaurant.

//function or method that deletes a restaurant.

//functions to add and remove embedded menu item documents for a restaurant of your choosing.
