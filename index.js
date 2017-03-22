var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

//create a restaurant

Restaurant.create({ name: "Shanghai Heights", address: {street:"123 Something Lane Someplace VA", zipcode: 12345}, yelpUrl:"www.shanghailegit.com"}, (err, restaurant) => {
  if (err){
    console.log(err);
  } else {
    console.log(restaurant);
  }
});
