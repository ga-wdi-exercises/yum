var RestaurantModel = require("../db/schema.js").RestaurantModel;

function modelHandler(err, property) {
  console.log("property:", property);
  if (err) {
    console.log(err);
  } else {
    console.log(property);
  }
  return {property: property, err: err};
}

var RestaurantsController = {
  index:   function() {
    RestaurantModel.find({}, modelHandler);
  },
  show:    function(req) {
    RestaurantModel.findOne({name: req.name}, modelHandler);
  },
  update:  function(req, update) {
    RestaurantModel.findOneAndUpdate(req, update, {new: true}, modelHandler);
  },
  destroy: function(req) {
    RestaurantModel.findOneAndRemove(req, modelHandler);
  }
};

module.exports = {
  Restaurants: RestaurantsController
};
