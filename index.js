// REQUIRED FILES \\
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var Restaurant = Schema.Restaurant;

console.log(Restaurant);
Restaurant.create({
  name: "The Fuck",
  address: {
    street: "main",
    zipcode: 90210
  },
  yelpUrl: "http://wtfsigte.com/"
});

console.log(Restaurant.findOne({name: "The Fuck"}));
  

