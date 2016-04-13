var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

var jacobspickles = new RestaurantModel({
  name: "Jacob's Pickles",
  address: {
    street:  "509 Amsterdam Ave",
    zipcode: 10024
  },
  yelpurl: "http://www.yelp.com/biz/jacobs-pickles-new-york"
});

var momofuku = new RestaurantModel({
  name: "Momofuku Milk Bar",
  address: {
    street:  " 1090 I St NW",
    zipcode: 20001
  },
  yelpurl: "http://www.yelp.com/biz/momofuku-ccdc-washington"
});
