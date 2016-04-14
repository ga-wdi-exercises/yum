var RestaurantModel = require("../db/schema.js").RestaurantModel;

var RestaurantsController = {
  index:  function() {
    RestaurantModel.find({}, function(err, restaurants) {
      console.log(restaurants);
      return restaurants;
    });
  },
  show:   function(req) {
    RestaurantModel.findOne({name: req.name}, function(err, restaurant) {
      console.log(restaurant);
      return restaurant;
    });
  },
  create: function() {
  },
  delete: function() {
  }
};
