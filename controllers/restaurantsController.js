var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemModel = Schema.ItemModel;

// Find a restraunt by name

var findByName = function(restaurant) {
  RestaurantModel.findOne({"name": restaurant}, function(err, docs){
    console.log(docs);
  });
};

// Find a restaurant by ZIP

var findByZip = function(zipcode) {
  RestaurantModel.findOne({"address.zipcode": zipcode}, function(err, docs){
    console.log(docs);
  });
};

// Update a restaurant

var updateRestaurant = function(restaurant, update) {
  RestaurantModel.findOneAndUpdate({"name": restaurant.name}, {"name": update.name}, {new: true}, function(err, docs) {
    console.log(docs);
  });
};

// Delete a restaurant

var deleteRestaurant = function(restaurant){
  RestaurantModel.findOneAndRemove({"name": restaurant}, function(docs){
      console.log("This restaurant was deleted");
  });
};

deleteRestaurant("Johnny's Carryout");
