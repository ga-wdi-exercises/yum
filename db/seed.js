var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var restaurant1 = new RestaurantModel({
        "name": "Cookies Corner",
        "address": {
          "street" : "1970 2nd St NW",
          "zipcode" : 20001
        },
        "yelpUrl": "http://www.yelp.com/biz/cookies-corner-washington"
      });

var restaurant2 = new RestaurantModel({
  "name": "The Blind Dog Cafe",
  "address": {
    "street": "944 Florida Ave",
    "zipcode": 20001
  },
  "yelpUrl": "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"
});

var restaurant3 = new RestaurantModel({
  "name": "Birch & Barley",
  "address": {
    "street": "1337 14th St NW",
    "zipcode": 20005
  },
  "yelpUrl": "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"
});

var restaurant4 = new RestaurantModel({
  "name": "Captain Cookie and the Milk Man",
  "address": {
    "street": "Dupont Circle",
    "zipcode": 20036
  },
  "yelpUrl": "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"
});

var restaurant5 = new RestaurantModel({
  "name": "J's Cookies",
  "address": {
    "street": "1700 N Moore St",
    "zipcode": 22209
  },
  "yelpUrl": "http://www.yelp.com/biz/js-cookies-arlington"
});

var item1 = new ItemModel({
  "title": "Cookies"
});

var item2 = new ItemModel({
  "title": "Beer"
});

var item3 = new ItemModel({
  "title": "Cake"
});

var item4 = new ItemModel({
  "title": "Buns"
});

var item5 = new ItemModel({
  "title": "Sandwiches"
});

var item6 = new ItemModel({
  "title": "Peanuts"
});

var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]
var items = [item1, item2, item3, item4, item5, item6]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(items[i], items[i+3])
  restaurant.save(function(err){
    if (err){
      console.log(err)
    } else {
      console.log("Restaurants Seeded");
    }
  })
})
