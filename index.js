var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


Restaurant.create({ name: 'Blue Duck Tavern', "address.zipcode": 20037, yelp: "https://www.yelp.com/biz/blue-duck-tavern-washington" }, function (err, restaurant) {
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
