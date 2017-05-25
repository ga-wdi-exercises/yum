var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
});


var rest1 = new Restaurant({name: "Cookies Corner", address:{street: "1970 2nd St NW", zipcode: 20001}, yelpUrl: "http://www.yelp.com/biz/cookies-corner-washington"})
var rest2 = new Restaurant({name: "The Blind Dog Cafe", address:{street: "944 Florida Ave", zipcode: 20001}, yelpUrl: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
var rest3 = new Restaurant({name: "Birch & Barley", address:{street: "1337 14th St NW", zipcode: 20005}, yelpUrl: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
var rest4 = new Restaurant({name: "Captain Cookie and the Milk Man", address:{street: "Dupont Circle", zipcode: 20036}, yelpUrl: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
var rest5 = new Restaurant({name: "J's Cookies", address:{street: "1700 N Moore St", zipcode: 22209}, yelpUrl: "http://www.yelp.com/biz/js-cookies-arlington"})
