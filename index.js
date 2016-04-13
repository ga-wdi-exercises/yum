var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

//Create a new Restaurant
var RestaurantModel = Schema.RestaurantModel;
var ItemModel       = Schema.ItemModel;
RestaurantModel.create({
  name: "LightHouse",
  address: {
    street : "5900 Centreville Crest Lane",
    zipcode: 20121
  },
  yelp_url: "lighthouse.yelp.com",
  items:[]
}, function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("works");
  }
});

// Write a function or method that finds a restaurant by name
//
// function findByName(restaurant){
//   RestaurantModel.findOne({name: restaurant}, function(err, result){
//     if(err){
//       condole.log(err);
//     }
//     else{
//       console.log(result);
//     }
//   });
// }
//
// //Find all by zipcode
// function findByZip(zipcode){
//   result = [];
//   RestaurantModel.find({}, function(err, docs){
//     docs.forEach(function(rest){
//       if(rest.address.zipcode === zipcode){
//         result.push(rest);
//       }
//
//     });
//     console.log(results);
//   });
// }
//
//
//
//
//
//
//
//
//
// Restaurant.create(req.body.restaurant).then(function(restaurant){
//   res.redirect("/restaurants/");
// });
