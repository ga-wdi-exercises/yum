// requires our model definitions
var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

// instantiates an restaurantsController which will contain all of our controller actions
var restaurantsController = {
  // the index action will make a DB query to find all restaurant documents in our
  // restaurants collection, when it does it will render the restaurants/index view and
  // pass the restaurant objects to the template
  index: function(req, res){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    })
  }
}

// exports the controller so we can use the file as the controller.
// re: index.js: var restaurantsController = require("./controllers/restaurantsController")
module.exports = restaurantsController;
