var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

var restaurantsController = {
  index() {
    Restaurant.find({address: {zipcode: req.zipcode}}, (err, restaurants) => {
      console.log(restaurants);
    })
  },
  show(req) {
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    });
  },
  update(req) {
    Restaurant.findOneandUpdate({name: req.name}, req.body.restaurant, {new: true}, (err, restaurant) => {
      console.log(restaurant);
    })
  delete(req) {
    Restaurant.findOneandUpdate({name: req.name}, req.body.restaurant, {new: true}, (err, restaurant) => {
      console.log(restaurant);
    })

  }
};
