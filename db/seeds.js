var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

Restaurant.remove({}, function(err){
  console.log(err);
});
MenuItem.remove({}, function(err){
  console.log(err);
});

var restaurant1 = new Restaurant({ name: "Shenanigans", address: { street: "Farva Rd", zipcode: 05476 }, yelpUrl: "https://www.yelp.com/biz/shenanigans-irish-pub-washington-2" });
var restaurant2 = new Restaurant({ name: "Blue Sky Cafe", address: { street: "Heisenberg Rd", zipcode: 87101 }, yelpUrl: "https://www.yelp.com/biz/blue-moon-cafe-baltimore" });

var item1 = new MenuItem({ title: "Jalapeno Poppers" });
var item2 = new MenuItem({ title: "Liter of Cola" });
var item3 = new MenuItem({ title: "Dimpus Burger" });
var item4 = new MenuItem({ title: "Chili" });
var item5 = new MenuItem({ title: "Turkey Avocado" });
var item6 = new MenuItem({ title: "Birthday Bacon" });

var restaurants = [restaurant1, restaurant2];
var items = [item1, item2, item3, item4, item5, item6];

restaurants.forEach((restaurant, i) => {
  restaurant.items.push(items[i]);
  restaurant.save((err, restaurant) => {
    if (err){
      console.log(err);
    } else {
      console.log(restaurant);
    }
  });
});
