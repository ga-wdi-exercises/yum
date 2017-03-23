var Schema = require('../db/schema.js')
const Restaurant = Schema.Restaurant
// const Menu = Schema.Menu

var restaurantsController = {
  index() {
    Restaurant.find({}, (err, restaurants) => {
    console.log(restaurants);
    }),
  },
    index() {
    Restaurant.find({address: {zipcode: req.zipcode}}, (err, restaurants) => {
    console.log(restaurants);
    })
  },
  show(req) {
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    })
  },
  edit(req) {
    Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant,{new: true}).then(function(restaurant){
      console.log(restaurant);
    })
  },
  delete(req) {
    Restaurant.findOneAndRemove({name: req.params.name}, req.body.restaurant,{new: true}).then(function(restaurant){
      console.log(restaurant);
    })
  },
};
