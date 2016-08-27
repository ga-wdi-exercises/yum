var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

Restaurant.create({ name: 'Yum, Yum', "address.street": "200 Way Street"}, function(err, restaurant){
  if (err) return handleError(err);
  console.log("Restaurant created ", restaurant.name)
});

function findName(restaurant) {
  Restaurant.findOne({name: restaurant}, function(err, result){
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
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

// findZipcode(20001);
// findName('Yum, Yum');
