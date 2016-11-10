var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({name: "Bojangles", "address.zipcode": 12345} function(err, restaurant)
if (err) return handleError(err);
console.log("created", restaurant.name, restaurant.address.zipcode);
});

function restaurantByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if (err){
      console.log(err)
    } else {
      console.log(result);
    }
  });
}

function restaurantByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err){
    forEach(fucntion(restaurant){
      if restaurant.address.zipcode === zipcode){
        push(restaurant);
      }
    });
    console.log(results);
  });
}
