var mongoose = require("./schema.js");

var RestaurantModel = mongoose.model("RestaurantModel");
var MenuModel = mongoose.model("MenuModel");

RestaurantModel.remove({}, function(err){});
MenuModel.remove({}, function(err){});

var rigatoni = new MenuModel({title: "Rigatoni"});
var pizza = new MenuModel({title: "Pizza"});
var noodles = new MenuModel({title: "Noodles"});
var dumplings = new MenuModel({title: "Dumplings"});
var wings = new MenuModel({title: "Buffalo Wings"});
var burgers = new MenuModel({title: "Burgers"});

var ginos = new RestaurantModel({
  name: "Gino's Pizzeria",
  address: {
    street: "225 Vermont Ave",
    zipcode: 29483
    },
  yelpUrl: "#",
  items: [pizza, rigatoni]
}).save(function(){console.log("restaurant saved")});

var pfchangs = new RestaurantModel({
  name: "P.F. Chang's",
  address: {
    street: "3032 Florida Ave SW",
    zipcode: 20003
  },
  yelpUrl: "#",
  items: [dumplings, noodles]
}).save(function(){console.log("restaurant saved")});

var daves = new RestaurantModel({
  name: "Dave's Bar and Grill",
  address: {
    street: "21 Jump Street",
    zipcode: 60652
  },
  yelpUrl: "#",
  items: [burgers, wings]
}).save(function(){console.log("restaurant saved")});
