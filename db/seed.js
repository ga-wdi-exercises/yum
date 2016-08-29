var Schema = require("../db/schema.js");
var mongoose = require('mongoose');
var Schema = require("./schema.js");

var Item = Schema.Item;
var Restaurant = Schema.Restaurant;

Item.remove({}, function(err){
  console.log(err)
});

Restaurant.remove({}, function(err){
  console.log(err)
});

resturant1 = new Restaurant({ name: "Sup", address: { street: "1970 2nd St NW", state: "LS", zipcode: 22301, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
resturant2 = new Restaurant({ name: "Dude Sup", address: { street: "944 Florida Ave", state: "FL", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
resturant3 = new Restaurant({ name: "Bro Sup Dude", address: { street: "1337 14th St NW", state: "Wa", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
resturant4 = new Restaurant({ name: "Momma Jeans", address: { street: "Dupont Circle", state: "WA", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
resturant5 = new Restaurant({ name: "Soup", address: { street: "772 forty way", state: "VA", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})


var item1 = new Item({title: "sushi"})
var item2 = new Item({title: "ice cream"})
var item3 = new Item({title: "randy"})
var item4 = new Item({title: "simbah"})
var item5 = new Item({title: "left"})
var item6 = new Item({title: "right"})
var item7 = new Item({title: "cows"})

var Items = [item1, item2, item3, item4, item5, item6, item7]
var Resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]
