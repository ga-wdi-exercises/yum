var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;


function newRestaurant(name, street) {
  Restaurant.create({ name: name, "address.street": street}, function(err, restaurant){
    if (err) return handleError(err);
    console.log("Restaurant created ", restaurant.name)
  })
}

function findName(restaurant) {
  Restaurant.findOne({name: restaurant}, function(err, result){
      console.log(result);
  });
}

function findZipcode(zipcode) {
  Restaurant.find({}, function(err, docs){
    var codeResults = [];
    docs.forEach(function(res) {
      if (res.address.zipcode == zipcode){
        codeResults.push(res);
      }
    });
    console.log(codeResults);
  })
}

function updateRestaurantName(name, update) {
  Restaurant.findOneAndUpdate({name: name}, {name: update}, {new:true},
  function(err, docs){
    console.log(docs);
  })
}

function deleteRestaurant(name) {
  Restaurant.findOneAndRemove({"name": name}, function(err, docs){
    console.log(docs);
  });
  console.log("Deleted a restaurant");
}

function addMenuItems(name, item){
  Restaurant.findOne({"name": name}, function(err, docs){
    docs.items.push(new Menu({title: item}))
    docs.save(function(err, results){
      console.log(results)
    })
  });
}

function removeMenuItems(restaurant, item){
    Restaurant.findOneAndUpdate({name: restaurant}, {
      $pull: {items: {title: item}}
    },
    {new: true}, function(err, docs) {
      console.log(docs)
  });
}

// removeMenuItems("Yum, Yum", "Hame and cheese sandwich")
// addMenuItems("Yum, Yum", "Ham and cheese sandwich")
// deleteRestaurant("Yum, Yum");
// newRestaurant("okay", "400 way st")
// updateRestaurantName("yummy", "alright")
// findZipcode(20001);
// findName('Yum, Yum');
