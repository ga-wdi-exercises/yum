var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

var restaurantsController = {
  index: function(req, res){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    })
  },
  new: function(req, res){
      res.render("restaurants/new")
  },
  show: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restaurants/show", {restaurant: doc})
    })

}

module.exports = restaurantsController;
