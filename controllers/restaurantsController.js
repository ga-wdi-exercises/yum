var RestaurantModel = require("../models/restaurant")
var ItemMode = require("../models/item")

var restaurantsController = {
  index: function(req, res){
      RestaurantModel.find({}, function(err, docs){
        res.render("restaurants/index", {restaurants:docs})
      })
  },
  show: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, doc) {
      res.render("restaurants/show", {restaurant: doc} )
    })
  },
  create: function(req, res){
    var restaurant = new RestaurantModel({name: req.body.name})
    restaurant.save(function(err){
      if(!err){
        res.redirect("restaurants")
      }
    })
  },
  edit: function(req,res){
    RestaurantModel.findById(req.params.id, function(err,doc){
      res.render("restaurants/edit", {restaurant: doc})
    })
  },
  update: function(req, res){
    console.log(req.body)
    RestaurantModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.address.zipcode = req.body.address.zipcode
      docs.address.street = req.body.address.street
      docs.yelpUrl = req.body.yelpUrl
      docs.save(function(err){
        if(!err){
          res.redirect("/restaurants/" + req.params.id)
        }
      })
    })
  },
  delete: function(req, res){
    RestaurantModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/restaurants/")
      }
    })
  },
  addItem: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, docs){
      docs.items.push(new ItemModel({title: req.body.title}))
      docs.save(function(err){
        if(!err){
          res.redirect("/restaurants/" + req.params.id)
        }
      })
    })
  },
  removeItem: function(req, res){
    RestaurantModel.findByIdAndUpdate(req.params.restaurantId, {
      $pull: {
        items: {_id: req.params.id}
      }
    }, function(err,docs){
      if(!err){
        res.redirect("/restaurants/" + req.params.restaurantId)
      }
    })
  }


}


module.exports = restaurantsController
