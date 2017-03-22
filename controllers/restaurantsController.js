var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

var restaurantsController = {
  index() {
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants);
    })
  }
}

restaurantsController.index();
