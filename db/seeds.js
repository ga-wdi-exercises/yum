var mongoose = require('mongoose');
var Schema = require("./schema.js");

var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

MenuItem.remove({}, function(err){
  console.log(err)
});

Restaurant.remove({}, function(err){
  console.log(err)
});

resturant1 = new Restaurant({ name: "Unsweetened Green Tea", address: { street: "1970 2nd St NW", state: "DC", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
resturant2 = new Restaurant({ name: "Trouver le Poulet", address: { street: "944 Florida Ave", state: "DC", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
resturant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", state: "DC", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
resturant4 = new Restaurant({ name: "Ur Mom's", address: { street: "Dupont Circle", state: "DC", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
resturant5 = new Restaurant({ name: "Chicken Chicken Chicken Chicken", address: { street: "1700 N Moore St", state: "VA", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})


var item1 = new MenuItem({title: "pizza"})
var item2 = new MenuItem({title: "banana"})
var item3 = new MenuItem({title: "bob"})
var item4 = new MenuItem({title: "croque madame"})
var item5 = new MenuItem({title: "oyster shooter"})
var item6 = new MenuItem({title: "big ol sandwach"})
var item7 = new MenuItem({title: "horse milk"})

var menuItems = [item1, item2, item3, item4, item5, item6, item7]
var resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]
