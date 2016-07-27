var mongoose = require("mongoose");
var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err) {
  if(err){
    console.log(err);
  }
})

MenuItem.remove({}, function(err) {
  if(err){
    console.log(err);
  }
})
restaurant1 = new Restaurant({ name: "Cookies Corner", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
restaurant2 = new Restaurant({ name: "The Blind Dog Cafe", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
restaurant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
restaurant4 = new Restaurant({ name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
restaurant5 = new Restaurant({ name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})

var item1 = new MenuItem({title: "pork chops"});
var item2 = new MenuItem({title: "steak"});
var item3 = new MenuItem({title: "shrimp"});
var item4 = new MenuItem({title: "worms"});

var restaurants = [chabubbly];
var items = [item1, item2, item3, item4];
