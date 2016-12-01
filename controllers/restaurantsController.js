var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel;
var ItemModel = Schema.ItemModel;

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, restaurant){
      console.log(restaurant);
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, restaurant){
      console.log(restaurant);
    });
  },
  allByZip: function(req){
    RestaurantModel.find({"address.zipcode": 4323}, function(err, restaurant){
      if(err){
        console.log(err);
      }
      else{
        console.log(restaurant);
      }
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, restaurant){
      if(err){
        console.log(err);
      }
      else{
        console.log(restaurant);
      }
    });
  },
  delete: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, restaurant){
      if(err){
        console.log(err);
      }
      else{
        console.log(restaurant);
      }
    });
  },
  removeItem: function(req, item){
    RestaurantModel.findOneAndUpdate(req, {$pull: {items: {title: item} }
    },
    {new: true}, function(err, restaurant){
      if(err){
        console.log(err);
      }
      else{
        console.log(restaurant);
      }
    });
  }
};

restaurantsController.index();
// restaurantsController.show({name: "Chiptole"});
// restaurantsController.delete({name: "Qudoba"});
// restaurantsController.allByZip();
// restaurantsController.removeItem()
