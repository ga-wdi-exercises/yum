var Model = require("../db/schema.js");

var restaurantsController = {
  index: function(req, res){
    Model.Restaurant.find({}, function(err, docs){
      res.render("../views/restaurants/index.hbs", {restaurants: docs})
    })
  },
  show: function(req, res){
    Model.Restaurant.findById(req.params.id, function(err, doc){
      res.render("../views/restaurants/show.hbs", {restaurant: doc})
    })
  }
}

module.exports = restaurantsController;
