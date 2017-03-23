var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
      return docs
    });
  }
},
show: function(req){
  RestaurantModel.findOne({"name": req.name}, function(err, docs){
    console.log(docs);
  })
},
update: function
