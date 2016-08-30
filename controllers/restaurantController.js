var RestaurantModel =  require('../models/restaurant')
var MenuModel =  require('../models/menu')


var restaurantController = {
  index: function( req, res ){
    RestaurantModel.find({}, function(err, doc){
      res.render("restaurant/index", {restaurant: doc})
    })
  },
  new: function( req, res ){
    res.render("restaurant/new");
  },
  create: function(req, res){
    var rest = new RestaurantModel({
      name: req.body.name,
      address: {
        street: req.body.street,
        state: req.body.state,
        zipcode: req.body.zipcode
      },
      yelp: req.body.yelp
    })
    rest.save(function(err){
      if(!err){
        res.redirect("/")
      }
    })
  },

  show: function( req, res ){
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restaurant/show", {restaurant: doc})
    })
  },
  delete: function(req, res){
    RestaurantModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/");
      }
    })
  },
  edit: function( req, res ){
    RestaurantModel.findById(req.params.id, function(err, doc){
      res.render("restaurant/edit", {restaurant: doc})
    })
  }
}

module.exports = restaurantController;




