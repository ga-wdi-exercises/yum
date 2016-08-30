var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

// //Find a restaurant by name
// function findName(restaurant){
//   Restaurant.findOne({name: restaurant};
// }
//
// // //Find all restaurants by zipCode
// // function findZip(restaurants, zipCode){
// //   Restaurant.find({"address.zipCode": 20006});
// // }
// // Create a function that updates a restaurant.
//
// db.restaurants.updateOne({"name": "Bertucci's"},
// {
//   $set: {"name": "Bertuccis"}
// }
// );
//
// //Write a function or method that deletes a restaurant.
//
// db.restaurants.remove({"name": "Bertuccis"})
//
// // Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
// // iterate through the restaurants to save them to the database after 2 menu items  have been added as subdocuments to the restaurant
//
//
//
// // //Find a restaurant by name
// // function findName(restaurants){
// //   db.restaurants.findOne({"name": "Bertucci's"});
// // }
// //
// // //Find all restaurants by zipCode
// // function findZip(restaurants, zipCode){
// //   db.restaurants.find({"address.zipCode": 20006});
// // }
// // // Create a function that updates a restaurant.
// //
// // db.restaurants.updateOne({"name": "Bertucci's"},
// // {
// //   $set: {"name": "Bertuccis"}
// // }
// // );
// //
// // //Write a function or method that deletes a restaurant.
// //
// // db.restaurants.remove({"name": "Bertuccis"})
// //
// // // Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
// // // iterate through the restaurants to save them to the database after 2 menu items  have been added as subdocuments to the restaurant
