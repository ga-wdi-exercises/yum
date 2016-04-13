var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, restaurants){
      if(err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, restaurant){
      if(err){
        console.log(err);
      }else{
        console.log(restaurant);
      }
    })
  },
  showZip: function(req){
    RestaurantModel.find({"address.zipcode": req.zipcode}, function(err, restaurant){
      if(err){
        console.log(err);
      }else{
        console.log(restaurant);
      }
    })
  },
  updateName: function(req, update){
    RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, restaurant){
      if(err){
        console.log(err);
      }else{
        console.log(restaurant);
      }
    });
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, restaurant){
      if(err){
        console.log(err);
      }else{
        console.log(restaurant);
      }
    });
  }
}

//index view
// restaurantsController.index({});

//find one by name
// restaurantsController.show({name: "Thai Palace"});

//finds all based on zip
// restaurantsController.showZip({zipcode: 20815});

//updates restaurant name
// restaurantsController.updateName({name: "Thai Palace"}, {name: "New Thai House"})

//removes restaurant
restaurantsController.destroy({name: "New Thai House"})
