var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
      return docs
    });
  },
  findByName: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
      return docs;
    });
  },
  findByZip: function(req){
    RestaurantModel.findOne({"address.zipcode": req.address.zipcode}, function(err, docs){
      console.log(docs);
      return docs;
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate(req, update, {new: true}, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs);
      }
    });
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs);
      }
    });
  },
  removeMenuItem: function(req, menu_item){
    RestaurantModel.findOneAndUpdate(req, {
      $pull: { menu_items: {title: menu_item.body} }
    },
    {new: true}, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs);
      }
    });
  }
};

module.exports= restaurantsController;
