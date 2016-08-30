var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

var restaurantsController = {
  index: function(req, res){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {authors: docs})
    })
  }
}

module.exports = restaurantsController;
