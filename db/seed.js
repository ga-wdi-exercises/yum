var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

RestaurantModel.remove({}, function(err){
  console.log(err)
});
MenuItemModel.remove({}, function(err){
  console.log(err)
});

var rest = new StudentModel({
  name: "Joe's Pizza",
  address: "12 main st",
  zipcode: 20111,
  yelpUrl: "https://www.yelp.com/joes"
});

var menu = new MenuItemModel({name: "Fried pizza"});

var project1 = new ProjectModel({title: "project1", unit: "JS"})

var students = [anna, brandon]
var projects [project1]

anna.save
