var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var MenuItemModel = Schema.MenuItemModel

var MenuItemsController = {
  index: function(){
    MenuItemModel.find({}, function(err, docs){
      if(err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  },
  show: function(req){
    MenuItemModel.findOne({"name": req.title}, function(err, docs){
      if(err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  },
  update: function(req, update){
    MenuItemModel.findOneAndUpdate({name: req.title}, {name: update.title}, {new: true}, function(err, docs){
      if (err){
        console.log(err)
      } else {
          console.log(docs)
        }
    })
  },
  destroy: function(req){
    MenuItemModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err)
      } else{
          console.log(docs)
        }
    })
  }
};

menuItemsController.index();
// menuItemsController.show({title: ""});
// menuItemsController.update({title: ""}, {title: ""});
// menuItemsController.destroy({title: ""});
