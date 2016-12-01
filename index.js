var mongoose    = require('mongoose');
var restaurants = require("./controllers/restaurants_controller.js").Restaurants;

restaurants.index();
restaurants.show({name: "&pizza"});
restaurants.update({name: "&pizza"}, {name: "example"});
restaurants.destroy({name: "Rose's Luxury"});
