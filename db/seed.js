var mongoose = require("mongoose"),
    Schema = require("../db/schema.js"),
    RestaurantModel = Schema.RestaurantModel,
    MenuItemModel = Schema.MenuItemModel;

RestaurantModel.remove({}, function(err){
  console.log(err);
});
MenuItemModel.remove({}, function(err){
  console.log(err);
});

var maketto = new RestaurantModel({name: 'Maketto'}),
    toki = new RestaurantModel({name: 'Toki'}),
    impala = new RestaurantModel({name: 'Impala'}),
    restaurantsRow = [maketto, toki, impala];

restaurantsRow.forEach(function(restaurant){
  restaurant.address.street = 111 + ' ' + restaurant.name + ' Street';
  restaurant.address.zipcode = 20009;
  restaurant.yelp = 'http://yelp/' + restaurant.name;
  var dish = new MenuItemModel({title: restaurant.name + ' dish'})
  restaurant.items.push(dish)
  restaurant.save();
  console.log(restaurant);
})
