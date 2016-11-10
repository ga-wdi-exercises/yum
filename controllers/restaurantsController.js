var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
  show(req){
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      restaurant.items.forEach(item => {
        console.log(item.title);
      })
      process.exit()
    })
  }
}
 restaurantsController.show({name: "Bluejacket"})
