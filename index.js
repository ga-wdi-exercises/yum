var mongoose = require('mongoose');

var Schema = require("./db/schema.js");

//For some reason, I need this to work.  Whate exactly does this do?//
var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

//Create//
// RestaurantModel.create({name: "Subway", address: [{street: "15th Street", zipcode: 20005}]});

//Find restaurant by name.//
var name = function(name) {
  RestaurantModel.findOne({name: name}, function(err, docs) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(docs);
    }
  });
};
name("Corner Bakery");

//Find all restaurants by zipcode.//
// var zipcode = function(zipcode) {
//   RestaurantModel.find({address.zipcode = zipcode}, function(err,docs) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log(docs);
//     }
//   })
// };
// zipcode(20005);

//Updates a restaurant.//
// var updateRestaurant = function(req, update) {
//   RestaurantModel.findOneAndUpdate({name: req.name}, {name: update}, {new: true}, function (err,docs) {
//     if (err) {              //Why is the name field only updated?  What do res and req do?//
//       console.log(err);     //update vs update.name for middle field?//
//     }                       //Name is undefined.//
//     else {
//     console.log(docs);
//     }
//   });
// };
// updateRestaurant("Subway", "Quiznos");

//Deletes a restaurant.//
var deleteRestaurant = function(req) {
  RestaurantModel.findOneAndRemove(req, function(err, docs) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(docs);
    }
  });
};
deleteRestaurant({name: "Subway"});
//This seems to work.  Does "req" refer to object attribute?//
