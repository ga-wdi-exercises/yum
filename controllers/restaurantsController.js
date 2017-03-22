var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

// Mongoose CRUD
var restaurantsController = {
  index() {
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants);
    })
  },
  show(req) {
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant)
    })
  },
  update(req,update) {
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
      if(err) {
        console.log(err)
      } else {
        console.log(restaurant)
      }
    });
  },
  destroy(req) {
    Restaurant.findOneAndRemove(req, (err, docs) => {
      if(err) {
        console.log(err)
      } else {
        console.log(docs)
      }
    });
  }
};

 show all restaurants
restaurantsController.index();
 // show a restaurant (requested)
restaurantsController.show({name: "Astro Doughnuts"});
 // update a restaurant
restaurantsController.update({name: "Taco Bamba"}, {name: "Taco Mamba"});
 delete
 restaurantsController.destroy({name: "Astro Doughnuts"});
