var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemsModel = Schema.ItemsModel;

var LaCashina = new RestaurantModel({
  name: "La Cashina",
  address: {
    street: "Route 18",
    zipcode: "07746"
  }
}
);

LaCashina.save(function(err, restaurant){
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

updateZipcode = function(name, yelpUrl){
  RestaurantModel.findOneAndUpdate({name: name}, {yelpUrl: yelpUrl}, {new: true}, function(err, results){
    console.log("This is the updated URL: " + results)
  })
}

findRestaurant("La Cashina");
findByZipcode("07746");
updateRestaurant("La Cashina", "Fiddleheads");
deleteRestaurant("Fiddleheads");
updateZipcode("Fiddleheads", "www.fiddleheadsjamesburg.com");
