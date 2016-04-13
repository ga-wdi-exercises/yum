var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var ItemModel = Schema.ItemModel;
var RestaurantModel = Schema.RestaurantModel;

var byblos = new RestaurantModel(
  {
    name: "Byblos Deli",
    address: {
      street: "3414 Connecticut Ave NW",
      zipcode: 20008
    },
    yelp: "http://www.yelp.com/biz/byblos-deli-washington"
  }
);

var fatpetes = new RestaurantModel(
  {
    name: "Fat Pete's",
    address: {
      street: "3407 Connecticut Ave NW",
      zipcode: 20008
    },
    yelp: "http://www.yelp.com/biz/fat-petes-barbeque-washington"
  }
)

var item1 = new ItemModel({title: "Gyro"});
var item2 = new ItemModel({title: "Chile"});
var item3 = new ItemModel({title: "Spinach Pie"});
var item4 = new ItemModel({title: "Cubano"});

var restaurants = [byblos, fatpetes];
var items = [item1, item2, item3, item4];

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(items[i], items[i+2])
  restaurant.save(function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("A restaurant was saved!");
    }
  });
});
