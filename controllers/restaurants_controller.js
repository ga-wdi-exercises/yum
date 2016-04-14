var RestaurantModel = require("../db/schema.js").RestaurantModel;

var RestaurantsController = {
  index:  function() {
    RestaurantModel.find({}, function(err, restaurants) {
      console.log(restaurants);
    });
  },
  show:   function() {
  },
  create: function() {
  },
  delete: function() {
  }
};
