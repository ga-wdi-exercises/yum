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

};


restaurantsController.show({name: "Founding Farmers"});
