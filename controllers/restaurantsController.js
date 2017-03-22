var Schema = require('../db/schema.js');
var Restaurant = Schema.Restaurant;
var Item = Schema.Item;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants)
    })
  },
    show(req){
      Restaurant.findOne({name: req.name}, (err, restaurant) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(restaurant);
        }
      });
    }
    show(req){
      Restaurants.find({zipcode: req.zipcode}, (err, restaurant) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(restaurant);
        }
      });
    }
    update(req, update){
      Restaurant.findOneAndUpdate({name: req.name}, {name: req.name}, {new: true}, (err, restaurant) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(restaurant);
        }
      });
    }
    destroy(req){
      Restaurant.findOneAndRemoveOne(req, (err, docs) => {
        if(err){
          console.log(err);
        }
        else{
          console.log(docs);
        }
      });
    }
  };

// restaurantsController.show({name: 'chipotle'});
