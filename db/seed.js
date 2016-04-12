var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var foundingfarmers = new RestaurantModel({
  name: "Founding Farmers",
  address: {
    street: "1800 Tysons Blvd",
    zipcode: 22102
  },
  yelpurl: "www.yelp.com/biz/founding-farmers-tysons-tysons-6"
});

var tedsbulletin = new RestaurantModel({
  name: "Ted's Bulletin",
  address: {
    street: "1818 14th Street",
    zipcode: 20009
  },
  yelpurl: "www.yelp.com/biz/teds-bulletin-washington-3"
});

var steak = new ItemModel({title: "Steak" });
var pasta = new ItemModel({title: "Pasta"});
var soup = new ItemModel({title: "Soup"});
var salad = new ItemModel({title: "Salad"});

var restaurants = [foundingfarmers, tedsbulletin]
var items = [steak, pasta, soup, salad]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(items[i], items[i+2])
  restaurant.save(function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Restaurant was saved!");
    }
  })
});
