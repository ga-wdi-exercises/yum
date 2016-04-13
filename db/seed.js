var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

RestaurantModel.remove({}, function(err){
  console.log(err)
});
MenuModel.remove({}, function(err){
  console.log(err)
});

var ribs = new MenuModel({title: "ribs"});
var latkes = new MenuModel({title: "latkes"});
var tiramisu = new MenuModel({title: "tiramisu"});

var merl = new RestaurantModel(
  {
    name: "Mama Eisen's Ribs and Latkes",
    address: {
      street: "2417 E 33rd St",
      zipcode: 74105
    },
    yelp_url: "google.com"
  }
);

merl.menu_items = [ribs, latkes, tiramisu];
