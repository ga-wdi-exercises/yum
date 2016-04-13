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
  }
}

//index view
restaurantsController.index({});

//find one by name
restaurantsController.show({name: "Thai Palace"});

//
