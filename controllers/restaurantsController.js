var Schema = require('../db/schema.js');
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
  index(req){
    Restaurant.find({address: {zipCode: req.zipCode}}, (err, restaurants) => {
      console.log(restaurants);
    });
  },
  show(req){
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    });
  },
  update(req, update){
    RestaurantModel.findOneAndUpdate(req, update, {new: true}, (err, docs) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  },
  destroy(req){
    RestaurantModel.findOneAndRemove(req, (err, docs) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  }
};

restaurantsController.index();
