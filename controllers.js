var Schema = require("../db/schema.js");
// const models = require("./models.js")
const Restaurant =  Schema.Restaurant
const Menu = Schema.Menu

var restaurantsController = {
  index() {
    Restaurant.find({address: {zipcode: req.zipcode}}, (err, restaaurant) => {
    console.log(restaurants);
    })
  },
  show(req) {
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    });
  },
  delete(req) {
    Restaurant.findOneandRemove({name: req.name}, req.body.restaurant, {new: true}, (err, restaurant) => {
      console.log(restaurant);
  })
}

};
