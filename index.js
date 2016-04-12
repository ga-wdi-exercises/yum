var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemsModel = Schema.ItemsModel;

var PostPub = new RestaurantModel({
    name: "Post Pub",
    address: {
      street: "L Street",
      zipcode: "20010"
    }
  }
);

PostPub.save(function(err, restaurant){
  console.log(restaurant)
})

findRestaurant = function(name){
  RestaurantModel.findOne({name: name}, function(err, restaurant){
    console.log(restaurant);
  })
}

findByZipcode = function(zip){
  RestaurantModel.find({}, function(err, results){
    var restaurants = [];
    results.forEach(function(restaurant){
      if (zip == restaurant.address.zipcode){
        // console.log(restaurant)
        restaurants.push(restaurant)
      }
    })
  })
}

updateRestaurant = function(name, update){
  RestaurantModel.findOneAndUpdate({name: name}, {name: update}, {new: true}, function(err, results){
    console.log(results);
  })
}

deleteRestaurant = function(name, update){
  RestaurantModel.findOneAndRemove({"name": name}, function(err, results){
    console.log("This was deleted: " + results)
  })
}

findRestaurant("Post Pub");
findByZipcode("20010");
updateRestaurant("Post Pub", "Barcode");
deleteRestaurant("Barcode");
