var mongoose = require('mongoose');
var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var restaurantController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, doc){
      console.log(docs);
      return docs
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate(req, update, {new: true}, function(err, docs){
      if(err){
        console.log(err)
      } else{
        console.log(docs);
      }
    });
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, docs){
      if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}

module.exports = restaurantController;
