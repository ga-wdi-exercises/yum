var mongoose = require('mongoose');
var Schema = require("./schema.js");

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

var restaurant1 = new RestaurantModel({name: "McDonalds", address: { street: "18th St NW", state: "Washington, DC",  zipcode: "20009"}, yelp: "https://www.yelp.com/biz/mcdonalds-washington-26"});
var restaurant2 = new RestaurantModel({name: "Castelli", address: { street: "19th St NW", state: "Washington, DC",  zipcode: "20008"}, yelp: "https://www.yelp.com/biz/castelli-washington-26"});

var menu1 = new MenuModel({title: "American"});
var menu2 = new MenuModel({title: "Italian"});

var menus = [menu1, menu2];
var restaurants = [restaurant1, restaurant2];


for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(menus[i], menus[i+1])
  restaurants[i].save((err, restaurant) => {
    if(err){
      console.log(err)
    } else {
      console.log(restaurant)
    }
  })
};
