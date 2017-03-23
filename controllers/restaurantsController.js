var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants)
    })
  }

  update(req, update){
    Restaurants.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
      if(err){
        console.log(err)
      }else {
        console.log(restaurant)
      }
    })
  }
}

restarauntsController.index();
