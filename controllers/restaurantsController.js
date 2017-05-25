var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants);
    });
  },
  show(req){
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    });
  }
};

restaurantsController.show({name: "Cookies Corner"});
