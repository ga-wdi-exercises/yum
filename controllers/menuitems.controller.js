var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var itemsController = {
  index: function(){
    ItemModel.find({}, function(err, docs){
      console.log(docs);
    });
  },
  show: function(req){
    ItemModel.findOne({"title": req.name}, function(err, doc){
      console.log(docs);
    });
  }
};

itemsController.index();
itemsController.show({title: ""})
