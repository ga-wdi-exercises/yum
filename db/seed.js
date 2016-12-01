var Schema = require("./schema.js");
// var mongoose = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Menu.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var tacoBell = new Restaurant({name: "Taco Bell", address: {street: "120 High Street", zipcode: 23609}, yelpUrl: "yelp.com/tacobell"});
var menu1 = new Menu({title: "Supreme Nacho"});
var menu2 = new Menu({title: "Supreme Quesadilla"});
var menu3 = new Menu({title: "Supreme Burrito"});

tacoBell.items.push(menu1, menu2, menu3);
tacoBell.save((err, menu) => {
  if (err){
    console.log(err);
  } else {
    console.log(menu);
  }
});
