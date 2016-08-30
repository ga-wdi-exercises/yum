var RestaurantModel = require("../models/restaurant")
var MenuModel = require("../models/menu")

var restaurantsController = {
  index: function(req, res){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    })
  },
  // in this action we'll just be rendering a view and don't need to query the database for anything
  new: function(req, res){
    res.render("restaurants/new")
  },
  // the show action we'll make a DB query to find a single restaurant document by ID
  // in our restaurants collection, when it does it will render the restaurants/new
  // view and pass the restaurant object to the template.
  show: function(req, res){
    AuthorModel.findById(req.params.id, function(err, doc){
      res.render("restaurants/show", {restaurant: doc})
    })

  }
}

module.exports = restaurantsController;
