var mongoose = require("mongoose");
var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant;
var Address = Schema.Adress;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
  index: function(){
    Restaurant.find({}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    })
  },
  show: function(req){
    Restaurant.findOne({name: req.name}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    })
  },
  update: function(req){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true},function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    })
  },
  destroy: function(req){
    Restaurant.findOneRemove({name: req.name}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    })
  },
}

restaurantsController.index();
restaurantsController.show({name: "Chinese"})
restaurantsController.update({name: "Chinese"}, {name: "Saneeze"});
