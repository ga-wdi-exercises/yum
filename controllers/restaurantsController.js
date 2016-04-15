var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var MenuItemModel = Schema.MenuItemModel

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      if(err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, docs){
      if(err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
      if (err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  }
};

restaurantsController.index();
// restaurantsController.show({name: ""});
// restaurantsController.update({address.zipCode: ""}, {address.zipCode: ""});
// restaurantsController.destroy({name: ""});
