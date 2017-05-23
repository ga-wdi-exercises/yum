var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Item = Schema.Item;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) =>{
      console.log(restaurants);
    });
  },
  show: function(){
  Restaurant.findOne({name: req.name}, (err, restaurant) =>{
    console.log(restaurant);
    return restaurant;
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate(req, update, {new: true}, function(err, restaurants){
      if(err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    });
  },
destroy: function(req){
  Restaurant.findOneAndRemove(req, function(err, restaurant){
    if(err){
      console.log(err);
    }else{
      console.log(restaurant);
      }
    });
  }
};

restaurantsController.index();
restaurantsController.show(name: "Olive Garden");
