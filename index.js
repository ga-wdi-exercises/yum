var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
// var restaurantsController = require("./controllers/restaurantsController")

var Restaurant = Schema.RestaurantModel
var Menu = Schema.MenuModel

Restaurant.create({ name: 'Jimmy Johns', address: {street: "777 6th St NW",zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/jimmy-johns", items: [{title: "sandwitch"}]},function(err, restaurant){
if (err){
  console.log(err)
}else{
  console.log(restaurant);
}

});


// Find restaurant by name
function findByName(restaurant){
Restaurant.findOne({name: restaurant}, function(err, restaurant){
  if(err){
    console.log(err);
  }
  else{
    console.log(restaurant);
  }
});
}

// find Restaurant with zipcode
function findByZipcode(zipcode){
resaurantsWithSameZipcode = [];
Restaurant.find({}, function(err, restaurants){
  restaurants.forEach(function(restaurant){
    if(restaurant.address.zipcode === zipcode){
      resaurantsWithSameZipcode.push(rest);
    }
  });
  console.log(results);
});
}
