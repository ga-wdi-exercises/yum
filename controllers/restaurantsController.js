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
  },
  create: function(req, res){
    // console.log(req.body.Restaurant)
    var restaurant = new Model.Restaurant({name: req.body.name, address{street: req.body.address.street, zipcode: req.body.address.street}, yelpUrl: req.body.yelpUrl })
    restaurant.save(function(err){
      if (!err){
        res.redirect("../views/restaurants/index.hbs")
      }
    })
  }
}

module.exports = restaurantsController;
