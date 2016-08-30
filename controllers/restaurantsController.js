var Restaurant   = require("../models/restaurant")
var MenuItem     = require("../models/menuItem")

var restaurantsController = {
  index: function(req, res){
    Restaurant.find({}, function(err, docs){
      res.render("restaurantsIndex", {
        restaurants: docs
      })
    })
  },
  new: function(req, res){
    res.render("newRestuarant")
  },
  show: function(req, res){
    Restaurant.findById(req.params.id, function(err, doc){
      res.render("restaurantShow", {
        restaurant:doc
      })
    })
  },
  update: function(req, res){
    Restaurant.findById(req.params.id, function(err, doc){
      docs.name = req.params.name
      docs.save(fucntion(err)
        if(!err){
          res.redirect("/restaurants/`$(req.params.id)`")
        }
    )}
  },
  delete: function(req, res){
    Restaurant.remove({_id:req.params.id}, function(err){
      if(!err){
        res.redirect("/restuarants")
      }
    })
  }
}
module.exports = restaurantsController;
