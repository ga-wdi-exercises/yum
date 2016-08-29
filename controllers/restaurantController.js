// requires our model definitions
var RestaurantModel = require("../models/restuarant")
var MenuItemModel = require("../models/reminder")

// instantiates an restuarantsController which will contain all of our controller actions
var restuarantsController = {
  // already defined this one above,
  index: function(req, res){
    RestaurantModel.find({}, function(err, docs){
      res.render("restuarants/index", {restuarants: docs})
    })
  },
  // in this action we'll just be rendering a view and don't need to query the database for anything
  new: function(req, res){
    res.render("restuarants/new")
  },
  // the show action we'll make a DB query to find a single restuarant document by ID
  // in our restuarants collection, when it does it will render the restuarants/new
  // view and pass the restuarant object to the template.
  show: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restuarants/show", {restuarant: doc})
    })
  },
  edit: function(req,res){
    // the edit action will make a DB query to find an restuarant documents by ID in our
    // restuarant's collection, when it does it will render the restuarants/edit view and
    // pass the restuarant object to the template
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restuarants/edit", {restuarant: doc})
    })
  },
  update: function(req,res){
    // the update action will make a DB query to find an restuarant document by ID in our
    // restuarant's collection, when it does it will set the name of the restuarant to the
    // value specified in the form. If it saves without error, it will redirect to the restuarant's show page
    RestaurantModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.save(function(err){
        if(!err){
          res.redirect("/restuarants/" + req.params.id)
        }
      })
    })
  },
  delete: function(req, res){
    // the delete action will remove an restuarant documents by ID. If there's no error
    // it will redirect to the restuarant's index page.
    RestaurantModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/restuarants")
      }
    })
  }

}
  // exports the controller so we can use the file as the controller.
  // re: index.js: var restuarantsController = require("./controllers/restuarantsController")
  module.exports = restuarantController;
