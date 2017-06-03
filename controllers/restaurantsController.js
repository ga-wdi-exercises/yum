var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants);
    });
  }
};
var restaurantsController = {
  destroy(req){
    Restaurant.findOneAndRemove(req, (err, docs) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(Restaurant);
      }
    });
  }
};

restaurantsController.destroy({name: "Awash"});
