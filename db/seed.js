var Schema = require("../db/schema");
var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

var cptn = new Restaurant({name: "Captain Cookie", address: {street: "Dupont Circle", zipcode: 20036}, yelpUrl: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
var bdc = new Restaurant({name: "Blind Dog Cafe", address: {street: "944 Florida Ave", zipcode: 20001}, yelpUrl: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
var birch = new Restaurant({name: "Birch & Barley", address: {street: "1337 14th St NW", zipcode: 20001}, yelpUrl: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
