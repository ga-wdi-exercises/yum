var mongoose = require("mongoose");
var Schema   = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel       = Schema.MenuModel

var com = new RestaurantModel({name: "Commissary"}, {address: "street": "P Street", "zipcode": 20005}, {yelp_url: "http://www.yelp.com/biz/commissary-washington"})
var tryst = new RestaurantModel({name: "Tryst"}, {address: "street": "18th Street", "zipcode": 20009}, {yelp_url: "http://www.yelp.com/biz/tryst-washington"})
var barcelona = new RestaurantModel({name: "Barcelona"}, {address: "street": "14th Street", "zipcode": 20005}, {yelp_url: "http://www.yelp.com/biz/barcelona-14th-street-washington"})
var ted = new RestaurantModel({name: "Ted's Bulletin"}, {address: "street": "14th Street", "zipcode": 20009}, {yelp_url: "http://www.yelp.com/biz/teds-bulletin-washington-3"})


var salad = new MenuModel({title: "The Big Veggie Salad"})
var burger = new MenuModel({title: "Turkey Burger"})
var chicken = new MenuModel({title: "Roasted Chicken"})
var greek = new MenuModel({title: "Greek Salad"})
var potato = new MenuModel({title: "Patatas Fritas"})
var pop = new MenuModel({title: "Pop Tarts"})
var veg = new MenuModel({title: "Veggie Burger"})
var fries = new MenuModel({title: "Sweet Potato Fries"})
var nacho = new MenuModel({title: "Nachos"})
var mac = new MenuModel({title: "Mac & Cheese"})
var pizza = new MenuModel({title: "Flatbread Pizza"})
var fajita = new MenuModel({title: "Chicken Fajitas"})
