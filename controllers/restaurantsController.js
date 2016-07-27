var mongoose = require("mongoose");
var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

var restaurantsController = {
  index: function(){
    Restaurant.find({}, function(err, restaurants){
      if(err){
        console.log(err);
      } else {
        console.log(restaurants);
      }
    })
  },
  show: function(req){
    Restaurant.findOne({"name": req.name}, function(err, restaurant){
      if(err){
        console.log(err);
      } else {
        console.log(restaurant);
      }
    })
  },
  update: function(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}).then(function(restaurant){
      console.log(restaurant);
    })
  },
  delete: function(req){
    Restaurant.findOneAndRemove(req, function(restaurant){
      console.log(restaurant);
    })
  }
}

restaurantsController.show({name: "Rice Bar"});
