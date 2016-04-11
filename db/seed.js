var mongoose = require("mongoose");
var Schema   = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel       = Schema.MenuModel

var com = new RestaurantModel({name: "Commissary"}, {address: "street": "P Street", "zipcode": 20005}, {yelp_url: "http://www.yelp.com/biz/commissary-washington"})
var tryst = new RestaurantModel({name: "Tryst"}, {address: "street": "18th Street", "zipcode": 20009}, {yelp_url: "http://www.yelp.com/biz/tryst-washington"})
var barcelona = new RestaurantModel({name: "Barcelona"}, {address: "street": "14th Street", "zipcode": 20005}, {yelp_url: "http://www.yelp.com/biz/barcelona-14th-street-washington"})
var ted = new RestaurantModel({name: "Ted's Bulletin"}, {address: "street": "14th Street", "zipcode": 20009}, {yelp_url: "http://www.yelp.com/biz/teds-bulletin-washington-3"})


var
