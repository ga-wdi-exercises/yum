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
  showByZipcode: function(req){
    console.log(req.zipcode);
    RestaurantModel.find({"address.zipcode": req.zipcode}, function(err, docs){
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
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err);
      }else{
        console.log(docs);
      }
    });
  },
  removeItem: function(req, item){
    RestaurantModel.findOneAndUpdate(req, {
      $pull: {items: {title: item}}
    },
    {new: true}, function(err, docs){
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
// restaurantsController.showByZipcode({zipcode: 20009});
// restaurantsController.update({name: "Founding Farmers"}, {name: "Losing Farmers"});
// restaurantsController.destroy({name: "Losing Farmers"});
restaurantsController.removeItem({name: "Ted's Bulletin"}, "Salad");
