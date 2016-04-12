var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      if (err){
        console.log(err);
      }else{
        console.log(docs);
      }
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, docs){
      if(err){
        console.log(err);
      }else{
        console.log(docs);
      }
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
      if(err){
        console.log(err);
      }else{
        console.log(docs);
      }
    });
  }

};

// restaurantsController.index();
// restaurantsController.show({name: "Founding Farmers"});
restaurantsController.update({name: "Founding Farmers"}, {name: "Losing Farmers"});
