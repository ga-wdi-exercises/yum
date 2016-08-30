//req our model definitions from schema (instead of redefining)
var RestaurantModel = require("../models/restaurant")
var ItemModel = require("../models/item")

// Schema.connect('mongodb://localhost/restaurant_db')

//instantiate controller that will contain all the actions
var restaurantsController = {
  //index action will make query, find all restaurants, render the index view and pass objects to the template
  index: function(req, res){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    });
  },
  //just rendering a view here, no query needed from db
  new: function(req, res){
    res.render("restaurants/new")
  },
  create: function(req, res){
    var restaurant = new RestaurantModel({name: req.body.name})
    restaurant.save(function(err){
      if(!err){
        res.redirect("restaurants")
      }
    })
  },
  //query to find single restaurant by id and render the view and pass object to template
  show: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restaurants/show", {restaurant: doc})
    })
  },
  //query to find restaurant docs by id, render in the edit view, pass that object to the template
  edit: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restaurants/edit", {restaurant: doc})
    })
  },
  //query to find author doc by id, set the name to value specified in form. if saved, redirect to restaurants page
  update: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.save(function(err){
        if(!err){
          console.log("updated")
          res.redirect("/restaurants/" + req.params.id)
        }
      })
    })
  },
  //will remove restaurant doc by id and redirect to index page
  delete: function(req, res){
    RestaurantModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/restaurants")
      }
    })
  },
  //will make query to find an author doc by id in the restaurant's collection, create a new item and push it to restaurants subdocs.
  addItem: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, docs){
      docs.items.push(new ItemModel( {title: req.body.title} ))
      docs.save(function(err){
        if(!err){
          res.redirect("/restaurants/" + req.params.id)
        }
      })
    })
  },
  removeItem: function(req, res){
    RestaurantModel.findByIdAndUpdate(req.params.restaurantId, {
      $pull: { items: {_id: req.params.id} }
    }, function(err, docs){
      if(!err) {
        res.redirect("/restaurants/" + req.params.restaurantId)
      }
    })
  }
}

module.exports = restaurantsController;
