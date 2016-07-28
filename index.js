var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({ name: 'Post Pub', "address.zipcode": 20001 }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});

function findByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

function findByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode === zipcode){
        results.push(rest);
      }
    });
    console.log(results);
  });
}
