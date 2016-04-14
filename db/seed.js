var mongoose = require("mongoose"),
    Schema = require("../db/schema.js"),
    Restaurant = Schema.RestaurantModel,
    MenuItem = Schema.MenuItemModel;

Restaurant.remove({}, function(err){
  console.log(err);
});
MenuItem.remove({}, function(err){
  console.log(err);
});

var maketto = new Restaurant({name: 'Maketto'}),
    toki = new Restaurant({name: 'Toki'}),
    impala = new Restaurant({name: 'Impala'}),
    restaurantsRow = [maketto, toki, impala];

restaurantsRow.forEach(function(restaurant){
  restaurant.address.street = 111 + ' ' + restaurant.name + ' Street';
  restaurant.address.zipcode = 20009;
  restaurant.yelp = 'http://yelp/' + restaurant.name;
  var dish = new MenuItem({title: restaurant.name + ' dish'})
  restaurant.items.push(dish)
  restaurant.save();
  console.log(restaurant);
})
